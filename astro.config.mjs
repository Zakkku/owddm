import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4321"
      : "https://owddm-workshop.netlify.app/",
  integrations: [tailwind(), sitemap(), icon()],
});