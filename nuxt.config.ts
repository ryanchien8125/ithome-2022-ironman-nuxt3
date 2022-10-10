// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  typescript: {
    typeCheck: true
  },
  i18n: {
    vueI18n: {
      legacy: false,
      locale: 'zh',
      messages: {
        en: {
          hello: 'Hello!',
          language: 'Language'
        },
        zh: {
          hello: '你好!',
          language: '語言'
        }
      }
    }
  }
})
