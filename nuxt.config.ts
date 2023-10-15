// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    apiSecret: '怎麼可以讓你知道呢 :P',
    public: {
      apiBase: '/api'
    }
  },
  devtools: { enabled: true }
})
