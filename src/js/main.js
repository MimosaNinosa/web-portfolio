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
