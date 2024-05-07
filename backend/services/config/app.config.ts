import dotenv from "dotenv"

dotenv.config()

export const PORT = process.env.SERVICE_URL || "localhost:3001"
export const DB_URI = process.env.MONGO_URI || "mongodb+srv://ikiadfi:adfinur12345@cluster0.rffgr8b.mongodb.net/"
