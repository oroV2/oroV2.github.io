import { icons, brandIcons } from './icons.js';

const list = (items, cls = '') =>
  `<ul class="${cls}">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;

const chips = (items, cls = 'chips') =>
  `<ul class="${cls}" role="list">${items
    .map((i) => `<li class="chip">${i}</li>`)
    .join('')}</ul>`;

const sectionHead = (eyebrow, title, lead, id) => `
  <header class="section-head" data-reveal>
    <p class="eyebrow"><span class="eyebrow-dot" aria-hidden="true"></span>${eyebrow}</p>
    <h2 id="${id}-title">${title}</h2>
    ${lead ? `<p class="section-lead">${lead}</p>` : ''}
  </header>`;

/* ------------------------------------------------------------------ header */

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' }
];

export const renderHeader = (p) => `
<a class="skip-link" href="#main">Skip to main content</a>
<header class="site-header" id="site-header">
  <div class="shell header-inner">
    <a class="brand" href="#top" aria-label="${p.name} — back to top">
      <span class="brand-mark" aria-hidden="true">OP</span>
      <span class="brand-text">
        <span class="brand-name">${p.shortName}</span>
        <span class="brand-role">${p.title}</span>
      </span>
    </a>

    <nav class="site-nav" id="site-nav" aria-label="Primary">
      <ul>
        ${navItems
          .map((n) => `<li><a href="${n.href}">${n.label}</a></li>`)
          .join('')}
      </ul>
    </nav>

    <div class="header-actions">
      <button class="icon-btn" id="theme-toggle" type="button" aria-label="Switch to dark theme" aria-pressed="false">
        <span class="theme-icon theme-icon--sun">${icons.sun}</span>
        <span class="theme-icon theme-icon--moon">${icons.moon}</span>
      </button>
      <a class="btn btn-sm btn-primary header-cta" href="${p.resume.path}" download>
        ${icons.download}<span>Resume</span>
      </a>
      <button class="icon-btn nav-toggle" id="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav">
        <span class="nav-toggle-open">${icons.menu}</span>
        <span class="nav-toggle-close">${icons.close}</span>
      </button>
    </div>
  </div>
  <div class="scroll-progress" id="scroll-progress" aria-hidden="true"></div>
</header>`;

/* -------------------------------------------------------------------- hero */

export const renderHero = (p, exp) => `
<section class="hero" id="top" aria-labelledby="hero-title">
  <div class="hero-bg" aria-hidden="true">
    <span class="hero-grid"></span>
    <span class="hero-glow hero-glow--a"></span>
    <span class="hero-glow hero-glow--b"></span>
  </div>

  <div class="shell hero-inner">
    <div class="hero-copy">
      <p class="hero-eyebrow" data-reveal>
        <span class="status-dot" aria-hidden="true"></span>
        ${exp[0].role} at ${exp[0].company} &middot; ${p.location.split(',')[0]}, India
      </p>

      <h1 id="hero-title" data-reveal data-reveal-delay="1">
        <span class="hero-name">${p.name}</span>
        <span class="hero-title-line">${p.title}</span>
      </h1>

      <p class="hero-tagline" data-reveal data-reveal-delay="2">${p.tagline}</p>

      <p class="hero-summary" data-reveal data-reveal-delay="3">${p.summaryAlt}</p>

      <div class="hero-actions" data-reveal data-reveal-delay="4">
        <a class="btn btn-primary" href="#experience">${icons.briefcase}<span>View experience</span></a>
        <a class="btn btn-ghost" href="#projects">${icons.layers}<span>View projects</span></a>
        <a class="btn btn-ghost" href="${p.resume.path}" download>${icons.download}<span>Download resume</span></a>
      </div>

      <div class="hero-links" data-reveal data-reveal-delay="5">
        <a class="link-pill" href="${p.links.github}" target="_blank" rel="noopener noreferrer">
          ${brandIcons.github}<span>GitHub</span>
        </a>
        <a class="link-pill" href="${p.links.linkedin}" target="_blank" rel="noopener noreferrer">
          ${brandIcons.linkedin}<span>LinkedIn</span>
        </a>
        <a class="link-pill" href="mailto:${p.email}">${icons.mail}<span>${p.email}</span></a>
      </div>
    </div>

    <div class="hero-visual" data-reveal data-reveal-delay="3">
      <div class="portrait">
        <picture>
          <source type="image/webp" srcset="${p.photo.base}-400.webp 400w, ${p.photo.base}-720.webp 720w" sizes="(max-width: 720px) 220px, 360px">
          <img src="${p.photo.base}-720.jpg"
               srcset="${p.photo.base}-400.jpg 400w, ${p.photo.base}-720.jpg 720w"
               sizes="(max-width: 720px) 220px, 360px"
               width="360" height="360"
               alt="${p.photo.alt}" fetchpriority="high" decoding="async">
        </picture>
        <span class="portrait-ring" aria-hidden="true"></span>
      </div>

      <dl class="hero-stats">
        <div class="hero-stat">
          <dt>Experience</dt>
          <dd>${p.experienceHeadline}</dd>
        </div>
        <div class="hero-stat">
          <dt>Performance gain</dt>
          <dd>70%</dd>
        </div>
        <div class="hero-stat">
          <dt>Microservices shipped</dt>
          <dd>7+</dd>
        </div>
      </dl>
    </div>
  </div>

  <ul class="hero-marquee" role="list" aria-label="Core technologies">
    ${p.focus.map((f) => `<li>${f}</li>`).join('')}
  </ul>
