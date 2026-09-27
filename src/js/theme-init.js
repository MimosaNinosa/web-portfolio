// Runs in <head>, before first paint.
//  1. Apply a saved theme choice so the page doesn't flash the wrong colours.
//     (The toggle itself lives in main.js.)
//  2. Mark the page as JS-enabled, so CSS can prepare scroll-in animations.
//  3. Decide whether the homepage intro should type itself out, and hide it
//     until main.js starts typing. It plays once per browser session and
//     never for visitors who prefer reduced motion.
(function () {
  var root = document.documentElement;
  root.classList.add('js');

  try {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) root.setAttribute('data-theme', savedTheme);
  } catch (e) { /* storage unavailable */ }

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var seen = false;
  try { seen = sessionStorage.getItem('introTyped') === '1'; } catch (e) { /* storage unavailable */ }

  var isHome = location.pathname === '/' || location.pathname === '/index.html';
  if (isHome && !reduceMotion && !seen) {
    root.classList.add('intro-typing');
  }
})();
