import jwt from 'jsonwebtoken'
import db from '@/server/db'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const jwtToken = getCookie(event, 'access_token')

  let userInfo = null

  try {
    const { data } = jwt.verify(jwtToken, runtimeConfig.jwtSignSecret)
    userInfo = data
  } catch (e) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }

  if (!userInfo?.id) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }

  const userRecord = await db.user.getUserById({
    id: userInfo.id
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
