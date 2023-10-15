// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    public: {
      googleClientId: '這邊放上你的 Google Client ID'
    }
  },
  devtools: { enabled: true }
})
