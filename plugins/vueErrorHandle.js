export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error) => {
    console.error('[由 vueErrorHandle 插件捕獲的錯誤]', error)
  }
})
