import ImageKit from "imagekit"
import dotenv from "dotenv"
dotenv.config()

export const imagekit = new ImageKit({
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_SECRET_KEY,
  urlEndpoint: process.env.IMAGE_KIT_URL_ENDPOINT,
})

export default imagekit
