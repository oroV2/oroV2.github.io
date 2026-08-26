import {
  renderHeader,
  renderHero,
  renderAbout,
  renderImpact,
  renderExperience,
  renderProjects,
  renderArchitecture,
  renderSkills,
  renderCredentials,
  renderContact,
  renderFooter
} from './sections.js';

/**
 * Builds the complete static document.
 * All asset references are RELATIVE so the site works both at the domain root
 * (https://user.github.io/) and under a repository sub-path
 * (https://user.github.io/repository-name/).
 */
export function renderPage({
  profile,
  experience,
  projects,
  skills,
  architecture,
  education,
  certifications,
  awards,
  achievements,
  siteUrl
}) {
  const year = new Date().getFullYear();
  const strip = (s) => s.replace(/&amp;/g, '&').replace(/&middot;/g, '·');

  const description = strip(
    `${profile.name} — ${profile.title} with ${profile.experienceHeadline} years building secure, scalable Spring Boot microservices. Spring Cloud Gateway, AES encryption, LDAP and JWT authentication, Eureka, Docker, Oracle and MySQL.`
  );
  const pageTitle = `${profile.name} — ${profile.title} | Spring Boot Microservices & Application Security`;
  const keywords = [
    'Java Developer',
    'Java Backend Developer',
    'Spring Boot',
    'Microservices',
    'Spring Cloud Gateway',
    'AES Encryption',
    'JWT Authentication',
    'LDAP',
    'Eureka',
    'Hibernate',
    'React.js',
    'Docker',
    'Oracle',
    'MySQL',
    'Onkar Pawar'
  ].join(', ');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    description: strip(profile.summary),
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    url: siteUrl,
    image: `${siteUrl}/assets/img/onkar-pawar-720.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Thane',
      addressRegion: 'Maharashtra',
      postalCode: '400607',
      addressCountry: 'IN'
    },
    worksFor: { '@type': 'Organization', name: profile.currentCompany },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: education[0].institution
    },
    knowsAbout: [
      'Java',
      'Spring Boot',
      'Microservices Architecture',
      'Spring Cloud Gateway',
      'Application Security',
      'AES Encryption',
      'JWT Authentication',
      'LDAP Authentication',
      'Hibernate',
      'React.js',
      'Docker',
      'Oracle',
      'MySQL'
    ],
    sameAs: [profile.links.linkedin, profile.links.github]
  };

  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${pageTitle}</title>
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<meta name="author" content="${profile.name}">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#0a1f44" media="(prefers-color-scheme: dark)">
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<link rel="canonical" href="${siteUrl}/">

<meta property="og:type" content="profile">
<meta property="og:site_name" content="${profile.name}">
<meta property="og:title" content="${pageTitle}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${siteUrl}/">
<meta property="og:image" content="${siteUrl}/assets/img/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${profile.name}, ${profile.currentRole} — ${strip(profile.tagline)}">
<meta property="profile:first_name" content="Onkar">
<meta property="profile:last_name" content="Pawar">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${pageTitle}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${siteUrl}/assets/img/og-image.jpg">

<link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
<link rel="alternate icon" href="assets/img/favicon.png" sizes="32x32">
<link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"></noscript>

<link rel="stylesheet" href="assets/css/style.css">
<script>
  // Runs before paint: marks JS availability (scroll-reveal styles depend on it)
  // and applies the stored theme so it never flashes.
  (function () {
    var el = document.documentElement;
    el.className += (el.className ? ' ' : '') + 'js';
    try {
      var stored = localStorage.getItem('theme');
      var dark = stored ? stored === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
      el.setAttribute('data-theme', dark ? 'dark' : 'light');
    } catch (e) {}
  })();
</script>
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
${renderHeader(profile)}
<main id="main">
${renderHero(profile, experience)}
${renderAbout(profile, education)}
${renderImpact(achievements)}
${renderExperience(experience)}
${renderProjects(projects)}
${renderArchitecture(architecture)}
${renderSkills(skills)}
${renderCredentials(education, certifications, awards)}
${renderContact(profile)}
</main>
${renderFooter(profile, year)}
<script src="assets/js/main.js" defer></script>
</body>
</html>
`;
}

export function render404(profile) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page not found — ${profile.name}</title>
<meta name="robots" content="noindex">
<style>
  :root { color-scheme: light dark; }
  body {
    margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 2rem;
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    background: #f6f8fc; color: #0d1b34; text-align: center;
  }
  @media (prefers-color-scheme: dark) { body { background: #070d1a; color: #e8edf7; } }
  h1 { font-size: clamp(1.6rem, 4vw, 2.4rem); margin: .5rem 0 .75rem; letter-spacing: -.02em; }
  p { margin: 0 0 1rem; color: #55637d; }
  @media (prefers-color-scheme: dark) { p { color: #9aa8c2; } }
  .eyebrow { font-size: .75rem; letter-spacing: .16em; text-transform: uppercase; font-weight: 700; color: #1b6df0; }
  a { display: inline-flex; align-items: center; gap: .5rem; padding: .8rem 1.4rem; border-radius: 999px;
      background: #1b6df0; color: #fff; text-decoration: none; font-weight: 600; }
  a:hover { background: #1557c7; }
  a:focus-visible { outline: 3px solid #1b6df0; outline-offset: 3px; }
</style>
</head>
<body>
<main>
  <p class="eyebrow">Error 404</p>
  <h1>This page doesn&rsquo;t exist</h1>
  <p>The page you were looking for has moved or never existed.</p>
  <a href="./">Back to the portfolio</a>
</main>
</body>
</html>
`;
}
