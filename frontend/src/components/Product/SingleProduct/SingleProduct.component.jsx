import { useState } from "react"
import Slides from "../../Slides/Slides.component"
import Rating from "../Ratings/Rating.component"
import * as SingleProductStyle from "./SingleProduct.styles"

const SingleProduct = ({ product }) => {
  const [qty, setQty] = useState(0)

  const qtyChangeHandler = (e) => {
    e.preventDefault()
    setQty(e.target.value)
  }

  product.images = [
    { id: 1, image: product.image, alt: product.title },
    { id: 2, image: product.image, alt: product.title },
    { id: 3, image: product.image, alt: product.title },
    { id: 4, image: product.image, alt: product.title },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1625863057797-015fef6be7ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
      alt: product.title,
    },
  ]
  return (
    <SingleProductStyle.SContainer>
      <Slides images={product.images} />
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
        <SingleProductStyle.SButton fs="1.2rem" sm={1}>
          Buy Now
        </SingleProductStyle.SButton>
        <SingleProductStyle.SButton fs="1.2rem" sm={1}>
          Add to Cart
        </SingleProductStyle.SButton>
      </SingleProductStyle.Actions>
    </SingleProductStyle.SContainer>
  )
}

export default SingleProduct
