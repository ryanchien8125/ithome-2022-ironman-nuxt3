import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import db from '@/server/db'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  const userRecord = await db.user.getUserByEmail({
    email: body.email
  })

  if (!userRecord) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email or password is incorrect'
    })
  }

  if ((await bcrypt.compare(body.password, userRecord.password)) !== true) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email or password is incorrect'
    })
  }

  const jwtTokenPayload = {
    id: userRecord.id
  }

  const maxAge = 60 * 60 * 24 * 7
  const expires = Math.floor(Date.now() / 1000) + maxAge

  const jwtToken = jwt.sign(
    {
      exp: expires,
      data: jwtTokenPayload
    },
    runtimeConfig.jwtSignSecret
  )

  setCookie(event, 'access_token', jwtToken, {
    httpOnly: true,
    maxAge,
    expires: new Date(expires * 1000),
    secure: process.env.NODE_ENV === 'production',
    path: '/'
  })

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
