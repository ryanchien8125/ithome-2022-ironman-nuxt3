import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

export default defineEventHandler(() => {
  const user = prismaClient.user.create({
    data: {
      providerName: null,
      providerUserId: null,
      nickname: 'Ryan',
      email: 'ryanchien8125@gmail.com',
      password: '這裡要放密碼的雜湊值',
      avatar: '',
      emailVerified: true
    }
  })

  return user
})
