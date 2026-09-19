import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

/* /en/ serves the same page in English (see src/i18n.js).
   dev: Vite's SPA fallback already serves index.html for /en/.
   build: copy dist/index.html to dist/en/index.html so GitHub Pages can serve it. */
function englishPage() {
  let outDir = 'dist'
  return {
    name: 'english-page',
    configResolved(config) { outDir = resolve(config.root, config.build.outDir) },
    closeBundle() {
      mkdirSync(resolve(outDir, 'en'), { recursive: true })
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, 'en', 'index.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [englishPage()],
})
