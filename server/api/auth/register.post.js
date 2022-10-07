import bcrypt from 'bcrypt'
import db from '@/server/db'

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  let userRecord = await db.user.getUserByEmail({
    email: body.email
  })

  if (userRecord) {
    throw createError({
      statusCode: 400,
      statusMessage: 'A user with that email address already exists'
    })
  }

  userRecord = await db.user.createUser({
    providerName: null,
    providerUserId: null,
    nickname: body.nickname,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    avatar: null,
    emailVerified: false
  })

  return {
    id: userRecord.id,
    nickname: userRecord.nickname,
    email: userRecord.email
  }
})
