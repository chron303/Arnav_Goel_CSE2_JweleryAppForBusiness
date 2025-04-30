"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the email to your backend
    console.log("Subscribing email:", email)

    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
    })

    setEmail("")
  }

  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        Stay updated with our latest collections, exclusive offers, and jewelry care tips.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <div className="relative flex-grow">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="email"
            placeholder="Your email address"
            className="pl-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="bg-amber-600 hover:bg-amber-700">
          Subscribe
        </Button>
      </form>
    </div>
  )
}
