import type { User } from "../models/User"
import { UserRepository } from "../repositories/UserRepository"
import { createToken } from "@/lib/auth"

// In a real application, you would use a proper password hashing library
const hashPassword = (password: string): string => {
  return password // This is just a placeholder
}

const comparePassword = (password: string, hashedPassword: string): boolean => {
  return password === hashedPassword // This is just a placeholder
}

export class AuthService {
  private userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  async register(
    name: string,
    email: string,
    phone: string,
    password: string,
  ): Promise<{ user: Omit<User, "password">; token: string }> {
    const existingUser = await this.userRepository.findByEmail(email)

    if (existingUser) {
      throw new Error("User with this email already exists")
    }

    const hashedPassword = hashPassword(password)

    const user = await this.userRepository.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role: "user",
      addresses: [],
    })

    const token = await createToken({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    })

    const { password: _, ...userWithoutPassword } = user

    return { user: userWithoutPassword, token }
  }

  async login(email: string, password: string): Promise<{ user: Omit<User, "password">; token: string }> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new Error("Invalid email or password")
    }

    const isPasswordValid = comparePassword(password, user.password)

    if (!isPasswordValid) {
      throw new Error("Invalid email or password")
    }

    const token = await createToken({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    })

    const { password: _, ...userWithoutPassword } = user

    return { user: userWithoutPassword, token }
  }
}
