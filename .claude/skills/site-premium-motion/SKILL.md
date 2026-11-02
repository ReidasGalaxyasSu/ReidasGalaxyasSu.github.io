---
name: site-premium-motion
description: Skill unificada para criar, redesenhar, revisar e animar sites, landing pages, páginas de vendas e portfólios com acabamento de agência - direção de arte anti-genérico (taste-skill), crítica e polimento de UI (impeccable), motion e scroll com GSAP e ScrollTrigger (skills oficiais GreenSock), microtransições prontas (transitions.dev), componentes animados React (React Bits), extração de design tokens de sites de referência (designlang) e checklist de SEO e performance. Use SEMPRE que pedirem para fazer, refazer, revisar, auditar, melhorar ou deixar mais bonito, premium, moderno ou menos quadrado um site, landing page, página de vendas, portfólio ou hero; para adicionar animação, motion, transições, scroll animado, parallax ou microinterações; ou quando disserem que o site está genérico, quadrado, sem vida, com cara de template ou de IA. Para a GPC Software Solutions, use junto com a skill gpc-visual-identity, que sempre vence em conflito de marca.
license: Compilação pessoal. Fontes - taste-skill (MIT), impeccable (Apache-2.0), gsap-skills (MIT), transitions.dev (licença própria, sem redistribuição da coleção), React Bits (MIT + Commons Clause), design-extract (MIT). Ver LICENSES.md.
metadata:
  version: 1.0.0
  compiled: 2026-11-02
  sources: Leonxlnx/taste-skill, pbakaus/impeccable, greensock/gsap-skills, Jakubantalik/transitions.dev, DavidHDev/react-bits, Manavarya09/design-extract
---

# Site Premium + Motion

Esta skill junta seis skills de design e motion em um único fluxo para sair do site "quadrado" e
chegar a um site com ideia, hierarquia, ritmo e movimento autoral, sem perder conversão, SEO,
acessibilidade e desempenho.

| Fonte | O que traz para cá | Onde está o detalhe |
| --- | --- | --- |
| **taste-skill** (Leonxlnx) | Direção de arte anti-"cara de IA": inventário do assunto, ideia, argumento, regras da casa, rubrica de jurado Awwwards, receitas de motion | `references/direcao-de-arte.md`, `references/revisao-e-critica.md`, `fontes/taste-skill/` |
| **impeccable** (pbakaus) | Modos de superfície, piso de acabamento (craft floor), crítica com heurísticas de Nielsen, auditoria técnica, polish, bolder, delight | `references/revisao-e-critica.md`, `fontes/impeccable/` |
| **gsap-skills** (GreenSock oficial) | Tweens, timelines, ScrollTrigger, SplitText, Flip, matchMedia, React `useGSAP`, performance | `references/motion.md` §5, `fontes/gsap/` |
| **transitions.dev** (Jakub Antalik) | 35 transições de UI em CSS prontas (dropdown, modal, accordion, tabs, toast, texto, contador…) e tokens de motion | `references/transicoes-ui.md`, `fontes/transitions-dev/` |
| **React Bits** (David Haz) | 218 componentes animados React (texto, scroll, cards, galerias, fundos WebGL) | `references/react-bits.md`, `references/catalogo-react-bits.md` |
| **design-extract** (designlang) | Extrai cores, tipos, espaçamentos, sombras e animações de qualquer URL de referência | `references/extrair-design.md` |

Para a **GPC Software Solutions** leia também `references/gpc.md` (tradução da marca em tokens,
motion e estrutura de site + página de vendas + portfólio).

## Ordem de autoridade (quando as regras brigarem)

1. **O pedido explícito do usuário e a identidade de marca** (para a GPC: skill `gpc-visual-identity`).
   A marca vence qualquer regra de gosto desta skill. Se uma melhoria exigir quebrar a marca,
   explique o conflito e peça confirmação; nunca mude a identidade em silêncio.
2. **Acessibilidade, desempenho e SEO**: contraste AA, teclado, `prefers-reduced-motion`, Core Web
   Vitals, conteúdo visível no primeiro frame. Nenhuma animação justifica perder isso.
3. **As regras da casa e as leis do ofício** abaixo.
4. Seu gosto pessoal por último.

## Escolha o modo de trabalho

- **A. Revisão** ("revisa", "o que está ruim", "audita"): só diagnóstico. Siga os passos 1–2 e entregue
  o relatório de `references/revisao-e-critica.md` com as três mudanças de maior impacto. Não edite.
