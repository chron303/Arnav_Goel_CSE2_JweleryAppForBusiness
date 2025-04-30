import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedProducts } from "@/components/featured-products"
import { CategoryShowcase } from "@/components/category-showcase"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=2940&auto=format&fit=crop"
          alt="Luxury Jewelry Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Timeless Elegance</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Discover our exquisite collection of handcrafted jewelry that celebrates your unique style
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              Shop Now <ShoppingBag className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Collections
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Collections</h2>
            <Link href="/shop" className="text-amber-600 hover:text-amber-700 flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* Category Showcase */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shop By Category</h2>
          <CategoryShowcase />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Customers Say</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <Newsletter />
        </div>
      </section>
    </main>
  )
}
