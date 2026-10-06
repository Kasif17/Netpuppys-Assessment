# TIS — Tulas International School

A modern, animated, high-converting homepage for Tulas International School (TIS), Dehradun — built as a Frontend Developer Assessment.

## Project Overview

A complete redesign of the TIS homepage featuring premium animations, responsive design, dark mode, custom cursor, scroll progress indicator, and a conversion-focused layout — all while preserving the school's authentic branding and content.

**Live reference:** [tis.edu.in](https://tis.edu.in)

## Features

- **Hero** — Auto-sliding hero with entrance animations, CTAs, and trust badges
- **Highlights** — Animated counters (25+ years, 3500+ students, 98% placement, 150+ faculty)
- **About** — Scroll-reveal image + text composition with value cards
- **Academics** — Interactive program cards with hover animations (Pre-Primary → Grade 12)
- **Why Choose TIS** — Feature grid with staggered reveal
- **Campus & Facilities** — Hover-reveal image gallery
- **Student Life** — Activity grid + feature highlight on dark background
- **Admissions CTA** — High-conversion section with step-by-step process
- **Testimonials** — Carousel with navigation controls
- **News & Events** — Card grid with image hover effects
- **Contact** — Contact info + embedded Google Maps
- **Footer** — Full responsive footer with navigation, social links, and legal

### Interactive Features
- ✅ Custom cursor (dot + ring, disabled on touch devices)
- ✅ Scroll progress indicator (gold gradient bar)
- ✅ Scroll reveal animations (IntersectionObserver-based)
- ✅ Theme switcher (light/dark, persisted to localStorage)

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.3.8 | Framework (App Router, SSG) |
| React | 19.2.8 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Lucide React | latest | Icons |

> Framer Motion was evaluated and removed — all animations are implemented with CSS transitions and the Web Animations API for minimal bundle size.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, SEO
│   ├── page.tsx            # Homepage composition
│   └── globals.css         # Global styles, CSS variables, animations
├── components/
│   ├── Navbar.tsx          # Sticky responsive navbar with mobile menu
│   ├── Hero.tsx            # Auto-sliding hero section
│   ├── Highlights.tsx      # Animated stats counters
│   ├── About.tsx           # School story section
│   ├── Academics.tsx       # Program cards
│   ├── WhyChooseUs.tsx     # Value propositions
│   ├── Campus.tsx          # Facilities gallery
│   ├── StudentLife.tsx     # Activities + feature highlight
│   ├── AdmissionsCTA.tsx   # Conversion section
│   ├── Testimonials.tsx    # Testimonial carousel
│   ├── NewsEvents.tsx      # News card grid
│   ├── Contact.tsx         # Contact info + map
│   ├── Footer.tsx          # Full footer
│   ├── SectionHeading.tsx  # Reusable heading component
│   ├── ScrollProgress.tsx  # Scroll progress bar
│   └── CustomCursor.tsx    # Custom cursor (desktop only)
└── lib/
    ├── data.ts             # All content data (nav, stats, programs, etc.)
    └── hooks.ts            # Custom hooks (scroll reveal, counter, theme, progress)
```

## Animations & Interactions

All animations respect `prefers-reduced-motion`.

| Animation | Implementation |
|---|---|
| Hero entrance | CSS opacity + translateY with delay |
| Hero slideshow | CSS opacity transition, 6s interval |
| Scroll reveal | IntersectionObserver + CSS transitions |
| Staggered cards | CSS transition-delay per card index |
| Animated counters | requestAnimationFrame with easing |
| Image hover zoom | CSS transform scale |
| Facility hover reveal | CSS max-height + opacity |
| Custom cursor | rAF loop for smooth ring lag |
| Scroll progress | CSS custom property `--scroll-progress` |
| Button micro-interactions | CSS active:scale-95 |
| Nav scroll state | scrollY listener → backdrop-blur |

## Responsive Design

Tested breakpoints: 320px, 375px, 390px, 414px, 768px, 1024px, 1280px, 1440px+

- Mobile-first layouts throughout
- Navbar collapses to hamburger menu on mobile
- Hero text scales from 2.5rem to 4.5rem
- Grid layouts adapt: 1 → 2 → 3/4 columns
- No horizontal overflow at any breakpoint
- Touch devices: custom cursor disabled

## Accessibility

- Semantic HTML5 elements (`header`, `main`, `nav`, `section`, `article`, `footer`)
- Proper heading hierarchy (h1 → h2 → h3)
- Skip-to-content link for keyboard users
- All interactive elements have `aria-label` or visible text
- Visible focus states (gold outline)
- `role` and `aria-*` attributes on dynamic components
- `alt` text on all meaningful images
- Reduced motion support via `@media (prefers-reduced-motion: reduce)`
- Color contrast meets WCAG AA standards

## Performance

- Static site generation (SSG) — zero server-side rendering overhead
- No Framer Motion — animations via CSS + native APIs only
- Images: `loading="lazy"` on all below-fold images, `loading="eager"` on hero
- Fonts: `display: swap` to prevent FOIT
- No unnecessary re-renders — state is minimal and localized
- Bundle: only 4 packages added (framer-motion installed but unused, lucide-react)

## Installation

```bash
git clone <repository-url>
cd tis-website
npm install
```

## Development

```bash
npm run dev
# Open http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

## Deployment

### Vercel (Recommended)

```bash
npx vercel --prod
```

Or connect the GitHub repository to Vercel — it auto-detects Next.js and deploys on push.

**Build command:** `npm run build`  
**Output directory:** `.next`  
**Install command:** `npm install`

### Netlify

```bash
npm run build
# Publish directory: .next
# Use @netlify/plugin-nextjs
```

### Environment Variables

No environment variables required. The project is fully static.

## Live Demo

> Deploy to Vercel and update this link.

## GitHub Repository

> Add your repository URL here.

---

*Built for the TIS Frontend Developer Assessment — Netpuppys*
