# Direção de arte: da ideia ao site parado

Compilado de taste-skill (`SKILL.md` "the run", `copy.md`, `layout.md`, `type.md`, `colour.md`,
`imagery.md`) e impeccable (`new-work.md`, `mode-persuade.md`, `bolder.md`, `layout.md`, `typeset.md`).
Originais em `fontes/`.

## 1. Inventário do assunto

Antes de qualquer layout, liste 8–12 coisas que pertencem a este cliente e a nenhum concorrente:
o nome e o que ele significa; o que ele produz (a saída real: telas, sistemas, apps entregues);
o processo e seus rituais; os números confirmados; a restrição com que vive; seus materiais e cores;
os artefatos impressos do seu mundo (proposta, escopo, cronograma, contrato, manual, tela de login).
Nos testes cegos da taste-skill, a página que venceu cada briefing foi construída a partir de um item
dessa lista; as que perderam tinham boa composição com ideia de categoria.

## 2. O argumento

Uma linha por seção, como afirmação + prova:

```
Hero: [o que é + para quem] — prova: [interface real do produto em destaque]
Serviços: fazemos softwares, sites e apps sob medida — prova: [recortes reais de cada tipo]
Processo: você sabe o caminho antes de começar — prova: [etapas reais com o que cada uma entrega]
Portfólio: já entregamos — prova: [projetos reais com problema → solução]
CTA: o primeiro passo é simples — prova: [contato direto, mensagem pronta]
```

Seção sem afirmação sai. Isso evita a sequência de banco: hero, logos, três features, depoimento,
preço, CTA.

## 3. A ideia

> **Neste site, [algo que pertence ao assunto] vira [o dispositivo que a direção pede].**

Onde procurar o primeiro espaço: a **saída** do cliente (ponha a saída real na página como material);
o **objeto ou forma** (amplie, recorte, faça dele a moldura); o **nome** (as letras seguram uma foto,
se empilham, se dividem); o **lugar**; o **ritual** (uma sequência que a página encena com o scroll);
o **artefato** (o impresso que já existe no seu mundo); o **oposto** (qual categoria tem o
sentimento que esta não tem).

**Teste do concorrente:** coloque o nome do concorrente mais próximo na frase. Se continuar
funcionando, a ideia é da categoria. "Limpo e moderno" não é ideia.

**Uma coisa viva:** algo que o visitante faz, ou que muda a cada visita, feito da ideia, com conteúdo
real, que funciona no celular com o polegar, tem fallback sem script, nunca bloqueia a leitura, e é
uma coisa só (não um parquinho). Exemplos: configurar o projeto e ver o escopo inicial; escolher um
tipo de produto e ver um exemplo real; digitar o nome do negócio e ver o cabeçalho de um site possível.

## 4. As palavras (antes do markup)

- **Todo título em ≤ 2 linhas em qualquer largura.** ~32 caracteres é seguro em tamanho confiante;
  a mediana dos heróis estudados é 5 palavras e 32 caracteres. Corte palavras primeiro.
- **Uma frase de apoio** logo abaixo do título (32–48 px abaixo), dizendo o que é em linguagem
  simples quando o título é figura de linguagem.
- **Uma ação primária** nomeada pelo que faz, como botão real na primeira tela.
- **A primeira tela responde à primeira pergunta** em tipo grande (produto: o que é e o que faz).
- **Conteúdo completo**: seções ralas são o motivo mais comum de uma página limpa perder para uma
  página mais cheia. Conteúdo de exemplo é aceitável onde o briefing tem lacunas, listado no relatório;
  **prova nunca é inventada** (clientes, depoimentos, logos, imprensa, estatísticas).
- **Statements são parágrafos**: frase de intro grande é `<p>`/`<blockquote>`, até ~25 palavras, ≤ 36 px
  no desktop e 24 px no celular; maior que isso vira título e a regra de 2 linhas vale.

## 5. Construir parado (ordem)

1. **Tokens**: papéis de cor e tipo como CSS custom properties; tudo depois referencia tokens.
2. **O hero exatamente como planejado**, desktop e celular. Coisa grande grande, coisas pequenas pequenas.
3. **Cada seção com sua composição**; vizinhas não compartilham layout. Leve a ideia a toda seção,
   preço, FAQ e rodapé incluídos (falha mais comum: primeira tela especial seguida de blocos de banco).
