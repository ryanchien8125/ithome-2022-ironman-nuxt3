import db from '@/server/db'

export default defineEventHandler(async () => {
  const articlesRecord = await db.article.getArticles()

  return {
    data: articlesRecord
  }
})
