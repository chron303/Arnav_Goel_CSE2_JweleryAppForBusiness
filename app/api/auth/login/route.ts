import { NextResponse } from "next/server"
import { createToken, setAuthCookie } from "@/lib/auth"

// In a real application, you would use a database
// This is a simplified example for demonstration purposes
const users = [
  {
    id: "1",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "+91 98765 43210",
    password: "password123", // This would be hashed in a real application
    role: "user" as const,
  },
  {
    id: "2",
    name: "Admin User",
    email: "admin@harsiddhijewellers.com",
    phone: "+91 98765 12345",
    password: "admin123", // This would be hashed in a real application
    role: "admin" as const,
  },
]

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Find user
    const user = users.find((user) => user.email === email)
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // In a real application, you would compare hashed passwords
    // const passwordMatch = await bcrypt.compare(password, user.password);
    const passwordMatch = password === user.password

    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Generate JWT token
    const token = await createToken({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    })

    // Create response
    const response = NextResponse.json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })

    // Set auth cookie
    setAuthCookie(token, response)

    return response
  } catch (error) {
    console.error("Error during login:", error)
    return NextResponse.json({ error: "An error occurred during login" }, { status: 500 })
  }
}
