import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

/* /en/ and /cn/ serve the same page in English / Simplified Chinese (see src/i18n.js).
   dev: Vite's SPA fallback already serves index.html for /en/ and /cn/.
   build: copy dist/index.html to dist/{en,cn}/index.html so GitHub Pages can serve them. */
function localizedPages() {
  let outDir = 'dist'
  return {
    name: 'localized-pages',
    configResolved(config) { outDir = resolve(config.root, config.build.outDir) },
    closeBundle() {
      for (const dir of ['en', 'cn']) {
        mkdirSync(resolve(outDir, dir), { recursive: true })
        copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, dir, 'index.html'))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [localizedPages()],
})
