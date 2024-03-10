import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import partytown from '@astrojs/partytown';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ueuie.dev',
  output: 'hybrid',
  adapter: cloudflare({
    imageService: 'compile',
    runtime: {
      mode: 'local',
      type: 'pages',
    }
  }),
  integrations: [partytown(), mdx()],
  cacheDir: '.astro',
  experimental: {
    contentCollectionCache: true
  },
});