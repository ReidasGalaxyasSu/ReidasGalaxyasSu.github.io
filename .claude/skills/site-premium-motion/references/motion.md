# Motion: sistema, regras e receitas

Compilado de taste-skill (`references/motion.md`, estudo de 99 Sites of the Day), impeccable
(`animate.md`, `craft-floor.md`), skills oficiais GSAP e transitions.dev. Texto original completo em
`fontes/`. O site parado precisa estar pronto antes desta camada: motion é o último passe, nunca o
remendo de um layout fraco.

## Conteúdo

1. Quatro perguntas antes de animar
2. Orçamento e regras
3. Receitas CSS (sem biblioteca)
4. Movimentos assinatura e cenas de scroll
5. GSAP: setup, receitas e armadilhas
6. React / Next.js
7. Reduced motion e desempenho
8. O que denuncia motion gerado

## 1. Quatro perguntas antes de animar

1. **Quantas vezes a pessoa vai ver?** Uma vez por visita (load do hero, entrada de seção): pode
   levar seu tempo. Muitas vezes (hover, menu, accordion): rápido e pequeno. Centenas (digitação,
   atalhos): sem animação.
2. **Para que serve?** Mostrar de onde algo veio, confirmar uma ação, evitar uma mudança brusca,
   explicar como o produto funciona, ou ser o movimento assinatura. "Fica bonito" só vale para a
   assinatura.
3. **Qual curva?** Entrar/sair: ease-out (o movimento começa quando o olho chega). Ir de um lugar a
   outro na tela: ease-in-out. Cor e opacidade no hover: `ease`. Viagem constante e scroll-linked:
   `linear`. Nunca `ease-in` em algo que a pessoa espera ver.
4. **Quanto tempo?** Press 100–160 ms. Hover 150–200 ms (hover que move algo: 300–400 ms). Menus e
   popovers 150–250 ms. Diálogos e gavetas 250–450 ms. Revelações 600–900 ms. Aberturas de imagem e
   wipes 1.100–1.300 ms. Saída ≈ 60–70% da entrada.

## 2. Orçamento e regras

**Orçamento de uma página Persuadir/Experiência:** um movimento assinatura; duas ou três cenas de
scroll (onde a página é ousada) com uma seção calma entre elas; entradas coreografadas por seção;
feedback em todo controle; uma imagem em movimento. Operar/Ler: só feedback, estado e continuidade.

**Regras (taste-skill §10, ajustadas):**

1. **Primeiro frame.** Título, frase de apoio e imagem principal estão no HTML e pintados no primeiro
   frame. A sequência de load não espera o evento `load` e termina em 1,2 s, no máximo 4 elementos.
2. **Sem preloader, contador, portão de entrada, cursor customizado ou captura da roda do mouse.**
   Scroll suave (Lenis) é opcional, lerp 0,1–0,14, desligado no touch e em reduced motion.
3. **Curvas:** `--ease-out` < 600 ms; `--ease-expo` para revelações ≥ 800 ms; `--ease-in-out` para
   wipes e coisas que viajam; `--ease-exit` só para saída definitiva; `linear` para scroll-linked e
   loops; `ease` para cor. **Sem overshoot/bounce/elastic em interface.**
4. **Staggers:** linhas 80–110 ms; itens de lista 50–90 ms; caracteres 20–40 ms e só em título de 1–3
   palavras; no máximo 4 passos numa sequência.
5. **Revelações:** uma vez, quando o topo do elemento está a 85–90% da viewport; sobem 12–32 px ou
   saem de máscara; nada visível fica escondido por mais de 900 ms; nada acima da dobra espera scroll.
6. **Fora das cenas, scroll-linked é discreto:** linear, travado na barra; parallax < 8% do elemento;
   scale entre 0,94 e 1,15; outras áreas presas no máximo 3 telas, com texto em toda tela presa.
7. **Um de cada:** uma assinatura, uma imagem em movimento, um marquee no máximo.
8. **Texto legível:** preenchimentos começam em 45% de tinta; esmaecidos nunca abaixo de 40%; blur no
   máximo 8 px e some ao assentar; nada passa por cima de texto sendo lido.
9. **Cor por capítulo** com corte seco na borda da seção; a tinta do header fixo acompanha em 300 ms.
10. **Horizontal:** primeiro a linha nativa com scroll-snap; galeria lateral presa só para fileiras
    com menos de 3 telas, com suporte a teclado.
11. **Página a página:** View Transitions, no máximo 480 ms, desligado em reduced motion.
12. **Reduced motion:** todo estado oculto vive dentro de `prefers-reduced-motion: no-preference`; a
    página reduzida é a página final; loops param.

