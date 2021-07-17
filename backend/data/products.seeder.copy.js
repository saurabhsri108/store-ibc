import axios from "axios"
import ImageKit from "imagekit"
import dotenv from "dotenv"
dotenv.config()

const imagekit = new ImageKit({
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_SECRET_KEY,
  urlEndpoint: process.env.IMAGE_KIT_URL_ENDPOINT,
})

const getProducts = async () => {
  const { status, data } = await axios.get("https://fakestoreapi.com/products")
  if (status === 200) {
    const newData = data.map((product) => {
      delete product.id
      product.images = [
        {
          image: product.image,
          alt: product.title,
        },
        {
          image: "https://source.unsplash.com/514x735/?shirts",
          alt: "Unsplash Random Shirt",
        },
        {
          image: "https://source.unsplash.com/514x735/?mobiles",
          alt: "Unsplash Random Mobiles",
        },
        {
          image: "https://source.unsplash.com/514x735/?jewelery",
          alt: "Unsplash Random Jewelery",
        },
        {
          image: "https://source.unsplash.com/514x735/?gaming",
          alt: "Unsplash Random Gaming",
        },
      ]
      delete product.image
      product.discount = 10
      product.countInStock = 5
      return product
    })
    return newData
  }
}
const products = await getProducts()
export default products
