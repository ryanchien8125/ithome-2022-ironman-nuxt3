import db from '@/server/db'

export default defineEventHandler(async (event) => {
  const { id } = event.context.params
  // const articlesRecord = await db.article.getArticles()
  const articleId = parseInt(id, 10) || null

  if (articleId) {
    const articleRecord = await db.article.getArticleById({ id: articleId })
    return articleRecord
  }

  return null
})
