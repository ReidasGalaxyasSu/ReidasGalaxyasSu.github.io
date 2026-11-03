# Liquid Glass na web

Sumário: 1. O que é · 2. Regras da Apple · 3. Variantes · 4. Cor no vidro · 5. Receitas CSS ·
6. Tom adaptativo · 7. Efeito de borda de rolagem · 8. Refração avançada (SVG) · 9. Acessibilidade ·
10. Performance · 11. Checklist

Fontes: páginas Materials, Color, Layout, Branding, Buttons, Tab bars e Toolbars da HIG (2025–2026),
via a skill `apple-design`. Tudo marcado "(prático)" é valor de partida para web, não especificação
da Apple. A Apple publica um único número para o material: a camada de escurecimento de 35%.

---

## 1. O que é

Liquid Glass é o material dinâmico e translúcido que a Apple lançou em 2025 para a camada de
controles e navegação que flutua acima do conteúdo. Ele:

- desfoca o que está atrás (blur);
- ajusta a luminosidade para manter rótulos legíveis;
- não tem cor própria: assume as cores do conteúdo de trás;
- em elementos pequenos (tab bar, toolbar) alterna entre aparência clara e escura conforme o
  conteúdo embaixo; em elementos grandes (sidebar) fica mais opaco;
- no sistema, reage ao toque (leve escala e brilho) e "se funde" entre formas próximas (morph).

Na web, imitamos com `backdrop-filter`, preenchimento translúcido, borda e brilho. O navegador não
reproduz a refração real nem o morph entre formas de graça; não prometa isso.

## 2. Regras da Apple (condensadas)

**Onde o vidro mora**

- Não use Liquid Glass na camada de conteúdo. Use materiais padrão (fundos sólidos ou blur leve)
  para dar profundidade ao conteúdo. Exceção: slider/toggle podem parecer vidro *durante* o arraste.
- Use com moderação. Componentes padrão já ganham o material; em controles personalizados, só nos
  mais importantes.
- Diferencie controles do conteúdo usando o *scroll edge effect* em vez de um fundo sólido ou
  semi-opaco embaixo dos controles. Estenda o conteúdo de tela cheia por baixo de barras e sidebars.
- Reduza fundos de toolbar e controles tingidos.

**Variante**

- Só use vidro *clear* em componentes sobre fundos visualmente ricos (foto, vídeo).
- Com *clear* sobre conteúdo claro, considere uma camada escura de **35%** de opacidade atrás.
  Sobre conteúdo escuro, não precisa.

**Cor**

- Aplique cor no vidro e nos ícones/textos sobre ele com moderação: só status e ação principal.
- Para destacar a ação principal, pinte o **fundo**, não o ícone ou o texto.
- Não pinte o fundo de vários controles.
- Com fundo colorido, prefira barra monocromática (ou accent bem diferente do conteúdo).
- A cor da marca vai para a ação principal e status (badge, aba ativa); para expressar marca com
  cor, coloque-a no conteúdo, que passa por baixo do vidro.
- Garanta legibilidade na posição de repouso (topo da página).

**Botões e barras**

- Um ou dois botões proeminentes por tela.
- Não use cores parecidas nos rótulos da tab bar/toolbar e no fundo do conteúdo.

## 3. Variantes

| | Regular | Clear |
| --- | --- | --- |
| Uso | quase tudo; qualquer superfície com texto (menus, popovers, sidebars, alertas); fundos que podem atrapalhar leitura | controles sobre foto/vídeo/mídia rica |
| Blur (prático) | 20–40 px (24 px é um bom padrão) | 8–16 px |
| Preenchimento (prático) | claro: `rgba(255,255,255,.72)`; escuro: `rgba(28,28,30,.66)` | `rgba(255,255,255,.18–.30)` |
| Saturação (prático) | 1.4–1.8 | 1.6–1.8 |
| Escurecimento | não | 35% preto se a mídia for clara |

