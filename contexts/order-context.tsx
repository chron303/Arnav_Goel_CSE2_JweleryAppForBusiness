"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface OrderContextType {
  orderPlaced: boolean
  setOrderPlaced: (placed: boolean) => void
}

const OrderContext = createContext<OrderContextType | undefined>(undefined)

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orderPlaced, setOrderPlaced] = useState(false)

  return <OrderContext.Provider value={{ orderPlaced, setOrderPlaced }}>{children}</OrderContext.Provider>
}

export function useOrder() {
  const context = useContext(OrderContext)
  if (context === undefined) {
    throw new Error("useOrder must be used within an OrderProvider")
  }
  return context
}
