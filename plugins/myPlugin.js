export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg) => `Hello ${msg}!`
    }
  }
})
