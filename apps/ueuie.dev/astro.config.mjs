import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare({
    imageService: "passthrough",
    runtime: {
      mode: "local",
      type: "pages",
    }
  }),
  site: "https://www.ueuie.dev",
  // i18n: {
  //   locales: ["de", "en", "ua", "ru"],
  //   defaultLocale: "en",
  //   fallback: {
  //     "ru": "en",
  //     "ua": "en",
  //     "de": "en"
  //   },
  //   routing: {
  //     prefixDefaultLocale: false,
  //   }
  // },

  integrations: [partytown(), mdx(), solidJs()]
});