</section>`;

/* ------------------------------------------------------------------- about */

export const renderAbout = (p, edu) => `
<section id="about" class="section section--tint" aria-labelledby="about-title">
  <div class="shell">
    ${sectionHead('About', 'Professional summary', null, 'about')}

    <div class="about-grid">
      <div class="about-main" data-reveal>
        <p class="about-lead">${p.summary}</p>

        <div class="about-facts">
          <div class="fact">
            <span class="fact-icon">${icons.briefcase}</span>
            <div><dt>Current role</dt><dd>${p.currentRole}, ${p.currentCompany}</dd></div>
          </div>
          <div class="fact">
            <span class="fact-icon">${icons.cap}</span>
            <div><dt>Education</dt><dd>${edu[0].degree}, ${edu[0].period}</dd></div>
          </div>
          <div class="fact">
            <span class="fact-icon">${icons.pin}</span>
            <div><dt>Based in</dt><dd>${p.location}</dd></div>
          </div>
          <div class="fact">
            <span class="fact-icon">${icons.shield}</span>
            <div><dt>Specialisation</dt><dd>Secure, scalable microservices</dd></div>
          </div>
        </div>
      </div>

      <aside class="about-side" data-reveal data-reveal-delay="2" aria-label="Focus areas">
        <h3 class="side-title">${icons.spark}<span>Focus areas</span></h3>
        ${chips(p.focus, 'chips chips--stack')}
        <a class="side-link" href="${p.resume.path}" download>
          ${icons.download}<span>Download full resume (PDF)</span>
        </a>
      </aside>
    </div>
  </div>
</section>`;

/* ------------------------------------------------------------------ impact */

export const renderImpact = (achievements) => `
<section id="impact" class="section section--dark" aria-labelledby="impact-title">
  <div class="shell">
    ${sectionHead(
      'Impact',
      'Measured results',
      'Every figure below is taken directly from delivered work described in my resume.',
      'impact'
    )}

    <ul class="stat-grid" role="list">
      ${achievements
        .map(
          (a, i) => `
        <li class="stat-card" data-reveal data-reveal-delay="${i % 3}">
          <p class="stat-value"><span class="counter" data-count="${a.value}">0</span>${a.suffix}</p>
          <p class="stat-label">${a.label}</p>
          <p class="stat-detail">${a.detail}</p>
        </li>`
        )
        .join('')}
    </ul>
  </div>
</section>`;

/* -------------------------------------------------------------- experience */

export const renderExperience = (exp) => `
<section id="experience" class="section" aria-labelledby="experience-title">
  <div class="shell">
    ${sectionHead(
      'Career',
      'Professional experience',
      'Four roles across enterprise product engineering, secure backend development and IT infrastructure.',
      'experience'
    )}

    <ol class="timeline" role="list">
      ${exp
        .map(
          (job, i) => `
        <li class="tl-item${job.current ? ' tl-item--current' : ''}${i > 0 ? ' tl-item--past' : ''}" data-reveal>
          <span class="tl-marker" aria-hidden="true"></span>
          <article class="tl-card">
            <div class="tl-head">
              <div>
                <h3 class="tl-role">${job.role}</h3>
                <p class="tl-company">${job.company}</p>
              </div>
              <p class="tl-period">
                ${job.current ? '<span class="badge badge--live">Current</span>' : ''}
                <time>${job.period}</time>
              </p>
            </div>

            <p class="tl-summary">${job.summary}</p>

            ${
              job.metrics && job.metrics.length
                ? `<ul class="tl-metrics" role="list">${job.metrics
                    .map(
                      (m) =>
                        `<li><strong>${m.value}</strong><span>${m.label}</span></li>`
                    )
                    .join('')}</ul>`
                : ''
            }

            <details class="tl-details"${i === 0 ? ' open' : ''}>
              <summary>
                <span class="tl-summary-label">Responsibilities &amp; achievements</span>
                <span class="tl-chevron" aria-hidden="true"></span>
              </summary>
              ${list(job.highlights, 'bullets')}
            </details>

            ${chips(job.tech, 'chips chips--tech')}
          </article>
        </li>`
        )
        .join('')}
    </ol>
  </div>
