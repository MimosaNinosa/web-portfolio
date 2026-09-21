function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Each entry in a post's `body` array can be:
//  - a "### Heading" line          → rendered as a subheading
//  - a fenced code block (```...```) → rendered as a code panel
//  - anything else                  → a normal paragraph, where
//                                      `inline code` still renders as code
function renderBodyBlock(text) {
  const codeMatch = text.match(/^```(\w*)\n([\s\S]*?)```$/);
  if (codeMatch) {
    const lang = codeMatch[1];
    const code = codeMatch[2];
    const label = lang || 'code';
    return `
      <div class="code-panel">
        <div class="code-panel-head">
          <span class="code-lang">${escapeHtml(label)}</span>
          <button class="copy-btn" type="button">Copy</button>
        </div>
        <pre class="code-block"><code>${escapeHtml(code)}</code></pre>
      </div>
    `;
  }

  if (text.startsWith('### ')) {
    return `<h3>${escapeHtml(text.slice(4))}</h3>`;
  }

  const escaped = escapeHtml(text);
  const withInlineCode = escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
  return `<p>${withInlineCode}</p>`;
}

// Reads the code straight from the DOM (so entities like &amp; come back
// decoded automatically) and copies it, with a "Copied!" confirmation.
function attachCopyButtons(container) {
  container.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const panel = btn.closest('.code-panel');
      const codeEl = panel && panel.querySelector('code');
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
}

function findPost() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const id = params.get('id');
  if (!slug && !id) return null;

  return POSTS.find(p => (slug && p.slug === slug) || (id && p.id === id)) || null;
}

function renderNotFound(container) {
  container.innerHTML = `
    <div class="empty-slot">
      Couldn't find that post — it may have been renamed or removed.
      <br><a href="blog.html">← Back to the full blog</a>
    </div>
  `;
}

function renderPostDetail() {
  const container = document.getElementById('postDetail');
  if (!container || typeof POSTS === 'undefined') return;

  const post = findPost();
  if (!post) { renderNotFound(container); return; }

  document.title = `${post.title} — Lee Chun Yong`;

  const tags = (post.tags || [])
    .map(t => `<span class="chip">${escapeHtml(t)}</span>`)
    .join('');

  const body = (post.body || [])
    .map(renderBodyBlock)
    .join('');

  container.innerHTML = `
    <div class="detail-head">
      <div class="case-head">
        <span class="case-id mono">POST::${escapeHtml(post.id)}</span>
        <span class="case-date mono">${escapeHtml(post.date)}${post.readTime ? ` · ${escapeHtml(post.readTime)}` : ''}</span>
      </div>
      <h1>${escapeHtml(post.title)}</h1>
      <div class="chip-row">${tags}</div>
    </div>

    <div class="post-body">${body}</div>
  `;

  attachCopyButtons(container);
}

renderPostDetail();
