# Next.js Middleware Switcher
> Third-party utility - Not affiliated with Next.js or Vercel !

Next.js is a powerful web application framework.
Middleware enables us to handle requests in edges, and requires static configuration.

```typescript
export const configs = {
    matcher: ['/this-must-be-static'],
    // this will not work!
    // matcher: process.env.VERCEL_ENV === 'production'
    //     ? []
    //     : ['/we-cannot-use-conditional-statements']
}
```

However, we sometimes need to switch middleware configs
between production / development environments.

No official way to do this as for now. 

The most common method is like this:
- prepare a shell script or a package.json script, which copies 
  `src/middleware.(dev|prod).ts` to `src/middleware.ts` 
  depends on some environemt variables like `VERCEL`, `VERCEL_ENV`, and `NODE_ENV`
- call it as `prebuild` package.json script

