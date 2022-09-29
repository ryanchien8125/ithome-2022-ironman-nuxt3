export default defineEventHandler((event) => {
  return {
    ok: true,
    data: {
      username: event.context.auth.username
    }
  }
})
