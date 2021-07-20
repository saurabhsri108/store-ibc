import React from "react"
import { CartContainer } from "../components/Cart/Cart.styles"
import CartItems from "../components/Cart/CartItems.component"
import NoCartItem from "../components/Cart/NoCartItem.component"
import { useSelector } from "react-redux"

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartItems)
  const { savedCartItems } = useSelector((state) => state.savedCartItems)

  return (
    <CartContainer>
      {cartItems?.length !== 0 && <CartItems items={cartItems} />}
      {cartItems?.length === 0 && <NoCartItem title="No items in your cart" />}
      {savedCartItems?.length !== 0 && (
        <CartItems items={savedCartItems} isSavedProduct={true} />
      )}
    </CartContainer>
  )
}

export default Cart
