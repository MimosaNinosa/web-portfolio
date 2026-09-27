# Lee Chun Yong — Portfolio

Personal site at <https://portfolio.chunyong.cc>, built with
[Eleventy](https://www.11ty.dev/) into plain static HTML and deployed to
GitHub Pages by GitHub Actions.

Design: an engineering notebook / spec sheet — paper and ink, one signal
colour, serif prose (Newsreader) and monospace (IBM Plex Mono) only for data.
Light and dark themes, with a toggle.

## Working on it locally

Needs Node 20+.

```bash
npm install     # once
npm start       # dev server with live reload at http://localhost:8112
npm run build   # writes the finished site to _site/
```

## Where things live

```
src/
  _data/site.js         homepage text: intro, about, experience, education, skills, contact
  _data/exposure.js     rows of the TEE / FHE "where is the data readable" diagram
  projects/*.md         one file per project → /projects/<file-name>/
  blog/*.md             one file per post    → /blog/<file-name>/
  _includes/layouts/    base (head, CSP, nav, footer), project and post layouts
  index.njk             homepage
  projects.njk, blog.njk   list pages
  legacy/               redirects from the old URLs (projects.html, project.html?slug=…, …)
  css/, js/, assets/    copied through as-is
eleventy.config.js      collections, filters, Markdown code panels, feed, CSP
```

### Add a project

Create `src/projects/<slug>.md`. The file name becomes the URL.

```markdown
---
title: "Project title"
sortDate: "2026-10"        # YYYY or YYYY-MM; newest first
period: "Oct 2026"
role: "Course / employer · your role"
stack: ["Python", "Docker"]
summary: "One or two plain sentences. Used on lists, as the standfirst, and in link previews."
result: "45 min → 10 s"    # optional; one concrete outcome
featured: true             # optional; show on the homepage
images:                    # optional; video files render as a player
  - src: "/assets/projects/shot.png"
    alt: "What the image shows"
    caption: "Optional caption"
links:                     # optional: repo, demo, report
  repo: "https://github.com/…"
---

## The problem

Plain Markdown from here on. Use whatever headings fit.

## What I built

- …
```

Project files can include the diagram with `{% include "exposure.njk" %}`.

### Add a post

Create `src/blog/<slug>.md`:

```markdown
---
title: "Post title"
date: 2026-10-01
topics: ["Linux", "Security"]
readTime: "5 min read"     # optional
---

Opening paragraph…

## A section

Code fences get a labelled panel with a copy button.
```

Posts are plain Markdown (no template tags), so code containing `{{ }}` is safe.
New posts appear in the feed at `/feed.xml`.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site
and publishes `_site/` to GitHub Pages.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub
Actions**. Do this before the first push of the Eleventy version — with the
old "Deploy from a branch" setting, Pages would publish the raw `src/` folder.

The custom domain is kept by `src/CNAME` and the Pages settings.

## Security headers

- A Content-Security-Policy is set with a `<meta>` tag on every page (defined
  in `eleventy.config.js`). It allows scripts only from this site, styles and
  fonts from Google Fonts, and images/video from `assets.chunyong.cc`. Inline
  scripts are blocked — keep all JS in `src/js/`.
- If you add a third-party resource (analytics, embeds, another CDN), add its
  origin to the CSP or it will be blocked.
- GitHub Pages can't set response headers. Headers that only work as real
  headers (X-Frame-Options / `frame-ancestors`, X-Content-Type-Options,
  HSTS preload) come from Cloudflare in front of the site.
