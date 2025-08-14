import { createJiti } from 'jiti'
import { resolve } from 'path'
import { copyFile } from 'fs/promises'

import type { MiddlewareSwitcherConfigs } from './index.d'


async function main() {
  console.log('next-middleware-switcher: invoked')
  const jiti = createJiti(import.meta.url)
  const configsPath = resolve(
    process.cwd(), 
    'next-middleware-switcher.config.ts',
  )
  const configs = await jiti.import(configsPath) as MiddlewareSwitcherConfigs
  const absDistPath = resolve(process.cwd(), configs.dist)
  let matchedRelativeSourcePath: string | undefined
  for (const [sourcePath, matcher] of Object.entries(configs.sources)) {
    const absSourcePath = resolve(process.cwd(), sourcePath)
    if (matcher()) {
      await copyFile(absSourcePath, absDistPath)
      matchedRelativeSourcePath = sourcePath
      break
    }
  }
  if (matchedRelativeSourcePath) {
    console.log(`next-middleware-switcher: copied ${matchedRelativeSourcePath}  ->  ${configs.dist}`)
  } else {
    console.error(`next-middleware-switcher: no matching conditions, no copying...`)
    process.exit(1)
  }
}

await main()

