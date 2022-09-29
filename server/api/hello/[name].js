export default defineEventHandler((event) => {
  const { name } = event.context.params
  return `Hello, ${name}!`
})
