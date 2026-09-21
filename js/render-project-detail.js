function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

const VIDEO_EXTENSIONS = /\.(mp4|webm|ogv|ogg|mov)$/i;
function isVideoFile(src) {
  return VIDEO_EXTENSIONS.test(src.split('?')[0]);
}

function renderMediaItem(item) {
  const caption = item.caption ? `<figcaption>${escapeHtml(item.caption)}</figcaption>` : '';

  if (isVideoFile(item.src)) {
    return `
      <figure>
        <video src="${escapeHtml(item.src)}" controls preload="metadata" playsinline style="width: 100%; height: auto; display: block;">
          Your browser can't play this video. ${escapeHtml(item.alt || '')}
        </video>
        ${caption}
      </figure>
    `;
  }

  return `
    <figure>
      <a href="${escapeHtml(item.src)}" target="_blank" rel="noopener">
        <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt || '')}" loading="lazy">
      </a>
      ${caption}
    </figure>
  `;
}

// A "section" is { title, body?: string[], bullets?: string[] } — either
// or both of body/bullets can be present. Renders as its own labelled
// block, e.g. Problem / Solution / My Role / Outcome — whatever fits.
function renderSection(section) {
  const body = (section.body || [])
    .map(p => `<p>${escapeHtml(p)}</p>`)
    .join('');
  const bullets = (section.bullets || [])
    .map(b => `<li>${escapeHtml(b)}</li>`)
    .join('');

  return `
    <div class="detail-section">
      <h2>${escapeHtml(section.title)}</h2>
      ${body}
      ${bullets ? `<ul>${bullets}</ul>` : ''}
    </div>
  `;
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

  // Prefer the new `sections` field. If a project hasn't been migrated
  // to it yet, fall back to wrapping its old `bullets` in a single
  // "What I Built" section, so nothing breaks for un-migrated entries.
  const sectionsToRender = (project.sections && project.sections.length)
    ? project.sections
    : (project.bullets && project.bullets.length ? [{ title: 'What I Built', bullets: project.bullets }] : []);
  const sections = sectionsToRender.map(renderSection).join('');

  const images = (project.images || [])
    .map(renderMediaItem)
    .join('');

  const linkLabels = { repo: 'Repo', demo: 'Live demo', report: 'Team report (PDF)' };
  const links = Object.entries(project.links || {})
    .filter(([key, url]) => linkLabels[key] && url)
    .map(([key, url]) => `<a class="btn" href="${escapeHtml(encodeURI(url))}" target="_blank" rel="noopener">${linkLabels[key]} →</a>`);

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



    <div class="boundary">
      <span class="boundary-tag">PROJ::CASE_SUMMARY</span>
      <p>${escapeHtml(project.summary)}</p>
      ${detail}
    </div>
    ${images ? `<div class="${project.images.length === 1 ? 'single-media' : 'case-gallery detail-gallery'}">${images}</div>` : ''}

    ${sections}

    ${links.length ? `<div class="hero-actions detail-links">${links.join('')}</div>` : ''}
  `;
}

renderProjectDetail();
