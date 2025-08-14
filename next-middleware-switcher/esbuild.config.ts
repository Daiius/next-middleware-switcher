import { build } from 'esbuild'

await build({
  entryPoints: ['./src/index.ts'],
  outfile: './dist/index.js',
  platform: 'node',
  format: 'esm',
  bundle: true,
  minify: true,
  sourcemap: false,
  target: 'node22',
  resolveExtensions: ['.ts', '.js'],
  external: ['tty', 'path', 'fs/promises', 'node:*'],
  banner: {
    js: '#!/usr/bin/env node\nimport url from "url"; const require = createRequire(import.meta.url); const __filename = url.fileURLToPath(import.meta.url); const __dirname = url.fileURLToPath(new URL(".", import.meta.url));',
  }
})

