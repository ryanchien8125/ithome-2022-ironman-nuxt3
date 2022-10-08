export default defineNuxtRouteMiddleware((to, from) => {
  if (from && to.path !== from.path && !to.query.redirect_to) {
    let redirectTo = null
    if (from.query.redirect_to) {
      redirectTo = from.query.redirect_to
      from.query.redirect_to = undefined
    } else {
      redirectTo = from.fullPath
    }

    to.query.redirect_to = redirectTo

    return navigateTo(to)
  }
})
