import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/placeholder.svg?height=40&width=40" alt="Harsiddhi Jewellers Logo" width={40} height={40} />
              <span className="font-bold text-xl">Harsiddhi Jewellers</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Exquisite handcrafted jewelry that celebrates your unique style and elegance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white">
                  All Jewelry
                </Link>
              </li>
              <li>
                <Link href="/category/rings" className="text-gray-400 hover:text-white">
                  Rings
                </Link>
              </li>
              <li>
                <Link href="/category/necklaces" className="text-gray-400 hover:text-white">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link href="/category/earrings" className="text-gray-400 hover:text-white">
                  Earrings
                </Link>
              </li>
              <li>
                <Link href="/category/bracelets" className="text-gray-400 hover:text-white">
                  Bracelets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/account" className="text-gray-400 hover:text-white">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/account/orders" className="text-gray-400 hover:text-white">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-gray-400 hover:text-white">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-400 hover:text-white">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Harsiddhi Jewellers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
