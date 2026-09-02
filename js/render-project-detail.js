function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function findProject() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const id = params.get("id");
  if (!slug && !id) return null;

  return (
    PROJECTS.find((p) => (slug && p.slug === slug) || (id && p.id === id)) ||
    null
  );
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
  const container = document.getElementById("projectDetail");
  if (!container || typeof PROJECTS === "undefined") return;

  const project = findProject();
  if (!project) {
    renderNotFound(container);
    return;
  }

  document.title = `${project.title} — Lee Chun Yong`;

  const tags = (project.tags || [])
    .map((t) => `<span class="chip">${escapeHtml(t)}</span>`)
    .join("");

  const detail = (project.detail || [])
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("");

  const bullets = (project.bullets || [])
    .map((b) => `<li>${escapeHtml(b)}</li>`)
    .join("");

  const media = (project.images || project.media || [])
    .map((file) => {
      const src = escapeHtml(file.src);
      const caption = file.caption
        ? `<figcaption>${escapeHtml(file.caption)}</figcaption>`
        : "";

      // Check if the file is a video based on extension or an explicit type flag
      if (src.match(/\.(mp4|webm|ogg)$/i) || file.type === "video") {
        return `
            <figure style="grid-column: 1 / -1;">
              <video src="${src}" controls playsinline muted loop style="display: block; width: 100%; height: auto; border-radius: 8px;"></video>
              ${caption}
            </figure>
          `;
      }

      // Fallback to standard image rendering
      return `
          <figure>
            <a href="${src}" target="_blank" rel="noopener">
              <img src="${src}" alt="${escapeHtml(file.alt || "")}" loading="lazy">
            </a>
            ${caption}
          </figure>
        `;
    })
    .join("");

  const links = [];
  if (project.links?.repo)
    links.push(
      `<a class="btn" href="${project.links.repo}" target="_blank" rel="noopener">Repo →</a>`,
    );
  if (project.links?.demo)
    links.push(
      `<a class="btn" href="${project.links.demo}" target="_blank" rel="noopener">Live demo →</a>`,
    );

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

    ${media ? `<div class="case-gallery detail-gallery">${media}</div>` : ""}

    <div class="boundary">
      <span class="boundary-tag">PROJ::CASE_SUMMARY</span>
      <p>${escapeHtml(project.summary)}</p>
      ${detail}
    </div>

    ${
      bullets
        ? `
      <div class="detail-section">
        <h2>What I built</h2>
        <ul>${bullets}</ul>
      </div>
    `
        : ""
    }

    ${links.length ? `<div class="hero-actions detail-links">${links.join("")}</div>` : ""}
  `;
}

renderProjectDetail();
