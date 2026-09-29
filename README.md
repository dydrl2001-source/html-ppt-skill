# HTML PPT 제작 도구 — 한국어 안내

원고와 메모를 **브라우저에서 발표하는 HTML 슬라이드**로 만드는 도구입니다. 테마 36개, 전체 발표 템플릿 16개, 개별 페이지 레이아웃 36개를 제공합니다. 방향키 이동과 발표자 노트, 타이머를 함께 사용할 수 있습니다.

[한국어 추천 템플릿](templates/recommended-ko.html) · [전체 템플릿](references/full-decks.md) · [테마 36개](references/themes.md) · [제작 가이드](references/authoring-guide.md) · [English](README.en.md) · [中文原文](README.zh-CN.md)

> GitHub의 HTML 파일 화면은 소스를 보여줍니다. 저장소를 내려받은 뒤 파일을 브라우저로 열면 실제 미리보기가 나옵니다. 웹 공개는 별도 작업입니다.

## 먼저 골라보기

| 만들 자료 | 추천 템플릿 | 추천 테마 | 선택 이유 |
|---|---|---|---|
| 책 요약과 독서 세미나 | `book-seminar-ko` | `editorial-serif` | 주장과 근거, 반론, 질문을 구분합니다. |
| 학술·신학 연구 발표 | `book-seminar-ko` | `academic-paper` | 용어와 근거를 차분하게 비교합니다. |
| 강의와 교육 | `course-module` | 템플릿 자체 배색 | 학습 목표와 연습 문제가 있습니다. |
| 짧은 주제 강연 | `dir-key-nav-minimal` | 페이지별 자체 배색 | 큰 문장 하나에 집중합니다. |
| 사역·주간 보고 | `weekly-report` | 템플릿 자체 배색 | 진행 내용과 다음 계획을 설명합니다. |
| 발표 노트가 중요한 강연 | `presenter-mode-reveal` | `editorial-serif` 또는 `tokyo-night` | 발표자 화면을 사용하며 말할 수 있습니다. |

**템플릿과 테마는 다릅니다.** 템플릿은 페이지 구성과 전용 배치, 테마는 색상과 글꼴 등의 공통 설정입니다. 일부 전체 템플릿은 자체 색상을 고정하므로 테마 파일만 바꿔도 모든 색상이 변하는 것은 아닙니다.

## 바로 시작하기

```bash
git clone https://github.com/dydrl2001-source/html-ppt-skill.git
cd html-ppt-skill

# 기본 한국어 발표자료
bash scripts/new-deck.sh my-talk

# 한국어 독서 세미나 8장
bash scripts/new-deck.sh book-talk -t book-seminar-ko

# 브라우저에서 열기 (macOS)
open examples/book-talk/index.html
open templates/recommended-ko.html
```

다른 폴더에 만들려면 `bash scripts/new-deck.sh book-talk ./my-decks -t book-seminar-ko`처럼 출력 상위 폴더를 지정합니다. 파일명과 템플릿 식별자는 영어 그대로 사용합니다. 생성 스크립트가 공통 파일 경로를 계산하므로 경로의 `../`를 임의로 고치지 마세요.

## AI 도구에 스킬 등록하기

AgentSkills를 지원하는 도구에서는 아래 명령으로 이 저장소를 등록할 수 있습니다. 설치 명령은 네트워크 연결과 Node.js가 필요합니다.

```bash
npx skills add https://github.com/dydrl2001-source/html-ppt-skill
```

이미 내려받았다면 해당 저장소 폴더를 로컬 설치 대상으로 지정할 수도 있습니다. 설치 없이도 HTML 예제는 브라우저에서 열 수 있습니다. 이 저장소를 고치는 것과 컴퓨터에 스킬을 설치하는 것은 별도 작업입니다.

## AI에게 이렇게 요청하세요

> 이 자료를 한국어 발표 슬라이드로 만들어줘. 먼저 청중, 발표 시간, 핵심 질문과 어울리는 템플릿을 추천해줘. 내가 추천대로 진행하라고 하면 추가 확인 없이 만들어줘. 화면에는 핵심 논점만 넣고 설명은 발표자 노트에 넣어줘. 저자의 주장, 원문 인용, 네가 추가한 해석을 구분해줘.

