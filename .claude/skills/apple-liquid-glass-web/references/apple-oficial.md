# Documentação oficial da Apple sobre Liquid Glass (resumo fiel)

Fontes lidas na íntegra em 2026-11-06:
- *Adopting Liquid Glass* — developer.apple.com/documentation/technologyoverviews/adopting-liquid-glass
- *Liquid Glass* (visão geral) — developer.apple.com/documentation/technologyoverviews/liquid-glass
- *Materials* (HIG, atualizada em 9 set. 2025) — developer.apple.com/design/human-interface-guidelines/materials

Não lidos: os vídeos da WWDC25 (sessões 219 "Meet Liquid Glass", 356 "Get to know the new design
system", 323 SwiftUI, 284 UIKit, 310 AppKit) e o app de exemplo Landmarks. Frases entre aspas são
citações da Apple; o resto é tradução fiel.

## 1. O que é

- "Um material dinâmico que combina as propriedades ópticas do vidro com uma sensação de fluidez."
- Forma "uma camada funcional distinta para controles e elementos de navegação", que "flutua acima
  da camada de conteúdo" e deixa o conteúdo "rolar e aparecer por baixo".
- Objetivo: "estabelecer hierarquia, criar harmonia e manter consistência entre dispositivos".
- A Apple **não publica o modelo óptico** em texto (nem números de blur, refração ou brilho). As
  imagens falam em "efeito de lente" (lensing). O único número oficial é a camada de escurecimento
  de **35%** sob o vidro clear sobre conteúdo claro. Tudo o mais nesta skill é engenharia prática.
- Componentes padrão do SwiftUI, UIKit e AppKit ganham o material sozinhos ao compilar com o SDK
  novo; não é preciso reescrever o app. Para manter o visual antigo existe a chave
  `UIDesignRequiresCompatibility` no Info.plist.

## 2. Materiais: dois tipos, duas camadas

| | Liquid Glass | Materiais padrão |
| --- | --- | --- |
| Camada | controles e navegação (camada funcional) | conteúdo (fundos, áreas do app) |
| Função | flutuar sobre o conteúdo, deixar ver por baixo | dar estrutura e distinção dentro do conteúdo |
| Variantes | **Regular** (desfoca e ajusta a luminosidade; padrão; onde há muito texto: alertas, sidebars, popovers) · **Clear** ("altamente translúcido"; só sobre mídia visualmente rica) | ultra-thin, thin, regular (padrão), thick |

Regras:
- **"Não use Liquid Glass na camada de conteúdo."** Exceção: controles de interação passageira
  (slider, toggle) viram vidro **enquanto ativados** ("o botão deslizante se transforma em Liquid
  Glass durante a interação").
- **Use com moderação**: em controles próprios, só nos elementos funcionais mais importantes.
- **Clear sobre conteúdo claro → camada escura de 35%**; desnecessária sobre conteúdo escuro.
- Materiais padrão: escolha pelo **significado**, não pela cor; use cores *vibrant* por cima;
  materiais mais grossos = mais contraste para texto fino; não use rótulo quaternário sobre thin e
  ultra-thin.
- visionOS: janelas usam o vidro do sistema, que não é modificável; prefira translucidez a cores
  opacas.

## 3. Refresh visual

- Prefira os frameworks do sistema: barras, sheets, popovers e controles adotam o material e se
  adaptam a sobreposição e foco.
- **Reduza fundos personalizados** em controles e navegação: eles "podem se sobrepor ou interferir
  no Liquid Glass ou em outros efeitos, como o efeito de borda de rolagem". "Prefira remover efeitos
  próprios e deixar o sistema decidir a aparência do fundo."
- **Teste com as configurações de tela e acessibilidade**: as pessoas escolhem a aparência do
  Liquid Glass nos Ajustes e podem **reduzir transparência ou movimento**. Teste elementos, cores e
  animações próprios nessas configurações.
- APIs de vidro próprio: SwiftUI `glassEffect(_:in:)`, UIKit `UIGlassEffect`, AppKit
  `NSGlassEffectView`. Para várias formas: `GlassEffectContainer` (otimiza desempenho e permite que
  formas de vidro "se fundam umas nas outras" — o *morph*).

## 4. Ícones de app

- Dinâmicos, com aparências padrão (clara), escura, **clear** e **tinted**.
- Desenhe em **camadas** (frente, meio, fundo); o sistema adiciona reflexo, refração, sombra, blur e
  brilho. Formas "sólidas, preenchidas, semitransparentes sobrepostas". **Não "asse" efeitos** de
  vidro na arte. Monte no **Icon Composer**. Centralize para não cortar na máscara (retângulo
  arredondado; círculo no watchOS).

## 5. Controles

- Ganham vida na interação: knob de slider/toggle vira vidro; **botões se transformam em menus e
  popovers** (morph a partir da origem). Formas mais arredondadas para encaixar nos cantos da janela.
  Novo tamanho extra grande.
- Não fixe métricas no código: deixe os controles padrão definirem forma e tamanho.
- **Cor com parcimônia**, cores do sistema; cores próprias com variante clara, escura e de
  **contraste aumentado**.
- **Evite aglomeração**: espaçamento padrão; **não empilhe vidro sobre vidro**.
- **Legibilidade sob conteúdo que rola**: use o *scroll edge effect* (borda que desfoca/esmaece o
  conteúdo sob a barra). Barras próprias: `safeAreaBar(edge:…)` / `UIScrollEdgeElementContainerInteraction`;
  estilo com `scrollEdgeEffectStyle(_:for:)`.
- **Formas concêntricas** em controles, sheets, popovers e janelas: `ConcentricRectangle`,
  `Shape.rect(corners:isUniform:)`, `UICornerConfiguration`. (Raio interno = raio externo − espaçamento.)
- **Estilos de botão novos** em vez de vidro feito à mão: SwiftUI `.glass`, `.glassProminent`,
  `.glass(_:)`; UIKit `UIButton.Configuration.glass()`, `prominentGlass()`, `clearGlass()`,
  `prominentClearGlass()`; AppKit `NSButton.BezelStyle.glass`.

## 6. Navegação

- O vidro vive na camada de cima; tab bars e sidebars flutuam nela "para ajudar as pessoas a focar
  no conteúdo por baixo". Navegação **distinta** do conteúdo.
- Tab bar que vira sidebar (`sidebarAdaptable` / `.tabSidebar`); split views para sidebar e inspector.
- **Estenda o conteúdo por baixo** de sidebars e inspectors: *background extension effect*
  (`backgroundExtensionEffect()`, `UIBackgroundExtensionView`, `NSBackgroundExtensionView`) espelha e
  desfoca o conteúdo vizinho — ideal para imagens hero de ponta a ponta.
- iOS: **tab bar que encolhe ao rolar para baixo** e volta ao rolar para cima
  (`tabBarMinimizeBehavior(.onScrollDown)`).

## 7. Menus e toolbars

- Menus em vidro; ações comuns com **ícones padrão** (recortar, copiar, colar).
- Primeiras ações do menu de contexto = ações de swipe do mesmo item.
- **Agrupe itens da toolbar** por função; separe grupos que dividem um fundo com espaçador
  (`ToolbarSpacer`, `fixedSpace`). **Não misture texto e ícone** em itens que dividem o mesmo fundo.
- **Rótulo de acessibilidade em todo ícone.** Esconda o item inteiro, não a view dentro dele.

## 8. Janelas, sheets e popovers

- Janelas com cantos mais redondos; tamanhos arbitrários; split views para colunas fluidas.
- Sheets com **raio maior**; meia-sheet com margem da borda (o conteúdo aparece em volta); ao
  expandir para altura total, **fica mais opaca**.
- Confira o conteúdo perto dos cantos (dentro) e o que aparece em volta (fora).
- **Remova fundos próprios** de popovers e sheets.
- Action sheet **nasce do elemento que a disparou** (defina a origem).

## 9. Organização, layout e busca

- Listas, tabelas e formulários com linhas mais altas e mais padding; seções com raio maior.
- Cabeçalhos de seção em **capitalização de título**, não mais tudo em maiúsculas.
- Estilo de formulário agrupado.
- Busca: no iOS o campo sobe com o teclado; aba de busca semântica separada, no fim da tab bar
  (`Tab(role: .search)`).

## 10. Plataformas, desempenho e teste

- tvOS: controles viram vidro **quando focados** (Apple TV 4K 2ª geração em diante).
- watchOS: mudanças mínimas; não remova os fundos de material das sheets.
- **Desempenho**: agrupe vidros próprios num `GlassEffectContainer`; faça profiling regularmente.
- Princípios: layout que foca o conteúdo importante; ícones em camadas simples e fortes; cor
  criteriosa em controles e navegação; elementos que combinam com o hardware; iconografia padrão e
  ações em lugares previsíveis.

## Como isso vira regra nesta skill

| Apple | Na web / vídeo |
| --- | --- |
| Camada funcional × conteúdo | vidro só em barras, menus, sheets, botões flutuantes; conteúdo com fundos sólidos ("materiais padrão") |
| Regular × Clear + 35% | `.glass` × `.glass--clear` + `.glass-dim` |
| Lensing / refração | `liquid-glass-lens.js` (Chromium) e materiais físicos em 3D/vídeo |
| Knob vira vidro durante a interação | `.lg-switch` / slider: vidro só em `:active`/arraste |
| Botão se transforma em menu | View Transitions / FLIP a partir da origem (`receitas-avancadas.md` §6) |
| Formas concêntricas | `--r-inner: calc(var(--r-outer) - var(--pad))` |
| Scroll edge effect | `.scroll-edge` |
| Background extension | imagem hero espelhada e desfocada sob a sidebar (`receitas-avancadas.md` §8) |
| Tab bar minimiza ao rolar | `.tabbar.is-minimized` com JS de direção de rolagem |
| Reduzir transparência/movimento, contraste aumentado | `prefers-reduced-transparency`, `prefers-reduced-motion`, `prefers-contrast: more` |
| Não "assar" efeitos em ícones | ícones em camadas planas; vidro aplicado pelo sistema/CSS, não pintado na arte |
