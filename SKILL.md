---
name: html-ppt
description: 한국어 HTML 발표자료를 제작합니다. PPT, 슬라이드, 책 요약, 강의, 세미나, 보고서 발표, 발표자 노트 요청에 사용합니다. 36개 테마와 16개 전체 템플릿, 36개 개별 레이아웃을 활용합니다.
---

# HTML PPT 제작 규칙

결과물의 기본 형식은 정적 HTML/CSS/JavaScript입니다. 편집 가능한 PPTX는 별도 도구가 필요하며, 내장 변환이 되는 것처럼 말하지 않습니다.

## 제작 전에 질문과 추천안 제시

1. 어떤 내용이며 누구에게 보여줄 것인가?
2. 발표 시간과 필요한 페이지 수는 얼마인가?
3. 어떤 템플릿과 테마가 어울리는가?
4. 발표자 노트, 토론 질문, 인쇄물이 필요한가?

질문만 나열하지 말고 각 질문에 추천안을 함께 제시합니다. 사용자가 이미 답했거나 선택을 맡겼다면 그 권한을 존중하여 가정을 밝히고 진행합니다. 추가 확인을 불필요하게 반복하지 않습니다. 답변에 따라 내용이 크게 바뀌는 필수 정보만 질문합니다.

## 추천 시작점

| 목적 | 템플릿 | 테마 |
|---|---|---|
| 독서·연구 세미나 | `book-seminar-ko` | `editorial-serif` 또는 `academic-paper` |
| 발표자 노트 중심 강연 | `presenter-mode-reveal` | `editorial-serif`, `tokyo-night` |
| 수업·워크숍 | `course-module` | 템플릿 자체 배색 |
| 큰 문장 중심 강연 | `dir-key-nav-minimal` | 페이지별 자체 배색 |
| 주간·사역 보고 | `weekly-report` | 템플릿 자체 배색 |

한국어 시각 비교는 `templates/recommended-ko.html`을 엽니다. 템플릿은 구조, 테마는 공통 디자인 설정입니다. 일부 전체 템플릿의 자체 CSS는 테마를 덮어쓰므로 테마 교체 후 화면을 확인합니다.

## 생성과 내용 작성

```bash
bash scripts/new-deck.sh my-talk -t book-seminar-ko
bash scripts/new-deck.sh my-talk ./decks -t presenter-mode-reveal
```

- 기존 템플릿과 개별 레이아웃에서 시작합니다. 빈 HTML을 임의로 설계하지 않습니다.
- 스크립트가 계산한 상대 경로를 보존합니다. 다른 폴더로 이동하면 공통 파일 경로를 검증합니다.
- 한 논리적 페이지는 `<section class="slide" data-title="제목">` 하나입니다.
- 페이지마다 청중에게 필요한 논점 하나를 명확히 둡니다. 제목·본문·근거가 연결되도록 작성합니다.
- 기존 예시 수치와 인명을 실제 자료인 것처럼 사용하지 않습니다.
- 원문 인용, 저자의 주장 요약, 작성자의 해석과 가상 사례를 구분합니다. 읽지 않은 책이나 확인하지 않은 쪽수를 출처로 쓰지 않습니다.
- 색상·테두리·간격은 기존 디자인 변수와 구조를 활용합니다. 강조색 배경의 글자는 `var(--accent-ink)`를 사용합니다.
- `.deck-header`, `.deck-footer`, `.slide-number`의 자리를 침범하지 않습니다.
- `assets/runtime.js`를 포함하여 방향키, 전체 화면, 발표자 화면, 노트, 전체 보기를 유지합니다.

## 한국어

- 문서 언어는 `<html lang="ko">`로 지정합니다. 발표자 UI 언어도 이 값을 따릅니다.
- 공통·테마·템플릿 CSS 다음에 `assets/korean.css`를 포함합니다.
- 제목이 길면 문장을 다듬거나 의도적으로 줄을 나눕니다. 글자부터 작게 줄이지 않습니다.
- 한글은 어절 단위로 줄바꿈하며 긴 URL 등은 필요할 때만 분리합니다.
- 외국어 고유명사는 필요한 경우에만 병기하고 화면을 불필요한 영어 표제로 채우지 않습니다.

## 발표자 노트

모든 발표용 페이지에 `<aside class="notes">`를 넣습니다. 핵심어를 굵게 표시하고 다음 페이지로 넘어가는 문장을 분리합니다. 노트의 길이는 발표 시간과 한국어 말하기 속도에 맞춥니다. 150–300이라는 원본 언어의 분량 지침을 한국어 단어 수로 기계적으로 적용하지 않습니다.

발표자용 설명과 검증 기록을 청중 화면에 올리지 않습니다. S는 별도 발표자 창, N은 빠른 노트, R은 발표자 창에서 타이머 초기화입니다. 모든 전체 템플릿이 런타임의 발표자 기능을 사용할 수 있습니다.

## 이미지와 로고

이미지는 `image-single`, `image-full-bleed`, `image-text-split`, `image-gallery`, `image-compare`를 사용합니다. `.img-frame`은 사진을 채워 자르며 `.img-frame.contain`은 전체를 보존합니다. 도표·스크린샷·로고는 자르지 않습니다.

```html
<body data-logo="logo.svg" data-logo-position="bottom-right" data-logo-size="40px">
<section class="slide" data-no-logo>...</section>
```

로고 위치는 top-left, top-right, bottom-left, bottom-right 중 하나입니다. 이미지 파일은 실제 경로를 확인하고 비율을 유지합니다.

## 효과와 출력

효과는 설명을 돕는 범위로 제한합니다. `data-anim="fade-up"` 등 기존 효과를 사용하며 움직임 줄이기 설정을 존중합니다. Canvas 효과는 명시적인 높이가 필요하고 `assets/animations/fx-runtime.js`를 함께 로드합니다.

```bash
bash scripts/render.sh examples/my-talk/index.html all
```

렌더 스크립트는 기본적으로 macOS의 Chrome을 사용합니다. 기본 화면은 1920×1080입니다. 완전한 오프라인 사용을 주장하기 전에 외부 웹 글꼴·차트·코드 강조 의존성을 확인합니다.

## 검토와 전달

모든 페이지에서 글자 잘림, 겹침, 대비, 출처, 순서, 페이지 수를 확인합니다. S의 현재/다음 화면과 노트, 방향키 동기화, T 테마 전환도 실제 브라우저에서 확인합니다. 원본 HTML과 필요한 공통 파일을 함께 전달합니다. 렌더 성공과 내용의 정확성, PowerPoint에서의 동작은 서로 다른 검증입니다.

## 참고 문서

[제작 가이드](references/authoring-guide.md) · [테마](references/themes.md) · [전체 템플릿](references/full-decks.md) · [레이아웃](references/layouts.md) · [발표자 화면](references/presenter-mode.md) · [효과](references/animations.md)

원저작자 lewis, MIT. 원본 지침은 `docs/original/SKILL.md`에 보존합니다.
