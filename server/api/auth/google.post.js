import { OAuth2Client } from 'google-auth-library'
import jwt from 'jsonwebtoken'
import db from '@/server/db'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const oauth2Client = new OAuth2Client()
  oauth2Client.setCredentials({ access_token: body.accessToken })

  const userInfo = await oauth2Client
    .request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo'
    })
    .then((response) => response.data)
    .catch(() => null)

  oauth2Client.revokeCredentials()

  if (!userInfo) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid token'
    })
  }

  let userRecord = await db.user.getUserByEmail({
    email: userInfo.email
  })

  if (userRecord) {
    if (
      (userRecord.providerName === 'google' && userRecord.providerUserId === userInfo.sub) === false
    ) {
      throw createError({
        statusCode: 400,
        statusMessage: 'This email address does not apply to this login method'
      })
    }
  } else {
    userRecord = await db.user.createUser({
      providerName: 'google',
      providerUserId: userInfo.sub,
      nickname: userInfo.name,
      email: userInfo.email,
      password: null,
      avatar: userInfo.picture,
      emailVerified: userInfo.email_verified
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