**Material além de transform/opacity (impeccable):** continuidade → FLIP/View Transitions; foco e
profundidade → blur/filter limitados; revelação → `clip-path`, máscara, recorte; matéria e energia →
luz, gradiente de posição, textura, shader quando o mundo pede. Não empilhe técnicas: uma ideia de
material forte, levada pela sequência principal, basta.

## 3. Receitas CSS (sem biblioteca)

Tokens em `assets/motion-tokens.css`; JS base em `assets/motion-base.js`.

### Portão `html.js` (obrigatório)

```html
<script>document.documentElement.classList.add('js')</script>
```

Todo estado oculto fica sob `.js` **e** `@media (prefers-reduced-motion: no-preference)`. Sem JS ou com
reduced motion, o conteúdo aparece pronto.

### Sequência de load em 1,2 s

```html
<header class="hero">
  <h1 class="display lines">
    <span class="line"><span data-line style="--i:0">Ideias viram</span></span>
    <span class="line"><span data-line style="--i:1">produtos digitais</span></span>
  </h1>
  <p class="lead" data-load style="--d:420ms">Softwares, sites e aplicativos do diagnóstico à entrega.</p>
  <a class="button" data-load style="--d:480ms" href="#contato">Comece pelo diagnóstico</a>
  <figure class="hero__picture" data-open><img src="produto.webp" alt="…" fetchpriority="high"></figure>
</header>
```

```css
.lines .line { display: block; overflow: hidden; padding-bottom: .08em; margin-bottom: -.08em; }
.lines [data-line] { display: block; }
.hero__picture { overflow: clip; margin: 0; }
@media (prefers-reduced-motion: no-preference) {
  .js .hero [data-line] { transform: translateY(105%); animation: load-line var(--t-reveal) var(--ease-expo) forwards; animation-delay: calc(100ms + var(--i) * var(--stagger-line)); }
  .js .hero [data-load] { opacity: 0; transform: translateY(12px); animation: load-rise 500ms var(--ease-out) forwards; animation-delay: var(--d); }
  .js .hero [data-open] { clip-path: inset(0 0 100% 0); animation: load-open 1000ms var(--ease-in-out) 150ms forwards; }
  .js .hero [data-open] img { transform: scale(1.08); animation: load-settle 1100ms var(--ease-expo) 100ms forwards; }
}
@keyframes load-line { to { transform: none; } }
@keyframes load-rise { to { opacity: 1; transform: none; } }
@keyframes load-open { to { clip-path: inset(0); } }
@keyframes load-settle { to { transform: none; } }
```

**Atenção ao LCP:** o elemento de LCP (geralmente o título do hero ou a imagem) não pode começar em
`opacity: 0` por muito tempo. A máscara de linha (translate) é segura; um fade longo do título
atrasa o LCP medido. Pré-carregue a fonte do título e dê `fetchpriority="high"` à imagem do hero.

### Revelar no scroll (uma vez)

```css
@media (prefers-reduced-motion: no-preference) {
  .js [data-reveal] { opacity: 0; transform: translateY(24px); transition: opacity 700ms var(--ease-out), transform 900ms var(--ease-out); transition-delay: calc(var(--i, 0) * var(--stagger-item)); }
  .js [data-reveal].is-in { opacity: 1; transform: none; }
}
```

```js
const io = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
}, { rootMargin: '0px 0px -12% 0px', threshold: 0.1 });
document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
```

Coreografe: em cada seção marque título (`--i:0`), texto (`--i:1`), imagem (`--i:2`). Varie: lista
chega linha a linha; imagem abre de máscara (shutter); número rola uma vez; statement sobe por linha.

### Image shutter

```css
.shutter { overflow: hidden; }
@media (prefers-reduced-motion: no-preference) {
  .js .shutter { clip-path: inset(0 0 100% 0); transition: clip-path 1100ms var(--ease-in-out); }
  .js .shutter img { transform: scale(1.12); transition: transform 1500ms cubic-bezier(.33,1,.68,1); }
  .js .shutter.is-in { clip-path: inset(0); }
  .js .shutter.is-in img { transform: none; }
}
```

### Press e hover

```css
.button { transition: transform var(--t-press) var(--ease-out), background-color var(--t-hover) ease, color var(--t-hover) ease; }
.button:active { transform: scale(.97); }
.link { text-decoration: underline; text-decoration-color: transparent; text-underline-offset: .2em; text-decoration-thickness: .07em; transition: text-decoration-color var(--t-hover) ease; }
@media (hover: hover) and (pointer: fine) {
  .button:hover { background-color: var(--accent-strong, var(--accent)); }
  .link:hover { text-decoration-color: currentColor; }
}
```

