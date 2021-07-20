import { useSelector } from "react-redux"
import { CartContainer } from "../Cart/Cart.styles"
import CartItems from "../Cart/CartItems.component"
import NoCartItem from "../Cart/NoCartItem.component"

const WishlistSection = () => {
  const { savedCartItems } = useSelector((state) => state.savedCartItems)
  return (
    <CartContainer style={{ width: "100%", gridTemplateColumns: "1fr" }}>
      {savedCartItems?.length === 0 && (
        <NoCartItem title="No items in your wishlist" />
      )}
      {savedCartItems?.length !== 0 && (
        <CartItems items={savedCartItems} isSavedProduct={true} />
      )}
    </CartContainer>
  )
}

export default WishlistSection
