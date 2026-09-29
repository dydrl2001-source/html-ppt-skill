# 한국어 사용 경로 검증

Node.js와 Playwright가 필요합니다. 개발 환경에서 Playwright를 설치한 뒤 실행합니다. 필요한 경우 `npx playwright install chromium`으로 테스트 브라우저를 준비합니다.

```bash
node tests/localization.mjs
```

macOS에 설치된 Chrome을 사용하려면:

```bash
CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" node tests/localization.mjs
```

기본 틀과 모든 전체 템플릿의 외부 폴더 생성, 로컬 참조 경로, ko/en/zh 및 미지원 언어의 발표자 UI, 노트와 창 사이 이동, 한국어 페이지의 화면 범위, 갤러리 개수를 검증합니다. 테스트 파일은 임시 폴더에 만들고 종료 시 정리합니다. 내용의 정확성이나 다른 기기의 글꼴 렌더링까지 증명하는 검사는 아닙니다.
