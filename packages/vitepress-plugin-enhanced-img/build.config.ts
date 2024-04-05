import { defineBuildConfig } from 'unbuild'
import builtins from 'builtin-modules'

export default defineBuildConfig({
  entries: [
    { builder: 'mkdist', input: './src/client', outDir: './dist/client', pattern: ['**/*.vue'], loaders: ['vue'] },
    { builder: 'mkdist', input: './src/client', outDir: './dist/client', pattern: ['**/*.ts'], format: 'cjs', loaders: ['js'] },
    { builder: 'mkdist', input: './src/client', outDir: './dist/client', pattern: ['**/*.ts'], format: 'esm', loaders: ['js'] },
    { builder: 'rollup', input: './src/vite/index', outDir: './dist/vite' },
    { builder: 'rollup', input: './src/vitepress/index', outDir: './dist/vitepress' },
  ],
  clean: true,
  sourcemap: true,
  declaration: true,
  externals: [
    'vite',
    '@napi-rs/canvas',
    'thumbhash',
    'colorette',
    'uncrypto',
    'unified',
    'unlazy',
    'vitepress',
    // builtins
    ...builtins,
  ],
  rollup: {
    emitCJS: true,
  },
})
