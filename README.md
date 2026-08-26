# Onkar K. Pawar — Portfolio

Personal portfolio for **Onkar K. Pawar**, Java Backend Developer.
Static site, zero runtime dependencies, hosted on GitHub Pages at
<https://orov2.github.io>.

## How it works

Content lives in `src/data/`, markup in `src/templates/`. A small Node script
renders them into plain static files that GitHub Pages serves directly. There is
no framework, no bundler and no server component.

```
src/data/          the resume content (edit here)
  profile.js         name, title, summary, contact, links, resume path
  experience.js      roles, dates, responsibilities, metrics, tech
  projects.js        projects, responsibilities, security, impact
  skills.js          skill groups
  credentials.js     education, certifications, awards, headline metrics
  architecture.js    documented project architecture

src/templates/     the markup
  page.js            document shell, SEO/Open Graph, JSON-LD
  sections.js        every page section + the architecture SVG
  icons.js           inline SVG icons (no icon font)

assets/css/style.css   hand-written stylesheet, light + dark themes
assets/js/main.js      theme toggle, mobile nav, scroll reveal, counters
assets/img/            portrait (JPEG + WebP), OG image, favicons
assets/docs/           resume PDF

build.mjs          renders index.html, 404.html, sitemap.xml, robots.txt
```

Generated files (`index.html`, `404.html`, `sitemap.xml`, `robots.txt`,
`.nojekyll`) are committed so GitHub Pages can serve the repository branch
directly — no CI required.

## Updating the content

1. Edit the relevant file in `src/data/`.
2. Rebuild:

```bash
node build.mjs
```

3. Commit both the data change and the regenerated `index.html`.

To replace the downloadable resume, drop the new PDF at
`assets/docs/Onkar-K-Pawar-Resume.pdf` (or change `profile.resume.path`) and
rebuild.

## Build

```bash
npm run build
```

Equivalent to `node build.mjs`. The build also runs a set of checks and fails on:
missing referenced assets, absolute root asset paths (which break sub-path
hosting), `localhost`/`.php` references, dead in-page anchors, images without
`alt`, more than one `<h1>`, `target="_blank"` without `rel="noopener"`, and a
missing resume PDF.

## Local preview

```bash
npm run preview
```

Serves the folder at <http://localhost:8080> using `npx serve`. Any static file
server works.

## Deploying to GitHub Pages

This repository is `oroV2/oroV2.github.io`, a **user site**, so it is served from
the domain root.

1. `node build.mjs`
2. `git add -A && git commit -m "Update portfolio"`
3. `git push origin master`
4. In the repository, **Settings → Pages → Build and deployment**: source
   *Deploy from a branch*, branch `master`, folder `/ (root)`.

The site is live at <https://orov2.github.io> within a minute or two.

### Hosting under a repository sub-path

Every asset reference in the generated HTML is **relative** (`assets/…`), so the
site also works unchanged at `https://<user>.github.io/<repo>/`. Only the
absolute URLs in the SEO metadata (canonical, Open Graph, sitemap) need to know
the real address — pass it at build time:

```bash
SITE_URL=https://username.github.io/repository-name node build.mjs
```

`.nojekyll` is committed so GitHub Pages serves every file verbatim instead of
running Jekyll over the repository.

## Notes

- No backend: the contact section uses `mailto:`, `tel:`, LinkedIn and GitHub
  links only.
- Enterprise project work is described at a professional level. No client data,
  credentials, endpoints, hostnames, schemas or proprietary code appear anywhere
  in this repository.
- Only one external request is made at runtime (the Inter web font, loaded
  non-blocking with a system-font fallback).
