import clientPromise from "../db"
import type { User } from "../models/User"

export class UserRepository {
  private collection = "users"

  async findById(id: string): Promise<User | null> {
    const client = await clientPromise
    const db = client.db()
    const user = await db.collection(this.collection).findOne({ id })
    return user as User | null
  }

  async findByEmail(email: string): Promise<User | null> {
    const client = await clientPromise
    const db = client.db()
    const user = await db.collection(this.collection).findOne({ email })
    return user as User | null
  }

  async create(user: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User> {
    const client = await clientPromise
    const db = client.db()

    const newUser: User = {
      ...user,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    await db.collection(this.collection).insertOne(newUser)
    return newUser
  }

  async update(id: string, userData: Partial<User>): Promise<User | null> {
    const client = await clientPromise
    const db = client.db()

    const updatedUser = await db
      .collection(this.collection)
      .findOneAndUpdate({ id }, { $set: { ...userData, updatedAt: new Date() } }, { returnDocument: "after" })

    return updatedUser as unknown as User | null
  }
}
