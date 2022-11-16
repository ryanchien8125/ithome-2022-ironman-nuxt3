export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return {
    ok: true,
    data: body
  }
})
