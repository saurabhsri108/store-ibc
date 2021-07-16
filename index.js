import ImageKit from "imagekit"
import dotenv from "dotenv"
import axios from "axios"
dotenv.config()
const imagekit = new ImageKit({
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_SECRET_KEY,
  urlEndpoint: process.env.IMAGE_KIT_URL_ENDPOINT,
})
const { status, data } = await axios.get("https://fakestoreapi.com/products")
const newData = data.map((product) => {
  delete product.id
  const getImageUrl = async () => {
    const { url, thumbnailUrl } = await imagekit.upload({
      file: product.image,
      fileName: product.title.toLowerCase().replaceAll(" ", "_"),
      folder: "/storejs",
    })
  }
  getImageUrl()
})
