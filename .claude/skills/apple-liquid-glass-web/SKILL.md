---
name: "apple-liquid-glass-web"
description: "Aplica a identidade visual da Apple e o material Liquid Glass em sites, softwares e vídeos: vidro translúcido regular, clear, fumê e tingido com refração real (lente SVG), borda especular, brilho que segue a luz e dispersão cromática; tipografia San Francisco via fonte do sistema; cores do sistema claro/escuro; botões em cápsula, tab bar flutuante que encolhe, morph botão→menu, formas concêntricas, sheets, seletores e toggles; APIs nativas (SwiftUI glassEffect, UIKit, AppKit, Electron, Flutter); prompts, Three.js, Blender e motion para vídeo; acessibilidade (reduzir transparência, contraste, movimento, 44 px). Baseada na documentação oficial Adopting Liquid Glass e na HIG Materials. Inclui CSS, JS, demo e auditoria. Use SEMPRE que pedirem Liquid Glass, glassmorphism, efeito vidro, vidro fosco, blur na barra, cara de Apple, estilo iOS ou macOS, SF Pro, tab bar, barra flutuante, vidro iridescente, metal líquido, ou para criar, redesenhar ou auditar interface, app ou vídeo com inspiração Apple."
---

# Apple Liquid Glass para Web

Esta skill transforma as diretrizes de design da Apple (Human Interface Guidelines e a documentação
oficial *Adopting Liquid Glass*, lidas em 2026-11) em decisões concretas para **web, softwares e
vídeo**. Ela nasceu da skill `apple-design`
(github.com/dickwu/apple-design-skill), que traz as 123 páginas originais da Apple; aqui o
conteúdo foi destilado, traduzido e convertido em código pronto.

Você atua como um designer de produto que conhece a HIG de cor e um desenvolvedor front-end que
sabe exatamente o que o navegador consegue e não consegue imitar. O objetivo não é copiar a Apple
pixel a pixel; é fazer o site **parecer nativo do mesmo universo**: conteúdo no centro, controles
flutuando em vidro, tipografia limpa, cor usada com intenção.

## Conceito central: Liquid Glass é um material, não uma fonte

Muita gente confunde. Esclareça quando aparecer:

- **Liquid Glass** = o material translúcido (vidro) que a Apple aplica nas **barras e controles**
  que flutuam sobre o conteúdo. Ele desfoca, clareia/escurece e satura o que está atrás.
- **San Francisco (SF Pro)** = a fonte usada nesses controles. Na web, chame-a pela pilha de
  fontes do sistema (`-apple-system, BlinkMacSystemFont, system-ui`). **Não hospede os arquivos da
  SF Pro**: a licença da Apple restringe o uso a mockups e apps para plataformas Apple.

## Três frentes, um mesmo material

| Frente | Comece por | Ferramentas |
| --- | --- | --- |
| **Site / app web** | fluxo abaixo (passos 1–7) | `apple-glass.css` → `liquid-glass-pro.css` → `liquid-glass-lens.js`; `references/receitas-avancadas.md` |
| **Software nativo** (iOS, macOS, Windows, Electron, Flutter, RN) | `references/softwares-nativos.md` | APIs oficiais (`glassEffect`, `.glassProminent`, `GlassEffectContainer`…) — nunca vidro feito à mão no iOS/macOS |
| **Vídeo, 3D, imagem gerada** | `references/video-3d-e-prompts.md` | sistema de prompt das referências, Three.js `MeshPhysicalMaterial`, Blender, After Effects/Remotion, som com `sfx-kit` |

Em todas: as mesmas regras de camada (vidro só na camada funcional), as sete camadas do material
(`references/anatomia-do-vidro.md`) e o padrão de qualidade das cinco referências visuais
(`assets/referencias/1.png` … `5.png`, recriadas em `assets/demo-referencias.html`).

## O que a Apple diz (oficial)

Leia `references/apple-oficial.md` para o resumo fiel. O essencial:
- "Um material dinâmico que combina as propriedades ópticas do vidro com uma sensação de fluidez",
  formando "uma camada funcional distinta para controles e navegação" que flutua sobre o conteúdo.
- Não use na camada de conteúdo; use com moderação; **regular** onde há texto, **clear** só sobre mídia
  rica (+ escurecimento de **35%** se a mídia for clara) — o único número oficial.
- Controles ganham vida: o knob de slider/toggle **vira vidro durante a interação**; botões **se
  transformam** em menus e popovers; formas **concêntricas**; nada de vidro sobre vidro.
- Reduza fundos próprios em barras; use o **scroll edge effect**; estenda o conteúdo por baixo de
  sidebars (**background extension**); tab bar pode **encolher ao rolar**.
- Teste com **reduzir transparência**, **reduzir movimento** e **contraste aumentado**; cores
  próprias com variante clara, escura e de contraste aumentado.

