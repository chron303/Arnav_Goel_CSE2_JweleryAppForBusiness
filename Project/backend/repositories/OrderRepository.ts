import clientPromise from "../db"
import type { Order } from "../models/Order"

export class OrderRepository {
  private collection = "orders"

  async findById(id: string): Promise<Order | null> {
    const client = await clientPromise
    const db = client.db()
    const order = await db.collection(this.collection).findOne({ id })
    return order as Order | null
  }

  async findByUserId(userId: string): Promise<Order[]> {
    const client = await clientPromise
    const db = client.db()
    const orders = await db.collection(this.collection).find({ userId }).toArray()
    return orders as Order[]
  }

  async create(order: Omit<Order, "id" | "createdAt" | "updatedAt">): Promise<Order> {
    const client = await clientPromise
    const db = client.db()

    const newOrder: Order = {
      ...order,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    await db.collection(this.collection).insertOne(newOrder)
    return newOrder
  }

  async updateStatus(id: string, status: Order["status"]): Promise<Order | null> {
    const client = await clientPromise
    const db = client.db()

    const updatedOrder = await db
      .collection(this.collection)
      .findOneAndUpdate({ id }, { $set: { status, updatedAt: new Date() } }, { returnDocument: "after" })

    return updatedOrder as unknown as Order | null
  }
}
