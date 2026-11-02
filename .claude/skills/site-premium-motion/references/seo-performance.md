# SEO, desempenho e motion sem perder ranking

Motion bonito que derruba LCP, CLS ou INP custa posição no Google e conversão. Este checklist vale
para toda entrega; para uma auditoria completa de conversão, SEO, rastreamento (GA4, Pixel/CAPI),
LGPD e confiança, use também a skill **`auditoria-site-conversao`** se estiver disponível.

## 1. SEO técnico (on-page)

- `<html lang="pt-BR">`, `<meta charset="utf-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- `<title>` único por página, 50–60 caracteres, com o serviço e a marca
  (ex.: "Desenvolvimento de software, sites e apps | GPC Software Solutions").
- `<meta name="description">` 140–160 caracteres, com benefício e chamada.
- **Um `h1`** por página com o assunto principal; `h2` em cada seção; hierarquia sem pular níveis.
- `<link rel="canonical">`; Open Graph (`og:title`, `og:description`, `og:image` 1200×630, `og:url`,
  `og:type`, `og:locale` = `pt_BR`) e `twitter:card`.
- Dados estruturados JSON-LD: `Organization` (nome, logo, contato confirmado), `WebSite`, `Service`
  para cada serviço principal, `FAQPage` se houver FAQ real, `BreadcrumbList` em páginas internas.
  Nada inventado (sem avaliações, preços ou endereço não confirmados).
- `robots.txt`, `sitemap.xml`, favicon e ícones (`apple-touch-icon`, manifest).
- URLs legíveis, links internos com texto descritivo, `alt` descritivo em toda imagem de conteúdo
  (`alt=""` nas decorativas).
- Texto real no HTML: títulos divididos em spans para animação mantêm o texto acessível
  (`aria-label` no pai) e o conteúdo visível sem JS. Conteúdo gerado só por JS ou escondido atrás de
  interação pode não ser indexado.
- Página de vendas: proposta de valor na primeira tela, CTA repetido em pontos naturais, FAQ que
  responde objeções reais, contato clicável (`tel:`, `mailto:`, link de WhatsApp com mensagem).

## 2. Core Web Vitals (metas no percentil 75, mobile)

| Métrica | Meta | O que o motion pode estragar | Como evitar |
| --- | --- | --- | --- |
| **LCP** ≤ 2,5 s | maior elemento pintado | Título/imagem do hero começando em `opacity: 0`; preloader; fonte do título carregando tarde | Título visível no primeiro frame (máscara por `transform`, não fade longo); `fetchpriority="high"` na imagem do hero; `preload` da fonte do título; sem preloader |
| **CLS** ≤ 0,1 | estabilidade | Imagens sem dimensão; fontes trocando métricas; animar `height`/`top`; banners que empurram conteúdo | `width`/`height` ou `aspect-ratio` em toda mídia; `font-display: swap` com fallback de métricas ajustadas (`size-adjust`); animar só `transform`/`opacity` |
| **INP** ≤ 200 ms | resposta a interação | Listeners pesados em `scroll`/`mousemove`; WebGL na thread principal; dezenas de ScrollTriggers mal configurados | `IntersectionObserver`/ScrollTrigger em vez de listener de scroll; `gsap.quickTo` para seguidores; pausar WebGL fora da tela; código de animação carregado com `defer` |

## 3. Peso e carregamento

- Imagens em AVIF/WebP, `srcset`/`sizes`, `loading="lazy"` abaixo da dobra (nunca no hero),
  `decoding="async"`.
- Vídeo: MP4/WebM curto, mudo, `playsinline`, `preload="none"` abaixo da dobra, `poster`; pausar fora
  da tela e em reduced motion.
- Fontes: só os pesos usados, WOFF2, subset latin, `preload` do peso do título.
- JS: GSAP 3.13 core 72 KB minificado (28 KB gzip), ScrollTrigger 44 KB (18 KB gzip), SplitText 7 KB; só os plugins usados, carregue com `defer` e só nas páginas
  que usam. WebGL e componentes pesados via `import()` dinâmico.
- CSS crítico do hero inline ou no `<head>`; o resto não bloqueia renderização.
- Cache de longa duração para assets versionados; compressão Brotli/Gzip no servidor.

## 4. Acessibilidade que também é SEO

Contraste AA, foco visível, ordem de tabulação lógica, alvos de toque ≥ 24 px (ideal 44 px), formulários
com `<label>`, `prefers-reduced-motion` respeitado, nenhuma informação só em cor ou só em hover.

## 5. Como medir

- Lighthouse (DevTools ou `npx lighthouse <url> --preset=desktop` e o padrão mobile), PageSpeed
  Insights para dados de campo quando o site estiver publicado.
- DevTools → Performance com CPU 4× mais lenta para conferir quedas de frame nas cenas de scroll.
- Teste de dados estruturados (Rich Results Test) depois de publicar.
- Relate os números medidos; não declare metas atingidas sem ter medido.