Hover sempre atrás de `(hover: hover)`; aumenta contraste, nunca diminui; não muda peso da fonte;
não levante/escale todo card: uma resposta pequena e consistente basta.

### Scroll-linked sem JS (parallax, progresso, wordmark que escala)

```css
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .drift { animation: drift linear both; animation-timeline: view(); animation-range: entry 0% exit 100%; }
    @keyframes drift { from { transform: translateY(-4%); } to { transform: translateY(4%); } }
  }
}
```

`overflow: hidden` cria um scroller e quebra `view()`: em molduras use `overflow: clip`.

### Janela que abre (opening window)

Uma imagem aparece como janela no meio de um palco preso e abre para tela cheia em ~1 tela de scroll.

```html
<section class="opening"><div class="opening__stage"><img src="produto-wide.webp" alt="…" width="2400" height="1500"></div></section>
```

```css
.opening__stage { height: 100svh; overflow: clip; }
.opening__stage img { display: block; width: 100%; height: 100%; object-fit: cover; }
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .opening { height: 200svh; view-timeline-name: --opening; --inset-y: 20%; --inset-x: 28%; }
    .opening__stage { position: sticky; top: 0; animation: opening-window linear both; animation-timeline: --opening; animation-range: contain 0% contain 75%; }
    .opening__stage img { animation: opening-settle linear both; animation-timeline: --opening; animation-range: contain 0% contain 75%; }
  }
}
@media (max-width: 700px) { .opening { --inset-y: 18%; --inset-x: 8%; } }
@keyframes opening-window { from { clip-path: inset(var(--inset-y) var(--inset-x)); } to { clip-path: inset(0); } }
@keyframes opening-settle { from { transform: scale(1.15); } to { transform: none; } }
```

Versão GSAP (funciona em todos os navegadores) em §5.

### Pinned story (título fixo, itens passam)

```css
.story { display: grid; grid-template-columns: 5fr 7fr; gap: var(--gutter, 2rem); align-items: start; }
.story__title { position: sticky; top: 18vh; }
@media (max-width: 800px) { .story { grid-template-columns: 1fr; } .story__title { position: static; } }
```

### Folha sobre imagem fixa (sem script)

Uma foto 100svh `position: sticky; top: 0`, seguida de uma seção com fundo próprio e `z-index` maior
que sobe por cima como uma folha opaca. Ritmo de virar página entre capítulos.

### Página a página (View Transitions)

```css
@view-transition { navigation: auto; }
@media (prefers-reduced-motion: reduce) { @view-transition { navigation: none; } }
::view-transition-old(root) { animation: vt-leave 200ms var(--ease-exit) both; }
::view-transition-new(root) { animation: vt-arrive 380ms var(--ease-out) 60ms both; }
@keyframes vt-leave { to { opacity: 0; } }
@keyframes vt-arrive { from { opacity: 0; transform: translateY(16px); } }
```

Dê o mesmo `view-transition-name` à miniatura do projeto no índice e ao hero da página do projeto: a
imagem clicada viaja até o lugar.

### Accordion sem medir altura

```css
.acc__panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 320ms var(--ease-out); }
.acc__panel > div { overflow: hidden; }
.acc__item.is-open .acc__panel { grid-template-rows: 1fr; }
```

(Versão completa com chevron e ARIA: `fontes/transitions-dev/21-accordion.md`.)

### Outras receitas completas na fonte

`fontes/taste-skill/references/motion.md`: índice com prévia ancorada à linha, linhas que sobem no
scroll, imagem fixa com legendas passando, galeria lateral, hero que recua, ink fill (statement que
preenche), rolling figures (dígitos que rolam), menu/diálogo. `fontes/taste-skill/assets/scenes/` tem
o palco compartilhado (`stage.js`, `stage.css`) para cenas de scroll com GSAP ScrollTrigger.

## 4. Movimentos assinatura e cenas de scroll

