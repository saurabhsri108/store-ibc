import mongoose from "mongoose"
import chalk from "chalk"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(
      chalk.blue.underline(`MongoDB Connected: ${conn.connection.host}`)
    )
  } catch (error) {
    console.error(chalk.underline.bold(`Error: ${error.message}`))
    process.exit(1)
  }
}

export default connectDB
