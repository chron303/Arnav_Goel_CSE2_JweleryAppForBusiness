export interface User {
  id: string
  name: string
  email: string
  password: string // Hashed
  phone: string
  role: "user" | "admin"
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
