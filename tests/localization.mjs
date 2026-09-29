import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {execFileSync} from 'node:child_process';
import {chromium} from 'playwright';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const temp=await fs.mkdtemp(path.join(os.tmpdir(),'html-ppt-ko-'));
const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{})});
try {
  // Generate every template outside the source tree, including a path with spaces.
  for(const name of ['deck',...(await fs.readdir(path.join(root,'templates/full-decks')))]){
    const parent=path.join(temp,'generated decks');
    execFileSync('bash',[path.join(root,'scripts/new-deck.sh'),name,parent,'-t',name],{stdio:'pipe'});
    const html=await fs.readFile(path.join(parent,name,'index.html'),'utf8');
    for(const match of html.matchAll(/(?:src|href)="([^"]+)"/g)){
      const ref=match[1].split(/[?#]/)[0];
      if(!ref||/^(?:[a-z]+:|\/\/)/i.test(ref))continue;
      await fs.access(path.resolve(parent,name,ref));
    }
  }
  console.log('PASS: all 17 scaffold choices resolve local references outside the repository');

  // The language is read on page load. Exercise the actual popup and both directions of sync.
  for(const [lang,title,current,next,empty] of [
    ['ko-KR','발표자 화면','현재 페이지','다음 →','이 페이지에는 발표자 노트가 없습니다.'],
    ['en','Presenter View','CURRENT','Next →','No speaker notes for this slide.'],
    ['zh-CN','演讲者视图','当前页','下一页 →','这一页还没有逐字稿'],
    ['fr','Presenter View','CURRENT','Next →','No speaker notes for this slide.']
  ]){
    const file=path.join(temp,'language-'+lang+'.html');
    const asset=name=>pathToFileURL(path.join(root,'assets',name)).href;
    await fs.writeFile(file,`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><link rel="stylesheet" href="${asset('base.css')}"></head><body><div class="deck"><section class="slide"><h1>첫 페이지</h1><aside class="notes"><p>노트 확인</p><p>&lt;/script&gt; &lt;안전&gt;</p></aside></section><section class="slide"><h1>두 번째</h1></section></div><script src="${asset('runtime.js')}"></script></body></html>`);
    const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto(pathToFileURL(file).href);
    const pending=page.waitForEvent('popup');await page.keyboard.press('s');const popup=await pending;
    popup.on('pageerror',e=>errors.push(e.message));await popup.waitForLoadState();
    assert.equal(await popup.title(),title);
    assert.equal(await popup.locator('#card-cur .pcard-title').innerText(),current);
    assert.match(await popup.locator('#notes-body').innerText(),/노트 확인/);
    assert.match(await popup.locator('#notes-body').innerText(),/<\/script>/);
    await popup.getByRole('button',{name:next,exact:true}).click();
    await page.waitForFunction(()=>location.hash==='#/2');
    assert.equal(await popup.locator('#notes-body').innerText(),empty);
    await page.keyboard.press('Home');
    await popup.waitForFunction(()=>document.getElementById('timer-count').textContent==='1 / 2');
    popup.once('dialog',d=>d.accept());await popup.locator('#reset-layout').click();
    assert.deepEqual(errors,[]);
    await popup.close();await page.close();
  }
  console.log('PASS: Korean, English, Chinese and fallback UI, empty notes, safe note embedding, layout reset and bidirectional navigation');

  const page=await browser.newPage({viewport:{width:1920,height:1080}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const [file,count] of [['templates/deck.html',6],['templates/full-decks/book-seminar-ko/index.html',8],['templates/full-decks/presenter-mode-reveal/index.html',6]]){
    await page.goto(pathToFileURL(path.join(root,file)).href);
    assert.equal(await page.locator('.deck > .slide').count(),count);
    for(let i=1;i<=count;i++){
      await page.evaluate(i=>location.hash='#/'+i,i);await page.waitForTimeout(550);
      const overflow=await page.evaluate(()=>{
        const s=document.querySelector('.deck > .slide.is-active');
        return [...s.querySelectorAll('h1,h2,p')].filter(e=>!e.closest('.notes')).filter(e=>{const r=e.getBoundingClientRect();return r.x<0||r.y<0||r.right>1921||r.bottom>1081;}).map(e=>e.innerText);
      });
      assert.deepEqual(overflow,[],file+' slide '+i);
    }
  }
  await page.goto(pathToFileURL(path.join(root,'templates/recommended-ko.html')).href);
  assert.equal(await page.locator('article').count(),4);
  await page.goto(pathToFileURL(path.join(root,'templates/full-decks-index.html')).href);
  assert.equal(await page.locator('.deck > .slide').count(),17);
  await page.goto(pathToFileURL(path.join(root,'templates/theme-showcase.html')).href);
  assert.equal(await page.locator('.deck > .slide').count(),36);
  assert.deepEqual(errors,[]);await page.close();
  console.log('PASS: all 20 Korean starter slides fit, four recommendations, 16-template gallery and 36-theme gallery');
} finally {await browser.close();await fs.rm(temp,{recursive:true,force:true});}
