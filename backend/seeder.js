import dotenv from "dotenv"
import chalk from "chalk"
import loading from "loading-indicator"
import presets from "loading-indicator/presets.js"
import users from "./data/users.seeder.js"
import products from "./data/products.seeder.js"
import User from "./schema/user.schema.js"
import Product from "./schema/product.schema.js"
import Message from "./schema/message.schema.js"
import Order from "./schema/order.schema.js"
import connectDB from "./config/db.config.js"

dotenv.config()

connectDB()

const importData = async () => {
  try {
    const timer = loading.start(chalk.yellowBright("Loading..."), {
      frames: presets.circle,
    })
    await User.deleteMany()
    await Product.deleteMany()
    await Order.deleteMany()
    await Message.deleteMany()

    const createdUsers = await User.insertMany(users)
    const adminId = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminId }
    })
    await Product.insertMany(sampleProducts)
    loading.stop(timer)
    console.log(chalk.green.bold("Data imported successfully..."))
    process.exit()
  } catch (error) {
    console.error(chalk.red.bold(error))
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    const timer = loading.start(chalk.yellowBright("Loading..."), {
      frames: presets.circle,
    })
    await User.deleteMany()
    await Product.deleteMany()
    await Order.deleteMany()
    await Message.deleteMany()
    loading.stop(timer)
    console.log(chalk.green.bold("Data destroyed successfully..."))
    process.exit()
  } catch (error) {
    console.error(chalk.red.bold(error))
    process.exit(1)
  }
}

if (process.argv[2] === "-d") {
  destroyData()
} else {
  importData()
}
