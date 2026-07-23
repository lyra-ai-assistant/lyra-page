import { defineConfig } from 'astro/config';

// If this site is deployed to GitHub Pages as a project page
// (https://lyra-ai-assistant.github.io/page/), keep `base` set below.
// If you instead point a custom domain at it, or rename this repo to
// `lyra-ai-assistant.github.io`, remove the `base` line.
export default defineConfig({
  site: 'https://lyra-ai-assistant.github.io',
  base: '/lyra-page',
});
