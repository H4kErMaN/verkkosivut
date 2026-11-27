import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        etusivu: resolve(import.meta.dirname, 'index.html'),
        konenako: resolve(import.meta.dirname, 'konenako.html'),
        ohjelmistot: resolve(import.meta.dirname, 'ohjelmistot.html'),
      },
    },
  },
})
