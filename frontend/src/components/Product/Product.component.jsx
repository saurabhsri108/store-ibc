import React from "react"
import Card from "../Card/Card.component"
import { Button } from "../FormComponents"
import {
  ProductCategory,
  ProductImageBox,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductRatings,
  ProductPrice,
  ProductDiscount,
  ProductOriginalPrice,
  ProductDiscountPrice,
  ProductActions,
} from "./Product.styles"
import Rating from "./Ratings/Rating.component"
import { FaHeart, FaCartPlus } from "react-icons/fa"
import { Link } from "react-router-dom"

const Product = ({
  id,
  title,
  rating = 4.5,
  ratingCount = 1000,
  reviews = 400,
  price,
  discount = 40,
  category,
  description,
  image,
}) => {
  const originalPrice = parseFloat(price + discount).toFixed(2)
  return (
    <Card>
      <ProductCategory>{category}</ProductCategory>
      <ProductImageBox>
        <Link to={`/products/${id}`}>
          <ProductImage src={image} alt={title} />
        </Link>
      </ProductImageBox>
      <ProductDetails>
        <Link to={`/products/${id}`}>
          <ProductTitle>{title}</ProductTitle>
        </Link>
        <ProductRatings>
          <Rating ratings={rating} text={rating + " stars"} />
        </ProductRatings>
        <ProductRatings>
          {ratingCount} ratings | {reviews} reviews
        </ProductRatings>
      </ProductDetails>
      <div className="price">
        <ProductPrice>${price}</ProductPrice>
        <ProductDiscount>
          <ProductOriginalPrice>${originalPrice}</ProductOriginalPrice>
          <ProductDiscountPrice>${discount} off</ProductDiscountPrice>
        </ProductDiscount>
      </div>
      <ProductActions>
        <Button fs="1.2rem" sm={1}>
          Wish
          <FaHeart />
        </Button>
        <Button fs="1.2rem" sm={1}>
          <FaCartPlus />
          Cart
        </Button>
      </ProductActions>
    </Card>
  )
}

export default Product
