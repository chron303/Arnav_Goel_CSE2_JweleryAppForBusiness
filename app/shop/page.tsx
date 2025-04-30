import { SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ProductGrid } from "@/components/product-grid"

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Shop All Jewelry</h1>
          <p className="text-muted-foreground">Browse our collection of exquisite jewelry pieces</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-[250px]">
            <Input type="search" placeholder="Search products..." className="w-full" />
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
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="category-rings" className="mr-2" />
                    <label htmlFor="category-rings" className="text-sm">
                      Rings
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="category-necklaces" className="mr-2" />
                    <label htmlFor="category-necklaces" className="text-sm">
                      Necklaces
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="category-earrings" className="mr-2" />
                    <label htmlFor="category-earrings" className="text-sm">
                      Earrings
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="category-bracelets" className="mr-2" />
                    <label htmlFor="category-bracelets" className="text-sm">
                      Bracelets
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="category-pendants" className="mr-2" />
                    <label htmlFor="category-pendants" className="text-sm">
                      Pendants
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

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

              <div className="lg:hidden">
                <Button className="w-full">
                  <SlidersHorizontal className="mr-2 h-4 w-4" /> Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}
