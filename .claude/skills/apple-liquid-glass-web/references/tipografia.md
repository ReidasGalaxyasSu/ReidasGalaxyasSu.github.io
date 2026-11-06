# Tipografia estilo Apple na web

Fonte: HIG › Typography (tabelas de Dynamic Type e text styles do macOS). Conversão para web e
valores de tracking em `em` são (prático).

## 1. Famílias da Apple

- **San Francisco (SF)**: sem serifa. Variantes SF Pro, SF Compact, SF Mono, SF Arabic, SF Hebrew
  etc., e versões arredondadas (SF Pro Rounded). Fonte variável com *tamanhos ópticos dinâmicos*:
  o desenho muda sutilmente entre texto pequeno (Text) e grande (Display).
- **New York (NY)**: serifada, feita para combinar com a SF.

## 2. Licença — leia antes de usar

Os arquivos da SF e da NY (developer.apple.com/fonts) têm licença que limita o uso a mockups e
apps para plataformas Apple. **Não hospede SF Pro com `@font-face` num site.** O jeito correto é
pedir a fonte do sistema: no Mac e no iPhone o navegador entrega a SF de verdade; no Windows e
Android entram Segoe UI e Roboto, que têm proporções parecidas.

## 3. Pilhas de fonte

```css
:root {
  --font-text:    -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, "Segoe UI",
                  Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  --font-display: -apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, "Segoe UI",
                  Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-rounded: ui-rounded, "SF Pro Rounded", -apple-system, system-ui, sans-serif;
  --font-serif:   ui-serif, "New York", Georgia, "Times New Roman", serif;
  --font-mono:    ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
}
body { font-family: var(--font-text); -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
```

`"SF Pro Text"` / `"SF Pro Display"` só pegam se a pessoa tiver a fonte instalada localmente —
inofensivo. O que importa é `-apple-system` / `system-ui`.

Se a pessoa *precisa* de uma fonte idêntica em todos os sistemas, sugira **Inter** (licença livre,
desenho muito próximo da SF) como fallback acima de `system-ui` — mas saiba que no Mac/iPhone ela
substitui a SF real. Uma opção equilibrada: `-apple-system, BlinkMacSystemFont, "Inter", ...`.

## 4. Escala iOS (tamanho padrão "Large")

| Estilo | Peso | Tamanho | Entrelinha | Peso enfatizado | CSS (px) |
| --- | --- | --- | --- | --- | --- |
| Large Title | Regular | 34 | 41 | Bold | `34px/41px`, `letter-spacing: .011em` → use `-.01em` em web display |
| Title 1 | Regular | 28 | 34 | Bold | `28px/34px` |
| Title 2 | Regular | 22 | 28 | Bold | `22px/28px` |
| Title 3 | Regular | 20 | 25 | Semibold | `20px/25px` |
| Headline | Semibold | 17 | 22 | Semibold | `17px/22px 600` |
| Body | Regular | 17 | 22 | Semibold | `17px/22px` (corpo longo: 1.47 → 25px) |
| Callout | Regular | 16 | 21 | Semibold | `16px/21px` |
| Subhead | Regular | 15 | 20 | Semibold | `15px/20px` |
| Footnote | Regular | 13 | 18 | Semibold | `13px/18px` |
| Caption 1 | Regular | 12 | 16 | Semibold | `12px/16px` |
| Caption 2 | Regular | 11 | 13 | Semibold | `11px/13px` |

1 pt da Apple ≈ 1 px CSS. Em sites, os títulos de *seção* da Apple.com são bem maiores que o
Large Title (48–80 px); para hero, use `clamp()`:

```css
.t-hero    { font: 700 clamp(40px, 6vw + 1rem, 80px)/1.05 var(--font-display); letter-spacing: -0.025em; }
.t-display { font: 700 clamp(32px, 3.5vw + 1rem, 56px)/1.08 var(--font-display); letter-spacing: -0.02em; }
```

## 5. Escala macOS (desktop denso, apps web tipo painel)

