import {
  addToCart,
  addToLater,
  removeFromCart,
  removeFromLater,
} from "../../redux/action-creators/cart-action-creator"
import {
  CartCard,
  CartColOne,
  CartColTwo,
  CartDeliveryTime,
  CartFinalItem,
  CartFinalRow,
  CartHeading,
  CartItemAction,
  CartItemButton,
  CartItemDiscount,
  CartItemPrice,
  CartItemQty,
  CartItemTitle,
  CartProductImage,
} from "./Cart.styles"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"

const CartItems = ({ items, isSavedProduct }) => {
  const dispatch = useDispatch()

  const addToCartHandler = (item, qty) => {
    item._id = item.id
    dispatch(addToCart(item, qty))
  }

  const removeCartItemHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const removeSaveItemHandler = (id) => {
    dispatch(removeFromLater(id))
  }

  const saveItemLaterHandler = (item) => {
    dispatch(removeFromCart(item.id))
    item._id = item.id
    dispatch(addToLater(item))
  }

  const saveItemCartHandler = (item) => {
    dispatch(removeFromLater(item.id))
    item._id = item.id
    dispatch(addToCart(item))
  }

  const history = useHistory()
  const checkoutHandler = () => {
    history.push("/auth/sign-in?redirect=shipping")
  }

  const totalPrice = Number(
    items?.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2)
  )
  let deliveryPrice = totalPrice > 40 ? "FREE" : 10
  const finalPrice =
    typeof deliveryPrice === "number" ? totalPrice + deliveryPrice : totalPrice
  deliveryPrice = "$10"
  return (
    <>
      <div>
        <CartHeading>
          {isSavedProduct ? "Wishlist Items" : "Shopping Cart"} ({items?.length}{" "}
          items)
        </CartHeading>
        {items?.map((item) => (
          <CartCard className="cart-full" key={item.id}>
            <CartColOne>
              <Link to={`/products/${item.id}`} className="heading-link">
                <CartItemTitle>{item.title}</CartItemTitle>
              </Link>
              <CartItemPrice>
                $
                {isSavedProduct
                  ? item.price.toFixed(2)
                  : (item.price * item.qty).toFixed(2)}
              </CartItemPrice>
              <CartDeliveryTime>
                Delivery by Sat June 11 | FREE DELIVERY
                <CartItemDiscount></CartItemDiscount>
              </CartDeliveryTime>
              {item.countInStock !== 0 && (
                <CartDeliveryTime
                  style={{ color: "darkgreen", fontWeight: "bold" }}
                >
                  In stock
                </CartDeliveryTime>
              )}
              {item.countInStock === 0 && (
                <CartDeliveryTime
                  style={{ color: "darkred", fontWeight: "bold" }}
                >
                  Out of stock
                </CartDeliveryTime>
              )}
              <CartItemAction className="detail-action">
                {!isSavedProduct && (
                  <CartItemButton
                    sm={1}
                    bgh="hsla(0, 0%, 100%, 0.8)"
                    bg="var(--color-white-100)"
                    color="var(--color-black-70)"
                    className="cart-action-btn"
                    onClick={() => saveItemLaterHandler(item)}
                  >
                    Save for later
                  </CartItemButton>
                )}
                {isSavedProduct && (
                  <CartItemButton
                    sm={1}
                    bgh="hsla(0, 0%, 100%, 0.8)"
                    bg="var(--color-white-100)"
                    color="var(--color-black-70)"
                    className="cart-action-btn"
                    onClick={() => saveItemCartHandler(item)}
                  >
                    Move to cart
                  </CartItemButton>
                )}
                {!isSavedProduct && (
                  <CartItemButton
                    sm={1}
                    bgh="hsla(0, 0%, 100%, 0.8)"
                    bg="var(--color-white-100)"
                    color="var(--color-black-70)"
                    className="cart-action-btn"
                    onClick={() => removeCartItemHandler(item.id)}
                  >
                    Remove
                  </CartItemButton>
                )}
                {isSavedProduct && (
                  <CartItemButton
                    sm={1}
                    bgh="hsla(0, 0%, 100%, 0.8)"
                    bg="var(--color-white-100)"
                    color="var(--color-black-70)"
                    className="cart-action-btn"
                    onClick={() => removeSaveItemHandler(item.id)}
                  >
                    Remove
                  </CartItemButton>
                )}
              </CartItemAction>
            </CartColOne>
            <CartColTwo>
              <CartProductImage src={item.image.image} alt={item.image.alt} />
              {!isSavedProduct && (
                <CartItemQty
                  name="qty"
                  id="qty"
                  value={item.qty}
                  onChange={(e) => addToCartHandler(item, e.target.value)}
                >
                  {[...Array(item.countInStock).keys()].map((value) => {
                    return (
                      <option key={value + 1} value={value + 1}>
                        {value + 1}
                      </option>
                    )
                  })}
                </CartItemQty>
              )}
            </CartColTwo>
          </CartCard>
        ))}
      </div>
      {!isSavedProduct && (
        <div>
          <CartHeading>Final Price</CartHeading>
          <CartCard>
            <CartFinalRow>
              <CartFinalItem>Price ({items?.length} items)</CartFinalItem>
              <CartFinalItem>${totalPrice}</CartFinalItem>
            </CartFinalRow>
            <CartFinalRow>
              <CartFinalItem>Delivery Charges</CartFinalItem>
              <CartFinalItem>{deliveryPrice}</CartFinalItem>
            </CartFinalRow>
            <CartFinalRow>
              <CartFinalItem>Final Price</CartFinalItem>
              <CartFinalItem>${finalPrice}</CartFinalItem>
            </CartFinalRow>
          </CartCard>
          <CartItemAction className="cart-checkout">
            <CartItemButton fs="1.2rem" sm={1} onClick={checkoutHandler}>
              Checkout
            </CartItemButton>
          </CartItemAction>
        </div>
      )}
    </>
  )
}

export default CartItems
