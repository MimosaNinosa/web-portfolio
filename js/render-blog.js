function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function postUrl(post) {
  const key = post.slug
    ? `slug=${encodeURIComponent(post.slug)}`
    : `id=${encodeURIComponent(post.id)}`;
  return `post.html?${key}`;
}

// Compact card for the list page: id, title, date, tags, read time only.
// The full write-up only renders on the post's own page (post.html).
function renderPost(post) {
  const tags = (post.tags || [])
    .map((t) => `<span class="chip">${escapeHtml(t)}</span>`)
    .join("");

  const href = postUrl(post);

  return `
    <article class="case-file case-file-compact">
      <a class="case-file-link" href="${href}" aria-label="Read full post: ${escapeHtml(post.title)}">
        <div class="case-head">
          <span class="case-id mono">POST::${escapeHtml(post.id)}</span>
          <span class="case-date mono">${escapeHtml(post.date)}${post.readTime ? ` · ${escapeHtml(post.readTime)}` : ""}</span>
        </div>
        <h2 class="case-title-link">${escapeHtml(post.title)}</h2>
        <div class="chip-row">${tags}</div>
      </a>
    </article>
  `;
}

function renderBlog() {
  const container = document.getElementById("blogLog");
  if (!container || typeof POSTS === "undefined") return;

  if (!POSTS.length) {
    container.innerHTML = `
      <div class="empty-slot">
        No posts yet — add one in js/blog-data.js.
      </div>
    `;
    return;
  }

  container.innerHTML = POSTS.map(renderPost).join("");

  container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="empty-slot">
      + next post goes in js/blog-data.js — copy an object, fill it in, save.
    </div>
  `,
  );
}

renderBlog();
