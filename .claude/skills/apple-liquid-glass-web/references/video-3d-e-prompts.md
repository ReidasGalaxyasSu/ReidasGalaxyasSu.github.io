# Liquid Glass em vídeo, 3D e imagem gerada

Para vídeos, aberturas, b-roll, peças de redes e fundos de site. A estética das referências (vidro
fosco/brilhante, metal líquido, iridescência) em três caminhos: **gerar** (IA de imagem/vídeo),
**renderizar** (3D) ou **compor** (motion em After Effects, Remotion, CapCut).

## 1. Sistema de prompt (estrutura das referências)

Todos os prompts de referência seguem a mesma ordem. Preencha campo a campo:

```
[ASSUNTO]        mobile app modal window | liquid glass buttons | glossy toggle switch | translucent orb
[MATERIAL]       liquid glass aesthetic, frosted and glossy finishes | clear glass with refraction |
                 smoked dark glass | iridescent glass with chromatic dispersion | liquid chrome
[LUZ]            soft ambient lighting | soft diffused studio lighting with subtle reflections |
                 rim light along the edges | soft and even lighting
[PALETA]         dark background with one vibrant accent | serene greens and blues |
                 pastel with hints of gold | pastel with iridescent highlights | monochrome dark tones
[COMPOSIÇÃO]     layered depth with subtle shadows | centered, minimal, focused on form |
                 smooth composition with rounded shapes | close-up emphasizing detail
[CLIMA]          modern and sleek | tranquil | serene and ethereal | premium and futuristic
[TÉCNICA]        high-resolution rendering | high-gloss texture with gentle curves | polished rendering
Negative: low contrast, harsh shadows, cluttered layout, flat design, pixelation, watermark,
          outdated typography, visible text (para objetos), distorted reflections, jpeg artifacts
Parameters (Midjourney): --ar 16:9 (cena/UI) | --ar 1:1 (objeto) | --ar 9:16 (reels)
                         --style raw --stylize 250 (UI, contido) | 300–500 (arte, fluido)
```

Regras de prompt:
- **Sem texto e sem logo na geração** (vira letras tortas). Gere a cena limpa e aplique texto/logo
  oficial depois, na edição. Para marcas com regras próprias (ex.: GPC), o logo **nunca** é gerado.
- Uma ideia por imagem; um accent só; fundo escuro **ou** claro, não misturado.
- Para UI: peça "plausible, legible interface" e componha a interface real por cima (HTML/Figma)
  em vez de confiar em telas inventadas pela IA.
- `--style raw` mantém o resultado menos "estilizado"; suba `--stylize` só para arte abstrata.

### Biblioteca pronta (adapte assunto e paleta)

| Uso | Prompt |
| --- | --- |
| Modal escuro premium (ref. 1) | `mobile app modal window floating over liquid chrome shapes, liquid glass aesthetic with frosted and glossy finishes, soft ambient lighting, pure black background with a single vibrant orange accent, layered depth with subtle shadows, modern and sleek mood, high-resolution rendering --ar 16:9 --style raw --stylize 250` |
| Botões-bolha sobre paisagem (ref. 2) | `two liquid glass round buttons over a serene river landscape, left one clear with refraction showing the inverted landscape, right one frosted, soft lighting, greens and blues, smooth rounded shapes, tranquil mood, high-detail rendering --ar 16:9 --style raw --stylize 250` |
| Seletor sobre render pastel (ref. 3) | `mobile camera mode selector, clear liquid glass capsule with a magnifying glass thumb, frosted and glossy surfaces, soft ambient lighting, pastel abstract 3D slats with hints of gold behind, layered depth, serene and modern --ar 16:9 --style raw --stylize 250` |
| Orbe iridescente (ref. 4) | `translucent organic glass orb, smooth glossy finish, chromatic dispersion on the edges, pastel iridescent highlights, soft even lighting, light grey seamless background, minimal composition focused on form, serene and ethereal --ar 1:1 --style raw --stylize 250` |
| Toggle preto (ref. 5) | `sleek toggle switch, glossy black finish, chrome rim with subtle rainbow edge highlights, minimalist, soft shadows for depth, monochrome dark tones, high contrast, polished rendering, no text --ar 1:1 --style raw --stylize 250` |
| Fundo de vídeo fluido (P2) | `fluid liquid glass ribbons flowing slowly, high gloss finish, soft lighting with subtle reflections, iridescent blues and reds, dynamic flowing composition, serene and ethereal --ar 16:9 --style raw --stylize 500` |
| UI interativa quente (P1) | `interactive UI with liquid glass panels, warm palette, minimalist composition, depth with subtle shadows, emphasis on 3D motion and interactivity, modern and inviting --ar 16:9 --style raw --stylize 250` |
| Macro hiper-real (P4) | `hyper-realistic close-up of liquid glass surface, smooth reflective fluid textures, soft diffused lighting, pastel with iridescent highlights, serene --ar 16:9 --style raw --stylize 300` |

### Vídeo gerado por IA (Higgsfield, Veo, Kling, Runway, Sora)

Acrescente movimento de câmera e de material ao prompt de imagem:
- **Câmera**: `slow dolly in`, `gentle orbit around the object`, `locked-off macro`, `slow push`.
- **Material**: `light sweeping across the glass surface`, `liquid glass slowly morphing`,
  `refraction shifting as the object rotates`, `chromatic dispersion shimmering on the edges`.
