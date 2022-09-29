export default defineEventHandler((event) => {
  const query = useQuery(event)
  return {
    ok: true,
    data: {
      name: query.name
    }
  }
})
