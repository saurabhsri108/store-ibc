import React from "react"
import Card from "../Card/Card.component"
import { Button } from "../FormComponents"
import * as Products from "./Product.styles"
import Rating from "./Ratings/Rating.component"
import { FaHeart, FaCartPlus } from "react-icons/fa"
import { Link } from "react-router-dom"

const Product = (product) => {
  const originalPrice = parseFloat(product.price + product.discount).toFixed(2)
  return (
    <Card>
      <Products.Category>{product.category}</Products.Category>
      <Products.ImageBox>
        <Link to={`/products/${product._id}`}>
          <Products.Image src={product.image} alt={product.title} />
        </Link>
      </Products.ImageBox>
      <Products.Details>
        <Link to={`/products/${product._id}`}>
          <Products.Title>{product.title}</Products.Title>
        </Link>
        <Products.Ratings>
          <Rating ratings={product.rating} text={product.rating + " stars"} />
        </Products.Ratings>
        <Products.Ratings>
          {product.ratingCount} ratings | {product.reviews} reviews
        </Products.Ratings>
      </Products.Details>
      <div className="price">
        <Products.Price>${product.price}</Products.Price>
        <Products.Discount>
          <Products.OriginalPrice>${originalPrice}</Products.OriginalPrice>
          <Products.DiscountPrice>
            ${product.discount} off
          </Products.DiscountPrice>
        </Products.Discount>
      </div>
      <Products.Actions>
        <Button fs="1.2rem" sm={1}>
          Wish
          <FaHeart />
        </Button>
        <Button fs="1.2rem" sm={1}>
          <FaCartPlus />
          Cart
        </Button>
      </Products.Actions>
    </Card>
  )
}

export default Product
