# Section 1: Project Setup + Hero

## What we built
Initialized the Astro project, wired up Tailwind CSS and React, and built the first visible section of the site — the Hero.

---

## Files created

| File | What it does |
|------|-------------|
| `src/styles/global.css` | Imports Tailwind and sets the base dark background + font |
| `src/layouts/Layout.astro` | Wraps every page with the `<html>` shell, meta tags, and global styles |
| `src/components/Nav.astro` | Sticky top nav with your name, section links, and "Get a Quote" button |
| `src/components/Hero.astro` | Full-screen hero with headline, subheading, CTAs, and social links |
| `src/pages/index.astro` | The homepage — pulls in Nav + Hero |

---

## Why these choices

**Astro** — generates pure HTML/CSS with zero JavaScript by default. Loads fast, which matters for first impressions and SEO.

**Tailwind v4** — utility classes right in the HTML. No separate CSS files to manage. The `@import "tailwindcss"` line in global.css is all the setup you need in v4 (no tailwind.config.js required).

**Dark theme** — professional, modern look that signals "tech expertise" without feeling like a hacker site. The indigo accent color reads as trustworthy and calm.

**Layout.astro** — every page should share the same `<head>` (favicon, meta tags, global CSS). Putting it in a layout means you change it once and every page updates.

---

## The Hero strategy

The headline — *"I build web apps that grow your business"* — is written for a business owner, not a recruiter. It answers "what's in it for me?" immediately.

The trust badge ("Available for freelance") + AWS cert callout + the 4 years experience line do the social proof work before anyone scrolls.

Two CTAs on purpose:
- **View My Work** → scrolls to projects (for the skeptic who needs proof first)
- **Let's Talk** → scrolls to contact (for the ready buyer)

---

## How to run it locally

```bash
# Use Node 22 (required for Astro 6)
nvm use 22

npm run dev
# Opens at http://localhost:4321
```
