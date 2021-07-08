import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import chalk from "chalk"
import connectDB from "./config/db.config.js"
import productRoutes from "./routes/products.js"

dotenv.config()
connectDB()
const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("StoreJS API is up and running...")
})

app.use("/api/v1/", productRoutes)

app.listen(
  `${process.env.PORT}`,
  console.log(
    chalk.yellow(
      `Server is running on ${process.env.NODE_ENV} mode on ${process.env.PORT}`
    )
  )
)
