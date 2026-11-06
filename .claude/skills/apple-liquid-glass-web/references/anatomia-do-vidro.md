# Anatomia do vidro e leitura das referências

O que faz um vidro parecer **Liquid Glass** e não "glassmorphism de template". Vale para web,
software, imagem gerada e vídeo: as mesmas sete camadas, em mídias diferentes.

## 1. As sete camadas

| # | Camada | O que é na física | Web (CSS/JS) | 3D / vídeo |
| --- | --- | --- | --- | --- |
| 1 | **Corpo** | o vidro desfoca e clareia/escurece o que está atrás | `background` translúcido + `backdrop-filter: blur() saturate()` | `transmission: 1`, `roughness` 0–0.15 (clear) ou 0.25–0.4 (fosco) |
| 2 | **Refração / lente** | a borda grossa entorta o fundo; uma bola inverte a imagem | `liquid-glass-lens.js` (`bezel`, `magnify`, `sphere`) — só Chromium | `ior` 1.45–1.52, `thickness` 0.5–2 |
| 3 | **Borda especular (rim)** | a luz bate na espessura da borda: lado claro e lado apagado | `.lg-surface::after` (gradiente só na borda, por máscara) | luz de recorte (rim light) + `clearcoat: 1` |
| 4 | **Brilho especular** | reflexo suave da fonte de luz na face | `.lg-surface::before` (radial em `--lg-mx/--lg-my`), `data-lg-specular` | HDRI de estúdio com softboxes; `specularIntensity` |
| 5 | **Espessura (sombra interna)** | a parte de baixo do vidro fica mais densa | `inset 0 -10px 24px rgba(0,0,0,.1)` | `thickness`, `attenuationColor`, `attenuationDistance` |
| 6 | **Dispersão cromática** | a borda separa as cores (arco-íris fino) | `.lg-chroma`, `data-lg-chroma` | `dispersion` 0.1–0.5 (Three r163+), `iridescence` 0.3–1 |
| 7 | **Sombra projetada e contato** | o vidro flutua sobre o conteúdo | `box-shadow` suave e larga; nada de sombra dura | sombra de contato suave, ambient occlusion |

Duas leis sobre essas camadas:
- **Funciona sem os efeitos.** Corpo + texto legível primeiro; camadas 2–6 são acabamento. Em
  `prefers-reduced-transparency` e `prefers-contrast: more` só o corpo (opaco) fica.
- **Sem cor própria.** O vidro pega a cor do que está atrás. A cor da marca vai no conteúdo, na ação
  principal (fundo tingido) e em status — nunca como "vidro roxo com glow".

## 2. Regular × clear × fumê × tingido

| Tipo | Corpo | Quando | Classe |
| --- | --- | --- | --- |
| **Regular** (fosco) | blur 20–40 px, preenchimento 60–80% | quase tudo; qualquer superfície com texto | `.glass` |
| **Clear** | blur 0–12 px, preenchimento 15–30%, refração visível | controles sobre foto/vídeo; + escurecimento 35% se a mídia for clara | `.glass--clear` + `.glass-dim` |
| **Fumê escuro** | regular no escuro: preenchimento 50–65% quase preto, `brightness(.85)` | modais e painéis sobre fundo escuro e objetos brilhantes | `.lg-panel--dark` |
| **Tingido** | accent 85–90% | só a ação principal (1–2 por tela) | `.glass--tinted` |

## 3. Leitura das cinco referências

Use como padrão de qualidade. Cada uma tem a receita pronta em `assets/demo-referencias.html`.

### Ref. 1 — Modal escuro sobre metal líquido (`assets/referencias/1.png`)
- **Camadas**: fundo preto absoluto; objetos 3D cromados (toros/gotas de metal líquido) **atrás e
  à frente** do painel → profundidade real; painel de vidro **fumê** grande (raio ~32 px), blur
  forte (o metal atrás vira mancha suave), borda clara fina só em cima/à esquerda.
- **Hierarquia**: abas-título grandes ("Sign In" branco, "Join" a ~30% de opacidade), um **único
  accent** (laranja) no sublinhado da aba ativa; campos como preenchimentos escuros com borda de 1 px
  (não vidro dentro de vidro); ladrilhos sociais pretos brilhantes, tingidos só pela marca (Google
  verde, Discord índigo).
