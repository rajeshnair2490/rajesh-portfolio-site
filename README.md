# Rajesh Nair — Portfolio

A modern, single-page personal website. Edit `data/profile.json` with your details and publish with GitHub Pages.

## Quick Start

1. **Edit your profile**
   - Open `data/profile.json` and fill in your info:
     - `name`, `tagline`, `about`
     - `socials` (LinkedIn, GitHub, Email)
     - `experience`, `projects`, `skills`, `education`
     - `email`, `location`, `open_to`
   - Optional: add a square `assets/avatar.png` image.

2. **Preview locally**
   - Use any static server:
     ```bash
     cd rajesh-portfolio-site
     python3 -m http.server 4000
     ```
     Visit `http://localhost:4000`

3. **Create a GitHub repo**
   ```bash
   cd rajesh-portfolio-site
   git init
   git add .
   git commit -m "Initial commit: portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/rajesh-portfolio-site.git
   git push -u origin main
   ```

4. **Publish with GitHub Pages** (no build step needed)
   - On GitHub: Settings → Pages → **Source: Deploy from a branch** → `main` → `/ (root)` → Save.
   - Your site will be live at: `https://<your-github-username>.github.io/rajesh-portfolio-site/`

### Optional: GitHub Actions workflow
This repo includes `.github/workflows/pages.yml` which builds and deploys automatically to GitHub Pages on pushes to `main`. Make sure Pages is enabled.

## Updating from LinkedIn
If you export/copy your LinkedIn content, paste into `data/profile.json`. Each section is self-explanatory. Keep entries concise and action-oriented.

## License
MIT
