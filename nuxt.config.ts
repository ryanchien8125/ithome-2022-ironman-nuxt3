// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          'postcss-import': {},
          'tailwindcss/nesting': {},
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  css: ['@/assets/css/tailwind.css'],
  typescript: {
    typeCheck: true
  }
})
