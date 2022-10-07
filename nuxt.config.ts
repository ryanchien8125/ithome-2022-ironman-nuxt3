// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['@headlessui/vue']
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt'],
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    jwtSignSecret: 'PLEASE_REPLACE_WITH_YOUR_KEY',
    public: {
      googleClientId: '這邊放上你的 Google Client ID'
    }
  }
})
