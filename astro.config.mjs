import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import robotsTxt from 'astro-robots-txt';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https:nicoleis.xyz',
  integrations: [mdx(), sitemap(), react(), tailwind(), image(), robotsTxt()]
});