## O modelo de duas camadas (a regra que manda em tudo)

```text
┌──────────────────────────────────────────────┐
│ CAMADA FUNCIONAL  → aqui SIM vai vidro        │  nav bar · tab bar · toolbar flutuante
│                                               │  menus · popovers · sheets · botões flutuantes
├──────────────────────────────────────────────┤
│ CAMADA DE CONTEÚDO → aqui NÃO vai vidro       │  texto · imagens · cards · listas · hero
│                                               │  fundos sólidos ou "materiais padrão"
└──────────────────────────────────────────────┘
```

O conteúdo rola por baixo dos controles e "aparece" através do vidro. Por isso:

1. **Nunca coloque vidro em cards, seções, listas ou fundos.** Vidro no conteúdo cria hierarquia
   confusa (HIG, Materials: "Don't use Liquid Glass in the content layer"). Exceção: um slider ou
   toggle pode ganhar aparência de vidro *só enquanto está sendo arrastado*.
2. **Use pouco.** Só os controles funcionais mais importantes. Vidro sobre vidro é defeito.
3. **Dê ao vidro algo para refletir.** Deixe o conteúdo (imagens, cor, hero) passar por baixo da
   barra; não pinte um fundo sólido atrás dela.

## Fluxo de trabalho

Siga na ordem. Cada passo aponta para a referência que detalha.

### 1. Entenda o projeto

- Qual stack? (HTML puro, React, Tailwind, Next…). Fale a língua dela.
- O que existe hoje: barra de topo? menu mobile? botões? qual fonte? qual paleta?
- O conteúdo é rico em imagem (vidro *clear* pode brilhar) ou é texto/dados (vidro *regular*)?
- Há uma marca a respeitar? A cor da marca vira o **accent** — usado só na ação principal e em
  status, nunca em todos os botões.

Se o projeto já tem uma skill de identidade de marca, ela vence em cor e tom de voz; esta skill
define material, tipografia de sistema, componentes e acessibilidade.

### 2. Instale a base

Copie `assets/apple-glass.css` para o projeto (ou porte os tokens para Tailwind/CSS-in-JS — veja
`references/tokens-e-cores.md`). Ele traz: tokens de cor claro/escuro, escala tipográfica, raios,
sombras, as classes de vidro e todos os componentes, já com fallbacks de acessibilidade.

Se quiser a barra trocando de tom conforme a seção abaixo dela, inclua `assets/glass-adaptive.js`.

Abra `assets/exemplo.html` para ver tudo funcionando junto e usar como modelo.

### 3. Tipografia

Leia `references/tipografia.md`. Resumo:

```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, "Segoe UI", Roboto,
             "Helvetica Neue", Arial, sans-serif;
```

- Corpo **17 px** no mobile (padrão iOS), mínimo absoluto **11 px**. No desktop denso, 13–15 px.
- Hierarquia por **peso e tamanho**, não por cor nem por fonte decorativa. Escala iOS: 34 / 28 /
  22 / 20 / 17 / 16 / 15 / 13 / 12 / 11.
- Títulos grandes com tracking levemente negativo; texto pequeno com tracking levemente positivo.
- Evite pesos Ultralight/Thin em texto pequeno.
- Serifada (New York) via `ui-serif`; monoespaçada (SF Mono) via `ui-monospace`.

### 4. Vidro (Liquid Glass)

Leia `references/liquid-glass.md` antes de escrever o efeito. Resumo da receita:

| Variante | Quando | Blur | Preenchimento | Saturação |
| --- | --- | --- | --- | --- |
| Regular | quase tudo; barras, menus, popovers, qualquer coisa com texto | 20–40 px | 60–80% branco (claro) / preto (escuro) | 1.2–1.5× |
| Clear | controles sobre foto ou vídeo | 8–16 px | 20–40% | 1.4–1.8× |

Mais: borda de 1 px translúcida, brilho interno no topo (`inset 0 1px 0`), sombra suave, e uma
**camada escura de 35%** atrás do vidro *clear* quando a mídia é clara (o único número que a Apple
publica). Os outros valores são pontos de partida práticos, não especificação.

Classes prontas: `.glass`, `.glass--clear`, `.glass--tinted`, `.glass-dim`, `.scroll-edge`.

**Nível avançado** (quando o projeto pede acabamento premium, como nas referências): carregue
`assets/liquid-glass-pro.css` e `assets/liquid-glass-lens.js` e leia
`references/anatomia-do-vidro.md` + `references/receitas-avancadas.md`:

- `.lg-surface` — borda especular (lado iluminado × apagado), brilho que segue o ponteiro
  (`data-lg-specular`), sombra interna de espessura; `.lg-chroma` — dispersão cromática fina.
- `data-lg-lens="bezel|magnify|sphere"` — **refração real** do fundo (Chromium; nos outros
  navegadores fica o vidro normal). Máximo 3 por tela.
