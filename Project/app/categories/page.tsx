import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

// Define our categories with more detailed information
const categories = [
  {
    id: "rings",
    name: "Rings",
    description: "Stunning rings for every occasion, from engagement to everyday elegance.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2940&auto=format&fit=crop",
    count: 42,
    featured: true,
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Elegant necklaces that make a statement, from delicate chains to bold pendants.",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2787&auto=format&fit=crop",
    count: 38,
    featured: true,
  },
  {
    id: "earrings",
    name: "Earrings",
    description: "Beautiful earrings to frame your face, from studs to statement chandeliers.",
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=2864&auto=format&fit=crop",
    count: 56,
    featured: true,
  },
  {
    id: "bracelets",
    name: "Bracelets",
    description: "Stunning bracelets to adorn your wrist, from delicate bangles to statement cuffs.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2940&auto=format&fit=crop",
    count: 29,
    featured: true,
  },
  {
    id: "mangalsutras",
    name: "Mangalsutras",
    description: "Sacred and beautiful mangalsutras that symbolize marriage and commitment.",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2787&auto=format&fit=crop",
    count: 24,
    featured: false,
  },
  {
    id: "bangles",
    name: "Bangles",
    description: "Traditional and contemporary bangles for every occasion.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2940&auto=format&fit=crop",
    count: 31,
    featured: false,
  },
  {
    id: "pendants",
    name: "Pendants",
    description: "Unique pendants that make a personal statement.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2787&auto=format&fit=crop",
    count: 27,
    featured: false,
  },
  {
    id: "anklets",
    name: "Anklets",
    description: "Beautiful anklets to adorn your feet with elegance.",
    image: "https://images.unsplash.com/photo-1575466599502-7d0cd9f2a4f7?q=80&w=2787&auto=format&fit=crop",
    count: 18,
    featured: false,
  },
]

export default function CategoriesPage() {
  // Separate featured and non-featured categories
  const featuredCategories = categories.filter((category) => category.featured)
  const otherCategories = categories.filter((category) => !category.featured)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-center">Jewelry Categories</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Explore our extensive collection of fine jewelry, carefully categorized to help you find the perfect piece for
        any occasion.
      </p>

      {/* Featured Categories */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{category.count} products</p>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">View Collection</Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Other Categories */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">More Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherCategories.map((category) => (
            <div key={category.id} className="border rounded-lg overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{category.description}</p>
                <Link href={`/category/${category.id}`}>
                  <Button variant="outline" className="w-full">
                    View {category.count} Products
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
