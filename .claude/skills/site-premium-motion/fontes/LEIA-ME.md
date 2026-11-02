# Fontes originais

Cópias literais (renomeadas para não haver mais de um `SKILL.md`) dos arquivos de cada skill de
origem, capturadas em 2026-11-02. Use para aprofundar um ponto; o fluxo e as decisões estão no
`SKILL.md` e em `references/` desta skill.

| Pasta | Origem | Commit | Licença |
| --- | --- | --- | --- |
| `taste-skill/` | github.com/Leonxlnx/taste-skill (`skills/taste-skill`) | 12af471 | MIT |
| `impeccable/` | github.com/pbakaus/impeccable (`.claude/skills/impeccable`) | e89e3ad | Apache-2.0 (+ NOTICE.md) |
| `gsap/` | github.com/greensock/gsap-skills (`skills/gsap-*`) | aed9cfd | MIT |
| `transitions-dev/` | github.com/Jakubantalik/transitions.dev (`skills/transitions-dev`, `skills/transitions-polish`) | e3aefb5 | Transitions.dev License (uso livre; sem redistribuir a coleção) |
| `design-extract/` | github.com/Manavarya09/design-extract (`skills/extract-design`) | 5b94e95 | MIT |
| `react-bits/` | github.com/DavidHDev/react-bits (só a licença; o catálogo está em `references/catalogo-react-bits.md`) | 4dc7b5b | MIT + Commons Clause |

O que **não** foi copiado para cá (fica nas skills individuais, se instaladas):

- taste-skill: scripts (`draw.mjs`, `inspect.mjs`, `lint.mjs`, `assets.mjs`, `scenes.mjs`), a
  biblioteca de direções (`library/*.json`), as cenas individuais e `app-screens.md`/`research.md`.
  Quando os textos citarem esses arquivos, use a skill `design-taste-frontend`.
- impeccable: o executável/CLI (`scripts/impeccable`, detector, modo live), referências nativas iOS/
  Android e de manutenção (`hooks`, `doctor`, `document`, `init`, `live`). Quando os textos citarem
  `impeccable context`, `detect` ou `critique-storage`, use a skill `impeccable`; aqui, siga as regras
  manualmente.
