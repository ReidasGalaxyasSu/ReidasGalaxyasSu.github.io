# React Bits: curadoria por uso

218 componentes animados para React (catálogo completo com descrição e dependências em
`catalogo-react-bits.md`; busque com `grep -i`). Licença MIT + Commons Clause: use dentro dos seus
apps e sites; não revenda nem redistribua a biblioteca.

## Instalar

```bash
npx shadcn@latest add @react-bits/SplitText-TS-TW     # sabores: JS-CSS, JS-TW, TS-CSS, TS-TW
npx jsrepo@latest add https://reactbits.dev/r/SplitText-TS-TW
```

Registro para shadcn CLI/MCP em `components.json`:
`{ "registries": { "@react-bits": "https://reactbits.dev/r/{name}.json" } }`.
Código-fonte bruto: `https://reactbits.dev/r/<Nome>-TS-TW.json`. Demo com props:
`https://reactbits.dev/<categoria>/<nome-kebab>`.

Sem React (HTML puro ou ferramenta que gera HTML): leia o JSON do registro e porte o efeito para
CSS/GSAP. A maioria dos efeitos de texto e scroll são poucas linhas de GSAP (`motion.md` §5).

## Por trabalho

| Trabalho | Boas escolhas |
| --- | --- |
| Título do hero que chega | `SplitText`, `BlurText`, `FoldText`, `MaskedHeading`, `TextLoop` |
| Statement que se revela no scroll | `ScrollReveal`, `ScrollFloat` |
| Entrada de seção | `AnimatedContent`, `FadeContent` |
| Desfoque nas bordas de área rolável | `GradualBlur` |
| Imagem que expande no scroll | `ScrollExpand` |
| Números | `CountUp`, `Counter` (só números reais) |
| Hover com luz | `GlareHover`, `SpotlightCard`, `BorderGlow`, `ShinyText` |
| Card com profundidade | `TiltedCard`, `ProfileCard`, `ReflectiveCard` |
| Portfólio / galeria | `ScrollStack`, `CardSwap`, `Stack`, `FlyingPosters`, `CircularGallery`, `DomeGallery`, `Masonry`, `AccordionGallery`, `DepthCarousel` |
| Grade de serviços (cuidado para não virar "cards iguais") | `MagicBento`, `ChromaGrid` |
| Navegação | `PillNav`, `CardNav`, `StaggeredMenu`, `BubbleMenu`, `GooeyNav`, `Dock` |
| Logos de clientes (só reais) | `LogoLoop` |
| Etapas | `Stepper` |
| Microinterações | `Magnet`, `ClickSpark`, `HoldButton`, `SquishSwitch`, `SpringCheck`, `WarmTooltip`, `SwipeToast` |
| Fundo de hero | `LightRays`, `DarkVeil`, `Silk`, `Threads`, `Orb`, `Aurora`, `SoftAurora`, `GridMotion`, `DotGrid`, `Beams`, `Iridescence`, `LiquidEther`, `Prism` |

Dependências variam por componente (`motion`, `gsap`, `@hugeicons/react`, `ogl`, `three`, `matter-js`…;
a maioria dos fundos hoje é WebGL puro sem dependência). Confira a coluna do catálogo antes de instalar.

## Regras de uso

1. **Um protagonista por página** (um fundo de hero *ou* um título especial), o resto discreto.
2. **Custo**: fundos e galerias WebGL/canvas (com ou sem `ogl`/`three`) usam GPU. Carregue
   sob demanda (`dynamic(() => import(...), { ssr: false })` no Next), pause fora da tela, dpr ≤ 2,
   pôster estático no celular fraco e em reduced motion.
3. **Ajuste às cores da marca** pelas props (cores, opacidade, velocidade baixa). Fundos nunca competem
   com o texto: contraste do texto por cima ≥ 4,5:1 em qualquer frame.
4. **Acessibilidade**: texto dividido mantém o texto real para leitores de tela; todo efeito com
   fallback de reduced motion mostrando o estado final; nada que dependa só de hover.
5. **Uma biblioteca de animação por projeto quando possível**: se o site já usa GSAP, prefira os
   componentes baseados em gsap; misturar `motion` e `gsap` é aceitável, mas não no mesmo elemento.
6. **Evite como padrão** (truques que denunciam template, a menos que o briefing peça): cursores
   customizados (`SplashCursor`, `BlobCursor`, `TargetCursor`, `GhostCursor`, `GlowCursor`), texto que
   embaralha/glitcha (`DecryptedText`, `GlitchText`, `ScrambledText`, `FuzzyText`, `LetterGlitch`,
   `FaultyTerminal`), brinquedos de física (`Ballpit`, `FallingText`), `Hyperspeed`, `Galaxy`.

Para a GPC, a lista de "combinam / evitar" está em `gpc.md` §6.