| Movimento | O que acontece | Combina com |
| --- | --- | --- |
| Título mascarado | Linhas sobem de trás da linha de base no load | Marca cuja frase é o produto |
| Shutter | Imagem do hero abre de uma borda, assentando de scale 1,12 | Produto/objeto real |
| Janela que abre | Tela de tipo entrega para a grande imagem, que abre a tela cheia | Produto ou lugar com uma grande imagem |
| Wordmark que escala | Wordmark gigante escala alguns % enquanto o hero sai | Marca forte de uma palavra (nunca deformar logo) |
| Pinned story | Título fica, itens passam | Processo, etapas, argumentos |
| Índice com prévia | Linhas de texto; a linha em foco mostra a imagem | Portfólio, lista de serviços |
| Folha sobre imagem fixa | Foto fica uma tela; o capítulo seguinte sobe por cima | Capítulos que têm cada um uma imagem |
| Galeria lateral | Fileira curta anda de lado enquanto o scroll vertical segura o palco | Poucos projetos/telas |
| Linha empurrada | Uma linha de tipo enorme é empurrada de lado pelo scroll | Marca cuja promessa é uma palavra |
| Rolling figures | Os poucos números do argumento rolam até o valor, uma vez | Só com números confirmados |
| Imagem carregada | A imagem clicada viaja para virar o hero da próxima página | Portfólio com índice e páginas de case |
| Cortina no rodapé | A última seção é revelada por baixo da página | Fechamento com assinatura grande |

Escolha pelo assunto. Se o movimento não diz nada sobre o assunto, é decoração e a página fica melhor
sem ele. Para a GPC, ver `gpc.md` §4.

## 5. GSAP: setup, receitas e armadilhas

Fonte oficial completa: `fontes/gsap/gsap-*.md`. Todos os plugins são gratuitos (inclusive SplitText,
DrawSVG, MorphSVG, ScrollSmoother).

### Setup

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/DrawSVGPlugin.min.js"></script>
```

npm: `npm i gsap` (+ `@gsap/react` em React). Registre uma vez:
`gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);`

### Tudo dentro de matchMedia (responsivo + reduced motion)

```js
const mm = gsap.matchMedia();
mm.add({
  motion: '(prefers-reduced-motion: no-preference)',
  reduce: '(prefers-reduced-motion: reduce)',
  desktop: '(min-width: 800px)'
}, (ctx) => {
  const { motion, desktop } = ctx.conditions;
  if (!motion) return;            // reduced: nada se move, conteúdo já está no estado final
  heroIntro();
  sectionReveals();
  if (desktop) openingWindow();   // cenas presas só no desktop; no celular, versão estática
});
```

`matchMedia` reverte sozinho tudo que criou quando a condição muda. Não aninhe `gsap.context()` dentro.

### Hero: timeline do load (≤ 1,2 s)

```js
function heroIntro() {
  const split = SplitText.create('.hero h1', { type: 'lines', mask: 'lines', linesClass: 'line' });
  const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 0.9 } });
  tl.from(split.lines, { yPercent: 105, stagger: 0.1 }, 0.1)
    .from('.hero .lead, .hero .button', { autoAlpha: 0, y: 12, duration: 0.5, ease: 'power4.out', stagger: 0.06 }, 0.42)
    .from('.hero__picture', { clipPath: 'inset(0 0 100% 0)', duration: 1, ease: 'power3.inOut' }, 0.15)
    .from('.hero__picture img', { scale: 1.08, duration: 1.1 }, 0.1);
  return tl;
}
```

SplitText com `mask: 'lines'` (3.13+) já cria a máscara por linha; ele também mantém `aria-label` no
elemento para leitores de tela. Faça `split.revert()` se o layout mudar e o texto precisar re-quebrar
(ou use `autoSplit: true` com `onSplit`).

### Moldura e órbitas que se desenham (SVG)

```js
gsap.from('.portal-frame path', { drawSVG: '0%', duration: 1.2, ease: 'power2.inOut', stagger: 0.12 });
gsap.from('.orbit', { drawSVG: '50% 50%', duration: 1.4, ease: 'expo.out', delay: 0.3 });
gsap.from('.core', { autoAlpha: 0, scale: 0.6, duration: 0.6, ease: 'power4.out', delay: 0.9 });
```

Sem plugin: `stroke-dasharray` = `path.getTotalLength()` e anime `stroke-dashoffset` até 0.

### Entradas de seção em lote

```js
function sectionReveals() {
  gsap.set('[data-reveal]', { autoAlpha: 0, y: 24 });
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%', once: true,
    onEnter: (els) => gsap.to(els, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'expo.out', stagger: 0.08, overwrite: true })
  });
}
```

Para não esconder conteúdo se o JS falhar, prefira o estado inicial via CSS sob `.js` e reduced
motion, e use o GSAP só para animar até o final.

### Janela que abre com pin + scrub

```js
function openingWindow() {
  gsap.timeline({
    scrollTrigger: { trigger: '.opening', start: 'top top', end: '+=100%', pin: true, scrub: true }
  })
  .fromTo('.opening__stage', { clipPath: 'inset(20% 28%)' }, { clipPath: 'inset(0% 0%)', ease: 'none' })
  .fromTo('.opening__stage img', { scale: 1.15 }, { scale: 1, ease: 'none' }, 0);
}
```

### Galeria lateral presa (fake horizontal)

```js
const track = document.querySelector('.gallery__track');
gsap.to(track, {
  x: () => -(track.scrollWidth - window.innerWidth),
  ease: 'none',                                  // obrigatório em containerAnimation
  scrollTrigger: { trigger: '.gallery', pin: true, scrub: true, end: () => '+=' + (track.scrollWidth - window.innerWidth), invalidateOnRefresh: true }
});
```

Só para fileiras com menos de 3 telas; ofereça navegação por teclado (setas ou links).

### Órbita condutora ligada ao scroll

```js
gsap.from('.orbit-path', { drawSVG: 0, ease: 'none', scrollTrigger: { trigger: '.process', start: 'top 70%', end: 'bottom 60%', scrub: true } });
```

### Seguidores e valores frequentes

`gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3' })` reaproveita um tween (ex.: spot de luz
que segue o ponteiro num card). Nunca crie um tween novo por `mousemove`.

