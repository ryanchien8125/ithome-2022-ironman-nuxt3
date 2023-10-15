// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    typeCheck: true
  },
  appConfig: {
    theme: {
      primaryColor: '#0ea5e9'
    }
  },
  devtools: { enabled: true }
})
