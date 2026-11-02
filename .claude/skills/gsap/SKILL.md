---
name: gsap
description: Official GreenSock GSAP skills bundled in one (core, timeline, ScrollTrigger, plugins, utils, React, Vue/Svelte/frameworks, performance). Use when writing or reviewing GSAP animations, tweens, easing, staggers, timelines, scroll-driven animation, parallax, pinned sections, SplitText, Flip, Draggable, ScrollSmoother, MorphSVG, useGSAP in React, gsap.matchMedia and prefers-reduced-motion, or when the user asks for a JavaScript animation library without naming one.
license: MIT
metadata:
  source: https://github.com/greensock/gsap-skills
  bundled-from: gsap-core, gsap-timeline, gsap-scrolltrigger, gsap-plugins, gsap-utils, gsap-react, gsap-frameworks, gsap-performance
---

# GSAP (official skills, bundled)

This skill bundles the eight official GreenSock agent skills from `greensock/gsap-skills` into one
upload. Each original SKILL.md is kept verbatim under `references/`. Read only the file(s) the task
needs:

| Task | Read |
| --- | --- |
| Tweens, eases, staggers, defaults, `gsap.matchMedia()`, reduced motion | `references/gsap-core.md` |
| Sequencing, position parameter, labels, nesting | `references/gsap-timeline.md` |
| Scroll-linked animation, pin, scrub, batch, horizontal scroll | `references/gsap-scrolltrigger.md` |
| SplitText, Flip, Draggable, Observer, ScrollSmoother, ScrollTo, MorphSVG, DrawSVG, MotionPath, CustomEase | `references/gsap-plugins.md` |
| `gsap.utils` (clamp, mapRange, wrap, toArray, interpolate, snap…) | `references/gsap-utils.md` |
| React / Next.js (`useGSAP`, refs, cleanup, SSR) | `references/gsap-react.md` |
| Vue, Nuxt, Svelte, SvelteKit, Astro | `references/gsap-frameworks.md` |
| 60fps, transforms, `will-change`, `quickTo`, batching | `references/gsap-performance.md` |
| Quick index of all of the above | `references/llms.txt` |

## Non-negotiables (from the official skills)

- Register plugins once: `gsap.registerPlugin(ScrollTrigger, SplitText, ...)`. All GSAP plugins are free (including former Club plugins).
- Animate transforms (`x`, `y`, `scale`, `rotation`, `xPercent`) and `autoAlpha`; avoid `width/height/top/left`.
- Prefer timelines over chained `delay`s; put `scrollTrigger` on the timeline or a top-level tween, never on a child tween.
- Use `gsap.matchMedia()` for breakpoints and `(prefers-reduced-motion: reduce)`.
- In React use `useGSAP()` from `@gsap/react` (auto cleanup); in other frameworks revert a `gsap.context()` on unmount.
- `ScrollTrigger.refresh()` after layout changes (fonts, images, dynamic content); create triggers top-to-bottom or set `refreshPriority`.
- Never leave `markers: true` in production; don't combine `scrub` with `toggleActions`; horizontal `containerAnimation` tweens must use `ease: "none"`.

## CDN (no build step)

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js"></script>
```

npm: `npm i gsap @gsap/react`.