</section>`;

/* ---------------------------------------------------------------- projects */

const projectMeta = (label, values) =>
  values && values.length
    ? `<div class="meta-row"><dt>${label}</dt><dd>${values.join(' &middot; ')}</dd></div>`
    : '';

export const renderProjects = (projects) => `
<section id="projects" class="section section--tint" aria-labelledby="projects-title">
  <div class="shell">
    ${sectionHead(
      'Work',
      'Selected projects',
      'Enterprise projects are described at a professional level only — no client data, credentials, endpoints or proprietary code is published.',
      'projects'
    )}

    <div class="project-grid">
      ${projects
        .map(
          (pr, i) => `
        <article class="project-card" data-reveal data-reveal-delay="${i}" aria-labelledby="project-${pr.id}">
          <div class="project-top">
            <p class="project-context">${pr.context}</p>
            <h3 id="project-${pr.id}">${pr.name}</h3>
            <p class="project-purpose">${pr.purpose}</p>
          </div>

          <p class="project-role"><span class="project-role-key">Role</span>${pr.role}</p>

          <div class="project-block">
            <h4>What I built</h4>
            ${list(pr.responsibilities, 'bullets bullets--sm')}
          </div>

          <div class="project-block">
            <h4>${icons.shield}<span>Security</span></h4>
            ${chips(pr.security, 'chips chips--sec')}
          </div>

          <dl class="project-meta">
            ${projectMeta('Platform', pr.platform)}
            ${projectMeta('Database', pr.database)}
            ${projectMeta('App server', pr.webserver)}
          </dl>

          <div class="project-block">
            <h4>Impact</h4>
            ${list(pr.impact, 'bullets bullets--sm bullets--impact')}
          </div>

          ${chips(pr.tech, 'chips chips--tech')}
        </article>`
        )
        .join('')}
    </div>
  </div>
