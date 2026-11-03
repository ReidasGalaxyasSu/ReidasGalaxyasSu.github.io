#!/usr/bin/env bash
# audit_glass.sh — varredura rápida de um projeto web contra as regras da skill apple-liquid-glass-web.
# Uso: bash audit_glass.sh <pasta-do-projeto>
# Cada achado é uma PISTA: abra o arquivo e confirme antes de reportar.
# Só lê arquivos; não altera nada.

set -u
ROOT="${1:-.}"
if [ ! -d "$ROOT" ]; then echo "Pasta não encontrada: $ROOT" >&2; exit 1; fi

EXCL=(--exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist --exclude-dir=build
      --exclude-dir=.next --exclude-dir=.nuxt --exclude-dir=vendor --exclude-dir=.claude
      --exclude-dir=coverage --exclude=*.min.css --exclude=*.min.js --exclude=*.map)
INC=(--include=*.css --include=*.scss --include=*.sass --include=*.less --include=*.html
     --include=*.htm --include=*.jsx --include=*.tsx --include=*.js --include=*.ts
     --include=*.vue --include=*.svelte --include=*.astro)

g() { grep -rnIE "${EXCL[@]}" "${INC[@]}" "$@" "$ROOT" 2>/dev/null; }
count() { g "$@" | wc -l | tr -d ' '; }
section() { if [ -t 1 ]; then printf '\n\033[1m== %s ==\033[0m\n' "$1"; else printf '\n== %s ==\n' "$1"; fi; }
show() { g "$@" | head -n 15 | sed 's/^/  /'; }

echo "Auditoria Apple / Liquid Glass — $ROOT"

section "1. Superfícies de vidro (backdrop-filter / backdrop-blur)"
N_STD=$(count 'backdrop-filter\s*:')
N_WK=$(count '-webkit-backdrop-filter\s*:')
N_TW=$(count 'backdrop-blur')
echo "  backdrop-filter: $N_STD  |  -webkit-backdrop-filter: $N_WK  |  Tailwind backdrop-blur: $N_TW"
show 'backdrop-filter\s*:|backdrop-blur'
N_PLAIN=$((N_STD - N_WK))
if [ "$N_WK" -lt "$N_PLAIN" ]; then
  echo "  ⚠ Há mais backdrop-filter sem prefixo do que com -webkit-: confira o Safari (iOS < 18)."
fi

section "2. Vidro na camada de conteúdo (suspeito)"
echo "  Seletores de card/section/hero/list/footer perto de backdrop-filter:"
g -B6 'backdrop-filter\s*:' --include=*.css --include=*.scss \
  | grep -iE '(card|section|hero|list|item|row|footer|panel|tile|banner|bg|background)[^{]*\{' \
  | head -n 15 | sed 's/^/  /'
g 'class="[^"]*(card|section|hero|list|footer|tile)[^"]*backdrop-blur|backdrop-blur[^"]*(card|section|hero|list|footer|tile)' | head -n 10 | sed 's/^/  /'
echo "  (Vidro só deve existir em barras, menus, popovers, sheets e botões flutuantes.)"

section "3. Fallbacks de acessibilidade"
for q in 'prefers-reduced-transparency' 'prefers-contrast' 'prefers-reduced-motion' 'prefers-color-scheme' '@supports'; do
  c=$(count "$q")
  if [ "$c" -eq 0 ]; then echo "  ✗ $q: nenhum uso"; else echo "  ✓ $q: $c"; fi
done

section "4. Fonte"
SF=$(g '@font-face' -A6 | grep -iE 'sf-?pro|sf-?compact|sf-?mono|new-?york|SFNS|SF-UI' | head -n 10)
if [ -n "$SF" ]; then echo "  ✗ Possível hospedagem de fonte da Apple (licença não permite em site):"; echo "$SF" | sed 's/^/    /';
else echo "  ✓ Nenhum @font-face com SF/New York encontrado"; fi
SYS=$(count '\-apple-system|system-ui|BlinkMacSystemFont')
echo "  Pilha de fonte do sistema citada $SYS vez(es)"

section "5. Texto muito pequeno (< 11px)"
show 'font-size\s*:\s*(([0-9]|10)(\.[0-9]+)?px|0?\.[0-5][0-9]*rem)\b'
show '\btext-\[(9|10)px\]'

section "6. Alvos de toque possivelmente pequenos (height < 44px em botões)"
g -A8 '(btn|button|tab|nav)[^{]*\{' --include=*.css --include=*.scss \
  | grep -E '(^|[^-])(min-)?height\s*:\s*([0-9]|[1-3][0-9]|4[0-3])px' | head -n 15 | sed 's/^/  /'

section "7. Fundo sólido em barra fixa/sticky (substitui o material)"
g -A10 'position\s*:\s*(fixed|sticky)' --include=*.css --include=*.scss \
  | grep -E 'background(-color)?\s*:\s*(#fff(fff)?|white|#000(000)?|black|rgb\(\s*255\s*,\s*255\s*,\s*255\s*\))\s*;' \
  | head -n 10 | sed 's/^/  /'

section "8. Rótulos genéricos"
show '>\s*(Enviar|Clique aqui|Clique Aqui|OK|Ok|Submit|Click here)\s*<'

section "9. Viewport e safe areas"
c1=$(count 'viewport-fit\s*=\s*cover'); c2=$(count 'safe-area-inset')
echo "  viewport-fit=cover: $c1  |  env(safe-area-inset-*): $c2"
[ "$c2" -eq 0 ] && echo "  ⚠ Barras fixas sem safe area podem ficar sob o notch / indicador de início."

section "10. Ícones sem rótulo (botões só com <svg>)"
g '<button[^>]*>\s*<svg' | grep -v 'aria-label' | head -n 10 | sed 's/^/  /'

echo
echo "Fim. Lembre: são pistas. Confirme cada uma abrindo o arquivo; depois aplique o checklist em"
echo "references/checklist-auditoria.md."
