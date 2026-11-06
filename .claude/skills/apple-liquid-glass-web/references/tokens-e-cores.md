# Cores e tokens estilo Apple

Fonte das regras: HIG › Color, Dark Mode, Branding. **Atenção**: as páginas da HIG mostram as cores
do sistema como imagens, sem hex. Os valores abaixo são os amplamente publicados das cores do
sistema iOS (UIKit) e servem de referência fiel para web; a Apple pode ajustar levemente a cada
versão. Para web, o que importa é usar **cores por papel** com variante clara e escura.

## 1. Regras da Apple sobre cor

- **Uma cor, um significado.** Se azul é "clicável", não use azul para decorar.
- **Nada só por cor.** Status precisa de ícone/texto também (daltonismo).
- **Funciona em claro, escuro e contraste alto.** Teste os três.
- **Cores por papel (semânticas)**, não valores fixos espalhados pelo CSS.
- **Accent com moderação.** Marca na ação principal e em status; para expressar marca, ponha cor no
  conteúdo (imagens, hero), que passa por baixo do vidro.
- **Escuro não é só inverter.** Fundo preto/quase preto, elevações ficam *mais claras*, brancos
  suavizados, cores do sistema um pouco mais claras e saturadas.
- **Sem seletor de tema próprio do app** é a regra da Apple para apps; na web, seguir
  `prefers-color-scheme` é o padrão. Um botão de tema é aceitável em sites, mas respeite o sistema
  como valor inicial.

## 2. Cores do sistema (accent e status)

| Nome | Claro | Escuro | Uso típico |
| --- | --- | --- | --- |
| Blue | `#007AFF` | `#0A84FF` | accent padrão, links, ação principal |
| Green | `#34C759` | `#30D158` | sucesso, ligado |
| Red | `#FF3B30` | `#FF453A` | destrutivo, erro |
| Orange | `#FF9500` | `#FF9F0A` | aviso |
| Yellow | `#FFCC00` | `#FFD60A` | destaque (não use para texto sobre branco) |
| Mint | `#00C7BE` | `#63E6E2` | |
| Teal | `#30B0C7` | `#40C8E0` | |
| Cyan | `#32ADE6` | `#64D2FF` | |
| Indigo | `#5856D6` | `#5E5CE6` | |
| Purple | `#AF52DE` | `#BF5AF2` | |
| Pink | `#FF2D55` | `#FF375F` | |
| Brown | `#A2845E` | `#AC8E68` | |

Contraste: `#007AFF` sobre branco ≈ 4.0:1 — passa para texto ≥ 18 px ou negrito (3:1), **não**
para texto pequeno regular (4.5:1). Para links em texto corrido no claro, escureça para
`#0066D6` (≈ 5.4:1) ou use peso 600. Botão com fundo `#007AFF` e texto branco 17 px semibold passa
pela regra de negrito (3:1).

## 3. Cinzas

| Nome | Claro | Escuro |
| --- | --- | --- |
| gray | `#8E8E93` | `#8E8E93` |
| gray2 | `#AEAEB2` | `#636366` |
| gray3 | `#C7C7CC` | `#48484A` |
| gray4 | `#D1D1D6` | `#3A3A3C` |
| gray5 | `#E5E5EA` | `#2C2C2E` |
| gray6 | `#F2F2F7` | `#1C1C1E` |

## 4. Cores por papel (semânticas)

