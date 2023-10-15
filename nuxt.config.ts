// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt'],
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    jwtSignSecret: 'PLEASE_REPLACE_WITH_YOUR_KEY',
    public: {
      googleClientId: '這邊放上你的 Google Client ID'
    }
  },
  devtools: { enabled: true }
})
