"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { LogOut, Menu, Search, ShoppingCart, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"
import { useAuth } from "@/contexts/auth-context"
import { useCart } from "@/contexts/cart-context"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const isMobile = useMobile()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { user, logout } = useAuth()
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium">
                Home
              </Link>
              <Link href="/shop" className="text-lg font-medium">
                Shop
              </Link>
              <Link href="/categories" className="text-lg font-medium">
                Categories
              </Link>
              <Link href="/about" className="text-lg font-medium">
                About
              </Link>
              <Link href="/contact" className="text-lg font-medium">
                Contact
              </Link>
              {user && (
                <>
                  <Separator className="my-2" />
                  <Link href="/account" className="text-lg font-medium">
                    My Account
                  </Link>
                  <Link href="/account/orders" className="text-lg font-medium">
                    My Orders
                  </Link>
                  {user.role === "admin" && (
                    <Link href="/admin" className="text-lg font-medium">
                      Admin Dashboard
                    </Link>
                  )}
                  <button onClick={() => logout()} className="text-lg font-medium text-left text-red-500">
                    Logout
                  </button>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-2 ml-4 md:ml-0">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=40&width=40" alt="Harsiddhi Jewellers Logo" width={40} height={40} />
            <span className="font-bold text-xl hidden md:inline-block">Harsiddhi Jewellers</span>
          </Link>
        </div>

        <nav className="mx-6 hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/shop" className="font-medium transition-colors hover:text-primary">
            Shop
          </Link>
          <Link href="/categories" className="font-medium transition-colors hover:text-primary">
            Categories
          </Link>
          <Link href="/about" className="font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4 ml-auto">
          {isSearchOpen && !isMobile ? (
            <div className="relative flex items-center">
              <Input type="search" placeholder="Search..." className="w-[200px] md:w-[300px]" autoFocus />
              <Button variant="ghost" size="icon" className="absolute right-0" onClick={() => setIsSearchOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-amber-600">
                  {itemCount}
                </Badge>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Hi, {user.name.split(" ")[0]}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/account">My Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/orders">My Orders</Link>
                </DropdownMenuItem>
                {user.role === "admin" && (
                  <DropdownMenuItem asChild>
                    <Link href="/admin">Admin Dashboard</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => logout()} className="text-red-500">
                  <LogOut className="h-4 w-4 mr-2" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/auth/login">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Login</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
