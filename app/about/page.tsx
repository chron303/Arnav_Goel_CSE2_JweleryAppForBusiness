import Image from "next/image"

import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Harsiddhi Jewellers</h1>
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=2940&auto=format&fit=crop"
            alt="Harsiddhi Jewellers Store"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Our Heritage</h2>
          <p className="mb-4">
            Founded in 1985 in the heart of Gujarat, Harsiddhi Jewellers has grown from a small family business to one
            of India's most trusted jewelry brands. For over three decades, we have been crafting exquisite pieces that
            celebrate life's most precious moments.
          </p>
          <p className="mb-6">
            Our journey began when our founder, Mr. Rajesh Patel, opened a modest jewelry shop with a vision to create
            pieces that blend traditional craftsmanship with contemporary designs. Today, that vision has blossomed into
            a renowned brand that serves customers across the country and beyond.
          </p>

          <Separator className="my-8" />

          <h2 className="text-2xl font-semibold mb-4">Our Craftsmanship</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <p>
                At Harsiddhi Jewellers, we believe that every piece of jewelry tells a story. Our master craftsmen, many
                of whom have been with us for generations, bring decades of expertise to each creation. Using
                traditional techniques passed down through the ages alongside modern technology, we ensure that every
                piece meets the highest standards of quality and design.
              </p>
              <p className="mt-4">
                We source only the finest materials – from ethically mined diamonds and precious stones to certified
                gold and platinum. Our commitment to excellence extends beyond aesthetics to ensure that each piece is
                not only beautiful but also durable and valuable.
              </p>
            </div>
            <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2787&auto=format&fit=crop"
                alt="Jewelry Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <Separator className="my-8" />

          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Trust</h3>
              <p>
                We believe that trust is the foundation of our relationship with our customers. We are committed to
                transparency in our sourcing, pricing, and business practices.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Quality</h3>
              <p>
                We never compromise on quality. Every piece that bears the Harsiddhi name undergoes rigorous quality
                checks to ensure it meets our exacting standards.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Innovation</h3>
              <p>
                While we honor traditional craftsmanship, we continuously innovate to create designs that resonate with
                contemporary tastes and lifestyles.
              </p>
            </div>
          </div>

          <Separator className="my-8" />

          <h2 className="text-2xl font-semibold mb-4">Our Promise</h2>
          <p className="mb-4">
            When you choose Harsiddhi Jewellers, you're not just buying jewelry; you're investing in a piece of art that
            will be cherished for generations. We promise to deliver not just products, but experiences that celebrate
            your most precious moments.
          </p>
          <p>
            We invite you to explore our collections and discover the perfect piece that speaks to your heart. Whether
            you're celebrating a milestone, expressing love, or simply treating yourself, Harsiddhi Jewellers has
            something special for every occasion.
          </p>
        </div>
      </div>
    </div>
  )
}