| Estilo | Peso | Tamanho | Linha |
| --- | --- | --- | --- |
| Large Title | Regular | 26 | 32 |
| Title 1 | Regular | 22 | 26 |
| Title 2 | Regular | 17 | 22 |
| Title 3 | Regular | 15 | 20 |
| Headline | Bold | 13 | 16 |
| Body | Regular | 13 | 16 |
| Callout | Regular | 12 | 15 |
| Subheadline | Regular | 11 | 14 |
| Footnote / Caption | Regular/Medium | 10 | 13 |

Para sites de marketing no desktop, mantenha corpo em 17 px (como apple.com). Use a escala macOS
só em painéis/dashboards densos.

## 6. Regras

- **Mínimos**: mobile padrão 17, mínimo 11; desktop padrão 13, mínimo 10. Na web, evite < 12 px
  fora de legendas.
- **Hierarquia por peso e tamanho.** Poucas fontes (uma, idealmente). Negrito/semibold cria um
  nível extra sem mudar tamanho.
- **Evite Light/Thin/Ultralight em texto pequeno.** Pesos finos só em títulos grandes, se tanto.
- **Tracking (prático)**: títulos ≥ 28 px: `-0.015em` a `-0.025em`; corpo 15–17 px: `-0.01em` a
  `0`; texto ≤ 13 px: `0` a `+0.01em`. A SF faz isso sozinha em apps nativos; na web, quando o
  sistema entrega a SF via `system-ui`, o Safari já aplica tracking óptico — não exagere.
- **Entrelinha**: 1.2–1.3 em títulos, 1.45–1.55 em parágrafos longos. Nunca entrelinha apertada
  com 3+ linhas.
- **Texto escalável**: use `rem` para o corpo para respeitar o zoom/tamanho de fonte do navegador;
  o layout tem que sobreviver a 200% de zoom.
- **Números em tabelas**: `font-variant-numeric: tabular-nums;`.
- **Capitalização**: em botões e títulos, a Apple em inglês usa Title Case; em português use
  maiúscula só na primeira palavra ("Agendar visita"), de forma consistente.
- **Ícones**: casar o peso dos ícones com o do texto ao lado (SF Symbols não pode ser usado em
  sites; use Lucide, Phosphor ou Heroicons com stroke ~1.75–2 px para casar com texto regular).

## 7. Tokens prontos

```css
:root {
  --text-large-title: 700 34px/41px var(--font-display);
  --text-title1:      700 28px/34px var(--font-display);
  --text-title2:      700 22px/28px var(--font-display);
  --text-title3:      600 20px/25px var(--font-display);
  --text-headline:    600 17px/22px var(--font-text);
  --text-body:        400 17px/1.47 var(--font-text);
  --text-callout:     400 16px/21px var(--font-text);
  --text-subhead:     400 15px/20px var(--font-text);
  --text-footnote:    400 13px/18px var(--font-text);
  --text-caption1:    400 12px/16px var(--font-text);
  --text-caption2:    400 11px/13px var(--font-text);
}
h1 { font: var(--text-large-title); letter-spacing: -0.02em; }
```

Tailwind (`tailwind.config.js` → `theme.extend.fontSize`):

```js
fontSize: {
  'large-title': ['34px', { lineHeight: '41px', fontWeight: '700', letterSpacing: '-0.02em' }],
  'title1': ['28px', { lineHeight: '34px', fontWeight: '700' }],
  'title2': ['22px', { lineHeight: '28px', fontWeight: '700' }],
  'title3': ['20px', { lineHeight: '25px', fontWeight: '600' }],
  'headline': ['17px', { lineHeight: '22px', fontWeight: '600' }],
  'body': ['17px', { lineHeight: '25px' }],
  'callout': ['16px', '21px'], 'subhead': ['15px', '20px'], 'footnote': ['13px', '18px'],
  'caption1': ['12px', '16px'], 'caption2': ['11px', '13px'],
},
fontFamily: { sans: ['-apple-system','BlinkMacSystemFont','system-ui','Segoe UI','Roboto','Helvetica Neue','Arial','sans-serif'] },
```
