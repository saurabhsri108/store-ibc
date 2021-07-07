import { config } from "dotenv"
import express from "express"
import productRoutes from "./routes/products.js"
config()
const app = express()

app.use(express.json())

app.get("/products", productRoutes)

const PORT = process.env.SERVER_PORT || 5000

app.listen(`Server is running on ${PORT}`)
