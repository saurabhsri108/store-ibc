import axios from "axios"
import ImageKit from "imagekit"
import dotenv from "dotenv"

dotenv.config()

const imagekit = new ImageKit({
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_SECRET_KEY,
  urlEndpoint: process.env.IMAGE_KIT_URL_ENDPOINT,
})

const getImageUrl = async (product) => {
  const newImages = []
  const imageUrls = [
    product.image,
    "https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2",
    "https://images.unsplash.com/photo-1591965431760-026e8d627ca9",
    "https://images.unsplash.com/photo-1577883751617-803a40e0057b",
    "https://images.unsplash.com/photo-1610041321063-bbaf5286de89",
  ]
  for (let imageUrl of imageUrls) {
    // const { url } = await imagekit.upload({
    //   file: imageUrl, // product has image url here.
    //   fileName: product.title,
    //   useUniqueFileName: true,
    //   folder: "/storejs/", // this is the folder I created in the media library on my dashboard
    // })
    newImages.push({ image: imageUrl, alt: product.title })
  }
  return new Promise((resolve, reject) => {
    if (Array.isArray(newImages) && newImages.length > 0) {
      resolve(newImages)
    } else {
      reject("No Images obtained from Imagekit")
    }
  })
}

const getProducts = async () => {
  const { status, data } = await axios.get("https://fakestoreapi.com/products")

  if (status === 200) {
    const newData = await Promise.all(
      data.map(async (product) => {
        delete product.id
        product.images = await getImageUrl(product)
        delete product.image
        product.discount = 10
        product.countInStock = 5
        return product
      })
    )
    return newData
  }
}
const products = await getProducts()
export default products

/* Issues
    1. Promise related issues if I try to change anything.
    2. No result inside product.images - it's not even there.
*/
