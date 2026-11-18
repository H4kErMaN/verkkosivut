import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// base: './' tekee buildiin suhteelliset polut, jolloin dist-kansion
// voi kopioida sellaisenaan webhotellin juureen tai alikansioon.
//
// rollupOptions.input listaa sivut: jokaisesta html-tiedostosta tulee
// buildiin oma sivu, eli URL on sama kuin nykyisellä sivustolla
// (esim. exuplan.fi/ohjelmistot.html). Uusi alasivu lisätään tähän.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        etusivu: resolve(import.meta.dirname, 'index.html'),
        ohjelmistot: resolve(import.meta.dirname, 'ohjelmistot.html'),
      },
    },
  },
})
