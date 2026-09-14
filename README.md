# Daniel Gutensohn · Resume Builder

A file-based Next.js resume system with reusable React components, typed content, responsive reading layouts, and dedicated Letter-size print styling.

[Resume site](https://dgutensohn03.github.io/resume-builder/) · [Portfolio](https://dgutensohn03.github.io/dg-portfolio/)

## Development

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Public profiles are `/resume/frontend/` and `/resume/full-stack/`.

```sh
npm run build
npm run typecheck
```

Production exports to `out/` with the `/resume-builder` base path. GitHub Pages serves static files; no runtime server or database is required.

## Editing content

- `data/resume.ts`: shared career history, skills, links, and education.
- `data/categories.ts`: public headlines, summaries, and skill ordering.
- `components/ResumeDocument.tsx`: shared resume structure.
- `app/globals.css`: screen and print layouts.

Adding a public profile creates its route and landing-page link. Review factual claims before publication. Next.js experience is identified as portfolio work; historical enterprise applications are described as React.

## Print and PDF

Use Print / Save PDF on a resume. Choose Letter paper, disable browser headers and footers, and enable background graphics.

For automated export, start the development server and run:

```sh
npx playwright install chromium
npm run export:pdf
```

For a deployed site, include its base path:

```sh
RESUME_BASE_URL=https://dgutensohn03.github.io/resume-builder npm run export:pdf
```

PDFs go to ignored `output/` and are not deployed.

## Private job-specific profiles

This repository and exported routes are public. An unlinked route is not private. Store job-specific data in ignored `private/` files and export directly without adding a public route.

Create `private/target.json`:

```json
{"category":"target","baseCategory":"frontend","availability":"Your target-specific availability"}
```

```sh
npm run export:pdf -- private/target.json
```

This local export needs no running server. JSON can override profile fields such as headline, summary, and skills. Back up private data separately; Git does not store it.

## GitHub Pages setup

In **Settings → Pages**, select **GitHub Actions** as the source. The deployment workflow builds pushes to `main`. If the first deployment runs before Pages is enabled, enable it and rerun the workflow in Actions.

The portfolio repository is independent. The site URL is https://dgutensohn03.github.io/resume-builder/.