4. **Imagens**, nesta ordem de preferência: do próprio projeto (produto, interface real, fotos);
   geradas por ferramenta de imagem (cena sem marca, logo oficial aplicado depois); fotos reais do
   mundo do cliente em acervos abertos com crédito; desenho em código do próprio assunto (uma
   linguagem gráfica consistente nas cores reais); tipo e cor sozinhos. Para software, **fragmentos
   reais de interface construídos em HTML** (dados que fecham, uma conclusão destacada, recortados e
   escalados) são a imagem mais forte; barras cinza e números lorem são a mais fraca. Mínimo de 4
   imagens reais numa página Persuadir; uma em movimento quando houver clipe honesto.
5. **A coisa viva**, na seção onde prova a afirmação.
6. **Cenas de scroll** (se houver) agora, porque decidem o comprimento da página e o que cada tela
   mostra; não no fim.
7. **Plenitude**: cada tela do desktop como um pôster: uma coisa dominante e o conteúdo que ela carrega.
   Um descanso deliberado por página, no máximo.
8. **Moldura**: um par de margens externas iguais; cada seção usa a largura: texto na metade esquerda
   → imagem, segunda coluna, lista ou figura na direita. Assimetria dentro do grid, nunca na moldura.
   Seções a 120–240 px no desktop. Toda seção que o visitante veio ver abre com título; a primeira tela
   tem o `h1`.
9. **Estados e semântica**: links e botões reais, foco visível, alt, celular como composição própria,
   todo controle operável por teclado e com nome acessível.

## 6. Tipo, espaço, cor (detalhe)

- **Tipo**: 2–3 tamanhos visíveis; no máximo 5 na página; razão mediana título/corpo 4,3 nos sites
  estudados (os melhores muito além); display com tracking −0,02 a −0,05em e entrelinha 0,85–1,05;
  corpo 16–20 px, 1,45–1,6, 45–75 caracteres; uma família é normal, duas é o limite; alinhado à
  esquerda, centralize no máximo um momento. Use `text-wrap: balance` em títulos curtos (não junto com
  SplitText) e `text-wrap: pretty` em parágrafos.
- **Espaço**: grid de 12 colunas (ou 6 no celular), margens de 16–32 px, coisas grandes vão até a
  borda; 2–3 bordas esquerdas na página; escala de espaçamento em tokens (4/8/12/16/24/32/48/64/96/
  128/192).
- **Cor**: um fundo, uma tinta, um acento; superfícies separadas por degrau de tom; uma seção pode
  trocar o campo inteiro; texto corrido em tinta cheia; nada desbota em nada.
- **Botões**: chapados, uma cor, cantos decididos uma vez (retos ou totalmente redondos). A maioria
  dos heróis fortes tem um botão ou nenhum.
- **Nav**: marca, 3–5 links simples, uma ação. Sem cromado de barra, sem pílula flutuante.
- **Rodapé**: fechamento desenhado; nos sites fortes o nome volta em largura total.

## 7. Redesign de um site existente

1. **Registre o antes** (capturas 1440/768/390, medições) e leia o código: framework, método de estilo
   (Tailwind v3/v4, CSS modules, CSS puro…), componentes, o que precisa sobreviver (rotas,
   formulários, dados, comportamento, ativos da marca).
2. **Revisão para aqui** (relatório de `revisao-e-critica.md`).
3. **Mantenha a stack, o conteúdo e o que funciona.** Sem migrar framework; confira o arquivo de
   dependências antes de adicionar qualquer coisa. Restyle mantém o layout e troca tipo, cor e
   componentes; redesign refaz as seções por dentro dos componentes existentes.
4. **Ordem de maior efeito com menor risco:** tipo (fontes e escala) → cor (um fundo, uma tinta, um
   acento) → moldura (margens, ritmo, título em toda seção) → estados → troca dos componentes de banco
   (cards com ícone, pílulas, blobs, grids de cards) por composições próprias → motion.
5. **Prove**: capturas depois, comparação lado a lado em cada largura, clique em todo link, formulário
   e menu que funcionava antes, relatório antes/depois.

**"Mais ousado" (impeccable bolder):** amplifique o que o sistema já tem (o motivo, a escala tipográfica
no máximo), em vez de inventar efeitos. Um movimento decisivo completo, e silencie o resto para ele
ficar legível. Se todo elemento ficou mais alto, a seção ficou mais plana.

**Teste do esqueleto:** tire o texto da seção planejada. A estrutura nua ainda diz o que a seção é e
por que importa? Se só funciona quando as palavras voltam, a ousadia está no tamanho do texto, não no
design.
