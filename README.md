# Sukanto Kumar Das — Full Stack Software Engineer Portfolio

A modern, high-performance developer portfolio website built for **Sukanto Kumar Das** (Full Stack Software Engineer). Designed with a minimalist dark navy aesthetic, blue accents, modular TypeScript architecture, and configured for **full static export (`output: "export"`)** to deploy on Cloudflare Pages or GitHub Pages.

---

## ⚡ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js](https://nextjs.org/) (App Router, Static Export) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) (v4) |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom SVG Icons |
| **Typography** | Geist Sans & Geist Mono |
| **Deployment** | [Cloudflare Pages](https://pages.cloudflare.com/) / [GitHub Pages](https://pages.github.com/) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18.18+` or `v20+` (tested on Node `v24.15.0`)
- npm or pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sukantokumardas/my-swe-portfolio.git
cd my-swe-portfolio

# Install dependencies
npm install
```

### Local Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application with Hot Module Reloading.

### Production Static Build & Export

```bash
npm run build
```

The production static files are exported into the `out/` directory.

### Preview Static Export Locally

You can preview the exported static website using any static HTTP server:

```bash
npx serve out
# or
python3 -m http.server 3000 --directory out
```

---

## 📁 Project Structure

```
my-swe-portfolio/
├── app/                        # Next.js App Router
│   ├── page.tsx                # Homepage
│   ├── layout.tsx              # Root layout & global metadata
│   ├── globals.css             # Tailwind CSS tokens & dark theme
│   ├── about/page.tsx          # About page (narrative, philosophy, strengths)
│   ├── projects/page.tsx       # Projects gallery & case studies index
│   ├── projects/[slug]/page.tsx# Project detail case studies (SSG via generateStaticParams)
│   ├── experience/page.tsx     # Work timeline, achievements & education
│   ├── contact/page.tsx        # Contact info, copy action & CV download
│   ├── not-found.tsx           # Custom 404 page
│   ├── robots.ts               # Dynamic static robots.txt
│   └── sitemap.ts              # Dynamic static sitemap.xml
├── components/                 # Reusable UI components
│   ├── Navbar.tsx              # Responsive navigation with mobile menu
│   ├── Footer.tsx              # Brand footer & social links
│   ├── Hero.tsx                # Hero section with CTAs
│   ├── ProjectCard.tsx         # Responsive project cards
│   ├── TechStackSection.tsx    # Technical skills showcase
│   ├── ExperienceOverviewSection.tsx # Homepage experience timeline
│   ├── HomeContactSection.tsx  # Homepage contact callout
│   ├── SectionHeading.tsx      # Consistent section titles & badges
│   ├── Container.tsx           # Max-width layout container
│   └── Icons.tsx               # Crisp brand SVG icons
├── data/                       # Content separation (Edit here to update portfolio)
│   ├── site.ts                 # Profile info, URLs, nav links
│   ├── projects.ts             # Project case studies & architecture details
│   ├── skills.ts               # Categorized skills & badges
│   └── experience.ts           # Employment history & academic credentials
├── public/                     # Static downloadable assets
│   ├── SUKANTO_CV.pdf          # Official CV
│   └── resume.pdf              # Mirror copy for clean resume links
├── temp/                       # Project brief & plan specifications
├── next.config.ts              # Next.js config (output: "export", trailingSlash: true)
└── package.json
```

---

## ✏️ How to Update Portfolio Content

All content is cleanly decoupled from the UI inside the `data/` directory:

1. **Personal Information & Links (`data/site.ts`)**:
   - Update your name, role, email, phone number, location, and social media handles.
2. **Projects & Case Studies (`data/projects.ts`)**:
   - Add, edit, or reorder projects in the `projects` array.
   - Each project supports: `slug`, `title`, `tagline`, `summary`, `overview`, `problem`, `architecture`, `implementationNotes`, `challengesAndSolutions`, `metrics`, and repository/demo links.
3. **Skills & Categories (`data/skills.ts`)**:
   - Add or modify technical competencies categorized into Languages, Frameworks, Databases, and Architecture.
4. **Work Experience & Education (`data/experience.ts`)**:
   - Update company names, positions, date ranges, responsibilities, and achievements.
5. **Resume / CV (`public/SUKANTO_CV.pdf`)**:
   - Replace the PDF in the `public/` directory to update the downloadable resume across all buttons and links.

---

## ☁️ Deployment Guide

### Deploying to Cloudflare Pages (Recommended)

1. Push this repository to GitHub.
2. In the **Cloudflare Dashboard**, navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. In the build settings:
   - **Framework preset**: `Next.js (Static HTML Export)` or `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
5. Click **Save and Deploy**.
6. Cloudflare Pages automatically handles HTTPS and continuous deployment on every `git push main`.

### Deploying to GitHub Pages

1. In your repository settings on GitHub, navigate to **Pages**.
2. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy static content to Pages

   on:
     push:
       branches: ['main']

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: 'pages'
     cancel-in-progress: true

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: npm
         - name: Install dependencies
           run: npm ci
         - name: Build
           run: npm run build
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./out
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

---

## 🧪 Quality & Validation Checks

- **TypeScript check**: `npx tsc --noEmit`
- **Lint check**: `npm run lint`
- **Static Export**: `npm run build` generates clean `out/` with zero server-side dependencies.

---

## 📄 License

MIT © [Sukanto Kumar Das](https://github.com/sukantokumardas)
