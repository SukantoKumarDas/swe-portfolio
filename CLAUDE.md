# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern, high-performance static portfolio website for Sukanto Kumar Das (Full Stack Software Engineer), built with Next.js 16 (App Router), TypeScript, and Tailwind CSS. The site is configured for full static export (`output: "export"`) and deploys to Cloudflare Pages or GitHub Pages from the `out/` directory.

## Core Commands

- `npm run dev`: Start local development server at `http://localhost:3000`
- `npm run build`: Compile and generate the production static export in `out/`
- `npm run lint`: Run ESLint validation
- `npx tsc --noEmit`: Run TypeScript type-checking

## Architecture & Code Structure

- `app/`: Next.js App Router structure
  - `page.tsx`: Homepage (Hero, Featured Projects, Tech Stack, Experience Overview, Contact CTA)
  - `about/page.tsx`: Narrative, engineering philosophy, core strengths, education & problem solving
  - `projects/page.tsx`: Portfolio grid with category tags and metrics
  - `projects/[slug]/page.tsx`: Detailed project case studies (`generateStaticParams` SSG)
  - `experience/page.tsx`: Career history, key deliverables, achievements, and academic credentials
  - `contact/page.tsx`: Direct email, copy button, phone, location, CV download, social links
  - `layout.tsx`: Root shell with dark theme, font variables, sticky Navbar, and Footer
  - `sitemap.ts` & `robots.ts`: Static SEO route generators (`dynamic = "force-static"`)
- `components/`: Modular UI components
  - `Navbar.tsx`: Responsive navigation with active link highlighting and mobile menu
  - `Footer.tsx`: Brand footer with social links and copyright
  - `Hero.tsx`: Professional introduction and call-to-actions
  - `ProjectCard.tsx`: Reusable project display card
  - `TechStackSection.tsx`: Categorized skill breakdown
  - `ExperienceOverviewSection.tsx`: Timeline overview
  - `HomeContactSection.tsx`: Homepage connection callout
  - `Icons.tsx`: Lightweight, custom SVG icons for GitHub, LinkedIn, etc.
- `data/`: Content modules cleanly separated from UI
  - `site.ts`: Profile metadata, links, and contact configuration
  - `projects.ts`: Project case studies, architectures, metrics, and problem statements
  - `skills.ts`: Categorized skill sets and competencies
  - `experience.ts`: Work experience entries and academic credentials
- `public/`: Static assets (`SUKANTO_CV.pdf`, `resume.pdf`, `favicon.ico`)
- `out/`: Generated production static export

## Static Export Constraints

- Do not use server-side runtime APIs, Next API routes, or Server Actions.
- Do not use runtime `next/image` optimization requiring Node; keep `unoptimized: true` in `next.config.ts`.
- Dynamic routes must implement `generateStaticParams()`.
- Static metadata routes (`sitemap.ts`, `robots.ts`) must export `const dynamic = "force-static"`.
