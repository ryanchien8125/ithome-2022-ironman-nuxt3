// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  typescript: {
    typeCheck: true
  },
  i18n: {
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'zh',
        iso: 'zh-TW',
        file: 'zh.json'
      }
    ],
    defaultLocale: 'zh',
    strategy: 'no_prefix'
  },
  devtools: { enabled: true }
})
