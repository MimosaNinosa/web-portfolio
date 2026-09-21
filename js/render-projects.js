function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function projectUrl(project) {
  const key = project.slug
    ? `slug=${encodeURIComponent(project.slug)}`
    : `id=${encodeURIComponent(project.id)}`;
  return `project.html?${key}`;
}

function renderCaseFile(project) {
  const tags = (project.tags || [])
    .map((t) => `<span class="chip">${escapeHtml(t)}</span>`)
    .join("");

  const detailHref = projectUrl(project);

  return `
    <article class="case-file case-file-compact">
      <a class="case-file-link" href="${detailHref}" aria-label="Read full case file: ${escapeHtml(project.title)}">
        <div class="case-head">
          <span class="case-id mono">PROJ::${escapeHtml(project.id)}</span>
          <span class="case-date mono">${escapeHtml(project.period)}</span>
        </div>
        <h2 class="case-title-link">${escapeHtml(project.title)}</h2>
        <p class="summary">${escapeHtml(project.summary)}</p>
        <div class="chip-row">${tags}</div>
      </a>
    </article>
  `;
}

function renderProjectLog() {
  const container = document.getElementById("projectLog");
  if (!container || typeof PROJECTS === "undefined") return;

  container.innerHTML = PROJECTS.map(renderCaseFile).join("");

  // Template hint — remove this block once you've added a couple of your own entries
  container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="empty-slot">
      + next entry goes in js/projects-data.js — copy an object, fill it in, save.
    </div>
  `,
  );
}

renderProjectLog();
