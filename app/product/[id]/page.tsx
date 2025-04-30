"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Check, Heart, ShoppingCart, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeaturedProducts } from "@/components/featured-products"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"

// Enhanced product data with real images
const products = [
  {
    id: "1",
    name: "Diamond Eternity Ring",
    price: 1299.99,
    description:
      "This stunning diamond eternity ring features a continuous circle of brilliant-cut diamonds set in 18k white gold. The perfect symbol of never-ending love and commitment.",
    longDescription:
      "Crafted with precision and care, this diamond eternity ring showcases a continuous circle of brilliant-cut diamonds totaling 1.5 carats. Each diamond is meticulously selected for its exceptional clarity, color, and brilliance, and set in high-quality 18k white gold to create a timeless piece that will be treasured for generations. The ring features a comfortable fit design, making it perfect for everyday wear while still making a statement. Whether celebrating an anniversary, wedding, or simply expressing your love, this eternity ring symbolizes an everlasting bond.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?q=80&w=2960&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586878341523-7c1ef1a8911f?q=80&w=2787&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=2787&auto=format&fit=crop",
    ],
    category: "Rings",
    material: "18k White Gold",
    stones: "Diamonds",
    caratWeight: "1.5 carats",
    inStock: true,
    rating: 4.8,
    reviewCount: 24,
  },
  {
    id: "4",
    name: "Pearl Necklace",
    price: 899.99,
    description: "Elegant pearl necklace featuring perfectly matched freshwater pearls with a 14k gold clasp.",
    longDescription:
      "This exquisite pearl necklace features a strand of perfectly matched freshwater pearls, each carefully selected for its lustrous glow and smooth surface. The pearls are strung on silk thread and finished with a secure 14k gold clasp. A timeless addition to any jewelry collection, this necklace adds elegance to both formal occasions and everyday wear.",
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2787&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611107683227-e9060eccd846?q=80&w=2787&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599459183200-28c912c883fc?q=80&w=2787&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611107683227-e9060eccd846?q=80&w=2787&auto=format&fit=crop",
    ],
    category: "Necklaces",
    material: "14k Gold",
    stones: "Freshwater Pearls",
    caratWeight: "N/A",
    inStock: true,
    rating: 4.7,
    reviewCount: 18,
  },
  {
    id: "7",
    name: "Sapphire Earrings",
    price: 749.99,
    description:
      "Stunning sapphire earrings featuring brilliant blue sapphires surrounded by diamonds in 18k white gold.",
    longDescription:
      "These stunning earrings feature brilliant blue sapphires, each surrounded by a halo of sparkling diamonds. Set in 18k white gold, these earrings are secured with comfortable and secure push backs. The deep blue color of the sapphires creates a striking contrast against the brilliance of the diamonds, making these earrings a perfect accessory for both special occasions and everyday elegance.",
    images: [
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=2864&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=2787&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=2787&auto=format&fit=crop",
    ],
    category: "Earrings",
    material: "18k White Gold",
    stones: "Sapphires, Diamonds",
    caratWeight: "Sapphires: 1.2 carats, Diamonds: 0.5 carats",
    inStock: true,
    rating: 4.9,
    reviewCount: 12,
  },
  {
    id: "10",
    name: "Gold Bracelet",
    price: 599.99,
    description: "Classic 18k gold bracelet with a timeless chain design, perfect for everyday wear.",
    longDescription:
      "This classic 18k gold bracelet features a timeless chain design that's perfect for everyday wear. The bracelet is crafted from high-quality gold and features a secure lobster clasp closure. Its versatile design makes it easy to pair with other jewelry pieces or wear on its own for a simple, elegant look.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591438296-8e60f8af0f9c?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=2940&auto=format&fit=crop",
    ],
    category: "Bracelets",
    material: "18k Gold",
    stones: "None",
    caratWeight: "N/A",
    inStock: true,
    rating: 4.6,
    reviewCount: 15,
  },
]

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const [product, setProduct] = useState<(typeof products)[0] | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addItem } = useCart()
  const { toast } = useToast()

  useEffect(() => {
    // Find product by ID
    const foundProduct = products.find((p) => p.id === productId)
    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [productId])

  const handleAddToCart = () => {
    if (!product) return

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    })
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product?.name} has been added to your wishlist`,
    })
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Product not found</h1>
        <p>The product you are looking for does not exist.</p>
        <Link href="/shop" className="text-amber-600 hover:underline mt-4 inline-block">
          Return to shop
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/shop" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg border">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`aspect-square relative overflow-hidden rounded-md border cursor-pointer ${
                  selectedImage === index ? "ring-2 ring-amber-600" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? "text-amber-500 fill-amber-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="text-3xl font-bold">₹{(product.price * 83).toLocaleString()}</div>

          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              <span className="text-sm">In Stock</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-amber-600" />
              <span className="text-sm">Free shipping on orders over $100</span>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {["5", "6", "7", "8", "9"].map((size) => (
                  <Button key={size} variant="outline" className="h-10 w-10 rounded-full">
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex border rounded-md">
                <Button variant="ghost" className="h-10 w-10 rounded-none" onClick={decrementQuantity}>
                  -
                </Button>
                <div className="flex items-center justify-center h-10 w-10">{quantity}</div>
                <Button variant="ghost" className="h-10 w-10 rounded-none" onClick={incrementQuantity}>
                  +
                </Button>
              </div>
              <Button className="flex-1 bg-amber-600 hover:bg-amber-700" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
              <Button variant="outline" size="icon" onClick={handleAddToWishlist}>
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Material</span>
              <span className="text-sm">{product.material}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Stones</span>
              <span className="text-sm">{product.stones}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Carat Weight</span>
              <span className="text-sm">{product.caratWeight}</span>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="mb-16">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
          <TabsTrigger
            value="description"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-amber-600 data-[state=active]:shadow-none"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="details"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-amber-600 data-[state=active]:shadow-none"
          >
            Details
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-amber-600 data-[state=active]:shadow-none"
          >
            Reviews
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="pt-4">
          <p className="text-gray-600">{product.longDescription}</p>
        </TabsContent>
        <TabsContent value="details" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Product Specifications</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Material</span>
                  <span>{product.material}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Stones</span>
                  <span>{product.stones}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Carat Weight</span>
                  <span>{product.caratWeight}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Setting Type</span>
                  <span>Prong Setting</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Care Instructions</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Clean with a soft, lint-free cloth</li>
                <li>Store in a jewelry box or pouch to prevent scratches</li>
                <li>Avoid contact with harsh chemicals</li>
                <li>Remove before swimming or bathing</li>
                <li>Have professionally cleaned once a year</li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="pt-4">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold">{product.rating}</div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "text-amber-500 fill-amber-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">Based on {product.reviewCount} reviews</div>
              </div>
              <Button className="ml-auto">Write a Review</Button>
            </div>

            <Separator />

            <div className="space-y-6">
              {/* Sample reviews */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image src="/avatars/avatar1.png" alt="Priya Sharma" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold">Priya Sharma</div>
                    <div className="text-sm text-muted-foreground">2 months ago</div>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < 5 ? "text-amber-500 fill-amber-500" : "text-gray-300"}`} />
                  ))}
                </div>
                <p>
                  Absolutely stunning ring! The diamonds catch the light beautifully and the craftsmanship is
                  exceptional. I've received so many compliments.
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image src="/avatars/avatar2.png" alt="Rahul Patel" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold">Rahul Patel</div>
                    <div className="text-sm text-muted-foreground">1 month ago</div>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < 4 ? "text-amber-500 fill-amber-500" : "text-gray-300"}`} />
                  ))}
                </div>
                <p>
                  I purchased this as an anniversary gift for my wife and she loves it. The quality is excellent and it
                  looks even better in person than in the photos.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">You May Also Like</h2>
          <Link href="/shop" className="text-amber-600 hover:text-amber-700">
            View All
          </Link>
        </div>
        <FeaturedProducts />
      </div>
    </div>
  )
}
