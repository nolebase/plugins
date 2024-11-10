import { cwd } from 'node:process'

export const compilerOptions = {
  cache: true,
  compilerOptions: {
    baseUrl: cwd(),
    target: 99,
    module: 99,
    moduleResolution: 100,
    paths: {
      '@nolebase/ui': [
        '../packages/ui/src/index.ts',
      ],
      '@nolebase/ui-asciinema': [
        '../packages/ui-asciinema/src/index.ts',
      ],
      '@nolebase/ui-rive-canvas': [
        '../packages/ui-rive-canvas/src/index.ts',
      ],
      '@nolebase/unconfig-vitepress/*': [
        '../packages/unconfig-vitepress/src/*',
      ],
      '@nolebase/vitepress-plugin-data-driver/*': [
        '../packages/vitepress-plugin-data-driver/src/*',
      ],
      '@nolebase/vitepress-plugin-enhanced-readabilities/*': [
        '../packages/vitepress-plugin-enhanced-readabilities/src/*',
      ],
      '@nolebase/vitepress-plugin-highlight-targeted-heading/*': [
        '../packages/vitepress-plugin-highlight-targeted-heading/src/*',
      ],
      '@nolebase/vitepress-plugin-index/*': [
        '../packages/vitepress-plugin-index/src/*',
      ],
      '@nolebase/vitepress-plugin-inline-link-preview/*': [
        '../packages/vitepress-plugin-inline-link-preview/src/*',
      ],
      '@nolebase/vitepress-plugin-meta/*': [
        '../packages/vitepress-plugin-meta/src/*',
      ],
      '@nolebase/vitepress-plugin-git-changelog/*': [
        '../packages/vitepress-plugin-git-changelog/src/*',
      ],
      '@nolebase/vitepress-plugin-graph-view/*': [
        '../packages/vitepress-plugin-graph-view/src/*',
      ],
      '@nolebase/vitepress-plugin-og-image/*': [
        '../packages/vitepress-plugin-og-image/src/*',
      ],
      '@nolebase/vitepress-plugin-page-properties/*': [
        '../packages/vitepress-plugin-page-properties/src/*',
      ],
      '@nolebase/vitepress-plugin-sidebar/*': [
        '../packages/vitepress-plugin-sidebar/src/*',
      ],
      '@nolebase/vitepress-plugin-thumbnail-hash/*': [
        '../packages/vitepress-plugin-thumbnail-hash/src/*',
      ],
    },
    resolveJsonModule: true,
    types: [
      'node',
      'vite/client',
    ],
    esModuleInterop: true,
    isolatedModules: true,
    verbatimModuleSyntax: true,
    skipLibCheck: true,
    skipDefaultLibCheck: true,
  },
}
