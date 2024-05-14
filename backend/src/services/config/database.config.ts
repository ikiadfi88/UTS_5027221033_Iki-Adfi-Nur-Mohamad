import mongoose from "mongoose"
import { mongo } from "mongoose";

export const collections: { peminjamans?: mongo.Collection } = {};

const connectDB = async (url: string) => {
  mongoose.set("strictQuery", false)

  mongoose.connect(url)

  mongoose.connection.on("connected", () => {
    console.log("✅ —> Mongoose connected to MongoDB")
  })

  mongoose.connection.on("disconnected", () => {
    console.log("❌ —> Mongoose disconnected!")
  })

  process.on("SIGINT", async () => {
    await mongoose.connection.close()
    process.exit(0)
  })
}

export default connectDB
