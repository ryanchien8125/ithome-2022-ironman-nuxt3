// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    typeCheck: true
  },
  appConfig: {
    theme: {
      primaryColor: '#0ea5e9'
    }
  }
})
