/**
 * Prefix an internal path with Astro's BASE_URL.
 *
 * Astro sets BASE_URL to "/" in dev (no base configured) or
 * "/repo-name/" when `base` is set in astro.config.mjs.
 *
 * Usage:
 *   import { url } from '../lib/url';
 *   <a href={url('/about')}>About</a>
 *   <a href={url(`/${year}/${month}/${day}/${slug}`)}>Post</a>
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // strip trailing slash
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