</section>`;

/* ------------------------------------------------------------ architecture */

const archDiagram = () => `
<figure class="arch-figure" data-reveal>
  <svg class="arch-svg" viewBox="0 0 960 470" role="img"
       aria-labelledby="arch-svg-title arch-svg-desc" preserveAspectRatio="xMidYMid meet">
    <title id="arch-svg-title">Secure microservices architecture</title>
    <desc id="arch-svg-desc">A React.js client sends AES-encrypted requests to a Spring Cloud Gateway Server, which authenticates against LDAP and filters calls. The gateway resolves services through a Eureka Server and routes to Spring Boot microservices, which exchange AES-encrypted data secured by multi-level JWT and database-driven tokens, and read and write to a MySQL or Oracle database through Hibernate.</desc>

    <defs>
      <marker id="arw" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 1.2 9 5 0 8.8Z" fill="var(--arch-line)"/>
      </marker>
    </defs>

    <!-- lane labels -->
    <g class="arch-lane">
      <text x="20" y="52">CLIENT</text>
      <text x="20" y="169">EDGE</text>
      <text x="20" y="289">PLATFORM</text>
      <text x="20" y="419">DATA</text>
    </g>

    <!-- client -->
    <g class="arch-node">
      <rect x="410" y="22" width="240" height="62" rx="14"/>
      <text class="arch-title" x="530" y="48">React.js frontend</text>
      <text class="arch-sub" x="530" y="68">LDAP login &#183; AES-encrypted payloads</text>
    </g>

    <!-- gateway -->
    <g class="arch-node arch-node--accent">
      <rect x="380" y="130" width="300" height="70" rx="14"/>
      <text class="arch-title" x="530" y="158">Spring Cloud Gateway Server</text>
      <text class="arch-sub" x="530" y="180">Centralised auth &#183; call filtering</text>
    </g>

    <!-- ldap -->
    <g class="arch-node arch-node--sec">
      <rect x="130" y="132" width="200" height="66" rx="14"/>
      <text class="arch-title" x="230" y="159">LDAP directory</text>
      <text class="arch-sub" x="230" y="180">Enterprise authentication</text>
    </g>

    <!-- eureka -->
    <g class="arch-node arch-node--sec">
      <rect x="736" y="132" width="204" height="66" rx="14"/>
      <text class="arch-title" x="838" y="159">Eureka Server</text>
      <text class="arch-sub" x="838" y="180">Discovery &#183; load balancing</text>
    </g>

    <!-- microservices -->
    <g class="arch-node">
      <rect x="150" y="252" width="196" height="66" rx="14"/>
      <text class="arch-title" x="248" y="279">Microservice</text>
      <text class="arch-sub" x="248" y="300">Spring Boot &#183; Java 17</text>
    </g>
    <g class="arch-node">
      <rect x="432" y="252" width="196" height="66" rx="14"/>
      <text class="arch-title" x="530" y="279">Microservice</text>
      <text class="arch-sub" x="530" y="300">Spring Boot &#183; Java 17</text>
    </g>
    <g class="arch-node">
      <rect x="714" y="252" width="196" height="66" rx="14"/>
      <text class="arch-title" x="812" y="279">Microservice</text>
      <text class="arch-sub" x="812" y="300">7+ services deployed</text>
    </g>

    <!-- database -->
    <g class="arch-node arch-node--data">
      <rect x="410" y="382" width="240" height="66" rx="14"/>
      <text class="arch-title" x="530" y="409">MySQL / Oracle</text>
      <text class="arch-sub" x="530" y="430">Hibernate &#183; token store</text>
    </g>

    <!-- edges -->
    <g class="arch-edge">
      <path d="M530 84 V130" marker-end="url(#arw)"/>
      <path d="M380 165 H336" marker-end="url(#arw)"/>
      <path d="M680 165 H730" marker-end="url(#arw)"/>
      <path d="M500 200 V226 H248 V252" marker-end="url(#arw)"/>
      <path d="M530 200 V252" marker-end="url(#arw)"/>
      <path d="M560 200 V226 H812 V252" marker-end="url(#arw)"/>
      <path d="M248 318 V352 H530 V382" marker-end="url(#arw)"/>
      <path d="M530 318 V382" marker-end="url(#arw)"/>
      <path d="M812 318 V352 H530"/>
    </g>

    <g class="arch-edge-label">
      <text x="542" y="112">AES / HTTPS</text>
      <text x="542" y="228">JWT + DB token</text>
      <text x="542" y="370">Hibernate</text>
    </g>
  </svg>
  <figcaption class="arch-caption">
    Secure microservices platform — request path from the React.js client through the gateway to the Spring Boot services and database.
  </figcaption>
</figure>`;

export const renderArchitecture = (arch) => `
<section id="architecture" class="section" aria-labelledby="architecture-title">
  <div class="shell">
    ${sectionHead(
      'Engineering',
      'Architecture',
      arch.note,
      'architecture'
    )}

    <p class="arch-source" data-reveal><span class="badge badge--source">Documented</span>${arch.source}</p>

    ${archDiagram()}

    <div class="arch-layers">
      ${arch.layers
        .map(
          (layer, i) => `
        <section class="arch-layer" data-reveal data-reveal-delay="${i % 3}" aria-label="${layer.name} layer">
          <h3>${layer.name}</h3>
          <ul role="list">
            ${layer.items
              .map(
                (it) =>
                  `<li><strong>${it.label}</strong><span>${it.detail}</span></li>`
              )
              .join('')}
          </ul>
        </section>`
        )
        .join('')}
    </div>

    <p class="arch-runtime" data-reveal><span>Runtime &amp; delivery</span></p>
    ${chips(arch.runtime, 'chips chips--tech')}
  </div>
</section>`;

/* ------------------------------------------------------------------ skills */

export const renderSkills = (skills) => `
<section id="skills" class="section section--tint" aria-labelledby="skills-title">
  <div class="shell">
    ${sectionHead(
      'Toolkit',
      'Technical skills',
      'Grouped as they appear in my resume — no invented proficiency scores.',
      'skills'
    )}

    <div class="skill-grid">
      ${skills
        .map(
          (s, i) => `
        <article class="skill-card" data-reveal data-reveal-delay="${i % 3}">
          <h3><span class="skill-icon">${icons[s.icon]}</span>${s.group}</h3>
          ${chips(s.items, 'chips chips--tech')}
        </article>`
        )
        .join('')}
    </div>
  </div>
