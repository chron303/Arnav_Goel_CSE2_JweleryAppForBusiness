"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"

// Featured products with real images
const featuredProducts = [
  {
    id: "1",
    name: "Diamond Eternity Ring",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2940&auto=format&fit=crop",
    category: "Rings",
    isNew: true,
  },
  {
    id: "4",
    name: "Pearl Necklace",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2787&auto=format&fit=crop",
    category: "Necklaces",
    isNew: false,
  },
  {
    id: "7",
    name: "Sapphire Earrings",
    price: 749.99,
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=2864&auto=format&fit=crop",
    category: "Earrings",
    isNew: true,
  },
  {
    id: "10",
    name: "Gold Bracelet",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2940&auto=format&fit=crop",
    category: "Bracelets",
    isNew: false,
  },
]

export function FeaturedProducts() {
  const [wishlist, setWishlist] = useState<string[]>([])
  const { addItem } = useCart()
  const { toast } = useToast()

  const toggleWishlist = (id: string) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id))
      toast({
        title: "Removed from wishlist",
        description: "Item has been removed from your wishlist",
      })
    } else {
      setWishlist([...wishlist, id])
      toast({
        title: "Added to wishlist",
        description: "Item has been added to your wishlist",
      })
    }
  }

  const handleAddToCart = (product: (typeof featuredProducts)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            {product.isNew && <Badge className="absolute top-2 left-2 bg-amber-600">New</Badge>}
            <Button
              variant="ghost"
              size="icon"
              className={`absolute top-2 right-2 bg-white/80 hover:bg-white ${
                wishlist.includes(product.id) ? "text-red-500" : "text-gray-600"
              }`}
              onClick={() => toggleWishlist(product.id)}
            >
              <Heart className={`h-5 w-5 ${wishlist.includes(product.id) ? "fill-red-500" : ""}`} />
              <span className="sr-only">Add to wishlist</span>
            </Button>
          </div>
          <CardContent className="p-4">
            <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
            <Link href={`/product/${product.id}`} className="hover:underline">
              <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
            </Link>
            <div className="font-bold text-lg">₹{(product.price * 83).toLocaleString()}</div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full bg-amber-600 hover:bg-amber-700" onClick={() => handleAddToCart(product)}>
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
