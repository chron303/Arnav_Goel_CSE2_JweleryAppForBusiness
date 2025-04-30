export interface Product {
  id: string
  name: string
  description: string
  longDescription?: string
  price: number
  images: string[]
  category: string
  material?: string
  stones?: string
  caratWeight?: string
  inStock: boolean
  featured: boolean
  isNew: boolean
  rating: number
  reviewCount: number
  createdAt: Date
  updatedAt: Date
}