- **Ritmo**: 4–8 s por plano, movimento lento e contínuo, sem cortes bruscos; `seamless loop` para fundos.
- Gere a partir de uma imagem aprovada (image-to-video) para manter material e paleta.

## 2. 3D em tempo real (Three.js) — para hero de site e captura de vídeo

```js
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.toneMapping = THREE.ACESFilmicToneMapping;
const scene = new THREE.Scene();
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
const glass = new THREE.MeshPhysicalMaterial({
  color: 0xffffff, metalness: 0, roughness: 0.08,       // 0.25–0.4 para vidro fosco
  transmission: 1, thickness: 1.2, ior: 1.5,             // corpo + refração
  dispersion: 0.25,                                      // dispersão cromática (r163+)
  iridescence: 0.8, iridescenceIOR: 1.3, iridescenceThicknessRange: [100, 400], // ref. 4
  clearcoat: 1, clearcoatRoughness: 0.05,                // brilho especular
  attenuationColor: new THREE.Color('#e8f4ff'), attenuationDistance: 2
});
const chrome = new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 1, roughness: 0.05 }); // ref. 1
const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 64), glass);
// morph orgânico: desloque os vértices com ruído no tempo (ou use um shader de vértice)
```

- Precisa de algo **atrás** para refratar (outra malha, textura, HDRI) — vidro sobre vazio parece plástico.
- Para captura: renderize em 4K com `preserveDrawingBuffer`, ou use CCapture/WebCodecs para exportar frames.
- No site: carregue sob demanda, pause fora da tela, dpr ≤ 2, pôster estático em reduced motion.
- React: `@react-three/drei` tem `MeshTransmissionMaterial` (samples, chromaticAberration, distortion,
  anisotropy) — o mais próximo de Liquid Glass em tempo real.

## 3. Render 3D (Blender / Cinema 4D) — qualidade de vídeo final

| Parâmetro | Vidro clear | Vidro fosco | Metal líquido |
| --- | --- | --- | --- |
| Shader | Principled BSDF, Transmission 1 | Transmission 1 | Metallic 1 |
| Roughness | 0–0.05 | 0.25–0.4 | 0.03–0.1 |
| IOR | 1.45–1.52 | 1.45 | — |
| Dispersão | Cycles: dispersão 0.2–0.5 (Blender 4.2+) | baixa | — |
| Iridescência | Thin Film (Blender 4.2+), 300–500 nm | opcional | — |
| Luz | HDRI de estúdio + 2 softboxes + rim light | igual | HDRI com contraste alto |

Fundo infinito (cinza claro #F2F2F2 para iridescente; preto puro para metal/fumê). Cycles com
denoise, motion blur leve, 24/30 fps, 10-bit. Câmera com lente 85–135 mm, profundidade de campo
sutil.

## 4. Compor UI de vidro em vídeo (After Effects / Remotion / CapCut)

- **Camadas**: fundo (vídeo/3D) → **vidro** (cópia do fundo, desfocada 30–60 px, recortada pela forma
  do painel, + preenchimento 20–60%) → borda especular (traço 1–2 px com gradiente claro→transparente)
  → brilho (gradiente radial suave, modo Screen/Soft Light) → conteúdo/texto → sombra (larga, 10–20%).
- **After Effects**: forma → Track Matte sobre uma cópia do fundo com *Fast Box Blur*; *CC Lens* ou
  *Displacement Map* na borda para refração; *Turbulent Displace* animado devagar para "líquido".
- **Remotion (web)**: use os mesmos componentes HTML/CSS desta skill (`apple-glass.css`,
  `liquid-glass-pro.css`) — o render é Chromium, então `backdrop-filter` e até a lente SVG funcionam.
  Anime com `interpolate`/`spring` (damping alto, sem rebote) em `transform` e `opacity`.
- **CapCut/Premiere**: duplicar o fundo, desfocar, máscara arredondada, opacidade 70–85%, traço branco
  20–30% de opacidade; texto em fonte de sistema/sans neutra.

### Movimento (igual à interface)

- Entradas 0,5–0,8 s com curva de desaceleração longa (`cubic-bezier(.32,.72,0,1)` / `expo.out`);
  saídas mais rápidas.
- Morph: o botão cresce e vira o painel (mesma forma, raio interpolado), em vez de corte seco.
- Luz percorrendo a superfície (1 passada por cena), rotação lenta de objeto, parallax discreto.
- Evite: rebote/elástico, partículas explodindo, glitch, neon pulsando, transições frenéticas.

### Som (skills `sfx-kit` e `openverse-audio`)

| Momento | Som |
| --- | --- |
| Painel/menu de vidro abre (morph) | `whoosh-fast-soft` ou `swish-medium` (sync no pico do movimento) |
| Vidro aparece | `pop-small-in`, `appear-materialise` |
| Luz percorre o vidro / destaque | `shimmer-short-soft` |
| Toggle (ref. 5) | `click-toggle-on-medium` / `click-toggle-off-medium` |
| Revelação do objeto iridescente | `riser-2s-soft` terminando em `shimmer-medium-bright` |
| Logo no final | `sting-airy-long` (calmo) ou `sting-bright-short` (tech) |
| Trilha | Openverse, `--category music`, termos "ambient", "minimal electronic", licença comercial |
