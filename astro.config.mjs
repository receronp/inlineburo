// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Until the inlineburo.com custom domain is attached to GitHub Pages, CI builds
// target the project-page URL (receronp.github.io/inlineburo). Set the
// CUSTOM_DOMAIN env var (or repo variable) to switch CI to the real domain.
const ghPreview = process.env.GITHUB_ACTIONS === 'true' && !process.env.CUSTOM_DOMAIN;

export default defineConfig({
  site: ghPreview ? 'https://receronp.github.io' : 'https://inlineburo.com',
  base: ghPreview ? '/inlineburo' : '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
