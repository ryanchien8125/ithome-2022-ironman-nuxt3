import db from '@/server/db'

export default defineEventHandler(async (event) => {
  const user = event.context?.auth?.user

  if (!user?.id) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }

  const userRecord = await db.user.getUserById({
    id: user.id
  })

  if (!userRecord) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Could not find user.'
    })
  }

  return {
    id: userRecord.id,
    provider: {
      name: userRecord.providerName,
      userId: userRecord.providerUserId
    },
    nickname: userRecord.nickname,
    avatar: userRecord.avatar,
    email: userRecord.email
  }
})
