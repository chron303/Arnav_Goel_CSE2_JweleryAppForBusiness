import { NextResponse } from "next/server"

// Mock products data (same as in the products route)
const products = [
  {
    id: "1",
    name: "Diamond Eternity Ring",
    description:
      "This stunning diamond eternity ring features a continuous circle of brilliant-cut diamonds set in 18k white gold.",
    longDescription:
      "Crafted with precision and care, this diamond eternity ring showcases a continuous circle of brilliant-cut diamonds totaling 1.5 carats. Each diamond is meticulously selected for its exceptional clarity, color, and brilliance, and set in high-quality 18k white gold to create a timeless piece that will be treasured for generations.",
    price: 1299.99,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Rings",
    material: "18k White Gold",
    stones: "Diamonds",
    caratWeight: "1.5 carats",
    inStock: true,
    featured: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 24,
  },
  {
    id: "2",
    name: "Pearl Necklace",
    description: "Elegant pearl necklace featuring perfectly matched freshwater pearls with a 14k gold clasp.",
    longDescription:
      "This exquisite pearl necklace features a strand of perfectly matched freshwater pearls, each carefully selected for its lustrous glow and smooth surface. The pearls are strung on silk thread and finished with a secure 14k gold clasp.",
    price: 899.99,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Necklaces",
    material: "14k Gold",
    stones: "Freshwater Pearls",
    inStock: true,
    featured: true,
    isNew: false,
    rating: 4.7,
    reviewCount: 18,
  },
  {
    id: "3",
    name: "Sapphire Earrings",
    description:
      "Stunning sapphire earrings featuring brilliant blue sapphires surrounded by diamonds in 18k white gold.",
    longDescription:
      "These stunning earrings feature brilliant blue sapphires, each surrounded by a halo of sparkling diamonds. Set in 18k white gold, these earrings are secured with comfortable and secure push backs.",
    price: 749.99,
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    category: "Earrings",
    material: "18k White Gold",
    stones: "Sapphires, Diamonds",
    caratWeight: "Sapphires: 1.2 carats, Diamonds: 0.5 carats",
    inStock: true,
    featured: true,
    isNew: true,
    rating: 4.9,
    reviewCount: 12,
  },
  {
    id: "4",
    name: "Gold Bracelet",
    description: "Classic 18k gold bracelet with a timeless chain design, perfect for everyday wear.",
    longDescription:
      "This classic 18k gold bracelet features a timeless chain design that's perfect for everyday wear. The bracelet is crafted from high-quality gold and features a secure lobster clasp closure.",
    price: 599.99,
    images: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    category: "Bracelets",
    material: "18k Gold",
    inStock: true,
    featured: true,
    isNew: false,
    rating: 4.6,
    reviewCount: 15,
  },
]

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id

  // Find product by ID
  const product = products.find((p) => p.id === id)

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  return NextResponse.json(product)
}
