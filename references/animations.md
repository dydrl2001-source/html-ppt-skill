# 효과 안내

CSS 효과 27개와 Canvas/DOM 효과 20개를 제공합니다. 내용의 이해를 돕는 경우에만 사용하세요.

## CSS 효과

`data-anim="fade-up"` 또는 `class="anim-fade-up"`을 붙입니다. data-anim은 페이지에 들어갈 때 다시 실행됩니다.

| 식별자 | 효과 |
|---|---|
| `fade-up` | 아래에서 나타남 |
| `fade-down` | 위에서 나타남 |
| `fade-left` | 왼쪽에서 나타남 |
| `fade-right` | 오른쪽에서 나타남 |
| `rise-in` | 떠오르며 선명해짐 |
| `drop-in` | 위에서 내려옴 |
| `zoom-pop` | 확대하며 나타남 |
| `blur-in` | 흐림이 사라짐 |
| `glitch-in` | 화면 흔들림 효과 |
| `typewriter` | 타자 입력 |
| `neon-glow` | 네온 빛 |
| `shimmer-sweep` | 빛이 지나감 |
| `gradient-flow` | 색상 흐름 |
| `stagger-list` | 목록 순차 표시 |
| `counter-up` | 숫자 증가 |
| `path-draw` | 선 그리기 |
| `morph-shape` | 형태 변화 |
| `parallax-tilt` | 기울임 |
| `card-flip-3d` | 카드 뒤집기 |
| `cube-rotate-3d` | 정육면체 회전 |
| `page-turn-3d` | 책장 넘김 |
| `perspective-zoom` | 원근 확대 |
| `marquee-scroll` | 가로 반복 이동 |
| `kenburns` | 이미지의 느린 확대 |
| `confetti-burst` | 축하 효과 |
| `spotlight` | 원형으로 드러남 |
| `ripple-reveal` | 물결처럼 드러남 |

숫자는 `<span class="counter" data-to="1248">0</span>`처럼 지정합니다. 실제 자료가 아닌 예시 수치를 발표에 그대로 사용하지 마세요.

## Canvas/DOM 효과

`assets/animations/fx-runtime.js`를 포함하고 `<div data-fx="particle-burst" style="height:360px"></div>`처럼 컨테이너를 만듭니다.

| 식별자 | 효과 |
|---|---|
| `particle-burst` | 입자 확산 |
| `confetti-cannon` | 색종이 발사 |
| `firework` | 불꽃놀이 |
| `starfield` | 별 공간 |
| `matrix-rain` | 문자 비 |
| `knowledge-graph` | 지식 그래프 |
| `neural-net` | 신경망 |
| `constellation` | 별자리 |
| `orbit-ring` | 궤도 |
| `galaxy-swirl` | 은하 소용돌이 |
| `word-cascade` | 단어 낙하 |
| `letter-explode` | 글자 펼침 |
| `chain-react` | 연쇄 반응 |
| `magnetic-field` | 자기장 |
| `data-stream` | 데이터 흐름 |
| `gradient-blob` | 색상 덩어리 |
| `sparkle-trail` | 빛의 자취 |
| `shockwave` | 충격파 |
| `typewriter-multi` | 여러 줄 타자 |
| `counter-explosion` | 숫자와 입자 |

컨테이너에 명시적인 높이를 지정합니다. 페이지 진입과 이탈에 따라 효과가 시작·종료됩니다. 한 페이지의 효과 수를 제한하고 움직임 줄이기 설정을 강제로 무시하지 않습니다. 자세한 원본 설명은 `docs/original/references/animations.md`에 있습니다.
