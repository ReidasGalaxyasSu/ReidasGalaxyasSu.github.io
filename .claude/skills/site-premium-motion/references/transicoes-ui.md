# Microtransições de UI (transitions.dev)

35 transições CSS portáteis, com seletores `t-*`, variáveis semânticas e guarda de
`prefers-reduced-motion` em cada snippet. Os arquivos completos estão em `fontes/transitions-dev/`
(`NN-nome.md` + `_root.css`). Licença: uso livre em projetos pessoais e comerciais; não redistribuir a
coleção como biblioteca concorrente.

## Regras de decisão (combine pelo elemento visível, depois pelo verbo)

| Situação na interface | Transição | Arquivo |
| --- | --- | --- |
| Gatilho + pontinho flutuando por cima | Notification badge | `03-notification-badge.md` |
| Superfície que cresce a partir do gatilho, ancorada | Menu dropdown | `05-menu-dropdown.md` |
| Superfície centralizada, sem âncora | Modal open/close | `06-modal.md` |
| Painel desliza para uma região da página | Panel reveal | `07-panel-reveal.md` |
| Duas telas lado a lado (lista ↔ detalhe, passo 1 ↔ 2) | Page side-by-side | `08-page-side-by-side.md` |
| Elemento muda largura/altura | Card resize | `01-card-resize.md` |
| Rótulo muda e os textos compartilham letras (Copiar → Copiado) | Text morph | `33-text-morph.md` |
| Texto muda e não compartilha nada (Enviando → Pronto) | Text states swap | `04-text-states-swap.md` |
| Valores trocam porque os dados mudaram (período, moeda) | Text swap soft | `34-text-swap-soft.md` |
| Dois ícones no mesmo lugar | Icon swap | `09-icon-swap.md` |
| Número atualiza | Number pop-in | `02-number-pop-in.md` |
| Contador estilo caça-níquel | Spinning counter | `26-spinning-counter.md` |
| Confirmação / sucesso (formulário enviado) | Success check | `10-success-check.md` |
| Hover numa fileira de itens (avatares, chips, tags) | Avatar group hover | `11-avatar-group-hover.md` |
| Erro de validação | Error state shake | `12-error-state-shake.md` |
| Limpar campo de busca | Input clear dissolve | `13-input-clear-dissolve.md` |
| Placeholder que carrega e troca pelo conteúdo | Skeleton reveal | `14-skeleton-reveal.md` |
| Texto "pensando"/carregando vivo | Shimmer text | `15-shimmer-text.md` |
| Controle segmentado / abas com pílula que desliza | Tabs sliding | `16-tabs-sliding.md` |
| Dica ao passar/focar | Tooltip | `17-tooltip.md` |
| Título + linha de apoio entrando com ritmo (hero, estado vazio) | Texts reveal | `18-texts-reveal.md` |
| Card que reage em 3D ao ponteiro, com brilho | Card hover tilt | `19-card-tilt.md` |
| Botão circular que vira o painel que abre (FAB) | Plus → menu morph | `20-plus-menu-morph.md` |
| Cabeçalho com corpo recolhível (FAQ, filtros) | Accordion | `21-accordion.md` |
| Notificação que sobe de baixo | Toast | `22-toast.md` |
| Curtir | Like button | `23-like-button.md` |
| Link "saiba mais" com seta | Learn more hover | `24-learn-more-hover.md` |
| Checkbox | Checkbox check | `25-checkbox-check.md` |
| Interruptor | Toggle | `27-toggle.md` |
| Status de IA/agente | Thinking states · Reasoning stream · Streaming text | `28-…`, `29-…`, `30-…` |
| Loader de pontos | Matrix dot loader | `31-matrix-loader.md` |
| Banners empilhados | Banner stacking | `32-banner-stacking.md` |
| Gráfico de rosca | Donut chart | `35-donut-chart.md` |

Se duas servem, prefira a mais leve (card resize em vez de panel reveal, dropdown em vez de modal,
success check em vez de modal de celebração). Sem correspondência clara: liste as opções ao usuário,
não chute.

## Como instalar uma transição

1. Copie as variáveis de `fontes/transitions-dev/_root.css` para o CSS global **uma vez** (ou só o
   bloco `:root` do arquivo da transição, se for só uma).
2. Cole o CSS da transição **literalmente** (não reescreva seletores, não troque por `transition: all`,
   não remova `will-change`).
3. Ligue os ganchos HTML documentados (classes `.t-dropdown`, `.t-modal`, `.t-acc`…, atributos
   `data-open`, `data-state`, `aria-expanded`, `.is-open`, `.is-closing`…).
4. Preserve o bloco `@media (prefers-reduced-motion: reduce)`.
5. Para as que precisam de JS, copie a pequena orquestração do arquivo e adapte os seletores, mantendo
   as leituras de tempo via `getComputedStyle(...).getPropertyValue('--…')`.

Erros comuns: tirar a limpeza do `.is-closing` em dropdown/modal; esquecer o reflow
(`void el.offsetWidth`) entre remover e readicionar classe para repetir animação; animar o container
em vez das peças internas; `stroke-dasharray` fixo no success check (use `path.getTotalLength()`+1);
padding na trilha do accordion (vai em `.t-acc-panel-inner`); escutar `pointermove` no card que gira
em vez do wrapper `.t-tilt`; posicionar a pílula das abas no primeiro paint com transição.

## Tokens de motion do transitions.dev (compatíveis com `assets/motion-tokens.css`)

| Token | Valor | Uso |
| --- | --- | --- |
| `--duration-stagger` | 40ms | atraso por item |
| `--duration-micro` | 80ms | atraso de tooltip, segmento de shake |
| `--duration-quick` | 150ms | fechar modal/dropdown, troca de texto, tooltip |
| `--duration-fast` | 250ms | troca de ícone, abrir dropdown/modal, abas, slide de página |
| `--duration-medium` | 350ms | fechar painel/toast |
| `--duration-slow` | 400ms | abrir painel, revelar skeleton, limpar input |
| `--duration-very-slow` | 500ms | ênfase, badge, texts reveal, success check |
| `--ease-smooth-out` | cubic-bezier(0.22, 1, 0.36, 1) | abrir/fechar superfícies, slide, resize |
| `--ease-bounce` | cubic-bezier(0.34, 1.36, 0.64, 1) | só pop do badge |
| `--scale-large/medium/small/tiny` | 0.96 / 0.97 / 0.98 / 0.99 | modal / dropdown / tooltip / fechar dropdown |
| `--blur-small/medium/large` | 2px / 3px / 8px | trocas e slides / texto e página / check |
| `--distance-micro…large` | 4 / 6 / 8 / 12 / 30 px | troca de texto … badge do check |

Regra do polish (transitions-polish): combine pelo **uso**, nunca pelo número mais próximo. Um fechamento
de modal de 300 ms vira `--duration-quick` (150 ms) porque ambos são "fechar modal". Abrir > fechar;
hover-in pode ter atraso de intenção, hover-out é imediato. Detalhes em
`fontes/transitions-dev/polish/POLISH.md`.

Nota de marca: para a GPC evite `--ease-bounce`/overshoot fora do badge, e prefira os tempos do lado
calmo da escala.
