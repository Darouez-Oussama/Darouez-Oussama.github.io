# Oussama Darouez — Portfolio

A fast, static personal portfolio (plain HTML / CSS / JS — no build step). Designed to be hosted for free on **GitHub Pages**.

## Structure

```
index.html                 # All page content
styles.css                 # Styles + theme tokens
script.js                  # Mobile menu + footer year
assets/
  favicon.svg
  oussama-darouez-cv.pdf   # Replace with your real CV
public/illustrations/      # Project line-art images
```

## Preview locally

Any static server works, e.g.:

```bash
npx serve .
```

Then open the printed URL.

## Deploy to GitHub Pages

1. Create a repo (e.g. `Darouez-Oussama.github.io` for a user site, or any name for a project site).
2. Push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/Darouez-Oussama/<repo>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/ (root)**, then **Save**.
6. Your site goes live at `https://Darouez-Oussama.github.io/<repo>/` in a minute or two.

> The included `.nojekyll` file tells GitHub Pages to serve all folders as-is.

## Update your content

- **Text / sections:** edit `index.html`.
- **CV:** replace `assets/oussama-darouez-cv.pdf` with your real file (keep the same name, or update the link in `index.html`).
- **Colors / fonts:** tweak the `:root` tokens at the top of `styles.css`.
- **Project images:** drop new PNGs into `public/illustrations/` and update the `<img src>` in `index.html`.
# Darouez-Oussama.github.io
