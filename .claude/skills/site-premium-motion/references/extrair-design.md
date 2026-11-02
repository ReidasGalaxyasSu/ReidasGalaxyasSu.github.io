# Extrair o design de um site de referência (designlang)

Da skill `extract-design` (Manavarya09/design-extract). Use quando o usuário mandar sites de
referência ("quero algo no nível de X") ou pedir os tokens de um site. A extração é **evidência**
para entender escala, ritmo, cores e animações; não é para copiar a identidade de outra marca. Para a
GPC, a paleta e as fontes continuam as da marca; da referência você aproveita proporções, escala
tipográfica, espaçamento, ritmo de seções e curvas/tempos de animação.

## Rodar

```bash
npx designlang <url> --screenshots                 # extração básica + capturas de componentes
npx designlang <url> --depth 3 --screenshots       # várias páginas internas
npx designlang <url> --dark --screenshots          # também o tema escuro
npx designlang diff <urlA> <urlB>                  # comparar dois sites
```

Opções: `--out <dir>` (padrão `./design-extract-output`), `--wait <ms>` para SPAs,
`--framework react|shadcn` para gerar só um tema.

## O que sai (8 arquivos)

| Arquivo | Uso |
| --- | --- |
| `*-design-language.md` | O sistema inteiro em markdown otimizado para IA: leia este primeiro |
| `*-preview.html` | Relatório visual com amostras, escala de tipo, sombras, acessibilidade |
| `*-design-tokens.json` | W3C Design Tokens |
| `*-tailwind.config.js` | Tema Tailwind |
| `*-variables.css` | CSS custom properties |
| `*-figma-variables.json` | Variáveis para Figma |
| `*-theme.js` | Tema React/CSS-in-JS |
| `*-shadcn-theme.css` | Variáveis de tema shadcn/ui |

## Como usar no fluxo

1. Extraia 2–3 referências que o usuário admira.
2. Anote o que explica a sensação: razão título/corpo, número de tamanhos, espaço entre seções,
   largura de medida, raio de cantos, curvas e durações das animações, quantos elementos se movem.
3. Traduza para os tokens do projeto (respeitando a marca) e registre no relatório de onde veio cada
   decisão.
4. Rode também no site atual do cliente para ter o "antes" medido (nota de acessibilidade WCAG
   incluída).

Requer Node e acesso à rede; sem isso, analise as referências por capturas de tela.