- **B. Redesign** ("refaz", "está quadrado", "quero algo muito melhor"): o fluxo completo, 1–8.
- **C. Camada de motion** num site que já está bom parado: passos 1, 2, 6, 7 e 8.
- **D. Componente ou seção isolada**: respeite o sistema existente, aplique regras da casa, passos 5–8.

Antes de começar, classifique cada superfície pelo modo do visitante (impeccable):
**Persuadir** (landing, vendas, preços: ousadia com conversão), **Experiência** (portfólio, cases:
o trabalho lidera), **Operar** (painéis, formulários longos: precisão e contenção) ou **Ler**
(blog, docs: estrutura para compreensão). Site institucional + página de vendas = Persuadir;
portfólio = Experiência.

## O fluxo

### 1. Ler o projeto, a marca e o assunto
Descubra o que é real: stack (HTML puro, React/Next, Vite, Astro…), marca (cores, fontes, logo),
conteúdo existente, imagens e vídeos reais, a ação principal que a página precisa provocar.
Faça um **inventário do assunto** com 8–12 itens que pertencem só a este cliente (nome e o que
significa, processo, produtos reais, números confirmados, rituais, materiais, artefatos do seu mundo).
É daí que sai a ideia do passo 4. Nunca invente clientes, depoimentos, números, preços ou logos.

### 2. Registrar o "antes" e criticar
Abra o site atual e capture telas em **1440, 768 e 390 px** (Playwright/Chromium ou a ferramenta de
screenshot disponível). Critique as imagens, não o código, com os 14 passes e a nota ponderada de
`references/revisao-e-critica.md` (design 40%, usabilidade 30%, criatividade 20%, conteúdo 10%),
mais a auditoria técnica (acessibilidade, desempenho, tema, responsivo). No modo A, pare aqui.
Se o usuário der sites de referência, extraia os tokens deles (`references/extrair-design.md`) como
evidência, nunca para copiar.

### 3. Escrever o argumento e as palavras
Liste a página como **afirmações com prova**, uma linha por seção; seção sem afirmação sai. Escreva
o texto inteiro antes do markup: título de até 2 linhas em qualquer largura (~32 caracteres), uma
frase de apoio logo abaixo dizendo o que é, um CTA nomeado pela ação. Conteúdo completo em cada
seção; prova nunca inventada.

### 4. Encontrar a ideia e a direção
Preencha a frase, a partir do inventário: **"Neste site, [algo que pertence ao assunto] vira
[o dispositivo de composição]."** Teste do concorrente: troque pelo nome do concorrente; se a frase
continuar valendo, a ideia é da categoria, refaça. Defina **uma coisa viva** (algo que o visitante
faz: um simulador, um configurador, uma prévia) com fallback sem JS. Escolha **um movimento
assinatura** que nasça da ideia (`references/motion.md` §4). Detalhes em `references/direcao-de-arte.md`.

### 5. Construir parado
Primeiro sem animação: uma página que precisa de motion para parecer pronta não está pronta.
Ordem: tokens (CSS custom properties) → hero exatamente como planejado em desktop e celular →
cada seção com composição diferente da vizinha → imagens reais (produto, interface real recortada,
fotos do mundo do cliente; desenho em código só para o que não tem foto) → a coisa viva →
moldura (margens iguais, nada amontoado num lado, nenhum vazio maior que meia tela) → estados
e semântica (um `h1`, título em toda seção, foco visível, alt, teclado).

### 6. Camada de motion
O orçamento de motion de uma página Persuadir:
1. **Um movimento assinatura**, bem feito (o único que pode ser "alto").
2. **Até 2–3 cenas de scroll** onde a página é ousada (pinned story, janela que abre para tela cheia,
   galeria lateral, folha sobre imagem fixa), com uma seção calma entre elas.
3. **Entradas coreografadas por seção**: título → texto → imagem, stagger 60–90 ms, subida 12–32 px
   ou máscara de linha, uma vez só, disparo com o topo a 85–90% da viewport. Varie o jeito conforme
   o conteúdo; nunca o mesmo fade-up em todos os blocos.
4. **Feedback em todo controle**: press, hover (atrás de `(hover: hover)`), foco.
5. **Uma imagem em movimento**: vídeo mudo em loop com poster, drift/scale lento, ou parallax < 8%.

Escolha a ferramenta pela tabela "Qual ferramenta" abaixo. Receitas e tokens em `references/motion.md`;
microtransições de UI em `references/transicoes-ui.md`; componentes React em `references/react-bits.md`.

### 7. Polish e endurecimento
Estados (hover, foco, ativo, desabilitado, carregando, erro, vazio, sucesso), superfícies do navegador
(seleção de texto, caret, scrollbar, anel de foco, `text-underline-offset`, numerais tabulares) com as
cores da marca, textos longos, celular com o polegar, `prefers-reduced-motion` com estado final
completo. Checklist em `references/revisao-e-critica.md` §4.

