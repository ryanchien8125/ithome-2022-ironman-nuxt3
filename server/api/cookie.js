export default defineEventHandler((event) => {
  const cookies = parseCookies(event)
  return {
    ok: true,
    data: {
      cookies
    }
  }
})
