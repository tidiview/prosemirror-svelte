// vite.config.js
const svelte = require('@sveltejs/vite-plugin-svelte')
const { defineConfig } = require('vite')

module.exports = defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'
  return {
    plugins: [
      svelte({
        /* inline options here */
      })
    ],
    build: {
      minify: isProduction
    }
  }
})