export default defineNuxtRouteMiddleware(() => {
  if (Math.random() > 0.5) {
    console.log(`[來自 random-redirect 中間件] 重新導向至 /haha`)
    return navigateTo('/haha')
  }

  console.log(`[來自 random-redirect 中間件] 沒發生什麼特別的事情～`)
})
