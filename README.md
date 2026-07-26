# Lyra's web page


## Content

The site explains what Lyra is (an open source, fully offline AI assistant
for GNU/Linux) and links out to the three repos that make it up:

- [`lyra-server`](https://github.com/lyra-ai-assistant/lyra-server) — the backend daemon
- [`lyra-ui`](https://github.com/lyra-ai-assistant/lyra-ui) — the Electron desktop client
- [`lyra-packaging`](https://github.com/lyra-ai-assistant/lyra-packaging) — Arch/Debian packaging and CI/CD

**All page copy lives in `src/data/`, not in the components.** Update this
site whenever those repos change (new distros, new requirements, new
package versions, etc.) by editing the relevant data file instead of
hunting through markup:

| File | Controls |
| --- | --- |
| `src/data/site.ts` | Site title/description, hero copy, license line |
| `src/data/components.ts` | The three repo cards (role, facts, stack) |
| `src/data/distros.ts` | Supported-distributions table + OS badges |
| `src/data/requirements.ts` | System-requirements table |
| `src/data/install.ts` | Install commands and setup steps |
| `src/data/assets.ts` | Paths to images in `public/images/` |

## Architecture

```
src/
├── layouts/
│   └── BaseLayout.astro     # <html> shell: head, SiteHeader, SiteFooter, slot
├── components/
│   ├── layout/              # Site-wide chrome (header, footer)
│   ├── ui/                  # Small reusable atoms (Button, Table, CodeBlock, ...)
│   └── sections/            # One component per homepage section
├── data/                    # All page copy and structured content (see above)
├── utils/
│   └── paths.ts             # withBase() — the one place that knows about base paths
├── styles/
│   └── global.css           # Design tokens, resets, and shared layout primitives only
└── pages/
    └── index.astro          # Composition root: assembles sections, no markup logic
```

A few rules this follows, so future changes stay easy:

- **Content is data, not markup.** Every section reads its copy from
  `src/data/*.ts`. To change what the site says, edit data — you should
  rarely need to touch a `.astro` template just to update text.
- **Each component has one job.** `RepoCard` only renders one repo's info;
  `Table` only renders a generic table from `{ headers, rows }`; `Hero`
  only composes copy + art. If a change needs touching more than one
  component's responsibility, that's usually a sign the split is off.
- **Styles are colocated, not centralized.** Each component keeps its own
  scoped `<style>`. `global.css` only holds things that are genuinely
  shared across many components (color/type tokens, resets, `.wrap`,
  `.section*` shells) — not one-off component styling.
- **Shared UI lives in `components/ui/`, page content lives in
  `components/sections/`.** `ui/` components (`Button`, `Table`,
  `CodeBlock`, `Eyebrow`, `GemList`, `OsBadge`) know nothing about Lyra
  specifically — they just render whatever props they're given, so
  they're reusable if the page grows new sections.

## Development

Requires Node.js 22.13+ and pnpm (via `corepack enable`, or installed globally).

```
pnpm install
pnpm dev
```

This starts a local dev server (default `http://localhost:4321`).

## Build

```
pnpm build
pnpm preview   # preview the production build locally
```

Output goes to `dist/`.

## Deployment

A GitHub Actions workflow (`.github/workflows/deploy.yml`) is included to
build and publish `dist/` to GitHub Pages on every push to `main`. To enable
it:

1. In the repo settings, go to **Pages** and set the source to **GitHub
   Actions**.
2. Push to `main` — the workflow will build and deploy automatically.

`astro.config.mjs` sets `base: '/lyra-page'`, which is correct for this
repo's default GitHub Pages URL (`https://lyra-ai-assistant.github.io/lyra-page/`).
If you point a custom domain at it instead, remove that line.

Lyra's web page, built with [Astro](https://astro.build).
