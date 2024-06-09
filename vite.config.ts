import { defineConfig } from 'vite'
import { resolve } from 'path'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

// Define the plugins
const plugins = [
  babel({
    exclude: ['node_modules/**']
  }),
  terser()
]

// https://vitejs.dev/config/
export default defineConfig({
  root: './demo',
  build: {
    lib: {
      name: 'AOS',
      entry: '../src/js/aos.js',
      fileName: 'aos',
      formats: ['umd']
    },
    rollupOptions: {
      output: {
        dir: 'dist',
        globals: {
          'aos': 'AOS'
        }
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
