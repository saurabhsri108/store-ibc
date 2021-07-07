import { config } from "dotenv"
import express from "express"
import cors from "cors"
import productRoutes from "./routes/products.js"

config()
const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("StoreJS API is up and running...")
})

app.get("/api/v1/", productRoutes)

app.listen(
  `${process.env.PORT}`,
  `Server is running on ${process.env.NODE_ENV} mode on ${process.env.PORT}`
)
