function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function renderPost(post) {
  const tags = (post.tags || [])
    .map(t => `<span class="chip">${escapeHtml(t)}</span>`)
    .join('');

  const body = (post.body || [])
    .map(p => `<p>${escapeHtml(p)}</p>`)
    .join('');

  return `
    <article class="case-file">
      <div class="case-head">
        <span class="case-id mono">POST::${escapeHtml(post.id)}</span>
        <span class="case-date mono">${escapeHtml(post.date)}${post.readTime ? ` · ${escapeHtml(post.readTime)}` : ''}</span>
      </div>
      <h2>${escapeHtml(post.title)}</h2>
      <div class="post-body">${body}</div>
      <div class="chip-row">${tags}</div>
    </article>
  `;
}

function renderBlog() {
  const container = document.getElementById('blogLog');
  if (!container || typeof POSTS === 'undefined') return;

  if (!POSTS.length) {
    container.innerHTML = `
      <div class="empty-slot">
        No posts yet — add one in js/blog-data.js.
      </div>
    `;
    return;
  }

  container.innerHTML = POSTS.map(renderPost).join('');

  container.insertAdjacentHTML('beforeend', `
    <div class="empty-slot">
      + next post goes in js/blog-data.js — copy an object, fill it in, save.
    </div>
  `);
}

renderBlog();
