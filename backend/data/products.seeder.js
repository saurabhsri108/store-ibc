import axios from "axios"

const getProducts = async () => {
  const { status, data } = await axios.get("https://fakestoreapi.com/products")
  if (status === 200) {
    const newData = data.map((product) => {
      delete product.id
      product.discount = 10
      product.countInStock = 5
      return product
    })
    return newData
  }
}
const products = await getProducts()
export default products