- Componentes das referências: `.lg-panel--dark` + `.lg-title-tabs` + `.lg-field` + `.lg-tile`
  (modal fumê, ref. 1), `.lg-orb-btn--clear/--frost` (bolhas, ref. 2), `.lg-picker` (seletor com lente,
  ref. 3), `.lg-orb` (objeto iridescente — arte, não controle; ref. 4), `.lg-slide` (toggle preto
  cromado, ref. 5), `.lg-concentric`, morph via View Transitions, tab bar `.is-minimized`.

### 5. Componentes

Leia `references/componentes.md`. Padrões principais:

- **Barra de navegação**: topo, sticky, vidro regular, título curto, ações à direita, com efeito
  de borda de rolagem (o conteúdo desfoca e esmaece ao encostar na barra).
- **Tab bar** (mobile): flutuante em cápsula na parte de baixo, 3 a 5 abas, ícone + rótulo de uma
  palavra, aba ativa em accent. Abas **navegam**; ações vão numa toolbar.
- **Botões**: cápsula (raio total). Um, no máximo dois, botões **proeminentes** (fundo accent)
  por tela; o resto em vidro, cinza ou só texto. Rótulo com verbo: "Agendar visita", não "Enviar".
- **Cards e seções**: fundo sólido (`--bg-secondary`), raio generoso, **sem vidro**.
- **Sheets/modais**: um por vez, com alça se arrastável, saída clara além do botão principal.

### 6. Acessibilidade (não negociável)

Leia `references/acessibilidade-layout-motion.md`. O CSS já cobre o essencial, mas confira:

- `prefers-reduced-transparency: reduce` → vidro vira opaco.
- `prefers-contrast: more` → preenchimento opaco e borda mais forte.
- `prefers-reduced-motion: reduce` → sem animações de morph/escala.
- `@supports not (backdrop-filter)` → fallback opaco.
- Contraste: texto até 17 px precisa de **4.5:1**; 18 px+ ou negrito, **3:1**. Calcule com os
  valores hex reais, não "no olho".
- Alvos de toque: **44 × 44 px** (mínimo 28 × 28); no desktop 28 × 28 (mínimo 20 × 20).
- Ícone sem texto precisa de `aria-label`. Nada comunicado só por cor. Foco visível no teclado.
- Respeite `env(safe-area-inset-*)` em barras fixas (iPhone com notch/Dynamic Island).

### 7. Revise antes de entregar

Rode o checklist de `references/checklist-auditoria.md`. Para um projeto existente, rode antes o
script, que aponta suspeitos no código (é uma pista, não um veredito — abra cada arquivo):

```bash
bash <caminho-da-skill>/scripts/audit_glass.sh <pasta-do-projeto>
```

## Regras de ouro (com o porquê)

1. **Vidro só em controles flutuantes.** O vidro existe para separar controle de conteúdo; no
   conteúdo ele apaga essa separação.
2. **Poucas superfícies de vidro por tela** (barra + tab bar + talvez um botão flutuante). Além de
   confundir, `backdrop-filter` custa caro em GPU, principalmente sobre conteúdo animado.
3. **Cor no fundo, não no ícone**, para a ação principal. É assim que o sistema faz o "Concluído".
   E só uma ou duas por tela.
4. **Rótulos monocromáticos sobre conteúdo colorido.** Se o fundo é colorido, a barra fica
   preto/branco; o accent só onde importa (aba ativa, badge).
5. **Legibilidade na posição de repouso.** No topo da página, sem rolar, a barra precisa estar
   legível — mesmo que depois passe conteúdo colorido por baixo.
6. **Nunca pinte fundo sólido atrás da barra** para "consertar" legibilidade; use vidro regular,
   o efeito de borda de rolagem ou o tom adaptativo.
7. **Fonte do sistema para navegação e controles.** Personalidade de marca pode morar em títulos
   de destaque, imagens e textos — não nos botões.
8. **Claro e escuro sempre.** Siga `prefers-color-scheme`; cores por papel (rótulo, fundo,
   separador), não por valor fixo.
9. **Não achate a personalidade.** A meta é "parece do mesmo universo da Apple", não "parece um
   template". Um elemento de assinatura, o resto quieto.

## Erros comuns que você deve pegar

- Card com `backdrop-filter` → trocar por fundo sólido.
- `backdrop-filter` sem `-webkit-backdrop-filter` → não funciona no Safari antigo / iOS < 18.
- Vidro sem fallback para reduzir transparência ou contraste alto.
- `@font-face` carregando `SF-Pro*.otf/woff` → remover, usar pilha do sistema.
- Fonte menor que 11 px em rótulos; botões com menos de 44 px de altura no mobile.
- Vários botões com fundo colorido lado a lado.
- Barra com `background: #fff` opaco + `box-shadow` pesada → vira "barra de site genérico".
- Gradientes coloridos "vidro arco-íris", bordas neon, glows: isso é glassmorphism de Dribbble,
  não Liquid Glass. Liquid Glass é sóbrio e **não tem cor própria**.
