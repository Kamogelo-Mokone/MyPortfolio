# Kamogelo Mokone — Portfolio

Personal portfolio website for Kamogelo Mokone, Microsoft Power Platform / SharePoint / AI Solutions Developer and UI/UX Designer based in Midrand, South Africa.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Global CSS with custom properties (no Tailwind used)
- **Fonts**: Playfair Display (headings) + DM Sans (body) via Google Fonts — loaded in `globals.css`
- **Images**: Next.js `<Image>` component with `unoptimized: true`

---

## Project Structure

```
src/
  app/
    globals.css          # All styles — CSS variables, components, animations, responsive
    layout.tsx           # Root layout — metadata only, no extra wrappers
    page.tsx             # Home page — mounts all sections + scroll reveal logic
    cv/
      page.tsx           # CV & Documents page — 3 downloadable PDF cards
    projects/
      page.tsx           # All Projects page — empty state, ready for future projects
  components/
    Nav.tsx              # Fixed frosted-glass navigation bar
    Hero.tsx             # Hero section with role icons bar (Developer/Designer/Consultant)
    About.tsx            # About section with profile photo and teal-highlighted bio
    Work.tsx             # Work section — Selected Projects + Microsoft Projects grids + overlay
    Skills.tsx           # Skills section — Figma featured card + 4-column grid
    Certs.tsx            # Microsoft Certifications row
    Contact.tsx          # Contact section — email, LinkedIn, GitHub, CV link
    Footer.tsx           # Footer

public/
  ProfilePicture.png     # Profile photo used in About section
  icons/
    Figma.png            # Skill card icons
    PowerApps.png
    SharePoint.png
    CopilotStudio.png
    M365.png
  documents/
    CV.pdf
    Professional Growth & Positioning Statement.pdf
    Technology Expertise.pdf

Assest/                  # Source assets folder (originals — not served by Next.js)
docs/                    # Static export output — served by GitHub Pages
  .nojekyll              # Prevents Jekyll from stripping _next/ assets (auto-created by postbuild)
```

---

## Design Tokens (CSS Variables)

```css
--forest:    #005840   /* Primary green */
--lime:      #D1F843   /* Accent yellow-green */
--teal:      #0F9E99   /* Secondary accent */
--offwhite:  #ECF0EF   /* Card backgrounds */
--dark:      #212620   /* Body text / dark sections */
--light:     #F0F4F8   /* Page background */
--grad-start:#006B5E
--grad-end:  #005840
```

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Main portfolio — all sections |
| `/cv` | CV & Documents — 3 PDF cards (CV, Professional Growth, Technology Expertise) |
| `/projects` | All Projects — empty state, ready for future project cards |

---

## Key Sections (Home Page)

### Hero
- Role icons bar: Developer / Designer / Consultant (custom SVGs from PDF spec)
- Animated entrance (`fadeUp` keyframes, staggered delays)

### About
- Profile photo (`/ProfilePicture.png`) fills the photo card
- Bio text with teal highlights on key role titles
- Links to `/cv` (Download CV) and `#contact`

### Work
Two separate grids, both with "All Projects →" linking to `/projects`:

1. **Selected Projects** (`projects-grid--two`) — 2-column equal grid
   - Streetwear E-Commerce App (green featured)
   - Freelancing Platform Concept (teal)

2. **Microsoft Projects** (`projects-grid--three`) — 3-column grid
   - Intelligent Conversational Agents
   - JustDeving Platform (SPFx)
   - Digital Collaboration Environments
   - Architecture & Strategy Sessions

Each card opens a detail overlay (React state, Escape/backdrop to close).

### Skills
- **Figma** — full-width featured card, description fills entire width
- 4-column grid: Power Platform, SharePoint & SPFx, AI & Copilot Studio, Solution Architecture
- Icons: real PNG assets from `/public/icons/`

### Certs
- 3 Microsoft certification cards (PL-900, PowerApps badge, Power Platform badge)

### Contact
- Email, LinkedIn, GitHub (`https://github.com/Kamogelo-Mokone`), Download CV (`/cv`)

---

## Scroll Reveal

`page.tsx` adds `js-ready` to `<body>` on mount, then uses `IntersectionObserver` to add `.up` to `.reveal` elements as they enter the viewport (staggered by 60ms per element).

---

## GitHub Pages Deployment

The site is hosted at `https://kamogelo-mokone.github.io/MyPortfolio/`.

### Configuration (`next.config.ts`)
```ts
const BASE_PATH = "/MyPortfolio";

const nextConfig = {
  output: "export",
  distDir: "docs",
  trailingSlash: true,
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH + "/",
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
  images: { unoptimized: true },
};
```

### Key rules
- **`basePath` + `assetPrefix`**: tells Next.js the site lives at `/MyPortfolio/` on the domain
- **`trailingSlash: true`**: generates `cv/index.html` (not `cv.html`) — required for GitHub Pages routing
- **`distDir: "docs"`**: GitHub Pages sources from the `/docs` folder in the repo
- **`.nojekyll`**: prevents Jekyll from stripping the `_next/` folder (CSS/JS). Auto-created by the `postbuild` script — never delete it manually
- **`NEXT_PUBLIC_BASE_PATH`**: exposed as a build-time env var because `next/image` with `unoptimized: true` does NOT auto-prepend `basePath` to `src` paths. All public-folder image `src` props and PDF `href` links must be prefixed manually using this variable

### Image & asset path pattern
```tsx
// In any component that references public/ assets:
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

<Image src={`${BASE}/icons/Figma.png`} ... />
<a href={`${BASE}/documents/CV.pdf`} target="_blank">
```

### Internal navigation
Always use Next.js `<Link href="/path">` (not `<a href="/path">`) for internal page navigation. `<Link>` auto-prepends `basePath`; plain `<a>` tags do not.

---

## Conventions

- **No Tailwind** — all styling is in `globals.css` using CSS custom properties
- **No CSS Modules** — single global stylesheet keeps everything in one place
- **`"use client"`** only where needed (Nav, Work — for state/effects)
- **Assets** → always copy to `public/` before referencing; source files stay in `Assest/`
- **New pages** → use `Nav` + `Footer` components, `section.work` with `work-inner` for consistent layout, `btn-outline` for back navigation
- **PDF links** → prefix with `process.env.NEXT_PUBLIC_BASE_PATH`, open with `target="_blank"`
- **New image references** → always prefix src with `process.env.NEXT_PUBLIC_BASE_PATH`

---

## Running Locally

```bash
npm run dev     # http://localhost:3000/MyPortfolio
npm run build   # Build + auto-creates docs/.nojekyll via postbuild script
```

### Deploy to GitHub Pages
```bash
npm run build
git add docs/
git commit -m "deploy"
git push
```
GitHub Pages will serve the updated `docs/` folder automatically.
