"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ProductGrid } from "@/components/product-grid"

// Define our categories with more detailed information
const categories = [
  {
    id: "rings",
    name: "Rings",
    description: "Stunning rings for every occasion, from engagement to everyday elegance.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2940&auto=format&fit=crop",
    count: 42,
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Elegant necklaces that make a statement, from delicate chains to bold pendants.",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2787&auto=format&fit=crop",
    count: 38,
  },
  {
    id: "earrings",
    name: "Earrings",
    description: "Beautiful earrings to frame your face, from studs to statement chandeliers.",
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=2864&auto=format&fit=crop",
    count: 56,
  },
  {
    id: "bracelets",
    name: "Bracelets",
    description: "Stunning bracelets to adorn your wrist, from delicate bangles to statement cuffs.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2940&auto=format&fit=crop",
    count: 29,
  },
  {
    id: "mangalsutras",
    name: "Mangalsutras",
    description: "Sacred and beautiful mangalsutras that symbolize marriage and commitment.",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2787&auto=format&fit=crop",
    count: 24,
  },
  {
    id: "bangles",
    name: "Bangles",
    description: "Traditional and contemporary bangles for every occasion.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2940&auto=format&fit=crop",
    count: 31,
  },
  {
    id: "pendants",
    name: "Pendants",
    description: "Unique pendants that make a personal statement.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2787&auto=format&fit=crop",
    count: 27,
  },
  {
    id: "anklets",
    name: "Anklets",
    description: "Beautiful anklets to adorn your feet with elegance.",
    image: "https://images.unsplash.com/photo-1575466599502-7d0cd9f2a4f7?q=80&w=2787&auto=format&fit=crop",
    count: 18,
  },
]

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.id as string
  const [category, setCategory] = useState<(typeof categories)[0] | undefined>()

  useEffect(() => {
    // Find the category based on the ID from the URL
    const foundCategory = categories.find((cat) => cat.id === categoryId)
    setCategory(foundCategory)
  }, [categoryId])

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Category not found</h1>
        <p>The category you are looking for does not exist.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
          <p className="text-muted-foreground">{category.description}</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-[250px]">
            <Input type="search" placeholder="Search in this category..." className="w-full" />
          </div>
          <Select defaultValue="featured">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="lg:sticky lg:top-20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" className="h-8 text-sm">
                Reset
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Input type="number" placeholder="Min" className="h-8" />
                  <Input type="number" placeholder="Max" className="h-8" />
                </div>
                <Button className="w-full mt-2 h-8 text-sm">Apply</Button>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3">Material</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="material-gold" className="mr-2" />
                    <label htmlFor="material-gold" className="text-sm">
                      Gold
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="material-silver" className="mr-2" />
                    <label htmlFor="material-silver" className="text-sm">
                      Silver
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="material-platinum" className="mr-2" />
                    <label htmlFor="material-platinum" className="text-sm">
                      Platinum
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="material-diamond" className="mr-2" />
                    <label htmlFor="material-diamond" className="text-sm">
                      Diamond
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3">Style</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="style-traditional" className="mr-2" />
                    <label htmlFor="style-traditional" className="text-sm">
                      Traditional
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="style-contemporary" className="mr-2" />
                    <label htmlFor="style-contemporary" className="text-sm">
                      Contemporary
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="style-vintage" className="mr-2" />
                    <label htmlFor="style-vintage" className="text-sm">
                      Vintage
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="style-minimalist" className="mr-2" />
                    <label htmlFor="style-minimalist" className="text-sm">
                      Minimalist
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="lg:hidden">
                <Button className="w-full">
                  <SlidersHorizontal className="mr-2 h-4 w-4" /> Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ProductGrid categoryId={categoryId} />
        </div>
      </div>
    </div>
  )
}
