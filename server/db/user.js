import prisma from '@/server/utils/prismaClient'

class User {
  async getUserByProvider(options) {
    const userRecord = await prisma.user
      .findFirst({
        where: {
          providerName: options.providerName,
          providerUserId: options.providerUserId
        }
      })
      .catch((error) => {
        console.error(error)
        throw createError({
          statusCode: 500,
          statusMessage: 'Could not find user. Please try again later.'
        })
      })

    return userRecord
  }

  async createUser(options) {
    const userRecord = await prisma.user
      .create({
        data: {
          providerName: options.providerName,
          providerUserId: options.providerUserId,
          nickname: options.nickname,
          email: options.email,
          password: options.password,
          avatar: options.avatar,
          emailVerified: options.emailVerified
        }
      })
      .catch((error) => {
        console.error(error)
        throw createError({
          statusCode: 500,
          statusMessage: 'Could not create user. Please try again later.'
        })
      })

    return userRecord
  }

  async getUserByEmail(options) {
    const userRecord = await prisma.user
      .findFirst({
        where: {
          email: options.email
        }
      })
      .catch((error) => {
        console.error(error)
        throw createError({
          statusCode: 500,
          statusMessage: 'Could not find user. Please try again later.'
        })
      })

    return userRecord
  }

  async getUserById(options) {
    const userRecord = await prisma.user
      .findFirst({
        where: {
          id: options.id
        }
      })
      .catch((error) => {
        console.error(error)
        throw createError({
          statusCode: 500,
          statusMessage: 'Could not find user. Please try again later.'
        })
      })

    return userRecord
  }
}

const user = new User()

export default user
