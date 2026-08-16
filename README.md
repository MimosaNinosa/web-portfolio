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

## Adding a new project

Open `js/projects-data.js`. Copy one object from the `PROJECTS` array,
paste it back in, fill in the fields, save. `projects.html` re-renders
itself automatically — no HTML editing needed. Field guide is in the
comment at the top of that file.

## Updating your résumé link

Replace `assets/Lee_ChunYong_Resume_Cyber.pdf` with a newer export using
the same filename, or update the `href` in the hero section of `index.html`.

## Structure
```
portfolio/
├── index.html
├── projects.html
├── css/style.css
├── js/
│   ├── main.js              # nav toggle + scroll-spy
│   ├── projects-data.js      # ← edit this to add projects
│   └── render-projects.js    # renders projects-data.js into cards
├── assets/
│   └── Lee_ChunYong_Resume_Cyber.pdf
└── README.md
```
