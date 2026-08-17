# Lee Chun Yong — Portfolio

Static site, no build step. Two pages:

- `index.html` — main profile (about, experience, education, skills, contact)
- `projects.html` — project log, rendered from `js/projects-data.js`

## Deploy on GitHub Pages (free, works with your existing GitHub account)

1. Create a new repo, e.g. `leechunyong.github.io` (use exactly `<your-username>.github.io`
   if you want it at the root domain, or any name if you're fine with
   `<your-username>.github.io/<repo-name>`).
2. Push this folder's contents to the repo root:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source → Deploy from a branch → `main` / `root`**.
4. Your site is live at `https://<your-username>.github.io/` (or `/<repo-name>/` if
   not a root repo) within a minute or two.

### Custom subdomain later
If you later want `projects.yourdomain.com` instead of a `/projects.html` tab:
add a `CNAME` file with that subdomain, point a DNS `CNAME` record at
`<your-username>.github.io`, and set it in Settings → Pages. Everything else
in this repo stays the same — the projects page doesn't need to move.

## Updating the site

Everything you'd normally want to change lives in two plain data files.
You never need to touch the HTML.

### Homepage — `js/site-data.js`
One `SITE` object with your name, tagline, status pill, about text,
experience, education, skills, and contact info. Edit a value, save,
refresh the page. Comments at the top of each section explain the shape.

- **Change your status** (e.g. stop showing "open to opportunities"):
  edit `SITE.profile.status`.
- **Add a job**: copy an object in `SITE.experience`, fill it in. Most
  recent entry goes first — the list renders top to bottom.
- **Add a skill**: find the right group in `SITE.skills` and add a string
  to its `items` array, or copy a whole group for a new category.

### Projects — `js/projects-data.js`
One `PROJECTS` array, same pattern. Copy an object, fill in the fields,
save. `projects.html` re-renders itself automatically.

The homepage's "From the project log" teaser section pulls its 3 cards
directly from this same array (`SITE.featuredCount` controls how many) —
so a new project you add here shows up on the homepage too, with nothing
to duplicate or keep in sync by hand.

### Updating your résumé
Replace `assets/Lee_ChunYong_Resume_Cyber.pdf` with a newer export using
the exact same filename — the download link updates itself.

### If you ever do need to touch layout or styling
`index.html` and `projects.html` are now just empty containers with ids
(`heroContent`, `experienceList`, `skillsGrid`, etc.) — `js/render-site.js`
and `js/render-projects.js` fill them in from the data files at page load.
Colors, spacing, and type live in `css/style.css`.

## Structure
```
portfolio/
├── index.html
├── projects.html
├── css/style.css
├── js/
│   ├── main.js              # nav toggle + scroll-spy
│   ├── site-data.js          # ← edit this: homepage content
│   ├── render-site.js        # renders site-data.js into index.html
│   ├── projects-data.js      # ← edit this: project entries
│   └── render-projects.js    # renders projects-data.js into cards
├── assets/
│   └── Lee_ChunYong_Resume_Cyber.pdf
└── README.md
```