Uma terceira forma, **tinted** (vidro tingido), é a do botão proeminente: o vidro ganha a cor do
accent, como vitral. Use em uma ou duas ações por tela.

## 4. Cor no vidro

- Rótulos e ícones: `--label` (preto/branco) por padrão. Accent só na aba ativa, badge, ou ação.
- Texto secundário sobre vidro: `--label-secondary` (≈60% de opacidade). Evite terciário/quaternário
  sobre vidro fino — some.
- Nunca use texto colorido de baixo contraste "porque fica bonito no vidro".

## 5. Receitas CSS

### Base (regular)

```css
.glass {
  background: rgba(255, 255, 255, 0.72);
  -webkit-backdrop-filter: blur(24px) saturate(1.8);
          backdrop-filter: blur(24px) saturate(1.8);
  border: 1px solid rgba(255, 255, 255, 0.55);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.6),   /* brilho na borda de cima */
    0 8px 32px rgba(0, 0, 0, 0.10),           /* flutuação */
    0 1px 2px rgba(0, 0, 0, 0.06);
}
@media (prefers-color-scheme: dark) {
  .glass {
    background: rgba(28, 28, 30, 0.66);
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.10), 0 8px 32px rgba(0,0,0,.45);
  }
}
```

Use valores literais dentro de `-webkit-backdrop-filter` (sem `var()`): versões antigas do Safari
foram instáveis com variáveis CSS nessa propriedade. Sempre escreva o prefixo **antes** da versão
sem prefixo.

### Clear + escurecimento

```html
<div class="media">
  <img src="foto.jpg" alt="">
  <div class="glass-dim" aria-hidden="true"></div>   <!-- 35% só se a foto for clara -->
  <button class="btn-icon glass glass--clear" aria-label="Reproduzir">▶</button>
</div>
```

```css
.glass--clear {
  background: rgba(255, 255, 255, 0.22);
  -webkit-backdrop-filter: blur(12px) saturate(1.8);
          backdrop-filter: blur(12px) saturate(1.8);
  border-color: rgba(255, 255, 255, 0.35);
  color: #fff;
}
.glass-dim { position: absolute; inset: 0; background: rgba(0, 0, 0, 0.35); pointer-events: none; }
```

### Tinted (ação principal)

```css
.glass--tinted {
  background: color-mix(in srgb, var(--accent) 88%, transparent);
  color: #fff;
  border-color: color-mix(in srgb, #fff 30%, var(--accent));
}
```

### Brilho especular (opcional, sutil)

Um gradiente muito leve dá a sensação de volume sem virar "glassmorphism de Dribbble":

```css
.glass::before {
  content: ""; position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
  background: linear-gradient(180deg, rgba(255,255,255,.35), rgba(255,255,255,0) 45%);
  mix-blend-mode: soft-light;
}
```

(`.glass` precisa de `position: relative` ou `fixed/sticky`.)

### Resposta ao toque

```css
.glass-interactive { transition: transform .25s cubic-bezier(.3,.7,.4,1.3), background-color .2s; }
.glass-interactive:active { transform: scale(0.96); }
@media (prefers-reduced-motion: reduce) { .glass-interactive { transition: none; } .glass-interactive:active { transform: none; } }
```

## 6. Tom adaptativo

No sistema, a tab bar fica escura sobre conteúdo escuro e clara sobre conteúdo claro. O navegador
não deixa ler os pixels de trás de forma barata, então marcamos as seções:

```html
<section data-tone="dark">…</section>   <!-- só seções de cor FIXA -->
```

Marque apenas seções cuja cor **não muda com o tema** (hero escuro com foto, faixa colorida).
Seções que acompanham claro/escuro ficam sem `data-tone`; senão, no modo escuro, a barra fica
clara sobre fundo escuro.

