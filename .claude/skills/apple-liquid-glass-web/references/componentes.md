# Componentes estilo Apple para web

Fontes: HIG › Buttons, Tab bars, Toolbars, Sidebars, Sheets, Search fields, Segmented controls,
Toggles, Menus, Lists and tables, Layout (2025–2026). As classes citadas existem em
`assets/apple-glass.css`.

Sumário: Barra de navegação · Tab bar · Toolbar flutuante · Botões · Botão de ícone · Segmented
control · Toggle · Campo de busca · Sheet/modal · Menu/popover · Cards · Listas agrupadas ·
Sidebar (desktop) · Rodapé

---

## Barra de navegação (topo)

**Regras**: mostra onde a pessoa está (título curto) e ações da tela atual; fica fina; vidro regular;
o conteúdo rola por baixo; sem fundo sólido; borda de rolagem em vez de linha/sombra pesada.

```html
<header class="navbar glass scroll-edge" data-glass-adaptive>
  <a class="navbar__brand" href="/">Marca</a>
  <nav class="navbar__links" aria-label="Principal">
    <a href="#produtos" aria-current="page">Produtos</a>
    <a href="#sobre">Sobre</a>
    <a href="#contato">Contato</a>
  </nav>
  <a class="btn btn--prominent btn--sm" href="#comprar">Comprar</a>
</header>
```

- Em telas largas, a barra pode ser uma **cápsula flutuante** (`.navbar--floating`): margem de
  12 px do topo, largura limitada, raio total — é a cara do Liquid Glass.
- Links: `--label`, peso 500, 15 px; ativo com `aria-current="page"` (peso 600 ou indicador sutil).
- Altura: 44–52 px (sem contar `env(safe-area-inset-top)`).
- No mobile, troque os links por **tab bar** (preferível) ou um botão de menu que abre um sheet.

## Tab bar (mobile)

**Regras da Apple**: navega, não executa ações; poucas abas (3–5); nunca esconder ou desabilitar
aba; rótulos de uma palavra; ícones preenchidos preferidos; sempre visível; aba ativa no accent;
evite cor de rótulo parecida com o fundo do conteúdo. No iOS 26 ela flutua em cápsula de vidro
acima do conteúdo.

```html
<nav class="tabbar glass" aria-label="Seções" data-glass-adaptive>
  <a class="tabbar__item" href="/" aria-current="page"><svg aria-hidden="true">…</svg><span>Início</span></a>
  <a class="tabbar__item" href="/buscar"><svg aria-hidden="true">…</svg><span>Buscar</span></a>
  <a class="tabbar__item" href="/pedidos"><svg aria-hidden="true">…</svg><span>Pedidos</span></a>
  <a class="tabbar__item" href="/perfil"><svg aria-hidden="true">…</svg><span>Perfil</span></a>
</nav>
```

- Cada item ≥ 44 px de altura; ícone 24–28 px; rótulo 11 px peso 500–600 (mínimo da Apple).
- `bottom: calc(12px + env(safe-area-inset-bottom))`; reserve espaço no fim da página
  (`padding-bottom` do `main`) para nada ficar escondido sob a barra.
- Esconda em desktop (`@media (min-width: 900px)`) e use navbar/sidebar.
- Busca importante pode ser uma aba própria ou campo na parte de baixo.

## Toolbar flutuante

Para **ações** da tela atual (filtrar, compartilhar, editar). Cápsula de vidro com botões de ícone;
a ação principal ("Concluir") pode ser `btn--prominent`. Itens em excesso vão num menu "Mais" (•••).
Toolbars ficam monocromáticas sobre conteúdo colorido.

## Botões

**Regras**: alvo ≥ 44 × 44 px; espaço em volta; **um ou dois** proeminentes por tela; diferencie a
opção preferida por **estilo, não por tamanho**; rótulo curto começando com verbo; texto quando
comunica melhor que ícone.

| Classe | Aparência | Use para |
| --- | --- | --- |
| `.btn--prominent` | fundo accent, texto branco, semibold | a ação mais provável da tela (1–2 por tela) |
| `.btn--glass` | vidro regular, texto `--label` | ações secundárias sobre conteúdo rico / em barras |
| `.btn--gray` | `--fill`, texto accent | secundárias sobre fundo liso |
| `.btn--plain` | só texto accent | terciárias, "Cancelar", links de ação |
| `.btn--destructive` | texto ou fundo vermelho do sistema | excluir, sair — com confirmação + Cancelar |
| `.btn--sm` | 34 px de altura | só desktop/apontador ou barras densas; o alvo de toque deve continuar 44 px (use padding/área invisível) |
| `.btn--lg` | 52–56 px, largura total no mobile | CTA principal de página/formulário |