| Token | Claro | Escuro | Papel |
| --- | --- | --- | --- |
| `--label` | `#000000` | `#FFFFFF` | texto principal |
| `--label-secondary` | `rgba(60,60,67,.60)` | `rgba(235,235,245,.60)` | subtítulos, metadados |
| `--label-tertiary` | `rgba(60,60,67,.30)` | `rgba(235,235,245,.30)` | placeholder, desabilitado |
| `--label-quaternary` | `rgba(60,60,67,.18)` | `rgba(235,235,245,.16)` | decorativo — nunca texto útil |
| `--bg` | `#FFFFFF` | `#000000` | fundo da página |
| `--bg-secondary` | `#F2F2F7` | `#1C1C1E` | fundo de cards/seções, fundo agrupado |
| `--bg-tertiary` | `#FFFFFF` | `#2C2C2E` | elemento dentro de card |
| `--bg-grouped` | `#F2F2F7` | `#000000` | página com listas agrupadas (estilo Ajustes) |
| `--bg-elevated` | `#FFFFFF` | `#1C1C1E` | fallback opaco do vidro, modais |
| `--fill` | `rgba(120,120,128,.20)` | `rgba(120,120,128,.36)` | trilho de toggle/slider, botão cinza |
| `--fill-secondary` | `rgba(120,120,128,.16)` | `rgba(120,120,128,.32)` | campo de busca, segmented |
| `--fill-tertiary` | `rgba(118,118,128,.12)` | `rgba(118,118,128,.24)` | hover leve |
| `--separator` | `rgba(60,60,67,.29)` | `rgba(84,84,88,.60)` | linha fina 0.5–1 px |
| `--separator-opaque` | `#C6C6C8` | `#38383A` | |
| `--accent` | `#007AFF` (ou a marca) | `#0A84FF` (versão clara da marca) | ação, link, aba ativa |

**Cuidado com o contraste do secundário no claro**: `--label-secondary` (60%) sobre branco dá
≈ 3.4:1 — passa só para texto ≥ 18 px ou negrito. Para texto pequeno de leitura (legendas, preço,
metadados) use `--label-secondary-strong: rgba(60,60,67,.75)` (≈ 5.2:1). No escuro, o secundário
dá ≈ 6.3:1 e passa. Terciário (30%) não serve para texto — só placeholder/desabilitado.

## 5. Accent da marca

1. Pegue o hex da marca. Gere a versão de modo escuro um pouco mais clara e saturada (+8–12% de
   luminosidade).
2. Calcule contraste do texto branco sobre a cor (botão) e da cor sobre o fundo (link). Ajuste
   até passar.
3. Se a marca for amarela/verde-limão/clara demais para botão com texto branco, use texto preto no
   botão, ou use a marca só em detalhes e mantenha o accent azul do sistema.
4. Se o conteúdo é muito colorido, deixe barras monocromáticas e use o accent só na ação principal.

## 6. Raios, sombras, espaçamento (prático)

```css
:root {
  --radius-xs: 8px;  --radius-sm: 12px; --radius-md: 16px; --radius-lg: 22px; --radius-xl: 28px;
  --radius-pill: 999px;
  --shadow-float: 0 8px 32px rgba(0,0,0,.10), 0 1px 2px rgba(0,0,0,.06);
  --shadow-card:  0 1px 3px rgba(0,0,0,.06), 0 6px 20px rgba(0,0,0,.05);
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-5: 20px;
  --space-6: 24px; --space-8: 32px; --space-10: 40px; --space-12: 48px; --space-16: 64px;
}
```

**Cantos concêntricos**: um elemento dentro de outro arredondado usa
`raio interno = raio externo − padding`. Ex.: card 28 px com padding 12 px → botão interno 16 px.
Isso é marca registrada do visual Apple atual.

Margem lateral de página: 16 px (celular), 20 px (celular grande), 24–40 px (tablet/desktop).

## 7. Tailwind

```js
// tailwind.config.js
theme: { extend: {
  colors: {
    label: 'rgb(var(--label-rgb) / <alpha-value>)',
    accent: 'var(--accent)',
    bg: { DEFAULT: 'var(--bg)', secondary: 'var(--bg-secondary)', elevated: 'var(--bg-elevated)' },
    fill: 'var(--fill)', separator: 'var(--separator)',
    'sys-blue': '#007AFF', 'sys-green': '#34C759', 'sys-red': '#FF3B30', 'sys-orange': '#FF9500',
  },
  borderRadius: { pill: '999px', card: '22px' },
  backdropBlur: { glass: '24px', clear: '12px' },
  backdropSaturate: { glass: '1.8' },
}}
```

Com Tailwind, uma barra de vidro fica:
`bg-white/70 dark:bg-[#1c1c1e]/65 backdrop-blur-glass backdrop-saturate-[1.8] border border-white/50 dark:border-white/10`.
Tailwind já gera o prefixo `-webkit-` para `backdrop-*` via autoprefixer.
