# GPC Software Solutions: a marca aplicada a site, motion e vendas

Leia junto com a skill **`gpc-visual-identity`**, que é a fonte de verdade da marca (logo, paleta,
tipografia, tom de voz, dados confirmados). Este arquivo só traduz aquelas regras para o fluxo desta
skill e resolve os conflitos com as regras da casa. Em qualquer dúvida, a `gpc-visual-identity` vence.

## 1. O que não se negocia (resumo da marca)

- Nome sempre **GPC Software Solutions**; slogan **"Tecnologia que transforma ideias"** onde houver espaço.
- Destaque comercial: **softwares, sites e aplicativos** primeiro; logos/identidade, imagens e vídeos
  com IA, tráfego pago e estratégia como competências complementares.
- Logo só a partir dos arquivos oficiais (`assets/brand-kit/Brand_Assets/Logo/` ou `assets/logos-hd/`
  da skill de marca). **Nunca** animar o logo deformando, redesenhando, aplicando glow, sombra, bevel,
  rotação ou gradiente novo. O logo pode entrar com fade/opacity e translação mínima, inteiro.
- Não inventar clientes, cases, números, depoimentos, preços, prazos, domínio, redes, CNPJ, endereço.
  Dados de contato confirmados: Gabriel Portela, (11) 99405-5754, gabrielportelacardoso@hotmail.com
  (usar só em contato comercial). Empresa independente: o fundador não é o centro da comunicação.
- Tom: claro, seguro, direto, orientado a resultado. Evitar "mágica", "revolucionário", "garantido",
  superlativos vazios, IA como fim em si mesma.
- CTAs aprovados: **"Conte a ideia. Nós estruturamos o caminho."**, **"Receba um escopo claro."**,
  **"Transforme seu projeto em uma solução real."**, **"Comece pelo diagnóstico."**

## 2. Tokens de cor e tipo para o site

```css
:root {
  /* Paleta oficial */
  --gpc-preto-orbital: #000000;
  --gpc-carvao: #4A4A4A;
  --gpc-prata: #CBCBCB;
  --gpc-marfim: #FFFFE3;
  --gpc-azul-horizonte: #6D8196;
  --gpc-taupe: #988686;
  --gpc-taupe-profundo: #5C4E4E;
  /* Auxiliares de profundidade (não substituem as nominais) */
  --gpc-surface-1: #0A0C0E;
  --gpc-surface-2: #151719;
  /* Prata metálica oficial: só onde a marca já usa (logo primário) ou como luz que revela forma */
  --gpc-metal: linear-gradient(135deg, #F3F3F0 0%, #AEB4BA 46%, #D1D0D0 72%, #7D858D 100%);

  /* Papéis (mapeie a página nestes nomes, não nos hex) */
  --ground: var(--gpc-preto-orbital);   /* capítulo escuro */
  --ink: var(--gpc-marfim);
  --ground-alt: var(--gpc-marfim);      /* capítulo claro */
  --ink-alt: #000000;
  --accent: var(--gpc-azul-horizonte);  /* links, navegação, estado selecionado, dados */
  --accent-human: var(--gpc-taupe);     /* pequenas áreas editoriais */

  --font-sans: "DejaVu Sans", Verdana, "Segoe UI", sans-serif;
  --font-mono: "DejaVu Sans Mono", ui-monospace, Menlo, monospace;
}
```

- **Proporção**: ~85% neutros, até 10% Azul Horizonte, até 5% taupes. A página tem que funcionar em
  preto e branco antes do acento.
- **Ritmo de capítulos**: alterne seções Preto Orbital e Marfim Luz como campos inteiros com corte seco
  (é a "cor por capítulo" da taste-skill e o ritmo que a marca pede para propostas e apresentações).
- **Contraste (WCAG, calculado)**: Azul Horizonte sobre Preto Orbital 5,2:1 (ok para texto); sobre
  `#0A0C0E` 4,9:1 (ok); sobre `#151719` 4,48:1 (**reprova** texto corrido por pouco, use só em texto
  grande/estado); sobre Marfim 3,95:1 (só texto grande ≥ 24 px, ícone, sublinhado ou estado; links de
  corpo em fundo claro ficam em tinta preta com sublinhado azul). Taupe Cósmico: 6,1:1 no preto, 3,4:1 no
  Marfim (só grande). Carvão sobre Marfim 8,7:1, Taupe Profundo sobre Marfim 7,8:1, Prata sobre preto
  12,9:1. Confira qualquer par novo antes de entregar.
- **Fontes**: DejaVu Sans (Bold para títulos, Book/Regular para corpo) e DejaVu Sans Mono (dados,
  números, códigos, legendas, metadados, etapas, navegação técnica). Hospede as fontes: use os arquivos
  do brand kit quando estiverem disponíveis; para a Sans também existe `@fontsource/dejavu-sans`
  (pesos 400 e 700). Faça `preload` do peso usado no título do hero.
