# Revisão, crítica, auditoria e polish

Compilado de taste-skill (`critique.md`: 14 passes, nota de jurado Awwwards, limites) e impeccable
(`critique.md` com heurísticas de Nielsen, `audit.md`, `polish.md`, `craft-floor.md`). Originais em
`fontes/taste-skill/references/critique.md` e `fontes/impeccable/reference/`.

## 1. Capturar a evidência

Critique **as imagens, não o código** (quem escreveu o código lê as próprias intenções nele).

- Capture 1440, 768 e 390 px: primeira dobra e página inteira. Com Playwright/Chromium:

```js
// node shots.mjs <url> <pasta>
import { chromium } from 'playwright';
const [url, out = 'shots'] = process.argv.slice(2);
const browser = await chromium.launch();
for (const [w, h] of [[1440, 900], [768, 1024], [390, 844]]) {
  for (const reduced of [false, true]) {
    const page = await browser.newPage({ viewport: { width: w, height: h }, reducedMotion: reduced ? 'reduce' : 'no-preference' });
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    const tag = `${w}${reduced ? '-reduced' : ''}`;
    await page.screenshot({ path: `${out}/${tag}-dobra.png` });
    // rola até o fim para disparar revelações, depois volta ao topo e captura a página inteira
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 400) { scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } scrollTo(0, 0); });
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${out}/${tag}-pagina.png`, fullPage: true });
    await page.close();
  }
}
await browser.close();
```

- Sem navegador disponível: peça capturas ao usuário ou critique o protótipo renderizado na
  ferramenta de design, e diga no relatório que as medições automáticas não rodaram.
- Medição automática: os scripts da taste-skill (`inspect.mjs`, `lint.mjs`, que medem linhas de
  título, margens, contraste, vazios e contam elementos em movimento) não vêm nesta skill. Se a skill
  `design-taste-frontend` estiver instalada e houver Node 22 + Chrome, rode
  `node <pasta-da-design-taste-frontend>/scripts/inspect.mjs <url ou index.html>` e corrija todo `FAIL`
  (com `--allow <regra>` só para exceções de marca).

## 2. Os 14 passes (um de cada vez)

1. **Um segundo, depois cinco.** O que você viu? Deve haver uma resposta (uma palavra, uma imagem,
   um objeto). Em cinco segundos: o que é, para quem, o que fazer?
2. **Apertar os olhos.** A página deve virar 2–3 massas grandes com diferenças claras de tamanho.
3. **Cobrir o logo.** Poderia ser de um concorrente? Se trocar o nome e o substantivo do título gera
   uma página igualmente válida, não há ideia. A ideia chega ao preço, ao FAQ e ao rodapé?
4. **Bordas.** Conte as posições x das bordas esquerdas dos blocos de texto: 2–3 = composto; 6 =
   colocado um a um.
5. **Espaço e moldura.** Relacionados perto, diferentes longe; espaço entre seções maior que dentro;
   margens esquerda e direita iguais; nenhuma seção com metade vazia; nenhum vazio > meia tela.
6. **Tipo.** Salto corpo→título ≥ 3×? Mais de 5 tamanhos? Palavra órfã? Parágrafo > 75 caracteres
   ou centralizado por mais de 3 linhas?
7. **Cor.** Qual cor ocupa mais superfície, qual apoia, onde está o acento? Acento em dez lugares não
   significa nada.
8. **Imagens.** Pelo menos 4 reais? Uma em movimento? Cada uma faz um trabalho? Mesmas proporções e
   mesma luz? Alguma caixa cinza, foto esticada, tela falsa feita de barras?
9. **Mesmice.** Uma palavra por seção (split, lista, full-bleed, grid, statement, índice…). A mesma
   palavra duas vezes seguidas ou três vezes na página = template aparecendo.
10. **Celular.** Composição própria ou desktop espremido? Primeira tela ainda é uma coisa clara?
11. **Plenitude.** Cada tela do desktop é um pôster composto ou uma coluna estreita com chão vazio?
12. **Substância.** Cada seção pedida entrega a informação completa e legível? A ação principal é um
    botão real na primeira tela?
13. **Colisões.** Algo sobre título, statement ou botão em alguma posição de scroll? Algo vazando da
    tela do celular?
14. **Concorrente e coisa viva.** Com o nome do concorrente a ideia ainda funciona? Qual é a coisa
    viva? Resposta fraca = primeiro problema da rodada.

## 3. Nota

**Jurado Awwwards** (taste-skill), 1–10 cada:
`geral = 0,4·design + 0,3·usabilidade + 0,2·criatividade + 0,1·conteúdo`

- **Design**: 9–10 toda tela vira pôster; 8 confiante, 1–2 pontos fracos; 7 limpo e profissional,
  pouca tensão; 6 arrumado mas anônimo ("kit"); ≤ 5 hierarquia fraca, tipo padrão.
- **Usabilidade**: 9–10 sabe o que é e o que fazer sem rolar, perfeito no celular; 7 funciona com um
  problema real; ≤ 6 precisa caçar ou algo quebra.
- **Criatividade**: 9–10 conceito específico do assunto; 8 ideia clara com um movimento memorável;
  7 execução de bom gosto de algo conhecido; ≤ 6 padrão da categoria.
- **Conteúdo**: 9–10 cada linha só serve para este assunto; 7–8 claro com linhas genéricas; ≤ 6
  slogans e enchimento.

Calibração: Sites of the Day reais ficam em 7,5–8,0. Se sua primeira nota para o próprio trabalho for
9, dê de novo como o jurado que não construiu.

**Limites (sobrepõem a conta):**
- Título de 3+ linhas, eyebrow, gradiente decorativo, sombra em repouso, hairline decorativa → geral ≤ 6,5
  (para a GPC, elementos de marca legítimos de `gpc.md` §3 não contam).
- Poderia ser de qualquer um (passe 3) → criatividade ≤ 6. Ideia vale para o concorrente → ≤ 7.
  Sem coisa viva → ≤ 7,5.
- Menos de 4 imagens reais → design ≤ 6,5. Página quase parada ou o mesmo fade em tudo → design ≤ 7.
- Placeholder (caixa cinza, lorem) → conteúdo ≤ 5. Seção pedida ausente ou rala → conteúdo ≤ 6.
- Sem botão real da ação principal na primeira tela → usabilidade ≤ 7. Falha nos 5 segundos →
  usabilidade ≤ 6. Algo cobrindo título → ≤ 6. Faixa em branco de revelação que não disparou → ≤ 5.
- Margens desiguais, seção amontoada num lado, vazio > meia tela, duas telas quase vazias → design ≤ 6,5.

**Heurísticas de Nielsen** (impeccable), 0–4 cada, total sobre o máximo aplicável (Persuadir e
Experiência podem marcar n/a em 7-Flexibilidade e 10-Ajuda e renormalizar para /32): 1 visibilidade do
estado, 2 correspondência com o mundo real, 3 controle e liberdade, 4 consistência, 5 prevenção de
erro, 6 reconhecer em vez de lembrar, 7 flexibilidade, 8 estética minimalista, 9 recuperação de erro,
10 ajuda. A maioria das interfaces reais fica entre 20 e 32 de 40.

**Auditoria técnica** (impeccable), 0–4 cada, total /20: acessibilidade (contraste 4,5:1 / 3:1,
teclado, foco, semântica, alt, formulários, reduced motion intencional), desempenho (layout thrash,
animação cara, imagens sem lazy/otimização, `will-change` sobrando, bundle), tema (tokens vs.
hard-coded, dark mode), responsivo (larguras fixas, alvos de toque ≥ 24 px e ideal 44 px, gestos no
touch, rolagem horizontal, zoom de texto), integridade (atalhos repetidos, drift do sistema, conteúdo
enganoso, estrutura intercambiável). Faixas: 18–20 excelente, 14–17 bom, 10–13 aceitável, 6–9 ruim,
0–5 crítico.

**Severidade dos problemas:** P0 bloqueia tarefa/conversão ou acessibilidade; P1 prejudica muito; P2
incomoda; P3 detalhe.

## 4. Piso de acabamento (verifique no resultado, não na intenção)

- **Contraste**: corpo e placeholder ≥ 4,5:1, texto grande ≥ 3:1; em fundo colorido, texto secundário
  tingido do próprio matiz, nunca cinza.
- **Profundidade**: sombra só com deslocamento e blur suave; halo colorido sem deslocamento é enfeite.
- **Espaço**: grupos apertados, separação generosa, mais espaço acima do título que abaixo.
- **Tipo**: medida 65–75ch, display ≤ 6rem, tracking ≥ −0,04em, títulos balanceados.
- **Motion**: um momento autoral, não efeitos espalhados nem a mesma entrada em toda seção.
- **Estados**: hover, foco, ativo, desabilitado, carregando, erro, vazio, sucesso.
- **Superfícies do navegador**: `::selection`, `caret-color`, scrollbar, anel de foco,
  `text-underline-offset`, `font-variant-numeric: tabular-nums` em dados, com as cores da marca. É o
  sinal mais barato de página construída e o mais esquecido.
- **Copy**: controles dizem a ação; erros dizem o problema e a saída.
- **Cobertura**: todo requisito do briefing presente e encontrável em segundos.

**Recuse como padrão** (só o briefing pode justificar): cards iguais de ícone+título+texto como
estrutura; template de "métrica herói" (número grande, rótulo pequeno, stats); eyebrow acima de título
(proibido sempre); numeração 01/02/03 sem sequência real; modal para tarefa que não precisa
interromper; texto em gradiente; vidro como decoração; `border-left` colorido grosso em cards; sombra
dura deslocada fora de um mundo neobrutalista; sparklines e anéis de progresso no lugar de conteúdo;
monospace como fantasia de "técnico"; fonte de sistema como voz display de uma marca própria; emoji
no lugar de ícones; máscara geométrica imitando contorno orgânico; claro/escuro escolhido pela
categoria e não pela cena de uso.

## 5. Ordem de correção

1. **A ideia** (se o passe 3 falha, mude o conceito do hero, não detalhes).
2. **Hierarquia** (um elemento dominante por tela).
3. **Composição** (bordas compartilhadas, espaçamento, variedade entre seções, buracos).
4. **Tipografia** (contraste de escala, quebras, medida, entrelinha).
5. **Imagens** (troque as fracas, unifique recorte e tratamento).
6. **Cor** (proporção e disciplina do acento).
7. **Detalhe** (estados, foco, alinhamentos, ajustes do celular).
8. **Motion** (por último).

Ao remover algo e sobrar um buraco, não preencha com outro enfeite: feche, amplie o que ficou, ou deixe
uma imagem ou campo de cor ocupar.

Polish é refinamento, nunca redesign disfarçado: preserve o mundo visual, conteúdo e comportamento;
se o conceito está errado, diga e recomende redesign. Triagem do polish: (1) tarefas quebradas,
perda de dados, estados enganosos, caminhos inacessíveis; (2) estados ausentes; (3) fluxo,
hierarquia, responsivo, drift do sistema; (4) inconsistências visuais e de motion; (5) limpeza de
código e assets.

Máximo de três rodadas: criticar → corrigir os 3 maiores → capturar de novo → criticar. Se a terceira
rodada ainda der menos de 7,5, diga claramente, com os problemas restantes. Não arredonde.

## 6. Formato do relatório

```
RODADA n (ou ANTES / DEPOIS)
Visto em um segundo: …
Ideia (uma frase): …
Coisa viva: …
Layout por seção: hero=… / serviços=… / processo=… / portfólio=… / …
Notas: design _ · usabilidade _ · criatividade _ · conteúdo _ → geral _,_
Limites aplicados: …
Nielsen: __/__ · Auditoria técnica: __/20
O que funciona (2–3, específico): …
Três maiores problemas (mais visível primeiro), cada um com a captura onde aparece, severidade e a correção:
1. [P_] …
2. [P_] …
3. [P_] …
Próximos passos recomendados: …
```

Nomeie problemas como designer falando com colega: "o parágrafo de apoio começa 40 px à esquerda da
borda do título", "a seção de depoimentos é o terceiro split seguido", "no celular o hero corta o
produto". "Poderia ser mais polido" não é um achado.
