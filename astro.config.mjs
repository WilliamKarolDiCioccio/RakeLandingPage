import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import AstroIcon from "astro-icon";
import Icons from "unplugin-icons/vite";
import partytown from "@astrojs/partytown";
import metaTags from "astro-meta-tags";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [
    tailwind(),
    AstroIcon(),
    partytown(),
    metaTags(),
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
  ],
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
  compressHTML: true,
  site: "https://rake-engine.netlify.app",
});
