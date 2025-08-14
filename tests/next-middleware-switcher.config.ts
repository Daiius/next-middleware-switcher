import { MiddlewareSwitcherConfigs } from "@daiius/next-middleware-switcher";

const isVercelProduction = () => (
  !!process.env.VERCEL && 
  process.env.VERCEL_ENV === 'production'
)

const configs = {
  dist: 'src/middleware.ts',
  sources: {
    'src/middleware.dev.ts': () => !isVercelProduction(),
    'src/middleware.prod.ts': () => isVercelProduction(),
  }
} satisfies MiddlewareSwitcherConfigs

export default configs
