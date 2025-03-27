// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import Icons from "unplugin-icons/vite"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), Icons({
      compiler: "astro",
    })]
  },

  integrations: [react()]
});