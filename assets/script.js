async function loadProfile() {
  try {
    const res = await fetch('./data/profile.json');
    const p = await res.json();

    // Header
    document.getElementById('name').textContent = p.name;
    document.getElementById('nameFooter').textContent = p.name;
    document.getElementById('tagline').textContent = p.tagline;
    document.getElementById('year').textContent = new Date().getFullYear();

    // Highlights
    const highlights = document.getElementById('highlights');
    p.highlights.forEach(h => {
      const span = document.createElement('span');
      span.className = 'chip';
      span.textContent = h;
      highlights.appendChild(span);
    });

    // About
    document.getElementById('aboutText').textContent = p.about;

    // Socials
    const socials = document.getElementById('socials');
    p.socials.forEach(s => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${s.url}" target="_blank" rel="noopener"><i class="${s.icon}"></i> ${s.label}</a>`;
      socials.appendChild(li);
    });

    // Experience
    const exp = document.getElementById('experienceList');
    p.experience.forEach(e => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `
        <div class="role">${e.role}</div>
        <div class="meta">
          <span>${e.company}</span>
          <span>•</span>
          <span>${e.period}</span>
          ${e.location ? `<span>•</span><span>${e.location}</span>` : ''}
        </div>
        <ul>${e.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
        <div class="chips">${(e.stack||[]).map(s => `<span class="pill">${s}</span>`).join('')}</div>
      `;
      exp.appendChild(div);
    });

    // Projects
    const projects = document.getElementById('projectsGrid');
    p.projects.forEach(pr => {
      const card = document.createElement('div');
      card.className = 'card project';
      card.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center">
          <h3 style="margin:0">${pr.name}</h3>
          ${pr.link ? `<a href="${pr.link}" target="_blank" rel="noopener">View</a>` : ''}
        </div>
        <p>${pr.description}</p>
        <div class="chips">${(pr.tags||[]).map(t => `<span class="pill">${t}</span>`).join('')}</div>
      `;
      projects.appendChild(card);
    });

    // Skills
    const skillsWrap = document.getElementById('skillsWrap');
    p.skills.forEach(group => {
      const g = document.createElement('div');
      g.className = 'group';
      g.innerHTML = `
        <div style="font-weight:700;margin-bottom:6px">${group.group}</div>
        <div class="chips">${group.items.map(i => `<span class="pill">${i}</span>`).join('')}</div>
      `;
      skillsWrap.appendChild(g);
    });

    // Education
    const edu = document.getElementById('educationList');
    p.education.forEach(ed => {
      const li = document.createElement('li');
      li.className = 'edu-item';
      li.innerHTML = `
        <div style="font-weight:700">${ed.title}</div>
        <div class="meta">
          <span>${ed.institution}</span>
          <span>•</span>
          <span>${ed.period}</span>
        </div>
      `;
      edu.appendChild(li);
    });

    // Contact
    document.getElementById('email').textContent = p.email;
    document.getElementById('email').href = `mailto:${p.email}`;
    document.getElementById('location').textContent = p.location;
    document.getElementById('openTo').textContent = p.open_to;

  } catch (e) {
    console.error('Profile load failed', e);
  }
}

loadProfile();
