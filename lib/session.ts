import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const SECRET_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'default-secret-key-change-me'
const encodedKey = new TextEncoder().encode(SECRET_KEY)

export interface SessionPayload {
  userId: string
  role: string
  expiresAt: Date
}

export async function createSession(userId: string, role: string) {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)
  const session = await new SignJWT({ userId, role, expiresAt })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1d')
    .sign(encodedKey)

  cookies().set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

export async function verifySession() {
  const cookie = cookies().get('session')?.value
  const session = await decrypt(cookie)

  if (!session?.userId) {
    return null
  }

  return { isAuth: true, userId: session.userId, role: session.role }
}

export async function deleteSession() {
  cookies().delete('session')
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    return null
  }
}
