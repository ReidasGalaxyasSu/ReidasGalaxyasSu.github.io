# Robô Garçom R1 · operação de salão (fonte)

Página interativa montada com o kit [teardown](https://github.com/elvarofficial/teardown) (instalado em `.claude/skills/teardown`).

- `garcom-live/robot.js` – robô, braço de 5 eixos, pinça universal e o catálogo de peças (inspeção)
- `garcom-live/world.js` – salão, 3 mesas, cozinha/doca e os utensílios (prato, sobremesa, café, copo, garrafa)
- `garcom-live/plan.js` – planejador de missões (entregar / recolher) em trilhas de quadros-chave
- `garcom-live/stage.js` – iluminação de estúdio, sombras, GTAO e contorno da peça selecionada
- `garcom-live/main.js` – interface, câmera, tour automático, telemetria

Build (gera um HTML único, offline, com three.js embutido):

```
cd .claude/skills/teardown && npm install   # uma vez
cd ../../..
node .claude/skills/teardown/sims/build.mjs ./robo-garcom/teardown/garcom-live
cp teardown-out/dist/garcom-live.html robo-garcom/operacao.html
```
