/**
 * Builds a URL that respects Astro's configured `base` path (see astro.config.mjs).
 * Every component that needs to reference a file under `public/` should go
 * through this instead of reading `import.meta.env.BASE_URL` directly, so
 * there is exactly one place that knows how base paths are joined.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, '')}/`;
}
