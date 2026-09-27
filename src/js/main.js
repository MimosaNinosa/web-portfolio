// Progressive enhancements. Every page works without this file.

/* ---------- Theme toggle ---------- */
(function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  const current = () => root.getAttribute('data-theme') || (media.matches ? 'dark' : 'light');
  const sync = () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    btn.textContent = next === 'dark' ? 'Dark' : 'Light';
    btn.setAttribute('aria-label', `Switch to ${next} theme`);
  };

  btn.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
    sync();
  });
  media.addEventListener('change', sync);
  sync();
})();

/* ---------- Mobile nav ---------- */
(function initNav() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (!navToggle || !navLinks) return;

  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ---------- Scroll-spy (homepage) ---------- */
(function initScrollSpy() {
  if (!('IntersectionObserver' in window)) return;
  const links = [...document.querySelectorAll('.nav-link')]
    .filter(link => link.hash && link.pathname === window.location.pathname);
  const sections = links.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(section => observer.observe(section));
})();

/* ---------- Copy buttons on code panels ---------- */
(function initCopyButtons() {
  document.querySelectorAll('.code-panel .copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const codeEl = btn.closest('.code-panel').querySelector('code');
      if (!codeEl) return;
      const text = codeEl.textContent;

      try {
        await navigator.clipboard.writeText(text);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try { document.execCommand('copy'); } catch (e) { /* give up quietly */ }
        document.body.removeChild(textarea);
      }

      const original = btn.textContent;
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove('copied');
      }, 1500);
    });
  });
})();

/* ---------- Homepage intro: type the headline out ----------
   theme-init.js adds .intro-typing to <html> (once per session, never with
   reduced motion) so the intro starts hidden. Here each character becomes a
   span that is already laid out but invisible, so revealing them one by one
   never shifts the layout. Screen readers get the full sentence via
   aria-label. Any key, click, scroll or touch skips to the end. */
(function initIntroTyping() {
  const root = document.documentElement;
  const lede = document.getElementById('introLede');
  if (!lede || !root.classList.contains('intro-typing')) return;

  lede.setAttribute('aria-label', lede.textContent.replace(/\s+/g, ' ').trim());

  const textNodes = [];
  const walker = document.createTreeWalker(lede, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  const chars = [];
  textNodes.forEach(node => {
    const frag = document.createDocumentFragment();
    for (const c of node.textContent) {
      const span = document.createElement('span');
      span.className = 'ch';
      span.setAttribute('aria-hidden', 'true');
      span.textContent = c;
      frag.appendChild(span);
      chars.push(span);
    }
    node.replaceWith(frag);
  });

  const caret = document.createElement('span');
  caret.className = 'caret';
  caret.setAttribute('aria-hidden', 'true');
  lede.prepend(caret);

  root.classList.add('intro-typing-live');

  let index = 0;
  let timer = null;
  const skipEvents = ['keydown', 'pointerdown', 'wheel', 'touchstart', 'scroll'];

  const finish = () => {
    clearTimeout(timer);
    skipEvents.forEach(type => window.removeEventListener(type, finish));
    chars.forEach(span => span.classList.add('on'));
    if (chars.length) chars[chars.length - 1].after(caret);
    root.classList.add('intro-typed');
    try { sessionStorage.setItem('introTyped', '1'); } catch (e) { /* storage unavailable */ }
    // Let the caret blink a few times, then fade it away.
    setTimeout(() => caret.classList.add('caret-done'), 2400);
    setTimeout(() => caret.remove(), 3000);
  };

  const step = () => {
    if (index >= chars.length) { finish(); return; }
    const span = chars[index++];
    span.classList.add('on');
    span.after(caret);
    const c = span.textContent;
    const delay = /[.!?]/.test(c) ? 240
      : /[,:;]/.test(c) ? 140
      : 10 + Math.random() * 16;
    timer = setTimeout(step, delay);
  };

  skipEvents.forEach(type => window.addEventListener(type, finish, { passive: true }));
  timer = setTimeout(step, 350);
})();

/* ---------- Scroll cue: fade out once the visitor starts scrolling ---------- */
(function initScrollCue() {
  const cue = document.querySelector('.scroll-cue');
  if (!cue) return;
  let ticking = false;
  const update = () => {
    cue.classList.toggle('is-hidden', window.scrollY > 40);
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();

/* ---------- Exposure diagram: fill in when it scrolls into view ---------- */
(function initExposureReveal() {
  const figures = document.querySelectorAll('.exposure');
  if (!figures.length) return;
  if (!('IntersectionObserver' in window)) {
    figures.forEach(fig => fig.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.35 });
  figures.forEach(fig => observer.observe(fig));
})();
