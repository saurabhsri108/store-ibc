import React from "react"
import Card from "../Card/Card.component"
import { Button } from "../FormComponents"
import * as Products from "./Product.styles"
import Rating from "./Ratings/Rating.component"
import { FaHeart, FaCartPlus } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
  addToCart,
  addToLater,
} from "../../redux/action-creators/cart-action-creator"

const Product = (product) => {
  const originalPrice = parseFloat(product.price + product.discount).toFixed(2)

  const dispatch = useDispatch()

  const addToCartHandler = () => {
    dispatch(addToCart(product))
  }

  const addToSaveHandler = () => {
    dispatch(addToLater(product))
  }

  return (
    <Card>
      <Products.Category>{product.category}</Products.Category>
      <Products.ImageBox>
        <Link to={`/products/${product._id}`}>
          <Products.Image src={product.images[0].image} alt={product.title} />
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
          {product.ratingCount} ratings | {product.reviews.length} reviews
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
        <Button fs="1.2rem" sm={1} onClick={addToSaveHandler}>
          Wish
          <FaHeart />
        </Button>
        <Button fs="1.2rem" sm={1} onClick={addToCartHandler}>
          <FaCartPlus />
          Cart
        </Button>
      </Products.Actions>
    </Card>
  )
}

export default Product
