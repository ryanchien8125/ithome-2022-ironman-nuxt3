// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  typescript: {
    typeCheck: true
  },
  devtools: { enabled: true }
})
