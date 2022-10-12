export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:error', (..._args) => {
    console.error('[由 nuxtErrorHook 插件捕獲的錯誤]')
    // if (process.client) {
    //   console.log(..._args)
    // }
  })
})
