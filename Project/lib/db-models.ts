// MongoDB models for the application

export interface User {
  id: string
  name: string
  email: string
  phone: string
  password: string // This would be hashed in a real application
  addresses: Address[]
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  id: string
  userId: string
  firstName: string
  lastName: string
  streetAddress: string
  city: string
  state: string
  postalCode: string
  country: string
  phone: string
  isDefault: boolean
}

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

export interface CartItem {
  id: string
  userId: string
  productId: string
  quantity: number
  createdAt: Date
  updatedAt: Date
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: string
  paymentStatus: "pending" | "paid" | "failed"
  shippingMethod: string
  shippingCost: number
  subtotal: number
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  productId: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface Review {
  id: string
  userId: string
  productId: string
  userName: string
  rating: number
  comment: string
  createdAt: Date
  updatedAt: Date
}
