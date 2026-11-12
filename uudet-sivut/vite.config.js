import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' tekee buildiin suhteelliset polut, jolloin dist-kansion
// voi kopioida sellaisenaan webhotellin juureen tai alikansioon.
export default defineConfig({
  plugins: [react()],
  base: './',
})