- Forma: **cápsula** (`border-radius: 999px`). Botões grandes de largura total podem usar raio
  14–16 px; dentro de um card, raio concêntrico.
- Fonte: 17 px semibold (15 px em `--sm`).
- Estados: `:hover` (desktop) clareia/escurece ~6%; `:active` escala 0.96–0.97; `:focus-visible`
  com anel de 3 px no accent a 50%; `[disabled]` 40% de opacidade.
- Rótulos: "Agendar visita", "Adicionar ao carrinho", "Salvar alterações". Evite "Enviar", "OK",
  "Clique aqui". A ação mantém o nome no fluxo: botão "Publicar" → aviso "Publicado".

## Botão de ícone

Circular, 44 × 44 px, vidro ou `--fill`. **Sempre** `aria-label`. Ícone 20–22 px, peso de traço
casando com o texto.

## Segmented control

Alterna visões *do mesmo conteúdo* (Dia / Semana / Mês). 2–5 segmentos, rótulos curtos e de
tamanho parecido. Trilho `--fill-secondary`, segmento ativo em `--bg-elevated` com sombra leve
(no escuro, `gray3`). Use `role="tablist"`/`tab` ou radio buttons por baixo.

## Toggle (switch)

51 × 31 px, trilho `--fill` → verde do sistema (`#34C759`) quando ligado, bolinha branca 27 px com
sombra. Implemente com `<input type="checkbox" role="switch">` para acessibilidade. Toggle muda
algo **imediatamente**; não use dentro de formulário que exige "Salvar".

## Campo de busca

Altura 36–44 px, raio total (cápsula) ou 10–12 px, fundo `--fill-secondary`, ícone de lupa à
esquerda em `--label-secondary`, placeholder "Buscar", botão limpar (×) quando há texto.
`<input type="search">` com `aria-label`. Em mobile, pode ficar na parte de baixo, perto do polegar.

## Sheet / modal

- Um por vez. Tarefa curta e focada. Saída óbvia ("Cancelar"/"Fechar") além da ação principal.
- No mobile, sobe de baixo, cantos superiores 28–34 px, **alça** (36 × 5 px, `--fill`) se puder
  arrastar; deixa um pedaço da página visível por trás (escurecida 20–40%).
- No desktop, centralizado, raio 22–28 px, largura 480–640 px.
- Fundo: vidro regular **ou** `--bg-elevated`. Conteúdo com muito texto → mais opaco.
- Use `<dialog>` com `showModal()` (foco preso e `Esc` grátis). `::backdrop` com
  `rgba(0,0,0,.3)`.

## Menu / popover

Vidro regular, raio 14–16 px, itens de 44 px (mobile) / 28–32 px (desktop), separadores
`--separator`, ícone opcional à direita (padrão Apple) ou esquerda, item destrutivo em vermelho
por último. Abre com leve escala (0.95 → 1) a partir do botão que o abriu.

## Cards (camada de conteúdo — sem vidro)

```css
.card { background: var(--bg-secondary); border-radius: var(--radius-xl); padding: 24px; }
```

- Em fundo branco, card em `--bg-secondary` (`#F2F2F7`), sem borda nem sombra — é o visual de
  apple.com. Em fundo `--bg-grouped`, card branco.
- Imagem do card com cantos concêntricos.
- Hierarquia: eyebrow 12–13 px semibold (accent ou secundário) só se disser algo verdadeiro →
  título 20–28 px bold → texto 15–17 px secundário → link/ação.

## Listas agrupadas (estilo Ajustes)

Grupo com raio 12–16 px em `--bg-tertiary`, linhas de 44 px+ com padding horizontal 16 px,
separador de 0.5–1 px **recuado** a partir do texto (não de ponta a ponta), chevron `›` em
`--label-tertiary` à direita para navegação, título do grupo 13 px em caixa normal acima.

## Sidebar (desktop / app web)

Até dois níveis; pode ser escondida; nada crítico no rodapé dela; vidro regular mais opaco
(sidebars são superfícies grandes) ou `--bg-secondary`; o conteúdo rico pode se estender por baixo
dela. Item ativo com fundo `--fill` e raio 8–10 px.

## Rodapé

Conteúdo, não controle: sem vidro. Fundo `--bg-secondary`, texto 12–13 px em
`--label-secondary-strong`, links em colunas, separador fino no topo.