</section>`;

/* --------------------------------------------------- education / creds */

export const renderCredentials = (edu, certs, awards) => `
<section id="education" class="section" aria-labelledby="education-title">
  <div class="shell">
    ${sectionHead('Credentials', 'Education, certifications &amp; awards', null, 'education')}

    <div class="cred-grid">
      <article class="cred-card" data-reveal>
        <h3><span class="cred-icon">${icons.cap}</span>Education</h3>
        <ul role="list" class="cred-list">
          ${edu
            .map(
              (e) => `
            <li>
              <p class="cred-name">${e.degree}</p>
              <p class="cred-meta">${e.institution}</p>
              <p class="cred-foot"><time>${e.period}</time><span>${e.detail}</span></p>
            </li>`
            )
            .join('')}
        </ul>
      </article>

      <article class="cred-card cred-card--wide" data-reveal data-reveal-delay="1">
        <h3><span class="cred-icon">${icons.certificate}</span>Certifications</h3>
        <ul role="list" class="cred-list cred-list--split">
          ${certs
            .map(
              (c) => `
            <li>
              <p class="cred-name">${c.name}</p>
              <p class="cred-foot"><span>${c.issuer}</span><time>${c.date}</time></p>
            </li>`
            )
            .join('')}
        </ul>
      </article>

      <article class="cred-card cred-card--award" data-reveal data-reveal-delay="2">
        <h3><span class="cred-icon">${icons.award}</span>Awards</h3>
        <ul role="list" class="cred-list">
          ${awards
            .map(
              (a) => `
            <li>
              <p class="cred-name">${a.name}</p>
              <p class="cred-meta">${a.issuer}</p>
              <p class="cred-foot"><time>${a.date}</time></p>
            </li>`
            )
            .join('')}
        </ul>
      </article>
    </div>
  </div>
</section>`;

/* ----------------------------------------------------------------- contact */

export const renderContact = (p) => `
<section id="contact" class="section section--dark section--contact" aria-labelledby="contact-title">
  <div class="shell">
    <div class="contact-panel" data-reveal>
      <div class="contact-copy">
        <p class="eyebrow"><span class="eyebrow-dot" aria-hidden="true"></span>Contact</p>
        <h2 id="contact-title">Open to backend &amp; microservices roles</h2>
        <p class="section-lead">
          The quickest way to reach me is email or LinkedIn. My full resume is available below.
        </p>
        <div class="contact-actions">
          <a class="btn btn-primary" href="mailto:${p.email}">${icons.mail}<span>Email me</span></a>
          <a class="btn btn-ghost btn-ghost--onDark" href="${p.resume.path}" download>${icons.download}<span>Download resume</span></a>
        </div>
      </div>

      <ul class="contact-list" role="list">
        <li>
          <a href="mailto:${p.email}">
            <span class="contact-icon">${icons.mail}</span>
            <span class="contact-text"><strong>Email</strong><span>${p.email}</span></span>
            <span class="contact-arrow" aria-hidden="true">${icons.arrow}</span>
          </a>
        </li>
        <li>
          <a href="tel:${p.phoneHref}">
            <span class="contact-icon">${icons.phone}</span>
            <span class="contact-text"><strong>Phone</strong><span>${p.phone}</span></span>
            <span class="contact-arrow" aria-hidden="true">${icons.arrow}</span>
          </a>
        </li>
        <li>
          <a href="${p.links.linkedin}" target="_blank" rel="noopener noreferrer">
            <span class="contact-icon">${brandIcons.linkedin}</span>
            <span class="contact-text"><strong>LinkedIn</strong><span>in/onkar-pawar-software-engineer</span></span>
            <span class="contact-arrow" aria-hidden="true">${icons.external}</span>
          </a>
        </li>
        <li>
          <a href="${p.links.github}" target="_blank" rel="noopener noreferrer">
            <span class="contact-icon">${brandIcons.github}</span>
            <span class="contact-text"><strong>GitHub</strong><span>github.com/oroV2</span></span>
            <span class="contact-arrow" aria-hidden="true">${icons.external}</span>
          </a>
        </li>
        <li>
          <span class="contact-static">
            <span class="contact-icon">${icons.pin}</span>
            <span class="contact-text"><strong>Location</strong><span>${p.location}</span></span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</section>`;

/* ------------------------------------------------------------------ footer */

export const renderFooter = (p, year) => `
<footer class="site-footer">
  <div class="shell footer-inner">
    <p class="footer-brand">
      <span class="brand-mark brand-mark--sm" aria-hidden="true">OP</span>
      <span>${p.name} &middot; ${p.title}</span>
    </p>
    <nav class="footer-nav" aria-label="Footer">
      <ul>
        ${navItems.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}
      </ul>
    </nav>
    <p class="footer-meta">&copy; ${year} ${p.name}. Built as a static site.</p>
  </div>
  <a class="to-top" id="to-top" href="#top" aria-label="Back to top">${icons.arrow}</a>
</footer>`;
