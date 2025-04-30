"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Minus, Plus, ShoppingBag, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { useCart } from "@/contexts/cart-context"
import { useOrder } from "@/contexts/order-context"

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart()
  const { orderPlaced } = useOrder()

  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal + shipping

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Order Placed</h1>

        <div className="text-center py-12 bg-white rounded-lg shadow-sm border">
          <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
          <h2 className="text-2xl font-semibold mb-2">Thank you for your order!</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Your order has been placed successfully. We'll send you a confirmation email shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button className="bg-amber-600 hover:bg-amber-700">Continue Shopping</Button>
            </Link>
            <Link href="/account/orders">
              <Button variant="outline">View Your Orders</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Looks like you haven&apos;t added anything to your cart yet.</p>
          <Link href="/shop">
            <Button className="bg-amber-600 hover:bg-amber-700">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Cart Items ({items.length})</h2>
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row gap-4">
                      <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-grow">
                        <Link href={`/product/${item.id}`} className="font-semibold hover:underline">
                          {item.name}
                        </Link>
                        <div className="text-lg font-bold mt-1">₹{(item.price * 83).toLocaleString()}</div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border rounded-md">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-none"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Decrease quantity</span>
                            </Button>
                            <div className="flex items-center justify-center h-8 w-8">{item.quantity}</div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-none"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                              <span className="sr-only">Increase quantity</span>
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash className="h-4 w-4 mr-1" /> Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-20">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{(subtotal * 83).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${(shipping * 83).toLocaleString()}`}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{(total * 83).toLocaleString()}</span>
                </div>
                <div className="text-xs text-muted-foreground">Taxes calculated at checkout</div>
                <Link href="/checkout">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/shop">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-2">Have a promo code?</h3>
                <div className="flex gap-2">
                  <Input placeholder="Enter code" className="flex-grow" />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
