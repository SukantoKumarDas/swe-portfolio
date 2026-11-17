# Full Stack Software Engineer Portfolio
## Website Development Brief

**Project Type:** Personal Developer Portfolio Website  
**Role:** Full Stack Software Engineer  
**Framework:** Next.js + TypeScript  
**Deployment:** Cloudflare Pages / GitHub Pages  
**Design:** Dark Theme with Blue Accent

---

## 1. Project Overview

I want to develop a modern, professional, responsive portfolio website to showcase my skills, professional experience, technical knowledge and software development projects as a Full Stack Software Engineer.

The website should demonstrate my capabilities in frontend development, backend engineering, database design, API development and software architecture.

The website should be visually professional, lightweight, SEO-friendly and optimized for desktop, tablet and mobile devices.

**Important:** This must be a static website. No dedicated backend or server-side runtime is required for the portfolio itself.

## 2. Technology Stack

The following technologies should be used:

| Area | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Programming Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui (where appropriate) |
| Icons | Lucide Icons |
| Fonts | Geist or similar modern typography |
| Rendering | Next.js Static Export |
| Version Control | Git / GitHub |
| Deployment | Cloudflare Pages or GitHub Pages |

The project must use Next.js static export (`output: "export"`).

The generated static website must be deployable from the `out/` directory without requiring a Node.js production server.

## 3. Design Requirements

### Overall Design Direction

- Dark, modern and minimalistic design.
- Navy/charcoal background.
- Blue as the primary accent color.
- Clean typography and consistent spacing.
- Professional appearance suitable for software engineering roles.
- Minimal and subtle animations.
- Smooth navigation and interactions.
- Fully responsive layouts.

Avoid excessive animations, unnecessary visual effects and overly complicated UI elements.

### Visual Reference

The overall design should resemble a modern software engineer's personal portfolio, with a clean hero section, featured project cards, technical skill sections and professional navigation.

## 4. Website Pages and Features

### 4.1 Home Page (`/`)

The homepage should contain:

- Professional navigation bar.
- Hero section introducing me as a Full Stack Software Engineer.
- Short professional introduction.
- Primary call-to-action buttons:
  - View Projects
  - Download Resume
  - Contact Me
- Technology stack overview.
- Featured projects (3–4 projects).
- Short professional experience overview.
- Contact section.
- Professional footer.

### 4.2 About Page (`/about`)

Include:

- Professional introduction.
- Background and development experience.
- Technical interests.
- Software engineering philosophy.
- Core strengths and areas of expertise.

### 4.3 Projects Page (`/projects`)

Display projects using responsive project cards.

Each project should include:

- Project name.
- Short description.
- Project screenshot or thumbnail.
- Technologies used.
- Key features.
- GitHub repository link (where available).
- Live demonstration link (where available).

Include an individual project details page for each featured project.

Project details should explain:

- Problem being solved.
- Project overview.
- Technical architecture.
- Technologies and tools.
- Key implementation details.
- Challenges and solutions.
- Screenshots.
- GitHub and live demo links.

### 4.4 Experience Page (`/experience`)

Display professional experience in a clean timeline or structured layout.

Each experience entry should include:

- Company or organization.
- Job title.
- Employment period.
- Responsibilities.
- Technologies used.
- Key contributions and achievements.

### 4.5 Contact Page (`/contact`)

Include:

- Professional email address.
- LinkedIn profile.
- GitHub profile.
- Downloadable CV.
- A contact email link.

A backend-powered contact form is not required for the initial version.

## 5. Technical Requirements

### Code Quality

- Use TypeScript throughout the application.
- Follow reusable component architecture.
- Maintain a clean and scalable folder structure.
- Avoid unnecessary code duplication.
- Use semantic HTML.
- Follow Next.js best practices.

### Content Management

Portfolio content should be maintained separately from UI components wherever practical.

For example:

- `projects.ts`
- `skills.ts`
- `experience.ts`
- `site.ts`

This should make it easy to update project information, skills and professional details without modifying multiple components.

### Responsive Design

The website must work properly on:

- Desktop computers.
- Laptops.
- Tablets.
- Mobile phones.

### SEO and Performance

Implement:

- Page-specific metadata.
- Appropriate page titles and descriptions.
- Open Graph metadata.
- Sitemap.
- Robots.txt.
- Favicon.
- Optimized images.
- Good loading performance.
- Accessibility best practices.

### Static Export

The project must successfully generate static HTML, CSS and JavaScript files.

Required configuration:

`output: "export"`

The production build must generate the `out/` directory.

Avoid dependencies on:

- Next.js API routes.
- Server Actions.
- Server-side runtime functionality.
- Server-dependent dynamic features.
- Runtime image optimization requiring a Next.js server.

## 6. Deployment Requirements

The website should be deployed using Cloudflare Pages or GitHub Pages.

Preferred option: Cloudflare Pages.

Requirements:

- GitHub repository setup.
- Production deployment.
- Automatic deployment when changes are pushed to the main branch.
- HTTPS support.
- Custom domain support (if available).
- Proper routing and refresh behavior for all pages.

## 7. Deliverables

The developer must provide:

1. Complete Next.js source code.
2. GitHub repository containing the project.
3. Fully responsive portfolio website.
4. All requested pages and components.
5. Production-ready static build.
6. Deployment configuration.
7. README with installation and deployment instructions.
8. Final live website URL.
9. Documentation explaining how to update projects, skills, experience and other content.

## 8. Acceptance Criteria

The project will be considered complete when:

- All requested pages are implemented.
- The design matches the agreed visual direction.
- The website works across desktop and mobile devices.
- Navigation and internal links work correctly.
- Project detail pages load correctly after direct navigation and refresh.
- CV download works.
- GitHub and LinkedIn links work.
- SEO metadata is configured.
- TypeScript and lint checks pass.
- Production static export completes successfully.
- The website is successfully deployed.
- The complete source code is available in GitHub.

## 9. Development Approach

Please follow an incremental development approach.

**Phase 1:** Project setup, design system and navigation.

**Phase 2:** Homepage and responsive layout.

**Phase 3:** About, Projects, Experience and Contact pages.

**Phase 4:** SEO, performance and accessibility improvements.

**Phase 5:** Testing, static export and production deployment.

Please share progress updates and request feedback after completing the initial homepage design before proceeding with all remaining pages.

## 10. Important Notes

- Prioritize clean UI/UX over unnecessary visual effects.
- Keep the website lightweight and fast.
- Do not use fake professional experience or fabricated achievements.
- Use placeholder content until actual portfolio information is provided.
- The website should be easy to maintain and extend.
- Ensure that the final implementation follows the agreed static architecture.

**Final Goal:** Build a polished, professional Full Stack Software Engineer portfolio that effectively communicates my engineering capabilities, demonstrates my real-world projects and helps me present my professional profile to potential employers and clients.