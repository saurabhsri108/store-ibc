import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import chalk from "chalk"
import connectDB from "./config/db.config.js"
import productRoutes from "./routes/products.js"
import messageRoutes from "./routes/messages.js"
import userRoutes from "./routes/users.js"
import { errorHandler, notFound404 } from "./middleware/error.middleware.js"

dotenv.config()
connectDB()
const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/v1/", (req, res) => {
  res.send("StoreJS API is up and running...")
})

app.use("/api/v1/products", productRoutes)
app.use("/api/v1/messages", messageRoutes)
app.use("/api/v1/users", userRoutes)
app.use(notFound404)
app.use(errorHandler)
app.listen(
  `${process.env.PORT}`,
  console.log(
    chalk.yellow(
      `Server is running on ${process.env.NODE_ENV} mode on ${process.env.PORT}`
    )
  )
)

// process.on("SIGINT", () => process.exit(1))
