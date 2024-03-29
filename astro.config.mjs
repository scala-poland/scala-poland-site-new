import react from '@astrojs/react';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    icon({
      iconDir: 'src/assets/icons',
    }),
  ],
});
