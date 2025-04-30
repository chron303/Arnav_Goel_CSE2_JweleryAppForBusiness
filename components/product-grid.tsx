"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"

// Enhanced product data with real images
const allProducts = [
  // Rings
  {
    id: "1",
    name: "Diamond Eternity Ring",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2940&auto=format&fit=crop",
    category: "rings",
    isNew: true,
    material: "18k White Gold",
    style: "Contemporary",
  },
  {
    id: "2",
    name: "Ruby Engagement Ring",
    price: 1599.99,
    image: "https://images.unsplash.com/photo-1586878341523-7c1ef1a8911f?q=80&w=2787&auto=format&fit=crop",
    category: "rings",
    isNew: false,
    material: "18k Rose Gold",
    style: "Traditional",
  },
  {
    id: "3",
    name: "Sapphire Halo Ring",
    price: 1899.99,
    image: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?q=80&w=2960&auto=format&fit=crop",
    category: "rings",
    isNew: true,
    material: "Platinum",
    style: "Vintage",
  },

  // Necklaces
  {
    id: "4",
    name: "Pearl Necklace",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2787&auto=format&fit=crop",
    category: "necklaces",
    isNew: false,
    material: "14k Gold",
    style: "Traditional",
  },
  {
    id: "5",
    name: "Diamond Pendant Necklace",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1611107683227-e9060eccd846?q=80&w=2787&auto=format&fit=crop",
    category: "necklaces",
    isNew: true,
    material: "18k White Gold",
    style: "Contemporary",
  },
  {
    id: "6",
    name: "Gold Chain Necklace",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1599459183200-28c912c883fc?q=80&w=2787&auto=format&fit=crop",
    category: "necklaces",
    isNew: false,
    material: "18k Gold",
    style: "Minimalist",
  },

  // Earrings
  {
    id: "7",
    name: "Sapphire Earrings",
    price: 749.99,
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=2864&auto=format&fit=crop",
    category: "earrings",
    isNew: true,
    material: "18k White Gold",
    style: "Contemporary",
  },
  {
    id: "8",
    name: "Diamond Stud Earrings",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=2787&auto=format&fit=crop",
    category: "earrings",
    isNew: false,
    material: "Platinum",
    style: "Minimalist",
  },
  {
    id: "9",
    name: "Pearl Drop Earrings",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=2940&auto=format&fit=crop",
    category: "earrings",
    isNew: true,
    material: "14k Gold",
    style: "Vintage",
  },

  // Bracelets
  {
    id: "10",
    name: "Gold Bracelet",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2940&auto=format&fit=crop",
    category: "bracelets",
    isNew: false,
    material: "18k Gold",
    style: "Traditional",
  },
  {
    id: "11",
    name: "Diamond Tennis Bracelet",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2940&auto=format&fit=crop",
    category: "bracelets",
    isNew: true,
    material: "18k White Gold",
    style: "Contemporary",
  },
  {
    id: "12",
    name: "Silver Charm Bracelet",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1611591438296-8e60f8af0f9c?q=80&w=2940&auto=format&fit=crop",
    category: "bracelets",
    isNew: false,
    material: "Sterling Silver",
    style: "Vintage",
  },

  // Mangalsutras
  {
    id: "13",
    name: "Traditional Mangalsutra",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2787&auto=format&fit=crop",
    category: "mangalsutras",
    isNew: false,
    material: "22k Gold",
    style: "Traditional",
  },
  {
    id: "14",
    name: "Diamond Mangalsutra",
    price: 1599.99,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=2787&auto=format&fit=crop",
    category: "mangalsutras",
    isNew: true,
    material: "18k Gold",
    style: "Contemporary",
  },

  // Bangles
  {
    id: "15",
    name: "Gold Bangles Set",
    price: 1899.99,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2940&auto=format&fit=crop",
    category: "bangles",
    isNew: true,
    material: "22k Gold",
    style: "Traditional",
  },
  {
    id: "16",
    name: "Diamond Bangle",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=2940&auto=format&fit=crop",
    category: "bangles",
    isNew: false,
    material: "18k White Gold",
    style: "Contemporary",
  },

  // Pendants
  {
    id: "17",
    name: "Ruby Pendant",
    price: 849.99,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2787&auto=format&fit=crop",
    category: "pendants",
    isNew: true,
    material: "18k Rose Gold",
    style: "Contemporary",
  },
  {
    id: "18",
    name: "Diamond Cross Pendant",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=2787&auto=format&fit=crop",
    category: "pendants",
    isNew: false,
    material: "18k White Gold",
    style: "Traditional",
  },

  // Anklets
  {
    id: "19",
    name: "Silver Anklet",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1575466599502-7d0cd9f2a4f7?q=80&w=2787&auto=format&fit=crop",
    category: "anklets",
    isNew: true,
    material: "Sterling Silver",
    style: "Contemporary",
  },
  {
    id: "20",
    name: "Gold Chain Anklet",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=2940&auto=format&fit=crop",
    category: "anklets",
    isNew: false,
    material: "14k Gold",
    style: "Minimalist",
  },
]

interface ProductGridProps {
  categoryId?: string
}

export function ProductGrid({ categoryId }: ProductGridProps) {
  const [wishlist, setWishlist] = useState<string[]>([])
  const [products, setProducts] = useState(allProducts)
  const { addItem } = useCart()
  const { toast } = useToast()

  useEffect(() => {
    // Filter products by category if categoryId is provided
    if (categoryId) {
      setProducts(allProducts.filter((product) => product.category === categoryId))
    } else {
      setProducts(allProducts)
    }
  }, [categoryId])

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

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
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
            <div className="text-sm text-muted-foreground mb-1 capitalize">{product.category}</div>
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