이미 제작 방향을 맡겼다면 AI는 청중·분량·테마에 대한 합리적인 가정을 밝히고 진행합니다. 모든 항목에 매번 답할 필요는 없습니다. 실제로 확인하지 않은 내용이나 쪽수를 만들어 넣지 않습니다.

## 단축키

| 키 | 기능 |
|---|---|
| ← / → / Space / PageUp / PageDown | 페이지 이동 |
| Home / End | 첫 페이지 / 마지막 페이지 |
| F | 전체 화면 |
| S | 발표자 창 열기: 현재 페이지, 다음 페이지, 노트, 타이머 |
| N | 현재 페이지 노트 보기 |
| O | 전체 슬라이드 보기 |
| T | 미리 지정한 테마 순환 |
| A | 현재 페이지의 시연 효과 변경 |
| R | 발표자 창에서 타이머 초기화 |
| Esc | 열린 보기 또는 발표자 창 닫기 |

휴대전화에서는 좌우로 밀어 이동할 수 있습니다. 발표자 창이 열리지 않으면 브라우저의 팝업 허용을 확인하세요. 한국어 덱은 `<html lang="ko">`로 지정하면 발표자 화면도 한국어로 표시합니다. 영어와 중국어 UI도 유지합니다.

## 한국어 글꼴과 배치

테마 CSS 다음에 `assets/korean.css`를 연결합니다. 한국어 기본 틀에는 이미 포함되어 있습니다. 이 파일은 한국어 시스템 글꼴과 어절 단위 줄바꿈을 사용하고, 제목의 과한 기울임을 해제합니다. 추가 글꼴 다운로드는 필요하지 않습니다.

```html
<html lang="ko">
<!-- base.css, theme CSS 다음 -->
<link rel="stylesheet" href="../assets/korean.css">
```

macOS에서는 Apple SD Gothic Neo, Windows에서는 맑은 고딕 등을 사용합니다. 다른 기기에서는 글꼴과 줄바꿈이 달라질 수 있으므로 실제 발표 기기에서 확인하세요. 기존 외국어 시연 자료의 본문은 원문을 유지합니다. 한국어 기본 틀·독서 세미나·발표자 모드 예제와 한국어 추천 갤러리를 시작점으로 사용하세요.

## 이미지·PDF·PowerPoint

- **HTML**: 이 저장소의 기본 결과물입니다. 브라우저 발표와 발표자 화면을 지원합니다.
- **PNG**: macOS의 Google Chrome이 있으면 `bash scripts/render.sh examples/book-talk/index.html all`로 출력합니다. 다른 환경에서는 브라우저 설치 경로를 조정해야 합니다.
- **PDF**: 브라우저의 인쇄에서 PDF로 저장할 수 있습니다. 미리보기에서 페이지 수와 잘림을 확인하세요.
- **편집 가능한 PPTX**: 이 저장소에는 내장 변환기가 없습니다. 별도의 PowerPoint 생성 도구가 필요합니다. PNG를 PPT에 넣으면 글자가 개별 편집 가능한 텍스트로 바뀌지 않습니다.

기본 화면 크기는 1920×1080입니다. 생성된 HTML은 공통 `assets/`를 참조하므로 HTML 파일 하나만 다른 컴퓨터로 보내면 안 됩니다. 저장소의 관련 폴더 구조를 함께 보내거나 공통 파일을 포함하도록 별도 패키징하세요.

## 오프라인 사용 범위

기본 HTML·발표자 모드와 한국어 시스템 글꼴은 로컬 파일로 동작합니다. `fonts.css`의 기존 Google Fonts, 일부 차트 예제의 Chart.js, 코드 예제의 highlight.js는 외부 연결을 사용할 수 있습니다. 완전한 오프라인 발표가 필요하면 해당 파일을 로컬로 포함하거나 의존성이 없는 레이아웃을 선택하세요.

## 문서와 원본

- [AI 제작 규칙](SKILL.md)
- [테마](references/themes.md) / [전체 템플릿](references/full-decks.md) / [개별 레이아웃](references/layouts.md)
- [발표자 화면](references/presenter-mode.md) / [애니메이션](references/animations.md)
- [원본 문서 보관](docs/original/)

원본 프로젝트: [lewislulu/html-ppt-skill](https://github.com/lewislulu/html-ppt-skill). 원저작자 lewis. MIT 라이선스는 [LICENSE](LICENSE)를 따릅니다. 이 저장소에는 한국어 안내와 사용성 보완을 추가했습니다.