- Raio pequeno (4–6 px) em botões → a linguagem atual da Apple usa cápsulas e cantos concêntricos.
- Rótulos genéricos: "Clique aqui", "Enviar", "OK".
- Vidro sobre fundo chapado (nada para refratar) → parece cinza sujo; ponha imagem, vídeo ou cor atrás.
- Borda branca uniforme em volta toda → falta o lado iluminado × apagado (`.lg-surface`).
- Lente SVG como única fonte de legibilidade, ou em mais de 3 elementos, ou em itens de lista.
- Raio interno igual ao externo (não concêntrico).
- No iOS/macOS nativo: vidro desenhado à mão em vez de `glassEffect`/`.glass`; fundos próprios em
  sheets, popovers e toolbars.
- Em vídeo/IA: logo ou texto gerado pela IA; neon e partículas; rebote nas animações.

## Formato de resposta

**Ao implementar:** entregue o código no padrão do projeto, explique em 3–6 linhas o que mudou e por
quê (citando a regra), e liste o que ainda falta testar (Safari iOS, modo escuro, reduzir
transparência).

**Ao auditar/revisar**, use:

```text
## Revisão Apple / Liquid Glass: <nome>

### Resumo
2–3 frases. Nota: Excelente / Bom / Precisa de ajustes / Problemas críticos.

### Crítico (acessibilidade quebrada, vidro ilegível, alvo pequeno)
- **O quê**: problema com números (ex.: "texto #9a9a9a sobre vidro branco 70%, ~2.6:1")
- **Por quê**: regra + referência (ex.: `liquid-glass.md › Onde o vidro mora`)
- **Correção**: código concreto

### Melhorias (Alta / Média / Baixa)
mesmo formato

### O que já está bom
específico, para não se perder na próxima iteração
```

Números, não adjetivos: "botão de 32 px de altura, abaixo dos 44 px" vale mais que "botão pequeno".

## Referências desta skill

| Arquivo | Leia quando |
| --- | --- |
| `references/liquid-glass.md` | Sempre que houver vidro, blur, barra translúcida. Regras completas da Apple, variantes, receitas CSS (regular, clear, tinted, borda de rolagem, tom adaptativo, refração SVG avançada), performance |
| `references/tipografia.md` | Ao definir fontes, tamanhos, pesos, tracking; escala iOS e macOS convertida para web; licença da SF |
| `references/tokens-e-cores.md` | Ao definir paleta, modo escuro, accent da marca, porte para Tailwind |
| `references/componentes.md` | Ao criar barra, tab bar, toolbar, botões, segmented, toggle, busca, sheet, menu, cards, listas |
| `references/acessibilidade-layout-motion.md` | Contraste, alvos, safe areas, breakpoints, espaçamento, animação e mola |
| `references/checklist-auditoria.md` | Antes de entregar; e para auditar projeto existente |
| `assets/apple-glass.css` | Base pronta para copiar |
| `assets/glass-adaptive.js` | Barra que troca de tom sobre seções escuras/claras |
| `assets/exemplo.html` | Página de demonstração com todos os componentes |
| `scripts/audit_glass.sh` | Varredura rápida de um projeto web |
| `references/apple-oficial.md` | Resumo fiel de *Adopting Liquid Glass*, *Liquid Glass* e HIG *Materials*; citar a Apple |
| `references/anatomia-do-vidro.md` | As sete camadas do material e a leitura das 5 referências visuais |
| `references/receitas-avancadas.md` | Lente/refração, borda especular, modal fumê, seletor, toggle, morph, tab bar que encolhe, background extension, orçamento de performance |
| `references/softwares-nativos.md` | SwiftUI, UIKit, AppKit, Electron, Tauri, Flutter, React Native, WinUI |
| `references/video-3d-e-prompts.md` | Prompts de imagem/vídeo, Three.js, Blender, After Effects/Remotion/CapCut, movimento e som |
| `assets/liquid-glass-pro.css` | Camada avançada (carregar depois de `apple-glass.css`) |
| `assets/liquid-glass-lens.js` | Refração real e brilho especular dinâmico |
| `assets/demo-referencias.html` | As 5 referências recriadas em HTML/CSS (abra no Chrome) |
| `assets/referencias/` | As 5 imagens de referência originais |

Se a skill `apple-design` estiver instalada, as páginas originais da Apple estão em
`apple-design/references/hig/` (ex.: `materials.md`, `color.md`, `typography.md`, `buttons.md`,
`tab-bars.md`, `toolbars.md`). Abra-as quando precisar citar a Apple literalmente.
