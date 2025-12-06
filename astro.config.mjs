// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://Horux1.github.io',
  base: '/FinalR', // El nombre de tu repositorio
  output: 'static',
  // output: 'server',
  // adapter: node({
  //   mode: 'standalone'
  // })


})