`assets/glass-adaptive.js` usa `elementFromPoint` (a cada quadro de rolagem) para ver qual seção está sob cada elemento
`[data-glass-adaptive]` e aplica `.is-on-dark`, que troca preenchimento e rótulos. Sem JS, o vidro
continua funcionando no tom do tema.

## 7. Efeito de borda de rolagem (scroll edge)

Em vez de fundo sólido sob a barra, o conteúdo desfoca e esmaece onde encontra a barra:

```css
.scroll-edge { position: sticky; top: 0; }
.scroll-edge::after {
  content: ""; position: absolute; left: 0; right: 0; top: 100%; height: 24px;
  pointer-events: none;
  -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
  -webkit-mask-image: linear-gradient(to bottom, #000, transparent);
          mask-image: linear-gradient(to bottom, #000, transparent);
}
```

Para tab bar no rodapé, inverta (`bottom: 100%`, gradiente `to top`).

## 8. Refração avançada (SVG) — opcional

Dá para simular a distorção de borda com filtro SVG (`feTurbulence` + `feDisplacementMap`) em
`backdrop-filter: url(#glass)`. **Só funciona em navegadores Chromium**; Safari e Firefox ignoram.
Use como aprimoramento progressivo, nunca como base, e só em uma superfície:

```html
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <filter id="lg-refract">
    <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="2" seed="3" result="n"/>
    <feGaussianBlur in="n" stdDeviation="2" result="nb"/>
    <feDisplacementMap in="SourceGraphic" in2="nb" scale="40" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
</svg>
```

```css
@supports (backdrop-filter: url(#lg-refract)) {
  .glass--refract { backdrop-filter: url(#lg-refract) blur(18px) saturate(1.8); }
}
```

Teste o desempenho: filtros SVG no backdrop são caros.

## 9. Acessibilidade

```css
@media (prefers-reduced-transparency: reduce) {
  .glass, .glass--clear { background: var(--bg-elevated); -webkit-backdrop-filter: none; backdrop-filter: none; }
}
@media (prefers-contrast: more) {
  .glass { background: var(--bg-elevated); border: 1px solid var(--label); -webkit-backdrop-filter: none; backdrop-filter: none; }
}
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .glass { background: var(--bg-elevated); }
}
```

- `prefers-reduced-transparency` existe no Chrome/Edge; Safari e Firefox ainda não o expõem de
  forma ampla. Por isso o vidro regular precisa ser legível *por si só* (preenchimento ≥ 60%).
- Calcule contraste do texto contra o preenchimento do vidro **sobre o pior fundo possível**
  (ex.: foto branca atrás de rótulo branco). Se falhar, aumente o preenchimento ou use dim.
- Alvo mínimo continua 44 × 44 px; vidro não é desculpa para botão pequeno.

## 10. Performance

- Cada `backdrop-filter` cria uma camada de composição. Mantenha **poucas** e **pequenas**.
- Evite vidro sobre vídeo ou animações contínuas atrás dele em celular fraco.
- Não anime `backdrop-filter` (blur de 0 → 24 px); anime `opacity` de uma camada que já tem o filtro.
- Não aplique `backdrop-filter` em elementos dentro de listas longas.

## 11. Checklist

1. Disciplina de camadas: vidro só em controles flutuantes.
2. Moderação: conte as superfícies de vidro; vidro sobre vidro é defeito.
3. Variante certa: texto → regular; mídia → clear (+35% se clara).
4. Orçamento de cor: 1–2 ações tingidas; rótulos monocromáticos sobre conteúdo colorido; legível
   no topo da página.
5. Estados de acessibilidade: reduzir transparência, contraste alto, reduzir movimento, sem suporte.
6. Borda de rolagem em vez de fundo sólido sob a barra.
7. Alvos ≥ 44 × 44 px no toque.
8. `-webkit-backdrop-filter` presente e antes do padrão.
9. Testado em Safari iOS, Chrome Android, claro e escuro.
