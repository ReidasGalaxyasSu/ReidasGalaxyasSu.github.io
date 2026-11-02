---
name: react-bits
description: Catalogue of the 218 free animated React components from React Bits (reactbits.dev) - text animations, scroll reveals, cursor and hover effects, cards, carousels, galleries, menus, docks, micro-interactions and WebGL/canvas backgrounds - with what each does, its npm dependencies and how to install it with the shadcn or jsrepo CLI. Use when a React, Next.js or Vite site needs an animated component, a hero background, a text reveal, a gallery or a micro-interaction, or when the user mentions React Bits, reactbits.dev, SplitText, BlurText, ScrollReveal, ShinyText, Aurora, Silk, LightRays, MagicBento, ScrollStack, CircularGallery or similar.
license: MIT + Commons Clause (React Bits). Components may be used inside your own apps and websites; do not resell or redistribute the library itself.
metadata:
  source: https://github.com/DavidHDev/react-bits
  note: The React Bits repository ships no agent skill; this skill was generated from its public registry (public/r/registry.json).
---

# React Bits

React Bits is a library of copy-in animated React components. Every component is source you own,
in four flavours: `JS-CSS`, `JS-TW`, `TS-CSS`, `TS-TW` (TypeScript/JavaScript × plain CSS/Tailwind).

The full list with descriptions and dependencies is in `references/catalogo.md`. Search it
(`grep -i "<keyword>" references/catalogo.md`) instead of reading it whole.

## Install a component

```bash
# shadcn CLI (preferred)
npx shadcn@latest add @react-bits/SplitText-TS-TW
# jsrepo
npx jsrepo@latest add https://reactbits.dev/r/SplitText-TS-TW
```

For the shadcn CLI and the shadcn MCP server, add the registry to `components.json`:

```json
{ "registries": { "@react-bits": "https://reactbits.dev/r/{name}.json" } }
```

Raw registry JSON (source files inline): `https://reactbits.dev/r/<Name>-<JS|TS>-<CSS|TW>.json`.
Live demo with props: `https://reactbits.dev/<category>/<kebab-name>` (categories: `text-animations`,
`animations`, `components`, `micro`, `backgrounds`).

## Choosing well

1. **Pick by job, not by wow.** One signature piece per page (a hero background or a hero text
   reveal), quiet pieces elsewhere (BlurText/SplitText for headings, AnimatedContent/FadeContent for
   section entrances, CountUp only for real numbers, GlareHover/SpotlightCard for hover feedback).
2. **Check the dependency cost** in the catalogue (`motion`, `gsap`, `@hugeicons/react`, `three`,
   `ogl`, `matter-js`; most backgrounds are now dependency-free raw WebGL). WebGL pieces cost GPU and battery:
   lazy-load them, pause off-screen, give a static poster on mobile and under reduced motion.
3. **Not React?** Read the component's registry JSON, then port its logic to vanilla JS/CSS or use
   the same effect with GSAP; most text/scroll effects are a few lines of GSAP or CSS.
4. **Accessibility.** Split-text components must keep the real text available to screen readers
   (`aria-label` on the parent, `aria-hidden` on the split spans); every effect needs a
   `prefers-reduced-motion` fallback that shows the finished state.
5. **Avoid as default choices** (they read as gimmicks unless the brief asks for them): custom
   cursors (`SplashCursor`, `BlobCursor`, `TargetCursor`, `GhostCursor`), scramble/glitch text
   (`DecryptedText`, `GlitchText`, `ScrambledText`, `LetterGlitch`, `FaultyTerminal`), physics toys
   (`Ballpit`, `FallingText`), `Hyperspeed`.
