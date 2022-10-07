import prisma from '@/server/utils/prismaClient'

class Article {
  async createArticle(options) {
    const articleRecord = await prisma.article
      .create({
        data: {
          title: options.title,
          content: options.content,
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
}

const article = new Article()

export default article
