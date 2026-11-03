# Acessibilidade, layout e movimento

Fontes: HIG › Accessibility, Layout, Motion, Dark Mode (2026). Valores web marcados (prático).

## Acessibilidade — falhas aqui são críticas

| Item | Regra | Como verificar na web |
| --- | --- | --- |
| Contraste | texto até 17 px: **4.5:1**; ≥ 18 px ou negrito: **3:1**; ícones/bordas de controle: 3:1 | calcule com hex; sobre vidro, use o preenchimento sobre o pior fundo |
| Tamanho de texto | mobile padrão 17, mín. 11; desktop padrão 13, mín. 10 | corpo em `rem`; zoom 200% sem quebrar |
| Alvo de toque | mobile 44 × 44 (mín. 28 × 28); desktop 28 × 28 (mín. 20 × 20) | `min-height/min-width: 44px` nos controles |
| Espaço entre controles | tanto quanto o tamanho; ~8 px mínimo entre alvos | |
| Só cor | nunca; sempre ícone ou texto junto | |
| Leitor de tela | botão de ícone com `aria-label`; landmarks (`header`, `nav`, `main`, `footer`); `aria-current` na navegação; ordem lógica | VoiceOver no Safari |
| Teclado | tudo alcançável por Tab; `:focus-visible` visível; `Esc` fecha sheets/menus | navegar sem mouse |
| Movimento | opcional, nunca único portador de significado | `prefers-reduced-motion` |
| Transparência | fallback opaco | `prefers-reduced-transparency` |
| Contraste alto | preenchimentos e bordas mais fortes | `prefers-contrast: more` |

Foco padrão sugerido:

```css
:focus-visible { outline: 3px solid color-mix(in srgb, var(--accent) 55%, transparent); outline-offset: 2px; }
```

## Layout

**Princípios da Apple**: o conteúdo manda; agrupamento e alinhamento mostram hierarquia; revelação
progressiva em vez de densidade; o layout segue o **espaço disponível**, não o dispositivo; as
mesmas funções em qualquer tamanho; controles importantes no meio/baixo da tela (alcance do
polegar); respeitar áreas seguras.

**Classes de tamanho → breakpoints (prático)**

| Apple | Web |
| --- | --- |
| compacto (iPhone retrato) | `< 600px` — uma coluna, tab bar, margens 16–20 px |
| regular (iPad, desktop) | `≥ 600px` — duas colunas, navbar; `≥ 900px` sidebar/links na barra; `≥ 1200px` largura máxima |

Prefira `@container` quando o componente muda pelo espaço do pai, não da tela.

**Áreas seguras**

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

```css
.navbar { padding-top: max(8px, env(safe-area-inset-top)); }
.tabbar { bottom: calc(12px + env(safe-area-inset-bottom)); }
main    { padding-bottom: calc(96px + env(safe-area-inset-bottom)); } /* espaço da tab bar */
```

**Grade e espaço (prático)**: base de 4/8 px; largura de leitura 60–75 caracteres
(`max-width: 680px` para texto); conteúdo máximo 980–1200 px; seções com respiro generoso
(80–140 px verticais no desktop, 56–80 no mobile) — o "ar" é parte do visual Apple.

**Hierarquia visual**: uma coisa por vez. Hero com título curto, uma frase de apoio, um CTA
proeminente e um secundário plain. Imagem de produto grande e limpa.

## Movimento

**Regras da Apple**: com propósito, breve, cancelável, raro em interações frequentes; feedback
imediato; nunca bloquear a pessoa esperando animação; respeitar reduzir movimento.

Curvas e durações (prático):

```css
:root {
  --ease-standard: cubic-bezier(.25, .1, .25, 1);   /* geral */
  --ease-out:      cubic-bezier(.2, .8, .2, 1);     /* entrar */
  --ease-spring:   cubic-bezier(.3, .7, .4, 1.3);   /* toque/escala com leve overshoot */
  --dur-fast: 150ms; --dur-base: 250ms; --dur-slow: 400ms;
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important;
                            transition-duration: .01ms !important; scroll-behavior: auto !important; }
}
```

- Toque: escala 0.96–0.97 em 150–250 ms com mola.
- Sheets: sobem em 350–450 ms com `--ease-out`; saem mais rápido (250 ms).
- Menus/popovers: escala 0.95 → 1 + opacidade, origem no botão (`transform-origin`).
- Aparecer ao rolar: deslocamento pequeno (12–24 px) + opacidade, uma vez, nada de efeitos em
  todo elemento.
- Barra encolhendo ao rolar (título grande → pequeno) é um bom "momento de assinatura" — só um.
- Para "morph" entre formas, View Transitions API (`document.startViewTransition`) é o mais perto
  do Liquid Glass nativo; use como aprimoramento progressivo.

## Modo escuro

- Fundo `#000` (OLED) ou `#1C1C1E`; elevação = mais claro, não sombra.
- Branco de texto puro é ok em título; textos longos podem usar `rgba(255,255,255,.92)`.
- Imagens com fundo branco ficam com cara de "recorte": dê raio e um fundo `--bg-secondary`.
- Logos/ícones escuros precisam de versão clara.
- `color-scheme: light dark;` no `:root` para controles nativos (scrollbar, inputs) acompanharem.
