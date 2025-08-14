export type MiddlewareSwitcherConfigs = {
  /**
   * \<dist\>
   * middleware file path used by Next.js, 
   * typically, src/middleware.ts
   */
  dist: string,
  /**
   * keys: 
   *   middleware source paths, copied as \<dist\>,
   * values: 
   *   if it returns true, the corresponding source will be copied to \<dist\>.
   *   (first match)
   */
  sources: Record<string, () => boolean>,
}
