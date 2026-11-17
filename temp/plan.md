# Portfolio Site — Development Plan

Source of truth: `temp/requirement.md`. This plan breaks that brief into concrete, ordered work. Update checkboxes as work completes; this file is a living tracker, not a one-time spec.

## Phase 0 — Scaffold

- [x] `create-next-app` with App Router + TypeScript + Tailwind CSS.
- [x] Set `output: "export"` in `next.config.ts`.
- [x] Install Lucide icons, Geist font.
- [x] Base folder structure:
  - `app/` — routes: `page.tsx` (home), `about/page.tsx`, `projects/page.tsx`, `projects/[slug]/page.tsx`, `experience/page.tsx`, `contact/page.tsx`, `layout.tsx`, `sitemap.ts`, `robots.ts`, `not-found.tsx`.
  - `components/` — reusable UI (`Navbar`, `Footer`, `Hero`, `ProjectCard`, `TechStackSection`, `ExperienceOverviewSection`, `HomeContactSection`, `ContactView`, `SectionHeading`, `Container`, `Icons`).
  - `data/` — `site.ts`, `projects.ts`, `skills.ts`, `experience.ts` (plain TS data modules, no UI logic).
  - `public/` — favicon, CV PDF (`public/SUKANTO_CV.pdf`, `public/resume.pdf`).
- [x] Dark navy/charcoal + blue-accent theme set up in Tailwind config / globals.css.
- [x] ESLint + TypeScript strict mode confirmed working (`next lint`, `tsc --noEmit`).
- [x] Git repo initialized.

## Phase 1 — Design system & navigation

- [x] Typography scale, color tokens, spacing scale in Tailwind theme.
- [x] Shared layout: nav bar (desktop + mobile/responsive menu), footer.
- [x] Base page shell/layout component used across routes.
- [x] Verify dark theme renders consistently across breakpoints (mobile/tablet/desktop).

## Phase 2 — Homepage

- [x] Hero section (name, role, short intro, CTA buttons: View Projects / Download Resume / Contact Me).
- [x] Tech stack overview section.
- [x] Featured projects section (4 cards, pulled from `projects.ts`).
- [x] Short experience overview section.
- [x] Contact section (email, links).
- [x] Footer.
- [x] Responsive check: mobile, tablet, desktop.

## Phase 3 — Remaining pages

### About (`/about`)
- [x] Intro, background/experience narrative, technical interests, engineering philosophy, core strengths.
- [x] Academic background & competitive programming achievements.

### Projects (`/projects`)
- [x] Project grid using responsive cards (name, description, tech tags, metrics, GitHub links).
- [x] Dynamic detail route `/projects/[slug]`: problem, overview, architecture, tech/tools, implementation notes, challenges/solutions, links.
- [x] Dynamic project routes generated during static export (`generateStaticParams`).

### Experience (`/experience`)
- [x] Timeline/structured layout per entry: company, title, period, responsibilities, technologies, key contributions.
- [x] Education, scholarship, and problem-solving sections.

### Contact (`/contact`)
- [x] Email, LinkedIn, GitHub links, phone, location.
- [x] CV download link (served from `public/SUKANTO_CV.pdf`).
- [x] One-click email copy & direct mailto link.

## Phase 4 — SEO, performance, accessibility

- [x] Per-page `metadata` (title, description) via App Router metadata API.
- [x] Open Graph & Twitter card tags.
- [x] `app/sitemap.ts` and `app/robots.ts` with static export configuration.
- [x] Favicon set.
- [x] Image optimization compatible with static export (`unoptimized: true`).
- [x] Accessibility pass: semantic HTML, alt text, focus states, color contrast against dark theme.

## Phase 5 — Testing, export, deployment

- [x] `tsc --noEmit` and `next lint` pass clean (0 errors, 0 warnings).
- [x] `next build` produces `out/` with zero server-dependent features.
- [x] Manual check: direct navigation + refresh works on every route, including `/projects/[slug]`, on the exported static output.
- [x] README written: install steps, dev/build/export commands, deployment steps, how to update data modules.
- [ ] Connect remote Git repository to GitHub & configure Cloudflare Pages or GitHub Pages for automatic deployments on push.

## Acceptance criteria (from requirement.md §8) — final check before calling it done

- [x] All pages implemented and match agreed visual direction.
- [x] Works across desktop and mobile.
- [x] Navigation and internal links correct.
- [x] Project detail pages load correctly on direct nav + refresh (`trailingSlash: true`).
- [x] CV download works.
- [x] GitHub/LinkedIn links work.
- [x] SEO metadata configured.
- [x] TypeScript + lint checks pass.
- [x] Static export completes successfully.