### Armadilhas (oficiais)

- `scrollTrigger` vai na timeline ou num tween de topo, nunca num tween filho dentro de timeline.
- Não use `scrub` e `toggleActions` no mesmo trigger.
- Crie triggers de cima para baixo na página ou defina `refreshPriority`.
- `ScrollTrigger.refresh()` depois de carregar fontes/imagens/conteúdo dinâmico
  (`document.fonts.ready.then(() => ScrollTrigger.refresh())`).
- Não anime o próprio elemento fixado (pin); anime os filhos.
- Vários `from()` no mesmo alvo/propriedade: `immediateRender: false` nos seguintes.
- `markers: true` nunca em produção.
- Prefira `autoAlpha` a `opacity` (esconde também para cliques) e aliases de transform (`x`, `y`,
  `scale`, `rotation`, `xPercent`).

### Scroll suave (opcional)

Lenis (`lenis` no npm) com `lerp` 0,1–0,14, ligado ao ticker do GSAP
(`lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add((t) => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);`),
desligado em touch e reduced motion. Ou ScrollSmoother (plugin GSAP). Nunca sequestro de roda.

## 6. React / Next.js

```jsx
'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Hero() {
  const root = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.line', { yPercent: 105, stagger: 0.1, duration: 0.9, ease: 'expo.out' });
    });
  }, { scope: root });               // seletores restritos ao componente, cleanup automático
  return <header ref={root}>…</header>;
}
```

- Em Next.js App Router, componentes com GSAP são `'use client'`; nada de `window` no servidor.
- Handlers de evento que criam animação: `const { contextSafe } = useGSAP(...)`.
- Não misture GSAP e Motion (Framer Motion) no mesmo elemento. React Bits usa um ou outro conforme
  o componente; confira em `catalogo-react-bits.md` antes de instalar.

## 7. Reduced motion e desempenho

- `prefers-reduced-motion: reduce` = menos e mais suave, não zero: mantenha mudanças de opacidade e
  cor que carregam significado (feedback, estado); tire viagem, escala, parallax e autoplay.
  Não use o "kill global de 0.01ms" que destrói feedback útil.
- Anime `transform`, `opacity`, `clip-path`. Evite `width`, `height`, `top`, `left`, `margin`,
  `padding` (layout a cada frame); exceção aceita: `grid-template-rows` em accordion.
- `will-change` só no elemento que vai animar, e remova depois. Não em tudo "por precaução".
- Pause loops fora da tela (`IntersectionObserver`) e com a aba oculta (`visibilitychange`).
- Fundos WebGL/canvas: carregue sob demanda, limite `devicePixelRatio` a 1,5–2, pause fora da tela,
  imagem estática no celular fraco e em reduced motion.
- Teste em celular real ou com CPU 4× mais lenta no DevTools; meça INP depois de adicionar motion.

## 8. O que denuncia motion gerado

O mesmo fade-up em todos os blocos; uma dúzia de entradas no hero; hover que levanta todo card;
bounce/elastic em interface; loops sem sentido (pontos pulsando, formas flutuando, texto brilhando
sem parar, selo girando); preloader com contador; cursor customizado; texto que digita ou embaralha;
scroll sequestrado; corredores presos enormes; revelação que não dispara e deixa uma faixa em branco.
Depois do passe de motion, capture as telas de novo e procure conteúdo que não apareceu.
