# Lyra web page

Lyra's web page, built with [Astro](https://astro.build).

## Content

The site explains what Lyra is (an open source, fully offline AI assistant
for GNU/Linux) and links out to the three repos that make it up:

- [`lyra-server`](https://github.com/lyra-ai-assistant/lyra-server) — the backend daemon
- [`lyra-ui`](https://github.com/lyra-ai-assistant/lyra-ui) — the Electron desktop client
- [`lyra-packaging`](https://github.com/lyra-ai-assistant/lyra-packaging) — Arch/Debian packaging and CI/CD

Copy, requirements, and install commands are pulled from those repos'
READMEs — update this site whenever those change (new distros, new
requirements, new package versions, etc).

## Development

Requires Node.js 20+ and pnpm (via `corepack enable`, or installed globally).

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

## Deploying

A GitHub Actions workflow (`.github/workflows/deploy.yml`) is included to
build and publish `dist/` to GitHub Pages on every push to `main`. To enable
it:

1. In the repo settings, go to **Pages** and set the source to **GitHub
   Actions**.
2. Push to `main` — the workflow will build and deploy automatically.

`astro.config.mjs` sets `base: '/page'`, which is correct for this repo's
default GitHub Pages URL (`https://lyra-ai-assistant.github.io/page/`). If
you point a custom domain at it instead, remove that line.
