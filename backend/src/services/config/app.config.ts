import dotenv from "dotenv"

dotenv.config()

export const PORT = process.env.SERVICE_URL
export const DB_URI = process.env.MONGO_URI
