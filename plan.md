# Personal Portfolio Website Plan

## Goal

Build a clean, modern, high-signal personal portfolio in this Next.js 16 app that feels crafted by a strong developer: fast, polished, content-rich, visually intentional, easy to navigate, and memorable without being noisy.

## Product Direction

- Keep the site simple to use, but not plain.
- Show both engineering skill and product taste.
- Make the experience feel credible, professional, and technically sharp.
- Prioritize clarity, performance, accessibility, and strong storytelling.
- Design for both recruiters and technical peers.

## Primary Objectives

1. Introduce the developer clearly within the first screen.
2. Prove capability with real projects, metrics, and technical depth.
3. Make it easy to contact, hire, or collaborate.
4. Showcase frontend quality while keeping the site fast and maintainable.
5. Create a structure that can grow over time with more projects, writing, and experiments.

## Audience

- Recruiters who want a quick, impressive overview.
- Engineering managers who want proof of execution.
- Developers who want to inspect technical decisions.
- Freelance clients who want trust, clarity, and contact options.

## Site Strategy

The portfolio should feel like a product, not a resume page. It should combine strong personal branding, carefully chosen projects, selective technical depth, and thoughtful UI details. The homepage should do most of the heavy lifting, with room for dedicated pages when content grows.

## Proposed Information Architecture

### Core Pages

1. `/` - Homepage
2. `/projects` - Full project archive
3. `/projects/[slug]` - Detailed case study pages
4. `/about` - Personal story, values, experience, strengths
5. `/contact` - Contact methods and collaboration CTA

### Optional Pages For Phase 2

1. `/blog` - Writing, notes, engineering articles
2. `/blog/[slug]` - Long-form content pages
3. `/playground` - UI experiments, demos, mini builds
4. `/uses` - Tools, setup, workflow, favorite stack
5. `/resume` - Lightweight resume page or downloadable PDF

## Homepage Sections

### 1. Hero

Purpose: make a strong first impression.

Include:
- Name and role positioning
- Short value proposition
- One sentence on specialty
- Primary CTA: view projects
- Secondary CTA: contact / resume / GitHub
- Subtle visual treatment that feels premium, not crowded

Example direction:
- "I build fast, thoughtful web products with strong engineering foundations."

### 2. Trust Strip

Purpose: quickly establish credibility.

Include:
- Years of experience or focus areas
- Core stack
- Highlights like shipped products, open-source work, performance wins, or client outcomes

### 3. Featured Projects

Purpose: prove skill through execution.

Each project card should include:
- Project name
- Short summary
- Problem or use case
- Tech stack
- Key achievement or measurable impact
- Link to case study
- Link to live demo / repo if available

### 4. About Snapshot

Purpose: humanize the portfolio without turning it into a long biography.

Include:
- Short intro
- What kind of work you enjoy
- How you think about code, product, and collaboration

### 5. Skills / Capabilities

Purpose: show depth beyond tool-name dumping.

Organize by capability, not giant badge walls:
- Frontend engineering
- Full-stack product development
- Performance and accessibility
- System design / architecture
- Developer experience / tooling

### 6. Experience Highlights

Purpose: summarize career credibility.

Include:
- Roles or key collaborations
- What was built
- Notable outcomes

### 7. Writing / Thinking (Optional on homepage)

Purpose: show communication and technical maturity.

Include:
- Featured articles, notes, or principles
- If no blog exists yet, replace with "currently exploring" or "engineering notes"

### 8. Contact CTA

Purpose: end with a clear conversion moment.

Include:
- Email
- LinkedIn
- GitHub
- Availability statement
- Short CTA sentence

## Project Case Study Structure

Each detailed project page should follow a repeatable template:

1. Overview
2. Problem / context
3. Goals and constraints
4. Approach and architecture
5. Key implementation decisions
6. Challenges and tradeoffs
7. Results / metrics / lessons learned
8. Links to repo, live site, screenshots, or demos

This is important because case studies show how the developer thinks, not just what they shipped.

## Feature Plan

### Must-Have Features

- Responsive layout
- Strong homepage storytelling
- Featured projects section
- Reusable project data model
- About and contact pages
- SEO metadata per page
- Accessible navigation
- Good typography and spacing system
- Social links
- Mobile-friendly menu

### Strong Portfolio Features

- Case study pages with rich content
- Project filters by category or stack
- Copy email button
- Resume download link
- GitHub / LinkedIn / X links
- Scroll progress or section highlight navigation
- Lightweight animations for polish
- Open Graph images
- Favicon and app metadata

### Advanced Features That Signal Senior Quality

- MDX-powered writing or case studies
- Structured content collections for projects and blog posts
- Command palette or quick navigation
- Theme system only if it genuinely improves the design
- Performance budget and Lighthouse targets
- Analytics with privacy-friendly tracking
- View transitions or tasteful motion system
- "Now" section or current focus block
- Simple CMS integration later if content volume grows

## Technical Plan

### Framework and App Structure

