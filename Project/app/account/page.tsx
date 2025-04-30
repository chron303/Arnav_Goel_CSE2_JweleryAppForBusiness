"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { CreditCard, LogOut, Package, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/contexts/auth-context"

export default function AccountPage() {
  const { user } = useAuth()
  const [userData, setUserData] = useState({
    name: user?.name || "Guest User",
    email: user?.email || "guest@example.com",
    phone: "+91 98765 43210",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updated user data:", userData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Navigation</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <nav className="flex flex-col">
                <Link href="/account" className="flex items-center gap-2 p-3 bg-muted font-medium">
                  <User className="h-4 w-4" /> Profile
                </Link>
                <Link href="/account/orders" className="flex items-center gap-2 p-3 hover:bg-muted/50">
                  <Package className="h-4 w-4" /> Orders
                </Link>
                <Link href="/account/addresses" className="flex items-center gap-2 p-3 hover:bg-muted/50">
                  <CreditCard className="h-4 w-4" /> Addresses
                </Link>
                <Link href="/account/settings" className="flex items-center gap-2 p-3 hover:bg-muted/50">
                  <Settings className="h-4 w-4" /> Settings
                </Link>
                <button className="flex items-center gap-2 p-3 text-red-500 hover:bg-red-50 text-left">
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </nav>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3">
          <Tabs defaultValue="profile">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
              <TabsTrigger
                value="profile"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-amber-600 data-[state=active]:shadow-none"
              >
                Profile Information
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-amber-600 data-[state=active]:shadow-none"
              >
                Security
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal information</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" value={userData.name} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" value={userData.email} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" value={userData.phone} onChange={handleChange} />
                      </div>
                    </div>
                    <Button type="submit" className="bg-amber-600 hover:bg-amber-700">
                      Save Changes
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                  <CardDescription>Update your password</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </div>
                    <Button type="submit" className="bg-amber-600 hover:bg-amber-700">
                      Update Password
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
