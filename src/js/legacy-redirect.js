// Sends old query-string URLs (project.html?slug=…, post.html?id=…) to
// their new pages. The map is written into the page at build time.
(function () {
  const body = document.body;
  let map = {};
  try { map = JSON.parse(body.dataset.redirects || '{}'); } catch (e) { /* ignore */ }

  const params = new URLSearchParams(window.location.search);
  const key = params.get('slug') || params.get('id');
  const target = (key && map[key]) || body.dataset.fallback;
  if (target) window.location.replace(target);
})();
