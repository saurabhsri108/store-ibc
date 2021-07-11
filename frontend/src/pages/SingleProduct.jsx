import SingleProductSection from "../components/Product/SingleProduct/SingleProduct.component"
import ReviewProductSection from "../components/Product/ReviewProduct/ReviewProduct.component"
import Loader from "../components/Loading/Loading.component"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductDetails } from "../redux/action-creators/product-action-creator"
import Message from "../components/Messages/Message.component"
import { motion } from "framer-motion"

const SingleProduct = ({ history, location, match }) => {
  const dispatch = useDispatch()
  const { loadingProduct, product, errorProduct } = useSelector(
    (state) => state.productDetails
  )
  useEffect(() => {
    dispatch(getProductDetails(match.params.id))
  }, [dispatch, match])

  if (loadingProduct) return <Loader />

  if (errorProduct)
    return (
      <motion.div
        key="home-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Message variant="error">{errorProduct}</Message>
      </motion.div>
    )

  return (
    <motion.div
      key="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SingleProductSection product={product} />
      <ReviewProductSection />
    </motion.div>
  )
}

export default SingleProduct
