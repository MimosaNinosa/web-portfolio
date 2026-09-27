// Runs in <head>, before first paint: apply a saved theme choice so the
// page doesn't flash the wrong colours. The toggle lives in main.js.
try {
  var savedTheme = localStorage.getItem('theme');
  if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
} catch (e) { /* storage unavailable */ }
