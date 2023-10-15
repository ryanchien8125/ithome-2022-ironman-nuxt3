// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['@headlessui/vue']
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt', '@nuxtjs/i18n'],
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    jwtSignSecret: 'PLEASE_REPLACE_WITH_YOUR_KEY',
    public: {
      googleClientId: '這邊放上你的 Google Client ID'
    }
  },
  i18n: {
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'zh',
        iso: 'zh-TW',
        file: 'zh.json',
        name: '繁體中文'
      }
    ],
    defaultLocale: 'zh',
    strategy: 'no_prefix'
  },
  devtools: { enabled: true }
})