- **Escala**: a marca define como referência Display 52 px, H2 30 px, H3 22 px, corpo 18–19 px, meta
  12 px mono. A taste-skill recomenda hero bem maior (6–8vw). Use a escala da marca em todo o site;
  um hero maior (por exemplo `clamp(3.25rem, 6vw, 5.5rem)`) é uma exceção a **propor e confirmar com o
  usuário**, mostrando as duas versões, nunca aplicar em silêncio.

## 3. Conflitos resolvidos (marca × regras da casa)

| Regra da casa | Na GPC |
| --- | --- |
| Sem monospace fora de código | **Permitido** DejaVu Sans Mono em dados, números, etapas de processo, metadados, stack técnica e navegação técnica. Proibido em parágrafos. Não usar mono como "eyebrow" acima de todo título. |
| Sem numeração 01/02/03 | **Permitido** quando a sequência carrega informação real (etapas do processo de trabalho, passos de um carrossel). Proibido como enfeite em seções que não são sequência. |
| Sem linhas finas | **Permitido** como grafismo da marca: segmentos de moldura hexagonal aberta e órbitas finas que conduzem o olhar. Proibido: divisórias genéricas entre todo bloco, cards com contorno de 1 px, grids de linhas, miras. |
| Sem vidro / blur | **Permitido** "vidro fumê" como material em uma superfície com função (ex.: barra de navegação depois do scroll, moldura de mockup). Proibido como tratamento de todos os cards. |
| Sem gradiente | Só a prata metálica oficial e a luz percorrendo superfície (efeito de brilho que revela forma, uma vez). Nada de gradiente colorido de fundo, em botão ou texto. |
| Sem sombra em repouso | Mantido. Profundidade por degraus de tom (`--gpc-surface-1/2`), luz e materialidade. |
| Hero bem grande | Exceção a confirmar (ver §2). |

## 4. Motion na linguagem da marca

A marca pede: **movimentos lentos, precisos e intencionais; revelar moldura, órbitas e núcleo em
etapas sem deformar o logo; luz percorrendo superfícies; rotação de objeto; parallax discreto;
profundidade cinematográfica.** Evitar: explosão de partículas, glitch, neon pulsante, transições
frenéticas, efeitos que escondam a geometria.

Ajuste dos tokens para a GPC (um pouco mais lento e calmo que o padrão):

```css
:root {
  --t-reveal: 900ms;        /* padrão 800 */
  --t-open: 1300ms;         /* padrão 1200 */
  --stagger-line: 100ms;
  --gpc-ease: var(--ease-expo); /* chegada confiante, desaceleração longa */
}
```

### Movimentos assinatura propostos (escolha UM)

1. **O Portal se abre** (recomendado para o hero). Os segmentos da moldura hexagonal aberta se
   desenham (SVG `stroke-dashoffset` ou GSAP DrawSVG), as duas órbitas finas percorrem seu arco, o
   núcleo (estrela de quatro pontas, grafismo derivado, não o logo) acende; em seguida o espaço dentro
   da moldura vira a **janela** que abre para tela cheia com o scroll e mostra um produto real
   (interface recortada de um software, site ou app entregue). Ideia: *"No site da GPC, o Portal
   Celestial vira a janela pela qual o visitante vê ideias se tornando produtos reais."*
   Construção: timeline GSAP no load (≤ 1,2 s, conteúdo do hero já legível no primeiro frame) +
   ScrollTrigger com `pin` e `scrub` para a abertura (receita "Opening window" em `motion.md`).
2. **Órbita condutora**. Uma curva fina percorre a página e se desenha com o scroll (`scrub`),
   ligando diagnóstico → caminho → solução → entrega (as etapas reais do processo). Cada etapa
   acende o núcleo quando a órbita chega nela. Bom para a seção "como trabalhamos".
3. **Luz na superfície**. Uma faixa de luz prata percorre, uma única vez, a tipografia do título ou a
   moldura de um mockup quando ele entra (efeito ShinyText/GlareHover com a prata oficial, sem loop).

### Onde cada técnica entra

| Lugar | Técnica | Tempo |
| --- | --- | --- |
| Hero (load) | Linhas do título sobem de máscara; frase e CTA chegam depois; moldura desenha | tudo assentado em 1,2 s |
| Transição hero → produto | Opening window com pin + scrub | ~1 tela de scroll |
| Serviços (softwares, sites, apps) | Lista/índice com prévia ancorada à linha, não 3 cards com ícone | hover 240–400 ms |
| Processo | Órbita condutora ou pinned story (título fixo, etapas passam), números em Mono | 1 tela por etapa, máx. 3 telas |
| Portfólio | Índice com prévia, folha sobre imagem fixa, ou galeria lateral curta; só projetos reais confirmados | aberturas 1,1–1,3 s |
| Números | Rolling figures somente com números confirmados | 1 vez |
| CTA final | Campo de cor inteiro, título grande, botão com press; nada piscando | — |
| UI (menu, FAQ, formulário) | transitions.dev: menu-dropdown, accordion, error shake, success check, toast | 150–400 ms |

