export default defineEventHandler((event) => {
  const query = getQuery(event)
  return {
    ok: true,
    data: {
      name: query.name
    }
  }
})
