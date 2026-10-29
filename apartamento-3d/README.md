# ARCO · Do papel ao 3D

Uma página em que a planta baixa do apartamento vira o apartamento decorado em 3D conforme a pessoa rola a tela.

## Como abrir

- **No computador:** dê dois cliques em `index.html`. Funciona direto do arquivo, sem servidor.
- **Publicado (GitHub Pages):** depois de levar esta pasta ao branch publicado, o endereço fica `https://<usuario>.github.io/apartamento-3d/`.

A experiência foi pensada primeiro para o computador. No celular, o texto vai para a parte de baixo da tela e a câmera se afasta para o apartamento caber.

## Roteiro do scroll

| Faixa | O que acontece |
|---|---|
| 0–11% | A planta se desenha sozinha sobre a folha |
| 11–29% | A câmera inclina, as paredes sobem e o piso substitui o papel |
| 29–56% | Os móveis entram por ambiente: cozinha, sala, terraço, banho e dormitório |
| 56–66% | Anoitece: acendem as sancas, os LEDs e a cidade |
| 66–95% | Tour interno em 6 takes |
| 95–100% | Chamada final |

## Estrutura

- `index.html`, `style.css`: textos e layout
- `app.js`: código final já empacotado (Three.js incluso). **Gerado — não editar.**
- `src/house.js`: paredes, aberturas e móveis, com medidas em metros tiradas das cotas da planta
- `src/textures.js`: texturas procedurais (cimento, madeira, pedra, tecidos)
- `src/main.js`: câmera, iluminação dia/noite e animações ligadas ao scroll
- `assets/planta.jpg`: planta original, usada na folha

## Editar e gerar de novo

```bash
cd apartamento-3d
npm install
npm run build   # gera app.js
```

Para testar uma posição específica do scroll, abra `index.html?p=0.5`.
