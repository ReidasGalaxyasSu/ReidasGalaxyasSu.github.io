# Checklist de auditoria

Use antes de entregar e para auditar projetos existentes. Comece rodando
`scripts/audit_glass.sh <pasta>`; cada achado do script é uma **pista** — abra o arquivo e confirme.

## 1. Material (Liquid Glass)

- [ ] Vidro só em: navbar, tab bar, toolbar flutuante, menus, popovers, sheets, botões flutuantes.
- [ ] Nenhum `backdrop-filter` em card, seção, hero, item de lista, fundo de página, rodapé.
- [ ] ≤ 3 superfícies de vidro visíveis ao mesmo tempo; nenhum vidro dentro de vidro.
- [ ] Variante: texto → regular (preenchimento ≥ 60%); mídia → clear; clear sobre mídia clara com
      escurecimento de 35%.
- [ ] `-webkit-backdrop-filter` presente, antes de `backdrop-filter`, sem `var()`.
- [ ] Sem fundo sólido pintado embaixo da barra; borda de rolagem ou tom adaptativo no lugar.
- [ ] Sem gradientes arco-íris, glows, bordas neon no vidro.
- [ ] Fallbacks: `prefers-reduced-transparency`, `prefers-contrast: more`, `@supports not`.

## 2. Cor

- [ ] 1–2 botões com fundo colorido por tela.
- [ ] Rótulos da barra monocromáticos sobre conteúdo colorido; accent só em ativo/status.
- [ ] Cores por papel (tokens), com variante escura; nada de hex solto repetido.
- [ ] Contraste calculado: texto ≤ 17 px ≥ 4.5:1; grande/negrito ≥ 3:1. Cinza secundário da Apple
      (60%) só em texto grande/negrito no claro.
- [ ] Barra legível no topo da página (posição de repouso).
- [ ] Status não depende só de cor.

## 3. Tipografia

- [ ] Pilha do sistema (`-apple-system, BlinkMacSystemFont, system-ui…`).
- [ ] Nenhum `@font-face` hospedando SF Pro / SF Compact / New York.
- [ ] Corpo 17 px no mobile (≥ 15 px aceitável); nada abaixo de 11 px.
- [ ] Hierarquia por peso/tamanho; 1 família (no máximo 2, com motivo).
- [ ] Sem pesos finos em texto pequeno; tracking negativo só em títulos grandes.
- [ ] Corpo em `rem`; zoom 200% sem quebra.

## 4. Componentes

- [ ] Tab bar: 3–5 abas, navega (não age), rótulo de uma palavra, ativa marcada com
      `aria-current`, safe area respeitada, conteúdo não fica escondido embaixo.
- [ ] Botões em cápsula, ≥ 44 px de altura no toque, rótulo com verbo.
- [ ] Opção preferida diferenciada por estilo, não tamanho.
- [ ] Destrutivo com confirmação e Cancelar.
- [ ] Sheets: um por vez, saída clara, `Esc` fecha, foco preso.
- [ ] Cards sem vidro, cantos concêntricos.
- [ ] Botões de ícone com `aria-label`.

## 5. Layout, movimento e escuro

- [ ] `viewport-fit=cover` + `env(safe-area-inset-*)` em barras fixas.
- [ ] Layout por espaço (breakpoints/container queries), não por detecção de aparelho.
- [ ] `prefers-reduced-motion` desliga escalas/morphs.
- [ ] Animação breve, cancelável, nada bloqueando interação.
- [ ] Claro e escuro testados; `color-scheme: light dark`.

## 6. Teste real

- [ ] Safari no iPhone (vidro, safe area, fonte SF de verdade).
- [ ] Chrome no Android (desempenho do blur; fonte Roboto não quebra o layout).
- [ ] Desktop com teclado apenas.
- [ ] macOS: Ajustes › Acessibilidade › Tela › Reduzir transparência e Aumentar contraste
      (no Safari, isso afeta `prefers-contrast`; transparência pode não ser exposta — por isso o
      vidro precisa ser legível sem fallback).

## Padrões de busca manual (se não puder rodar o script)

```bash
grep -rn --include=*.{css,scss,html,jsx,tsx,vue,svelte} "backdrop-filter" .
grep -rn "@font-face" . | grep -iE "sf-?pro|sf-?compact|new-?york|SFNS"
grep -rnE "font-size:\s*(9|10)px" .
grep -rnE "prefers-reduced-transparency|prefers-contrast" .
```

## Nível avançado (liquid-glass-pro / lente / vídeo)

- [ ] Cada superfície de vidro tem o que refratar atrás (imagem, vídeo, cor), não fundo chapado.
- [ ] Borda especular com lado iluminado × apagado (`.lg-surface`), não traço branco uniforme.
- [ ] `data-lg-lens` em no máximo 3 elementos, nenhum em lista; legível sem a lente (Safari/Firefox).
- [ ] Dispersão (`.lg-chroma`, `data-lg-chroma`) em no máximo 1 destaque.
- [ ] Raios concêntricos (interno = externo − espaçamento).
- [ ] Toggle/slider: vidro só durante a interação.
- [ ] Objetos de vidro decorativos (`.lg-orb`, 3D) tratados como conteúdo/arte, com pausa fora da tela.
- [ ] Morph botão → menu com View Transitions/Flip, desligado em reduced motion.
- [ ] Testado no Chrome (com lente) **e** no Safari iOS (sem lente).
- [ ] Nativo Apple: `glassEffect`/`.glass`/`.glassProminent`, `GlassEffectContainer`, sem fundos
      próprios em sheets/toolbars; testado com Reduzir Transparência, Aumentar Contraste, Reduzir Movimento.
- [ ] Vídeo/imagem: sem texto ou logo gerado por IA; movimento lento sem rebote; som sincronizado.
