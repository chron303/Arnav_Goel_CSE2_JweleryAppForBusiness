import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: "rings",
    name: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2940&auto=format&fit=crop",
    count: 42,
  },
  {
    id: "necklaces",
    name: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2787&auto=format&fit=crop",
    count: 38,
  },
  {
    id: "earrings",
    name: "Earrings",
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=2864&auto=format&fit=crop",
    count: 56,
  },
  {
    id: "bracelets",
    name: "Bracelets",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2940&auto=format&fit=crop",
    count: 29,
  },
]

export function CategoryShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={`/category/${category.id}`} className="group relative overflow-hidden rounded-lg">
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
              <p className="text-sm opacity-90">{category.count} products</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
