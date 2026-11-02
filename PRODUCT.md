# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (SSG) + Tailwind CSS v4 + TypeScript, Framer Motion via React islands, deployed as static output (PRD names Netlify; repo currently deploys to GitHub Pages under `/studio-nuansa`). Existing codebase answers the stack question.

## Users

Primary: Indonesian households and small businesses in SES A and B+ who will invest in a well-designed space and need a designer-led studio.
- Owners of newly handed-over homes who need the interior done.
- Young couples moving into a first apartment or house.
- F&B owners (cafe, restaurant) who need an interior concept.
- Small-office and co-working tenants.

Job: judge in one sitting whether Studio Nuansa understands how they live or operate, trust the studio's taste and process, then send a project inquiry.

## Product Purpose

Marketing and portfolio site for Studio Nuansa, a Jakarta interior design studio (residential, F&B, office). Success is a qualified inquiry through the contact form: project type, location, area, timeline, budget.

## Positioning

Designer-led and process-first: the studio starts by listening to how clients live (morning rituals, where someone reads), and is open about its six-step process and indicative pricing. It avoids "your dream home" cliches and architecture jargon.

Tagline: "Mendesain Nuansa, Membangun Rumah Jiwa."
Footer line: "Designed with intention, lived with joy."

## Operating Context

Visitors are Indonesian-speaking, mostly on phones, often arriving from Instagram, Pinterest, or search ("interior designer jakarta"). They compare studios by portfolio imagery, then by process and price clarity. Contact happens through email or WhatsApp.

## Capabilities and Constraints

- Single-page site, Indonesian copy, 13 sections in the PRD order: Navbar, Hero, Philosophy, Featured Projects, Services, Process, Style Categories, The Team, Journal, Testimonial, Investment and Pricing, Contact, Footer.
- Services: Full Interior Design, Design Consultation, E-Design (online).
- Contact form fields per PRD: name, email, WhatsApp, project type, project location, area (m2), target timeline, budget range, extra message. The form has no backend yet; it only shows a success state.
- Animation is built with Framer Motion in React islands; hydration strategy per PRD (`client:load` hero, `client:visible` sections, `client:idle` contact).
- SEO: title, description, keywords, OG image (1200x630), and LocalBusiness, Person, CreativeWork schema per PRD.
- Imagery sources named by the PRD: Unsplash and Pexels. The user asked for as many fitting images as possible, sourced from Pexels.

## Brand Commitments

- Name: Studio Nuansa. "Nuansa" means subtle atmosphere or mood.
- Voice: sophisticated, thoughtful, design-literate, warm. Deep on process and philosophy.
- Hero headline stays: "Ruang Adalah Cerminan Diri. Mari Buat Yang Layak."
- Avoid: heavy architectural jargon, generic marketing speak, "your dream home" cliches.
- The user is replacing the current visual world entirely (full redesign, all sections). The current look (cream ground, Cormorant serif, terracotta accent, generic Unsplash set) is evidence only, not a constraint.

## Evidence on Hand

All studio facts are placeholders confirmed by the user: founding year 2019, 80+ projects, press mentions (Casa Indonesia, Dezeen, ArchDaily), the eight projects, team names, testimonials, prices per m2, office address (Jl. Senopati No. 42), email, WhatsApp number. They may be rewritten or extended with sample content, and anything invented must be labeled as sample so it can be replaced.

No real project photography, team portraits, logo, or client photos exist. Current images are 21 Unsplash URLs hot-linked in components; Pexels access is pending (network allowlist and API key).

## Product Principles

1. Listen first: the site shows the studio's interest in how people live before it shows finishes.
2. Material honesty: show real texture and craft, never decoration standing in for substance.
3. Quiet confidence: negative space and restraint signal taste more than ornament.
4. Transparent process and price: timelines and indicative ranges are stated openly.
5. One clear next step: every section leads toward starting a conversation.

## Accessibility & Inclusion

No product-specific standard was stated. Baseline: readable Indonesian copy at mobile widths, 44px touch targets, visible focus, respect for reduced motion.
