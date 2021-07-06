import SingleProductSection from "../components/Product/SingleProduct/SingleProduct.component"
import ReviewProductSection from "../components/Product/ReviewProduct/ReviewProduct.component"
import Loader from "../components/Loading/Loading.component"
import { useEffect, useState } from "react"
import axios from "axios"

const SingleProduct = ({ history, location, match }) => {
  const [product, setProduct] = useState({})
  const {
    params: { id },
  } = match

  useEffect(() => {
    const getSingleProduct = async () => {
      const { status, data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      )
      if (status === 200) setProduct((prevProduct) => (prevProduct = data))
    }
    getSingleProduct()
  }, [id])
  product.rating = 4.5
  product.ratingCount = 1000
  product.reviews = 400
  product.status = "In Stock"
  if (Object.entries(product).length === 0) return <Loader />

  return (
    <>
      <SingleProductSection {...product} />
      <ReviewProductSection />
    </>
  )
}

export default SingleProduct
