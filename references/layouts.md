# 개별 페이지 레이아웃 36개

파일은 `templates/single-page/이름.html`에 있습니다. 원하는 페이지의 `<section class="slide">...</section>`를 복사하고 예시 내용을 교체합니다. 파일 내부 전용 CSS가 있으면 함께 가져옵니다.

| 식별자 | 용도 |
|---|---|
| `cover` | 표지 |
| `toc` | 목차 |
| `section-divider` | 절 구분 |
| `bullets` | 목록 |
| `two-column` | 두 열 비교 |
| `three-column` | 세 열 구성 |
| `big-quote` | 큰 인용문 |
| `stat-highlight` | 핵심 수치 하나 |
| `kpi-grid` | 여러 지표 |
| `table` | 표 |
| `code` | 코드 |
| `diff` | 변경 비교 |
| `terminal` | 터미널 |
| `flow-diagram` | 흐름도 |
| `timeline` | 연표 |
| `roadmap` | 단계별 계획 |
| `mindmap` | 개념 관계 |
| `comparison` | 관점 비교 |
| `pros-cons` | 장점과 한계 |
| `todo-checklist` | 점검 목록 |
| `gantt` | 일정표 |
| `image-single` | 이미지 전체 보존 |
| `image-full-bleed` | 사진을 화면에 채우기 |
| `image-text-split` | 사진과 설명 |
| `image-gallery` | 이미지 3~6개 |
| `image-compare` | 두 이미지 비교 |
| `image-hero` | 배경 중심 표지 |
| `image-grid` | 여러 크기 영역 |
| `chart-bar` | 막대 차트 |
| `chart-line` | 선 차트 |
| `chart-pie` | 도넛 차트 |
| `chart-radar` | 레이더 차트 |
| `arch-diagram` | 구조도 |
| `process-steps` | 순서와 단계 |
| `cta` | 다음 행동 |
| `thanks` | 마무리 |

## 이미지

실제 이미지에는 `image-single`, `image-full-bleed`, `image-text-split`, `image-gallery`, `image-compare`를 권합니다. `image-hero`와 `image-grid`의 기본 예시는 실제 사진 대신 그라데이션 자리표시자를 사용합니다.

- `.img-frame`: 영역을 채우며 사진 일부를 자릅니다.
- `.img-frame.contain`: 전체 이미지를 보존합니다. 도표·로고·스크린샷에 사용합니다.
- `--img-ratio`: 이미지 영역의 가로세로 비율. 기본값은 16/10입니다.
- `--img-pos`: 이미지의 기준 위치.
- `.img-scrim`: 사진 위 글자를 읽기 위한 음영.

이미지는 덱 파일 가까이에 두고 상대 경로로 참조합니다. 예제 SVG는 `assets/demo-images/`에 있습니다.

## 선택 기준

독서 세미나는 큰 문장·두 열 비교·논증 단계·질문 페이지를 조합합니다. 실제 수치가 없으면 수치·차트를 장식으로 만들지 않습니다. 차트 예제는 Chart.js, 코드 예제는 highlight.js 등 외부 라이브러리를 사용할 수 있으므로 오프라인 발표 전에 확인합니다.

페이지 제목은 `data-title`, 화면 제목은 `h1.h1` 또는 `h2.h2`, 설명은 `.lede`, 발표자 원고는 `aside.notes`를 사용합니다.
