let counter = 0

export default defineEventHandler(() => {
  counter += 1

  return {
    name: 'Ryan',
    gender: '男',
    email: 'ryanchien8125@gmail.com',
    counter
  }
})
