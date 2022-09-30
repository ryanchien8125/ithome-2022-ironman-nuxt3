let counter = 0

export default defineEventHandler(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  counter += 1

  return JSON.stringify(counter)
})