- Use App Router structure already present in `src/app`
- Keep routes simple and composable
- Use server components by default where appropriate
- Introduce client components only for interaction-heavy pieces

### Content Strategy

Recommended approach:
- Store portfolio content in typed local data first
- Move to MDX or content collections for blog/case studies once structure is stable

Suggested content sources:
- `src/data/projects.ts`
- `src/data/experience.ts`
- `src/data/site.ts`
- `content/blog/*.mdx`
- `content/projects/*.mdx`

### Component Plan

Create reusable sections/components such as:
- Navbar
- Footer
- Section wrapper
- Hero
- Project card
- Experience item
- Skill group
- CTA block
- Social links
- Mobile nav

### Styling Plan

- Use Tailwind CSS v4 already installed
- Define a clear design token layer: colors, spacing, radii, shadows, typography
- Avoid default-looking styles from starter templates
- Use a distinct font pairing and intentional visual rhythm
- Add subtle motion for entrance, hover, and section transitions

### Metadata and SEO

- Update global metadata in `src/app/layout.tsx`
- Add per-page metadata
- Add Open Graph and Twitter card metadata
- Add sitemap and robots config later
- Use strong titles and descriptions focused on personal brand

### Performance Plan

- Optimize images and avoid oversized media
- Prefer static content where possible
- Keep animations lightweight
- Limit client-side JavaScript
- Track Lighthouse performance, accessibility, and SEO

### Accessibility Plan

- Semantic headings and landmarks
- Keyboard-friendly nav and buttons
- Sufficient contrast
- Visible focus states
- Reduced-motion consideration
- Descriptive link text

## Content Requirements

Before implementation, prepare the following content:

### Personal Brand Content

- Full name
- Professional title
- Short intro
- Longer bio
- Location / remote preference
- Availability status

### Projects Content

For each project:
- Name
- Tagline
- Summary
- Problem solved
- Tech stack
- Role
- Key challenges
- Results / metrics
- Links
- Screenshots

### Experience Content

- Roles
- Companies / clients
- Dates
- Responsibilities
- Outcomes

### Social / Contact Content

- Email
- GitHub
- LinkedIn
- Resume link
- Optional X / Dev.to / YouTube / Behance depending on profile

## Visual Direction

The site should be clean and simple, but still feel premium.

Design principles:
- Strong spacing and hierarchy
- Purposeful typography
- Limited, confident color palette
- Minimal but expressive motion
- High contrast where important
- Avoid clutter, badge spam, and generic template aesthetics

Recommended direction:
- Warm neutral or cool slate base
- One accent color used sparingly
- Editorial-inspired layout with modern product polish
- Large headline, calm body text, sharp project presentation

## Phased Delivery Plan

### Phase 1 - Foundation

- Set brand direction
- Define sitemap
- Prepare content model
- Replace starter metadata and default page
- Create base layout, navigation, footer, and homepage shell

### Phase 2 - Core Portfolio

- Build homepage sections
- Build projects listing
- Build project detail template
- Build about and contact pages
- Add responsive behavior across breakpoints

### Phase 3 - Polish

- Add motion and micro-interactions
- Improve copy and project storytelling
- Add social preview assets
- Improve empty states and hover states
- Tighten spacing, contrast, and accessibility

### Phase 4 - Expansion

- Add blog or notes
- Add playground / experiments
- Add analytics
- Add CMS or MDX workflow if needed

## Suggested File Structure

```text
src/
  app/
    page.tsx
    about/page.tsx
    contact/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    layout.tsx
    globals.css
  components/
    layout/
    sections/
    ui/
  data/
    projects.ts
    experience.ts
    site.ts
content/
  blog/
  projects/
public/
  images/
  og/
```

## Quality Checklist

The final portfolio should:

- Feel custom, not template-generated
- Work smoothly on mobile and desktop
- Have clear navigation and CTAs
- Show 2-4 strong featured projects
- Present measurable impact where possible
- Load fast
- Be accessible
- Be easy to maintain and extend

## Risks To Avoid

- Too much text without proof
- Too many flashy effects without substance
- Generic skill badge overload
- Weak project descriptions
- Poor mobile spacing
- Using dark mode or theme switching without strong design justification
- Shipping placeholder content for too long

## Recommended Build Order

1. Finalize content and positioning
2. Define visual system and typography
3. Build homepage structure
4. Add project data and featured project cards
5. Build project detail pages
6. Build about and contact pages
7. Add polish, motion, SEO, and accessibility improvements
8. Add optional blog/playground sections

## Definition Of Done

The portfolio is ready when:

- The homepage clearly communicates who you are and what you build.
- At least 2-3 projects are presented with strong explanations.
- Contact options are easy to find.
- The experience feels polished across devices.
- Metadata, accessibility, and performance are handled properly.
- The codebase is structured for future content growth.

## Immediate Next Step

Start by turning this plan into implementation tasks for Phase 1: branding, homepage structure, reusable data model, and the initial design system for the portfolio.
