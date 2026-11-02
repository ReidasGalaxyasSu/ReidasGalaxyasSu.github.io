/* motion-base.js — site-premium-motion
   Uso: no <head>, antes do CSS:  <script>document.documentElement.classList.add('js')</script>
   No fim do <body>:              <script src="motion-base.js" defer></script>
   Marcações:
     data-reveal (+ style="--i:N")   entrada uma vez ao entrar na tela
     .shutter                         imagem que abre de uma borda
     .lines[data-reveal-lines]        título com máscara de linha abaixo da dobra
     data-roll                        número que rola até o valor (somente números reais)
   Se GSAP + ScrollTrigger estiverem na página, expõe window.SPM.gsapReady(fn) com matchMedia
   já configurado para movimento reduzido. */
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  // 1. Revelações uma vez (IntersectionObserver). Sem suporte: mostra tudo.
  const targets = document.querySelectorAll('[data-reveal], .shutter, .lines[data-reveal-lines]');
  if (!('IntersectionObserver' in window) || reduce.matches) {
    targets.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      }
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.1 });
    targets.forEach((el) => io.observe(el));
    // Segurança: nada fica escondido se algo falhar
    window.addEventListener('load', () => setTimeout(() => {
      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-in');
      });
    }, 1500));
  }

  // 2. Números que rolam (texto real preservado para leitores de tela e busca)
  const rolls = [...document.querySelectorAll('[data-roll]')];
  if (rolls.length && !reduce.matches && 'IntersectionObserver' in window) {
    const css = document.createElement('style');
    css.textContent = `
      .roll__digits{display:inline-flex;font-variant-numeric:tabular-nums;line-height:1}
      .roll__col{display:inline-block;height:1em;overflow:clip}
      .roll__strip{display:flex;flex-direction:column;transform:none}
      .roll__strip>span{height:1em}
      .roll.is-in .roll__strip{transform:translateY(calc(var(--d)*-1em));transition:transform 1100ms var(--ease-expo,cubic-bezier(.16,1,.3,1)) calc(var(--i)*var(--stagger-item,70ms))}`;
    document.head.append(css);
    rolls.forEach((el) => {
      const value = el.textContent.trim();
      const said = Object.assign(document.createElement('span'), { className: 'sr-only', textContent: value });
      const shown = Object.assign(document.createElement('span'), { className: 'roll__digits' });
      shown.setAttribute('aria-hidden', 'true');
      let i = 0;
      for (const ch of value) {
        if (!/\d/.test(ch)) { shown.append(ch); continue; }
        const col = Object.assign(document.createElement('span'), { className: 'roll__col' });
        const strip = Object.assign(document.createElement('span'), { className: 'roll__strip' });
        strip.style.setProperty('--d', ch);
        strip.style.setProperty('--i', i++);
        for (let n = 0; n < 10; n++) strip.append(Object.assign(document.createElement('span'), { textContent: n }));
        col.append(strip);
        shown.append(col);
      }
      el.classList.add('roll');
      el.replaceChildren(said, shown);
    });
    const ro = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); ro.unobserve(e.target); }
    }, { rootMargin: '0px 0px -15% 0px' });
    rolls.forEach((el) => ro.observe(el));
  }

  // 3. Pausar vídeos em loop fora da tela e com movimento reduzido
  const loops = document.querySelectorAll('video[autoplay][loop]');
  if (reduce.matches) loops.forEach((v) => { v.removeAttribute('autoplay'); v.pause(); });
  else if ('IntersectionObserver' in window) {
    const vo = new IntersectionObserver((entries) => {
      for (const e of entries) e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause();
    });
    loops.forEach((v) => vo.observe(v));
  }

  // 4. Ponte opcional para GSAP
  window.SPM = {
    reduce: () => reduce.matches,
    gsapReady(setup) {
      if (!window.gsap) return;
      if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      mm.add({ motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 800px)' }, (ctx) => {
        if (!ctx.conditions.motion) return;
        return setup(ctx.conditions);
      });
      if (document.fonts && window.ScrollTrigger) document.fonts.ready.then(() => ScrollTrigger.refresh());
      return mm;
    }
  };
})();
