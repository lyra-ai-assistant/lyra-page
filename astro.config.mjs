import { defineConfig } from 'astro/config';

// This site is deployed to GitHub Pages as a project page at
// https://lyra-ai-assistant.github.io/lyra-page/, so `base` is set to
// match this repo's name. If you instead point a custom domain at it, or
// rename the repo to `lyra-ai-assistant.github.io`, remove the `base` line.
export default defineConfig({
  site: 'https://lyra-ai-assistant.github.io',
  base: '/lyra-page',
});
