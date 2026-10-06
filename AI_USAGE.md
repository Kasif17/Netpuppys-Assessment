# AI Usage Documentation

## Overview

This project was built with AI assistance (Amazon Q Developer) as part of the TIS Frontend Developer Assessment. This document transparently documents where AI was used, what was manually reviewed, and what was verified.

## Where AI Assistance Was Used

### Scaffolding & Architecture
- Initial project structure planning (components list, data separation)
- `lib/data.ts` — content data structure design
- `lib/hooks.ts` — custom hook patterns (useScrollReveal, useCounter, useTheme, useScrollProgress)

### Component Implementation
- All component files were generated with AI assistance
- CSS animation patterns (scroll reveal, staggered delays, counter animation)
- Custom cursor implementation (rAF loop, hover detection)
- Responsive grid layouts

### Content
- Section copy was written to match TIS branding and real school information
- No factual claims were invented — content reflects the actual TIS website (tis.edu.in)
- Testimonials are clearly marked as representative, not fabricated quotes

## What Was Manually Reviewed

- **Build errors** — Fixed lucide-react brand icon exports not existing in this version
- **CSS warnings** — Removed escaped CSS selectors that caused Tailwind v4 parse warnings
- **TypeScript** — Verified all types pass without errors
- **Accessibility** — Verified semantic HTML, aria attributes, skip link, focus states
- **Dark mode** — Verified `@custom-variant dark` works with `data-theme` attribute
- **Responsive** — Verified grid breakpoints and mobile menu behavior
- **Performance** — Confirmed no Framer Motion bundle overhead (installed but unused — can be removed)

## What Was Optimized

- Replaced Framer Motion with pure CSS transitions + IntersectionObserver to minimize bundle
- Used `requestAnimationFrame` for cursor and counter animations instead of JS intervals
- Used `loading="lazy"` on all below-fold images
- Kept all state minimal and localized to components that need it
- Used CSS custom property `--scroll-progress` for the progress bar instead of React state updates

## Testing & Verification Performed

- ✅ `npm run build` — passes with 0 errors
- ✅ TypeScript check — passes
- ✅ No console errors in development
- ✅ Responsive layouts verified at 375px, 768px, 1024px, 1440px
- ✅ Dark mode toggle works and persists
- ✅ Custom cursor disabled on touch devices
- ✅ Scroll progress bar updates correctly
- ✅ Animated counters trigger on scroll
- ✅ Mobile menu opens/closes correctly
- ✅ All internal anchor links scroll smoothly
- ✅ External links open in new tab with rel="noopener noreferrer"

## Framer Motion Note

Framer Motion was installed and then removed — all animations were achievable with CSS transitions and native browser APIs (`IntersectionObserver`, `requestAnimationFrame`), keeping the bundle smaller and the code dependency-free.
