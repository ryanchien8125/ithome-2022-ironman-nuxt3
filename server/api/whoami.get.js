import jwt from 'jsonwebtoken'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler((event) => {
  const jwtToken = getCookie(event, 'access_token')

  try {
    const { data: userInfo } = jwt.verify(jwtToken, runtimeConfig.jwtSignSecret)

    return {
      id: userInfo.id
    }
  } catch (e) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }
})
