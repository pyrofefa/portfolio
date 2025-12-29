import { defineConfig } from 'astro/config';
import astroI18nextReloader from './astro-i18next-reloader.mjs';

import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroI18nextReloader()]
});