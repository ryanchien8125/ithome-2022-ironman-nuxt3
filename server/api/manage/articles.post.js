import db from '@/server/db'

export default defineEventHandler(async (event) => {
  const user = event.context?.auth?.user

  if (!user?.id) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }

  const body = await useBody(event)

  const authorId = user.id

  const articleRecord = await db.article.createArticle({
    title: body.title,
    content: body.content,
    cover: body.cover,
    tags: body.tags,
    authorId
  })

  if (!articleRecord) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Create article failed. Please try again later.'
    })
  }

  return articleRecord
})