### 8. Verificar e reportar
Novas capturas em 1440/768/390 + uma com `prefers-reduced-motion: reduce`; abra todas e procure
conteúdo que não apareceu, sobreposição em título, rolagem horizontal. Rode Lighthouse se disponível
(LCP ≤ 2,5 s, CLS ≤ 0,1, INP ≤ 200 ms) e o checklist de `references/seo-performance.md`. Reporte:
ideia, movimento assinatura, coisa viva, notas antes → depois, o que ainda falta, conteúdo de
exemplo que precisa ser trocado, e nunca diga que rodou uma verificação que não rodou.

## Regras da casa (todo build)

| Regra | Em vez disso |
| --- | --- |
| Títulos em no máximo 2 linhas em qualquer largura; um `h1` claro na primeira tela; título em toda seção | Corte palavras, depois alargue a medida, por último reduza o tamanho |
| Margens externas iguais; nenhuma seção com texto numa metade e a outra vazia | Feche o vazio com imagem, segunda coluna, lista ou figura |
| Sem "eyebrow" (rótulo pequeno em caixa-alta acima de todo título), sem badge-pílula acima do hero | Coloque a informação no título ou na primeira frase |
| Sem cards idênticos com ícone + título + texto como estrutura da página; nunca cards dentro de cards | Composições distintas por seção: lista, índice, split, full-bleed, statement |
| Sem gradiente decorativo de fundo, em botão ou em texto | Cor chapada, foto real, ou a luz/metal oficial da marca com função |
| Sem sombra em coisa parada, sem glow | Degrau de tom entre superfícies; sombra só no que flutua (menu, diálogo) |
| Sem paleta "de assistente" (violeta/índigo, creme com terracota) por padrão | A paleta da marca |
| Sem emoji como ícone, blobs, formas decorativas, dashboards falsos de barras cinza | Imagem real, fragmento real de interface, ou nada |
| Sem palavra de destaque estilizada no título (itálico/serifa/cor diferente) | Peso e escala carregam a ênfase |
| No máximo duas famílias tipográficas | As fontes da marca |
| Texto corrido na tinta cheia, ≥ 16 px; cinza só para nota secundária | — |
| Nada animado esconde conteúdo se o JS falhar; nada passa por cima de texto sendo lido | Estados ocultos só sob `html.js` e `prefers-reduced-motion: no-preference` |

Exceções legítimas: código real em `<pre>/<code>` (monospace), tabelas e campos de formulário (linhas),
fragmentos reais de interface marcados com `data-ui`, e **elementos de marca** (para a GPC: DejaVu Sans
Mono em dados/metadados/etapas, molduras hexagonais abertas e órbitas finas, vidro fumê e prata
metálica com função; ver `references/gpc.md`).

## Leis do ofício (resumo)

- **Tipo**: 2–3 tamanhos fazem o trabalho visível (um muito grande, um pequeno); razão título/corpo
  ≥ 3×; display com tracking −0,02 a −0,04em e entrelinha 0,9–1,05; corpo 16–20 px, 1,45–1,6,
  45–75 caracteres por linha; alinhado à esquerda por padrão.
- **Espaço**: um grid, um par de margens (16–32 px no celular), 2–3 bordas esquerdas na página toda;
  espaço entre seções (120–240 px no desktop) claramente maior que dentro delas; mais espaço acima
  de um título do que abaixo.
- **Cor**: um fundo, uma tinta, um acento; o acento aparece na ação e em mais uma coisa no máximo;
  uma seção pode trocar o campo de cor inteiro (corte seco, sem degradê).
- **Imagem**: uma imagem dominante vence seis pequenas; mesmas proporções e tratamento; nada sobre
  título; mínimo de 4 imagens reais numa página Persuadir (para software, recortes reais da interface
  contam).
- **Componentes**: botões chapados, cantos decididos uma vez (retos ou totalmente redondos; o raio
  "macio" de 9–16 px é o padrão das páginas fracas); nav = marca + 3–5 links + uma ação; rodapé é um
  fechamento desenhado, não um mapa do site.

## Qual ferramenta

