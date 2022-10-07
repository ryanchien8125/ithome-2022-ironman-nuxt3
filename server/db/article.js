import prisma from '@/server/utils/prismaClient'

class Article {
  async createArticle(options) {
    const articleRecord = await prisma.article
      .create({
        data: {
          title: options.title,
          content: options.content,
          summary: options.summary,
          cover: options.cover,
          tags: options.tags,
          authorId: options.authorId
        }
      })
      .catch((error) => {
        console.error(error)
        throw createError({
          statusCode: 500,
          statusMessage: 'Could not create article. Please try again later.'
        })
      })

    return articleRecord
  }

  async getArticles(options = {}) {
    const articleRecords = await prisma.article
      .findMany({
        orderBy: {
          createdAt: 'desc'
        },
        skip: options.pageSize ? options.page * options.pageSize : undefined,
        take: options.pageSize
      })
      .catch((error) => {
        console.error(error)
        throw createError({
          statusCode: 500,
          statusMessage: 'Could not get article. Please try again later.'
        })
      })

    return articleRecords
  }
}

const article = new Article()

export default article