- **Prompt resumido**: modal de app, vidro fosco e brilhante, luz ambiente suave, fundo escuro com
  acento vibrante, camadas com profundidade, sombras sutis.
- **Na web**: `.lg-panel--dark.lg-surface`, `.lg-title-tabs`, `.lg-field`, `.lg-tile`. Um objeto 3D
  pode cruzar a borda do painel (`z-index` acima, levemente desfocado) — é conteúdo/arte, não controle.

### Ref. 2 — Bolhas de vidro sobre paisagem (`assets/referencias/2.png`)
- **Mostra a diferença clear × regular**: à esquerda uma esfera **clear maciça** — o fundo aparece
  **invertido e ampliado** (lente); à direita a mesma esfera **fosca** — o fundo vira cor desfocada.
- Ícone e rótulo brancos, monocromáticos, com sombra muito leve; brilho no topo-esquerdo; borda
  clara; sombra de contato suave.
- **Na web**: `.lg-orb-btn--clear` + `data-lg-lens="sphere"` × `.lg-orb-btn--frost`.
- Paleta serena (verdes e azuis): o vidro não tem cor; a cor vem da paisagem atrás.

### Ref. 3 — Seletor de modos em cápsula (`assets/referencias/3.webp`)
- Trilho em cápsula **clear** com borda branca brilhante; o item ativo fica sob um **"thumb" de
  vidro** que funciona como **lupa** (amplia levemente o rótulo) e o rótulo ativo ganha a cor de
  destaque (amarelo-lima); os rótulos rolam por baixo e somem nas pontas (máscara).
- Fundo: render 3D pastel de lâminas, com toques de dourado → o vidro tem o que refratar.
- É o comportamento do sistema: **o controle vira vidro durante a interação** e o thumb "líquido"
  se move entre opções.
- **Na web**: `.lg-picker` + `.lg-picker__lens` (`data-lg-lens="magnify"`) + `.lg-picker__track`
  com `scroll-snap`.

### Ref. 4 — Objeto de vidro iridescente (`assets/referencias/4.png`)
- Forma orgânica que respira (morph lento), corpo leitoso translúcido, **dispersão** nas bordas
  (azul, rosa, dourado), fundo cinza-claro neutro, sombra quase inexistente.
- **É arte/conteúdo** (hero de site, fundo de vídeo, abertura), não um controle — o vidro de
  interface continua sóbrio.
- **Na web**: `.lg-orb` (versão CSS); para realismo, Three.js `MeshPhysicalMaterial` ou render 3D
  (`video-3d-e-prompts.md`).

### Ref. 5 — Toggle preto brilhante (`assets/referencias/5.png`)
- Trilho preto profundo com sombra interna; knob em cápsula com **aro cromado** e **pontos de
  dispersão** nos cantos (onde a luz bate); seta cinza discreta; monocromático e de alto contraste.
- **Na web**: `.lg-slide` (`role="switch"`); o knob ganha transparência de vidro **só enquanto
  pressionado** (regra da Apple para slider/toggle).

### Prompts adicionais da referência (sem imagem)
| # | Direção | Usar para |
| --- | --- | --- |
| P1 | UI interativa, paleta quente, minimalista, ênfase em movimento 3D | demos de produto, hero animado |
| P2 | render fluido, iridescente azul/vermelho, composição em fluxo | fundos de vídeo, transições |
| P3 | 3D futurista, neon azul/roxo, lúdico | **evitar** em marca sóbria (GPC); só campanhas lúdicas |
| P4 | hiper-realista, close-up, pastel iridescente, superfícies líquidas | b-roll, detalhes, aberturas |
| P5 | glassmorphism mobile, pastel com rosa | telas de onboarding, apps leves |

## 4. Erros que denunciam vidro falso

- Fundo chapado atrás do vidro (nada para refratar) → o vidro parece cinza sujo.
- Borda uniforme de 1 px branca em volta toda → falta o lado iluminado × apagado.
- Blur sem saturação → o vidro "lava" as cores; use `saturate(1.4–1.8)`.
- Vidro sobre vidro, ou vidro em cards de conteúdo.
- Glow colorido, gradiente arco-íris no corpo, neon na borda (a dispersão é **fina**, só onde a luz bate).
- Texto cinza claro sobre vidro claro (contraste < 4,5:1).
- Raios desencontrados: elemento interno com o mesmo raio do externo (use raios concêntricos).
