import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import partytown from '@astrojs/partytown';
import mdx from '@astrojs/mdx';

import solidJs from '@astrojs/solid-js';

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
  integrations: [partytown(), mdx(), solidJs()],
  cacheDir: '.astro',
  experimental: {
    contentCollectionCache: true
  },
});