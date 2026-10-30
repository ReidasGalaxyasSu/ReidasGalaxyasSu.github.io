# Planta Viva · por GPC Software Solutions

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

## Modo livre (Explorar em 3D)

O botão **Explorar em 3D**, no topo e no final da página, pausa o roteiro e libera a navegação:

- **Visão geral (maquete):** arraste para girar, use a roda do mouse ou a pinça para aproximar e o botão direito ou dois dedos para mover. Os rótulos sobre a maquete levam para dentro de cada ambiente.
- **Dentro dos ambientes:** arraste para olhar em volta. Para andar, use a roda do mouse, W A S D, as setas do teclado ou os botões ▲ ▼ na tela. As paredes não deixam atravessar.
- **Dia e noite:** alterna a iluminação a qualquer momento.
- **Voltar ao tour (ou Esc):** retoma o scroll exatamente de onde parou.

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

## Desempenho

- As texturas são calculadas pixel a pixel, em vez de desenhadas com pincéis do canvas. A montagem da cena caiu de ~5 s para ~0,5 s.
- Todos os shaders são compilados durante a tela de carregamento. As luzes e as sombras nunca são ligadas e desligadas, porque isso obrigaria a recompilar tudo no meio do scroll.
- As peças de cada móvel são unidas por material, o que reduziu ~440 objetos para ~175.
- A cena só é redesenhada quando o scroll ou uma animação muda algo. A sombra só é recalculada de dia, e o bloom só liga à noite.
- A resolução interna se ajusta sozinha se a máquina não sustentar ~45 fps.
- O CSS não usa `backdrop-filter` sobre o canvas.
- As luzes da noite têm sombras suaves. Como nada se move à noite, os mapas de sombra são gerados uma única vez no carregamento.
