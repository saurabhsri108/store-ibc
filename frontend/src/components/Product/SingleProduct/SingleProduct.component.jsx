import Rating from "../Ratings/Rating.component"
import {
  SingleProductContainer,
  SingleProductImageContainer,
  SingleProductImage,
  SingleProductDetailsContainer,
  SingleProductHeading,
  SingleProductRatings,
  SingleProductRating,
  SingleProductReviews,
  SingleProductDescription,
  SingleProductPriceContainer,
  SingleProductPrice,
  SingleProductPriceHeading,
  SingleProductPriceValue,
  SingleProductStatus,
  SingleProductStatusHeading,
  SingleProductStatusValue,
  SingleProductActions,
  SingleProductButton,
} from "./SingleProduct.styles"

const SingleProduct = ({
  id,
  title,
  image,
  description,
  price,
  rating,
  reviews,
  ratingCount,
  countInStock,
}) => {
  return (
    <SingleProductContainer>
      <SingleProductImageContainer>
        <SingleProductImage src={image} alt={title} />
      </SingleProductImageContainer>
      <SingleProductDetailsContainer>
        <SingleProductHeading>{title}</SingleProductHeading>
        <SingleProductRatings>
          <SingleProductRating>
            <Rating ratings={rating} text={rating + " stars"} />
          </SingleProductRating>
          <SingleProductReviews>
            {ratingCount} ratings | {reviews.length} reviews
          </SingleProductReviews>
        </SingleProductRatings>
        <SingleProductDescription>{description}</SingleProductDescription>
        <SingleProductPriceContainer>
          <SingleProductPrice>
            <SingleProductPriceHeading>Price</SingleProductPriceHeading>
            <SingleProductPriceValue>${price}</SingleProductPriceValue>
          </SingleProductPrice>
          <SingleProductStatus>
            <SingleProductStatusHeading>Status</SingleProductStatusHeading>
            <SingleProductStatusValue>
              {countInStock === 0 ? "Out of stock" : "In stock"}
            </SingleProductStatusValue>
          </SingleProductStatus>
        </SingleProductPriceContainer>
      </SingleProductDetailsContainer>
      <SingleProductActions>
        <SingleProductButton fs="1.2rem" sm={1}>
          Buy Now
        </SingleProductButton>
        <SingleProductButton fs="1.2rem" sm={1}>
          Add to Cart
        </SingleProductButton>
      </SingleProductActions>
    </SingleProductContainer>
  )
}

export default SingleProduct
