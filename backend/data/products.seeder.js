import axios from "axios"

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