## 5. Estrutura sugerida: site + página de vendas + portfólio

Mesma página longa (ou home + páginas internas), seções só se tiverem afirmação com prova:

1. **Hero**: o que é + para quem + ação. Ex. de título curto a validar com o usuário: "Ideias viram
   produtos digitais" + frase de apoio "Softwares, sites e aplicativos sob medida, do diagnóstico à
   entrega." + CTA "Comece pelo diagnóstico". Logo oficial no header.
2. **O problema → a transformação** (estrutura da voz da marca: situação, diagnóstico, caminho).
3. **Serviços principais**: softwares, sites, aplicativos (cada um com o que entrega, para quem, um
   recorte real de interface). Complementares numa linha secundária.
4. **Como trabalhamos**: diagnóstico → escopo claro → desenvolvimento → entrega → evolução
   (números Mono legítimos aqui).
5. **Portfólio**: projetos reais com papel da GPC, problema e resultado qualitativo. Sem case
   confirmado, mostre trabalhos próprios/demonstrações rotulados como tal e liste no relatório que
   precisam de confirmação.
6. **Diferenciais** (os declarados: do conceito à entrega, IA com critério, preço acessível, escopo
   transparente, tradução do técnico para decisão) mostrados com prova, não com ícones.
7. **A coisa viva** (página de vendas): um **simulador de projeto**: o visitante escolhe tipo (software,
   site, app) e o que precisa; a página mostra o caminho e o escopo inicial em linguagem clara e abre
   WhatsApp/e-mail com a mensagem pronta. **Sem preço ou prazo inventados.** Fallback sem JS: link de
   contato direto.
8. **FAQ** real (accordion transitions.dev).
9. **CTA final** em campo de cor inteiro + contato confirmado.
10. **Rodapé** como fechamento: assinatura completa (com slogan em formato amplo), sem mapa do site
    inchado.

Dados ainda não definidos pela marca (domínio, redes, CNPJ, endereço, preços, prazos, cases): use
marcador visível (ex.: `[CONFIRMAR: domínio]`) e liste no relatório final.

## 6. React Bits na marca GPC

**Combinam** (com as cores e o ritmo da marca, sem loop infinito chamativo):
`SplitText`, `BlurText` (blur ≤ 8 px), `ScrollReveal`, `ScrollFloat`, `FoldText`, `MaskedHeading`
(com imagem real, não malha colorida), `ShinyText` (prata, 1 passada), `CountUp` (só números reais),
`AnimatedContent`, `FadeContent`, `GradualBlur`, `ScrollExpand`, `GlareHover`, `SpotlightCard`
(spot prata suave), `TiltedCard` (inclinação pequena), `ScrollStack`, `CardSwap`, `Stack`,
`FlyingPosters`/`CircularGallery` (portfólio, com moderação), `Stepper`, `PillNav`/`CardNav` (avaliar),
fundos discretos em preto/prata: `LightRays`, `DarkVeil`, `Silk`, `Threads`, `Orb`, `GridMotion`
(desaturados, opacidade baixa, pausados fora da tela e estáticos em reduced motion).

**Evitar** (contra a marca: neon, glitch, partículas, espetáculo gratuito, circuitos/hologramas):
`GlitchText`, `DecryptedText`, `ScrambledText`, `FuzzyText`, `LetterGlitch`, `FaultyTerminal`,
`Hyperspeed`, `Galaxy`, `Particles` em excesso, `Ballpit`, `SplashCursor` e cursores customizados,
`Lightning`, `PixelBlast`, `GradientText` colorido, `ElectricBorder`, `ElectricLogo`, `StarBorder`
colorido, qualquer efeito aplicado sobre o logo.

## 7. Checklist GPC antes de entregar

- Logo de arquivo oficial, sem efeito, com área de proteção 1X e tamanho mínimo.
- Neutros dominam; cada uso de Azul Horizonte e taupe tem função.
- DejaVu Sans / Sans Mono carregadas de verdade (confira na aba de rede ou no computed style).
- Nenhum dado comercial, case, número ou promessa inventado; marcadores `[CONFIRMAR: …]` listados.
- Motion lento e preciso; nada de partículas, glitch ou neon; reduced motion mostra o estado final.
- O site continua reconhecível como GPC sem brilho nem metal (forma, grid, paleta, hierarquia).
- O próximo passo do visitante está claro em toda tela importante.
