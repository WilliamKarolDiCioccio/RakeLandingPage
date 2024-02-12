import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import AstroIcon from "astro-icon";
import Icons from 'unplugin-icons/vite';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), AstroIcon(), partytown()],
  vite: {
    plugins: [Icons({
      compiler: 'astro'
    })]
  }
});