import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getCurrentUser } from "./lib/auth"

// Paths that require authentication
const protectedPaths = ["/account", "/account/orders", "/account/addresses", "/account/settings", "/checkout"]

// Paths that require admin role
const adminPaths = ["/admin"]

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Check if path is protected
  const isProtectedPath = protectedPaths.some(
    (protectedPath) => path === protectedPath || path.startsWith(`${protectedPath}/`),
  )

  // Check if path is admin-only
  const isAdminPath = adminPaths.some((adminPath) => path === adminPath || path.startsWith(`${adminPath}/`))

  // If path is not protected or admin-only, continue
  if (!isProtectedPath && !isAdminPath) {
    return NextResponse.next()
  }

  // Get current user from request
  const user = await getCurrentUser(request)

  // If no user and path is protected, redirect to login
  if (!user && isProtectedPath) {
    const url = new URL("/auth/login", request.url)
    url.searchParams.set("callbackUrl", encodeURI(request.nextUrl.pathname))
    return NextResponse.redirect(url)
  }

  // If user is not admin and path is admin-only, redirect to home
  if (isAdminPath && (!user || user.role !== "admin")) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Continue if authenticated and authorized
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
}
