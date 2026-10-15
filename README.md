# Ramireddy Pammi — Portfolio

A minimalist, dark, numbered-section personal portfolio built with React, TypeScript, and Vite.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Editing content

All text, links, skills, projects, and placeholders live in a single file:

```
src/data/portfolio.ts
```

Update it and every section (Hero, About, Skills, Experience, Certifications,
Projects, Education, Contact) updates automatically.

### Values you need to replace

In `src/data/portfolio.ts`:

- `contact.github` — your GitHub profile URL
- `contact.linkedin` — your LinkedIn profile URL
- `contact.email` — your email address
- `education.items[0]` — degree, institution, year
- `certifications.items[*].link` — links to your certificate images/PDFs (if any)
- `projects.items[*].link` — links to project repos/demos (if any)

Also replace:

- `public/resume/Ramireddy_Pammi_Resume.pdf` — swap in your real resume PDF (keep the same filename, or update `contact.resume` in the data file)
- `src/components/About.tsx` — the `about__portrait-placeholder` block currently renders your initials; replace it with an `<img>` tag pointing to a photo in `public/` if you'd like a real profile picture

## Deploying to GitHub Pages

1. Push this project to a GitHub repository, e.g. `github.com/<your-username>/portfolio`.
2. In `vite.config.ts`, confirm `base` matches your repo name:
   ```ts
   base: "/portfolio/", // must match your repo name exactly, with slashes
   ```
   If you deploy to a `<username>.github.io` root repository instead, set `base: "/"`.
3. In your repository settings, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Push to the `main` branch. The workflow in `.github/workflows/deploy.yml` will:
   - Checkout the repo
   - Install Node 20
   - Install dependencies (`npm ci`)
   - Build the app (`npm run build`)
   - Upload the `dist` folder as a Pages artifact
   - Deploy it to GitHub Pages
5. Your site will be live at `https://<your-username>.github.io/portfolio/`.

## Tech stack

- React 18 + TypeScript
- Vite
- Framer Motion (scroll-in animations)
- Lucide React (icons)
- Plain CSS with design tokens (no CSS framework)
