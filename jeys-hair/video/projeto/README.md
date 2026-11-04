# Vídeo de apresentação — Jey's Hair (9:16, 58 s)

Fonte do vídeo `../jeys-hair-apresentacao.mp4`.

1. `gravacao/` — Playwright grava as telas reais do protótipo (`../../app/`) em 390×844 @2x via CDP screencast e registra cada toque (`events.json`).
2. `trilha/timeline.py` — monta a linha do tempo (cenas, velocidade dos clipes, horário dos toques) em `timeline.json`.
3. `trilha/music.py` — trilha original sintetizada em numpy (120 BPM, pad, baixo, arpejo, bateria, risers, impactos) + efeitos sonoros sincronizados (whooshes nos cortes, cliques nos toques, chimes nas confirmações). Masterizada em −14 LUFS.
4. `hyperframes/gen.py` — gera as 4 cartelas tipográficas (abertura, sinal, benefícios, encerramento) em HyperFrames + GSAP, renderizadas em WebM com transparência.
5. `remotion/` — composição final: celular 3D com câmera, legendas animadas, indicador de toque, light leaks, flashes, granulado e trilha.
