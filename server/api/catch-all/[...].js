export default defineEventHandler((event) => {
  return {
    ok: true,
    data: {
      url: event.req.url
    },
    message: '/api/catch-all 下不匹配的路由都會進入這裡'
  }
})
