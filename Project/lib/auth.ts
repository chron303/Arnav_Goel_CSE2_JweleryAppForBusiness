import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import type { NextRequest, NextResponse } from "next/server"

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-for-development-only"

// Token expiration time (24 hours)
const TOKEN_EXPIRATION = "24h"

// User type definition
export interface UserJwtPayload {
  id: string
  name: string
  email: string
  role: "user" | "admin"
}

/**
 * Creates a JWT token for a user
 */
export async function createToken(user: UserJwtPayload): Promise<string> {
  const secret = new TextEncoder().encode(JWT_SECRET)

  const token = await new SignJWT({ ...user })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(TOKEN_EXPIRATION)
    .sign(secret)

  return token
}

/**
 * Verifies a JWT token and returns the payload
 */
export async function verifyToken(token: string): Promise<UserJwtPayload | null> {
  try {
    const secret = new TextEncoder().encode(JWT_SECRET)
    const { payload } = await jwtVerify(token, secret)
    return payload as UserJwtPayload
  } catch (error) {
    console.error("Error verifying token:", error)
    return null
  }
}

/**
 * Sets the auth token as a cookie
 */
export function setAuthCookie(token: string, response?: NextResponse): void {
  const cookieStore = cookies()
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 1 day in seconds
    path: "/",
  }

  if (response) {
    response.cookies.set("auth_token", token, cookieOptions)
  } else {
    cookieStore.set("auth_token", token, cookieOptions)
  }
}

/**
 * Removes the auth token cookie
 */
export function removeAuthCookie(response?: NextResponse): void {
  const cookieStore = cookies()

  if (response) {
    response.cookies.delete("auth_token")
  } else {
    cookieStore.delete("auth_token")
  }
}

/**
 * Gets the current user from the request
 */
export async function getCurrentUser(request?: NextRequest): Promise<UserJwtPayload | null> {
  try {
    let token: string | undefined

    if (request) {
      // Get token from request cookies in middleware
      token = request.cookies.get("auth_token")?.value
    } else {
      // Get token from server component
      const cookieStore = cookies()
      token = cookieStore.get("auth_token")?.value
    }

    if (!token) {
      return null
    }

    const user = await verifyToken(token)
    return user
  } catch (error) {
    console.error("Error getting current user:", error)
    return null
  }
}
