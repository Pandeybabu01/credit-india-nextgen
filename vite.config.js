import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build`        -> normal multi-file build in /dist (Vercel, Netlify, Docker, GitHub Pages)
// `npm run build:single` -> one self-contained HTML file in /dist-single (hash routing)
export default defineConfig(({ mode }) => ({
  base: process.env.VITE_BASE || '/',
  plugins: [react(), ...(mode === 'single' ? [viteSingleFile()] : [])],
}))
