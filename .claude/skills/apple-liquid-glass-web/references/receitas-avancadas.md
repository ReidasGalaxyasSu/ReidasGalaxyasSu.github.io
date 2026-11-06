# Receitas avançadas para web

Base: `assets/apple-glass.css` → depois `assets/liquid-glass-pro.css` → `assets/liquid-glass-lens.js`
(com `defer`). Exemplo vivo de tudo: `assets/demo-referencias.html`.

## 1. Superfície completa (corpo + borda especular + brilho + espessura)

```html
<header class="navbar glass lg-surface scroll-edge" data-lg-specular>…</header>
```

- `.lg-surface` adiciona a borda especular (lado iluminado em cima/esquerda, controlado por
  `--lg-light-angle`) e o brilho que segue o ponteiro (`data-lg-specular`).
- Ajuste por componente: `--lg-rim-light`, `--lg-rim-dark`, `--lg-rim-width`, `--lg-depth`.
- `.lg-chroma` troca a borda por uma com dispersão (arco-íris fino). Só em **um** destaque.

## 2. Refração real (lente)

```html
<!-- barra/botão: só a borda refrata -->
<nav class="tabbar glass lg-surface" data-lg-lens data-lg-bezel="14" data-lg-strength="40">…</nav>
<!-- thumb de seletor: amplia levemente -->
<div class="lg-picker__lens" data-lg-lens="magnify" data-lg-strength="40" data-lg-blur="0"></div>
<!-- bola de vidro clear: fundo invertido -->
<button class="lg-orb-btn lg-orb-btn--clear" data-lg-lens="sphere" data-lg-chroma="1">…</button>
```

Atributos: `data-lg-lens` (`bezel` | `magnify` | `sphere`), `data-lg-bezel` (px), `data-lg-strength`
(px), `data-lg-blur` (px; 0 = clear), `data-lg-chroma` (0–2), `data-lg-saturate`.

Regras:
- Funciona só em Chromium (Chrome, Edge, Opera, Brave, Arc). Safari/Firefox/iOS mostram o vidro
  normal do CSS. **Nunca dependa da lente para legibilidade.**
- 1–3 lentes por tela, nunca em itens de lista. Não anime o tamanho de um elemento com lente (o mapa
  é regenerado a cada mudança de tamanho); anime `transform`.
- Depois de mudar layout por script: `LiquidGlassLens.refresh()`.
- Desliga sozinho com reduzir transparência ou contraste aumentado.

## 3. Modal escuro (ref. 1)

```html
<div class="lg-panel--dark lg-surface" role="dialog" aria-modal="true" aria-labelledby="t1" data-lg-specular>
  <div class="lg-title-tabs" role="tablist">
    <button role="tab" id="t1" aria-selected="true">Entrar</button>
    <button role="tab" aria-selected="false">Criar conta</button>
  </div>
  <div class="lg-field"><label for="e">E-mail</label><input id="e" type="email" autocomplete="email"></div>
  <button class="lg-tile" style="--tile-tint: rgba(88,101,242,.45)" aria-label="Entrar com Discord">…</button>
</div>
```

Coloque objetos brilhantes (vídeo, 3D, foto de produto) **atrás** do painel para o vidro ter o que
desfocar. Um objeto pode cruzar a borda à frente (`z-index` maior, `filter: blur(2–4px)`) para dar
profundidade — ele é arte, não controle.

## 4. Seletor em cápsula (ref. 3)

Estrutura em `demo-referencias.html`. Pontos-chave: trilho `.lg-picker` (clear), lente fixa no
centro `.lg-picker__lens`, trilho de botões com `scroll-snap-type: x mandatory`, botão ativo com
`aria-pressed="true"` e cor `--picker-accent`; ao clicar, role o botão para o centro
(`scrollTo` suave, instantâneo em reduced motion). Teclado: setas trocam a opção.

## 5. Toggle / slide-to-confirm (ref. 5)

```html
<button class="lg-slide" role="switch" aria-checked="false" aria-label="Deslize para confirmar">
  <span class="lg-slide__knob" aria-hidden="true">→</span>
</button>
```

Durante o arraste adicione `.is-dragging` (o knob vira vidro); ao soltar, decida pelo limiar de 50%
e alterne `aria-checked`. Use `pointer` events com `setPointerCapture` e `touch-action: pan-y`.

## 6. Morph: botão que vira menu/popover

A Apple faz o botão **se transformar** no menu a partir da origem. Na web, View Transitions:

```js
function openMorph(btn, panel) {
  btn.style.viewTransitionName = 'lg-morph';
  const go = () => { btn.style.viewTransitionName = ''; panel.hidden = false; panel.style.viewTransitionName = 'lg-morph'; };
  if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return go();
  document.startViewTransition(go).finished.then(() => { panel.style.viewTransitionName = ''; });
}
```

O CSS de `liquid-glass-pro.css` já dá duração/curva ao grupo `lg-morph`. Sem suporte: abre direto.
Alternativa com GSAP: plugin Flip (`Flip.getState` → mudar DOM → `Flip.from`).

## 7. Tab bar que encolhe ao rolar (tabBarMinimizeBehavior)

```js
let last = scrollY;
addEventListener('scroll', () => {
  const bar = document.querySelector('.tabbar'); if (!bar) return;
  const down = scrollY > last + 4, up = scrollY < last - 4;
  if (down && scrollY > 120) bar.classList.add('is-minimized');
  if (up) bar.classList.remove('is-minimized');
  last = scrollY;
}, { passive: true });
```

## 8. Background extension (conteúdo por baixo da sidebar)

Imagem hero de ponta a ponta que continua, espelhada e desfocada, sob uma sidebar de vidro:

```css
.hero-ext { position: relative; }
.hero-ext::before { /* faixa espelhada à esquerda, sob a sidebar */
  content: ""; position: absolute; inset: 0 auto 0 calc(-1 * var(--sidebar-w)); width: var(--sidebar-w);
  background: var(--hero-img) left center / cover; transform: scaleX(-1); filter: blur(24px) saturate(1.2);
}
```

## 9. Formas concêntricas

```css
.lg-concentric { --r-outer: 28px; --pad: 8px; }   /* filhos recebem raio = 28 − 8 = 20 px */
```

Regra: raio interno = raio externo − distância entre as bordas. Botões em cápsula dentro de barra em
cápsula, sheets com raio maior que os cards dentro delas.

## 10. Performance (orçamento)

- Superfícies com `backdrop-filter` visíveis ao mesmo tempo: até 3 (barra, tab bar, 1 flutuante).
- Lentes SVG: até 3 em Chromium; teste com CPU 4× mais lenta no DevTools.
- Não anime `backdrop-filter`; anime `opacity`/`transform` de uma camada que já tem o filtro.
- `.lg-orb` animado: pause fora da tela (IntersectionObserver) e em reduced motion (já no CSS).
