import { defineConfig } from 'vite'
import { resolve } from 'path'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

// Define the plugins
const plugins = [
  postcss({
    extract: 'aos.css',
    plugins: [autoprefixer, cssnano]
  }),
  babel({
    exclude: ['node_modules/**']
  }),
  terser()
]

// https://vitejs.dev/config/
export default defineConfig({
  root: './demo',
  build: {
    rollupOptions: {
      input: 'src/js/aos.js',
      output: {
        dir: 'dist',
        entryFileNames: 'aos.js',
        format: 'umd',
        sourcemap: process.env.NODE_ENV === 'dev'
      },
      plugins: plugins
    }
  },
  resolve: {
    alias: {
      src: resolve('src/')
    }
  }
})
