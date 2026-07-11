# Oussama Darouez — Portfolio

An interactive, mouse-driven portfolio (inspired by robbowen.digital).
It's a **plain static site** — no build step — so it works directly on GitHub Pages.

## Files

| File | What it is |
|------|------------|
| `index.html` | Page structure |
| `styles.css` | All styling |
| `script.js` | Interactions (custom cursor, avatar tilt, project hover-reveal, scroll animations) |
| `public/avatar.png` | The illustrated avatar |
| `public/projects/` | Your project screenshots |

## Why your old site only showed the README

GitHub Pages serves `index.html` as the homepage. Your repo previously contained
**only** `README.md`, so GitHub fell back to rendering that. Now that an
`index.html` exists at the repo root, your real site will show up.

## Deploy to GitHub Pages

1. Copy every file in this project into your `Darouez-Oussama.github.io` repo,
   keeping the same folder structure (`index.html` must be at the root).
2. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Add interactive portfolio"
   git push origin main
   ```
3. In your repo: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)**
4. Wait ~1 minute, then visit **https://darouez-oussama.github.io**

## Customize

- **Projects:** edit the `PROJECTS` array at the top of `script.js`. Drop your
  screenshots into `public/projects/` and point `photo` at them. If an image is
  missing, a placeholder tells you where to add it.
- **Skills:** edit the `SKILLS` array in `script.js`.
- **Text / links:** edit `index.html` (email in the Contact section, GitHub link, etc.).
- **Avatar:** replace `public/avatar.png` with your own illustration.
- **Colors:** tweak the CSS variables at the top of `styles.css`.
