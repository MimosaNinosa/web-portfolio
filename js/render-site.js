function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function renderHero() {
  const el = document.getElementById('heroContent');
  if (!el) return;
  const p = SITE.profile;
  el.innerHTML = `
    <p class="eyebrow">${escapeHtml(p.location)}</p>
    <h1>${escapeHtml(p.name)}</h1>
    <p class="role">${escapeHtml(p.roleTag)}</p>
    <p class="lede">${escapeHtml(p.tagline)}</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="projects.html">View project log →</a>
      <a class="btn" href="${p.resumeFile}" target="_blank" rel="noopener">Download résumé (PDF)</a>
      <a class="btn" href="mailto:${p.email}">Get in touch</a>
    </div>
  `;

  const statusEl = document.getElementById('statusText');
  if (statusEl) statusEl.textContent = p.status;
}

function renderAbout() {
  const el = document.getElementById('aboutContent');
  if (!el) return;
  const a = SITE.about;

  const paragraphs = a.paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('');
  const facts = a.facts.map(f => `
    <li><span class="k">${escapeHtml(f.k)}</span><span class="v">${escapeHtml(f.v)}</span></li>
  `).join('');

  el.innerHTML = `
    <div class="about-grid">
      <div class="boundary">
        <span class="boundary-tag">SEC::CLEARANCE_PROFILE</span>
        ${paragraphs}
      </div>
      <ul class="fact-list">${facts}</ul>
    </div>
  `;
}

function renderTimeline(containerId, entries) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = entries.map(entry => {
    const bullets = entry.bullets
      ? `<ul>${entry.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('')}</ul>`
      : '';
    return `
      <div class="timeline-entry">
        <div class="timeline-meta">
          <span class="timeline-role">${escapeHtml(entry.role)}</span>
          <span class="timeline-date">${escapeHtml(entry.date)}</span>
        </div>
        <div class="timeline-org">${escapeHtml(entry.org)}</div>
        ${bullets}
      </div>
    `;
  }).join('');
}

function renderSkills() {
  const el = document.getElementById('skillsGrid');
  if (!el) return;

  el.innerHTML = SITE.skills.map(group => `
    <div class="skill-group">
      <h3>${escapeHtml(group.group)}</h3>
      <div class="chip-row">
        ${group.items.map(item => `<span class="chip">${escapeHtml(item)}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderFeatured() {
  const el = document.getElementById('featuredGrid');
  if (!el || typeof PROJECTS === 'undefined') return;

  const picks = PROJECTS.slice(0, SITE.featuredCount || 3);

  el.innerHTML = picks.map(project => `
    <div class="teaser-card">
      <div class="teaser-tag">PROJ::${escapeHtml(project.id)}</div>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.summary)}</p>
      <a class="teaser-link" href="projects.html">See case file →</a>
    </div>
  `).join('');
}

function renderContact() {
  const el = document.getElementById('contactContent');
  if (!el) return;
  const p = SITE.profile;

  el.innerHTML = `
    <div class="boundary">
      <span class="boundary-tag">SYS::OUTBOUND_CHANNELS</span>
      <div class="contact-block">
        <div class="contact-row"><span class="k">Email</span><a href="mailto:${p.email}">${escapeHtml(p.email)}</a></div>
        <div class="contact-row"><span class="k">Phone</span><span>${escapeHtml(p.phone)}</span></div>
        <div class="contact-row"><span class="k">LinkedIn</span><a href="${p.linkedin}" target="_blank" rel="noopener">${escapeHtml(p.linkedinLabel)}</a></div>
      </div>
    </div>
  `;
}

function renderSite() {
  if (typeof SITE === 'undefined') return;
  renderHero();
  renderAbout();
  renderTimeline('experienceList', SITE.experience);
  renderTimeline('educationList', SITE.education);
  renderSkills();
  renderFeatured();
  renderContact();
}

renderSite();
