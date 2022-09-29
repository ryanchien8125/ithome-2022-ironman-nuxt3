export default defineEventHandler((event) => {
  event.context.auth = { username: 'ryan' }
})
