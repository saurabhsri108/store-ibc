import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { addToCart } from "../../../redux/action-creators/cart-action-creator"
import Slides from "../../Slides/Slides.component"
import Rating from "../Ratings/Rating.component"
import * as SingleProductStyle from "./SingleProduct.styles"

const SingleProduct = ({ product }) => {
  const [qty, setQty] = useState(1)
  const history = useHistory()
  const dispatch = useDispatch()

  const qtyChangeHandler = (e) => {
    e.preventDefault()
    setQty(e.target.value)
  }

  const addToCartHandler = () => {
    dispatch(addToCart(product, qty))
    history.push(`/cart`)
  }

  const buyNowHandler = () => {
    history.push(`/checkout/${product._id}?qty=${qty}`)
  }
  return (
    <SingleProductStyle.SContainer>
      {product.images.length !== 0 && <Slides images={product.images} />}
      <SingleProductStyle.DetailsContainer>
        <SingleProductStyle.Heading>{product.title}</SingleProductStyle.Heading>
        <SingleProductStyle.Ratings>
          <SingleProductStyle.Rating>
            <Rating ratings={product.rating} text={product.rating + " stars"} />
          </SingleProductStyle.Rating>
          <SingleProductStyle.Reviews>
            {product.ratingCount} ratings | {product.reviews.length} reviews
          </SingleProductStyle.Reviews>
        </SingleProductStyle.Ratings>
        <SingleProductStyle.Description>
          {product.description}
        </SingleProductStyle.Description>
        {product.countInStock > 0 && (
          <SingleProductStyle.Quantity>
            <SingleProductStyle.QuantitySelect
              name="qty"
              id="qty"
              onChange={qtyChangeHandler}
            >
              {[...Array(product.countInStock).keys()].map((value) => {
                return (
                  <option key={value + 1} value={value + 1}>
                    {value + 1}
                  </option>
                )
              })}
            </SingleProductStyle.QuantitySelect>
          </SingleProductStyle.Quantity>
        )}
        <SingleProductStyle.PriceContainer>
          <SingleProductStyle.Price>
            <SingleProductStyle.PriceHeading>
              Price
            </SingleProductStyle.PriceHeading>
            <SingleProductStyle.PriceValue>
              ${product.price}
            </SingleProductStyle.PriceValue>
          </SingleProductStyle.Price>
          <SingleProductStyle.Status>
            <SingleProductStyle.StatusHeading>
              Status
            </SingleProductStyle.StatusHeading>
            <SingleProductStyle.StatusValue>
              {product.countInStock === 0 ? "Out of stock" : "In stock"}
            </SingleProductStyle.StatusValue>
          </SingleProductStyle.Status>
        </SingleProductStyle.PriceContainer>
      </SingleProductStyle.DetailsContainer>
      <SingleProductStyle.Actions>
        <SingleProductStyle.SButton fs="1.2rem" sm={1} onClick={buyNowHandler}>
          Buy Now
        </SingleProductStyle.SButton>
        <SingleProductStyle.SButton
          fs="1.2rem"
          sm={1}
          onClick={addToCartHandler}
        >
          Add to Cart
        </SingleProductStyle.SButton>
      </SingleProductStyle.Actions>
    </SingleProductStyle.SContainer>
  )
}

export default SingleProduct
