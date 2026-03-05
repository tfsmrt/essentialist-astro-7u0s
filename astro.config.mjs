import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  base: '/essentialist-astro-7u0s',
  site: 'https://essentialistdemo.wordpress.com/',
  output: 'static',
  integrations: [mdx(), sitemap()],
});
