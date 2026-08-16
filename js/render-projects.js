function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function renderCaseFile(project) {
  const tags = (project.tags || [])
    .map(t => `<span class="chip">${escapeHtml(t)}</span>`)
    .join('');

  const bullets = (project.bullets || [])
    .map(b => `<li>${escapeHtml(b)}</li>`)
    .join('');

  const links = [];
  if (project.links?.repo) links.push(`<a href="${project.links.repo}" target="_blank" rel="noopener">Repo →</a>`);
  if (project.links?.demo) links.push(`<a href="${project.links.demo}" target="_blank" rel="noopener">Live demo →</a>`);

  return `
    <article class="case-file">
      <div class="case-head">
        <span class="case-id mono">PROJ::${escapeHtml(project.id)}</span>
        <span class="case-date mono">${escapeHtml(project.period)}</span>
      </div>
      <h2>${escapeHtml(project.title)}</h2>
      <div class="case-role">${escapeHtml(project.role)}</div>
      <p class="summary">${escapeHtml(project.summary)}</p>
      ${bullets ? `<ul>${bullets}</ul>` : ''}
      <div class="chip-row" style="margin-bottom:14px;">${tags}</div>
      ${links.length ? `<div class="case-links">${links.join('')}</div>` : ''}
    </article>
  `;
}

function renderProjectLog() {
  const container = document.getElementById('projectLog');
  if (!container || typeof PROJECTS === 'undefined') return;

  container.innerHTML = PROJECTS.map(renderCaseFile).join('');

  // Template hint — remove this block once you've added a couple of your own entries
  container.insertAdjacentHTML('beforeend', `
    <div class="empty-slot">
      + next entry goes in js/projects-data.js — copy an object, fill it in, save.
    </div>
  `);
}

renderProjectLog();
