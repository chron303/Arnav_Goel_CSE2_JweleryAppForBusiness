"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

interface User {
  id: string
  name: string
  email: string
  role: "user" | "admin"
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, phone: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me")
        if (res.ok) {
          const data = await res.json()
          setUser(data.user)
        }
      } catch (error) {
        console.error("Error checking auth:", error)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      setLoading(true)
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Login failed")
      }

      setUser(data.user)
      toast({
        title: "Login successful",
        description: `Welcome back, ${data.user.name}!`,
      })
      router.push("/")
    } catch (error) {
      console.error("Login error:", error)
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "An error occurred during login",
        variant: "destructive",
      })
      throw error
    } finally {
      setLoading(false)
    }
  }

  const signup = async (name: string, email: string, phone: string, password: string) => {
    try {
      setLoading(true)
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Signup failed")
      }

      setUser(data.user)
      toast({
        title: "Account created",
        description: "Your account has been created successfully!",
      })
      router.push("/")
    } catch (error) {
      console.error("Signup error:", error)
      toast({
        title: "Signup failed",
        description: error instanceof Error ? error.message : "An error occurred during signup",
        variant: "destructive",
      })
      throw error
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      setLoading(true)
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Logout failed")
      }

      setUser(null)
      toast({
        title: "Logged out",
        description: "You have been logged out successfully",
      })
      router.push("/")
    } catch (error) {
      console.error("Logout error:", error)
      toast({
        title: "Logout failed",
        description: "An error occurred during logout",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return <AuthContext.Provider value={{ user, loading, login, signup, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
