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
  if (project.links?.report) links.push(`<a href="${project.links.report}" target="_blank" rel="noopener">Report →</a>`);

  // Check for video and create HTML element
  const videoPlayer = project.video
      ? `<div class="case-video" style="margin: 16px 0;">
           <video class="autoplay-video" muted playsinline loop controls width="100%" style="border-radius: 8px;">
             <source src="${project.video}" type="video/mp4">
             Your browser does not support the video tag.
           </video>
         </div>`
      : '';

  return `
    <article class="case-file">
      <div class="case-head">
        <span class="case-id mono">PROJ::${escapeHtml(project.id)}</span>
        <span class="case-date mono">${escapeHtml(project.period)}</span>
      </div>
      <h2>${escapeHtml(project.title)}</h2>
      <div class="case-role">${escapeHtml(project.role)}</div>
      <p class="summary">${escapeHtml(project.summary)}</p>

      ${videoPlayer}

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

function setupAutoplayObserver() {
  const videos = document.querySelectorAll('.autoplay-video');
  if (!videos.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        // Plays video when scrolled into view
        video.play().catch(err => console.log('Autoplay prevented:', err));
      } else {
        // Pauses video when scrolled out of view
        video.pause();
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the video is visible
  });

  videos.forEach(video => observer.observe(video));
}

// Render the case files first, then attach the observer
renderProjectLog();
setupAutoplayObserver();
