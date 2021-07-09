import SingleProductSection from "../components/Product/SingleProduct/SingleProduct.component"
import ReviewProductSection from "../components/Product/ReviewProduct/ReviewProduct.component"
import Loader from "../components/Loading/Loading.component"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductDetails } from "../redux/action-creators/product-action-creator"
import Message from "../components/Messages/Message.component"

const SingleProduct = ({ history, location, match }) => {
  const dispatch = useDispatch()
  const { loadingProduct, product, errorProduct } = useSelector(
    (state) => state.productDetails
  )

  useEffect(() => {
    dispatch(getProductDetails(match.params.id))
  }, [dispatch, match.params.id])

  if (loadingProduct) return <Loader />

  if (errorProduct) return <Message variant="error">{errorProduct}</Message>

  return (
    <>
      <SingleProductSection {...product} />
      <ReviewProductSection />
    </>
  )
}

export default SingleProduct
