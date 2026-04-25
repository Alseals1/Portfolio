# Section 2: Services + Projects

## What we built
Two new sections — Services (what you sell) and Projects (proof you can deliver it) — plus a typed data file to keep project info organized.

---

## Files created / changed

| File | What it does |
|------|-------------|
| `src/data/projects.ts` | TypeScript data file holding all project info (title, description, outcome, stack, links) |
| `src/components/Services.astro` | Three service cards framed around what clients actually buy |
| `src/components/Projects.astro` | Reads from the data file and renders a card for each featured project |
| `src/pages/index.astro` | Updated to import and render both new sections |

---

## Why a separate data file?

The project info lives in `src/data/projects.ts` instead of being hardcoded inside the component. This means:
- Adding or editing a project = edit one file, not dig through component HTML
- You can reuse the same data elsewhere (e.g., a future `/projects` page)
- TypeScript gives you autocomplete and catches typos (`Project` interface)

---

## Services section strategy

Each card is written for a **business owner**, not a developer:
- "AWS Lambda" → "no servers to babysit"
- "Supabase & PostgreSQL" → "database design & integration"
- The bullets answer "what do I get?" not "what tech do you use?"

The "Start a project →" CTA at the bottom of services pushes warm visitors straight to the contact form.

---

## Projects section strategy

Each project card has three layers:
1. **What it is** — plain description anyone can understand
2. **Result callout** (green box) — the outcome, in business terms. This is what closes clients.
3. **Tech badges** — for developers and hiring managers who want to verify the stack

The GitHub links point to your profile for now. Once you have live URLs for Movement or SPACES, add them to `src/data/projects.ts` under the `live` field and they'll appear automatically.

---

## How to update projects

Open `src/data/projects.ts` and edit the array. Each project has:

```ts
{
  title: "Your Project Name",
  description: "What it does, in plain English",
  outcome: "The result — frame this as a business win",
  stack: ["Tech", "Stack", "Here"],
  github: "https://github.com/...",   // optional
  live: "https://yoursite.com",        // optional
  featured: true,                      // shows on homepage
}
```