| Necessidade | Use | Por quê |
| --- | --- | --- |
| Hover, press, foco, troca de cor | CSS `transition` com tokens | Barato, sem JS |
| Dropdown, modal, accordion, tabs, toast, tooltip, contador, troca de texto/ícone, check de sucesso, skeleton | **transitions.dev** (snippet exato do arquivo) | Testado, com reduced-motion embutido |
| Entrada de seção (uma vez), máscara de linha, image shutter | CSS + `IntersectionObserver` (receitas em `motion.md`) ou `ScrollTrigger.batch` | Leve; GSAP se já estiver no projeto |
| Sequência do hero, coreografia com várias etapas, SVG desenhando (molduras, órbitas) | **GSAP timeline** (+ DrawSVG/SplitText) | Controle de tempo, interrupção, reverso |
| Cena presa ao scroll (pin, scrub, galeria lateral, janela que abre) | **GSAP ScrollTrigger** (`pin`, `scrub`) | Padrão dos sites premiados |
| Parallax leve / progresso sem JS | CSS `animation-timeline: view()` dentro de `@supports` | Zero JS, travado à barra de rolagem |
| Navegação entre páginas com continuidade | View Transitions API (≤ 480 ms) | Nativo |
| Texto animado, galerias, cards especiais, fundos WebGL em React/Next | **React Bits** (`npx shadcn add @react-bits/<Nome>-TS-TW`) | Pronto; checar dependências e custo |
| Site sem React querendo um efeito do React Bits | Leia o JSON do registro e porte para CSS/GSAP | Mesmo efeito sem framework |

Não adicione biblioteca para um efeito que a stack atual já faz bem. Prefira uma biblioteca de
animação principal por projeto (GSAP *ou* Motion); se um componente do React Bits trouxer a outra,
tudo bem, mas nunca as duas animando o mesmo elemento.

## Tokens de motion unificados

Prontos em `assets/motion-tokens.css`. Resumo:

```css
:root {
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);      /* entradas e UI < 600 ms (= transitions.dev --ease-smooth-out) */
  --ease-expo: cubic-bezier(0.16, 1, 0.3, 1);      /* revelações ≥ 800 ms, linhas, aberturas */
  --ease-in-out: cubic-bezier(0.76, 0, 0.24, 1);   /* wipes, painéis, coisas que viajam visíveis */
  --ease-exit: cubic-bezier(0.55, 0.055, 0.675, 0.19); /* saída definitiva, curta */
  --t-press: 140ms; --t-hover: 180ms; --t-ui: 240ms; --t-reveal: 800ms; --t-open: 1200ms;
  --stagger-line: 90ms; --stagger-item: 70ms;
}
```

GSAP equivalente: `expo.out` ≈ `--ease-expo`, `power4.out`/`quint.out` ≈ `--ease-out`,
`power3.inOut`/`quart.inOut` ≈ `--ease-in-out`. Saída ≈ 60–70% da entrada. Nada de bounce/elastic em
interface. Scroll-linked = `ease: "none"`/linear.

## O que denuncia site genérico ou "feito por IA"

Hero centralizado com rótulo acima e três linhas; fileira de cards com ícone; gradiente suave de
fundo; mesmo fade-up em todos os blocos; dúzia de entradas escalonadas no hero; hover que levanta
todo card; preloader com contador; cursor customizado; texto que "digita" ou embaralha; loops sem
sentido (pontos pulsando, formas flutuando, texto brilhando sem parar); scroll sequestrado; conteúdo
que fica em `opacity: 0` porque a revelação não disparou.

## Arquivos

| Arquivo | Leia quando |
| --- | --- |
| `references/gpc.md` | Qualquer trabalho da GPC Software Solutions (sempre junto com `gpc-visual-identity`) |
| `references/revisao-e-critica.md` | Passo 2 e passo 8: como olhar, nota, limites, auditoria técnica, polish, formato do relatório |
| `references/direcao-de-arte.md` | Passos 1, 3, 4, 5: inventário, argumento, ideia, copy, imagens, moldura, redesign de site existente |
| `references/motion.md` | Passo 6: orçamento, regras, receitas CSS, movimentos assinatura, GSAP, React, reduced motion, performance |
| `references/transicoes-ui.md` | Microinterações de UI: regras de decisão e índice dos 35 snippets em `fontes/transitions-dev/` |
| `references/react-bits.md` | Projeto React/Next: curadoria por uso e encaixe na marca; catálogo completo em `references/catalogo-react-bits.md` |
| `references/seo-performance.md` | Antes de entregar: SEO técnico, Core Web Vitals, motion sem prejudicar LCP/CLS |
| `references/extrair-design.md` | O usuário deu sites de referência ou quer os tokens de um site |
| `assets/motion-tokens.css` · `assets/motion-base.js` | Base pronta: tokens, reveal, máscara de linha, shutter, reduced motion, GSAP opcional |
| `fontes/` | Textos originais completos das seis fontes, para aprofundar um ponto específico |
