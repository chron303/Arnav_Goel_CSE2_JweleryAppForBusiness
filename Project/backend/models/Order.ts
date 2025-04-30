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

export interface Address {
  firstName: string
  lastName: string
  streetAddress: string
  city: string
  state: string
  postalCode: string
  country: string
  phone: string
}
