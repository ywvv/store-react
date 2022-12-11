import { defineConfig } from 'vite'
import htmlPurge from 'vite-plugin-purgecss'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vase-shop/',
  plugins: [react()]
})
