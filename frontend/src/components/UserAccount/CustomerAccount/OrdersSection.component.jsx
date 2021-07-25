import React from "react"
import { useSelector } from "react-redux"
import { CartContainer } from "../../Cart/Cart.styles"
import CartItems from "../../Cart/CartItems.component"
import NoCartItem from "../../Cart/NoCartItem.component"

const OrdersSection = () => {
  const { cartItems } = useSelector((state) => state.cartItems)
  return (
    <CartContainer style={{ width: "100%", gridTemplateColumns: "1fr" }}>
      {cartItems?.length !== 0 && <CartItems items={cartItems} />}
      {cartItems?.length === 0 && <NoCartItem title="No orders till date" />}
    </CartContainer>
  )
}

export default OrdersSection
