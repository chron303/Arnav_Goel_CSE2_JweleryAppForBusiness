import { NextResponse } from "next/server"
import { createToken, setAuthCookie } from "@/lib/auth"

// In a real application, you would use a database
// This is a simplified example for demonstration purposes
const users: any[] = []

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, password } = body

    // Validate input
    if (!name || !email || !phone || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if user already exists
    const userExists = users.find((user) => user.email === email)
    if (userExists) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 409 })
    }

    // In a real application, you would hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      password, // This would be hashedPassword in a real app
      role: "user" as const,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    // Save user to database
    users.push(newUser)

    // Generate JWT token
    const token = await createToken({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    })

    // Create response
    const response = NextResponse.json(
      {
        message: "User created successfully",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 201 },
    )

    // Set auth cookie
    setAuthCookie(token, response)

    return response
  } catch (error) {
    console.error("Error creating user:", error)
    return NextResponse.json({ error: "An error occurred while creating the user" }, { status: 500 })
  }
}
