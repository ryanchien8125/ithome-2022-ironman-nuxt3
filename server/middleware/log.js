export default defineEventHandler((event) => {
  console.log('New request: ' + event.req.url)
})
