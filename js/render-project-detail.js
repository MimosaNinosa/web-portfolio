function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function findProject() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const id = params.get('id');
  if (!slug && !id) return null;

  return PROJECTS.find(p => (slug && p.slug === slug) || (id && p.id === id)) || null;
}

function renderNotFound(container) {
  container.innerHTML = `
    <div class="empty-slot">
      Couldn't find that project — it may have been renamed or removed.
      <br><a href="projects.html">← Back to the full project log</a>
    </div>
  `;
}

function renderProjectDetail() {
  const container = document.getElementById('projectDetail');
  if (!container || typeof PROJECTS === 'undefined') return;

  const project = findProject();
  if (!project) { renderNotFound(container); return; }

  document.title = `${project.title} — Lee Chun Yong`;

  const tags = (project.tags || [])
    .map(t => `<span class="chip">${escapeHtml(t)}</span>`)
    .join('');

  const detail = (project.detail || [])
    .map(p => `<p>${escapeHtml(p)}</p>`)
    .join('');

  const bullets = (project.bullets || [])
    .map(b => `<li>${escapeHtml(b)}</li>`)
    .join('');

  const images = (project.images || [])
    .map(img => `
      <figure>
        <a href="${escapeHtml(img.src)}" target="_blank" rel="noopener">
          <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt || '')}" loading="lazy">
        </a>
        ${img.caption ? `<figcaption>${escapeHtml(img.caption)}</figcaption>` : ''}
      </figure>
    `)
    .join('');

  const links = [];
  if (project.links?.repo) links.push(`<a class="btn" href="${project.links.repo}" target="_blank" rel="noopener">Repo →</a>`);
  if (project.links?.demo) links.push(`<a class="btn" href="${project.links.demo}" target="_blank" rel="noopener">Live demo →</a>`);

  container.innerHTML = `
    <div class="detail-head">
      <div class="case-head">
        <span class="case-id mono">PROJ::${escapeHtml(project.id)}</span>
        <span class="case-date mono">${escapeHtml(project.period)}</span>
      </div>
      <h1>${escapeHtml(project.title)}</h1>
      <div class="case-role">${escapeHtml(project.role)}</div>
      <div class="chip-row">${tags}</div>
    </div>

    ${images ? `<div class="case-gallery detail-gallery">${images}</div>` : ''}

    <div class="boundary">
      <span class="boundary-tag">PROJ::CASE_SUMMARY</span>
      <p>${escapeHtml(project.summary)}</p>
      ${detail}
    </div>

    ${bullets ? `
      <div class="detail-section">
        <h2>What I built</h2>
        <ul>${bullets}</ul>
      </div>
    ` : ''}

    ${links.length ? `<div class="hero-actions detail-links">${links.join('')}</div>` : ''}
  `;
}

renderProjectDetail();
