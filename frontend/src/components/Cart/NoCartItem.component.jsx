import {
  CartCard,
  CartHeading,
  CartMissingImage,
  CartParagraph,
} from "./Cart.styles"

const NoCartItem = (props) => {
  return (
    <>
      <CartCard>
        <CartMissingImage />
      </CartCard>
      <CartCard className="no-cart-item-card">
        <CartHeading className="no-cart-heading">{props.title}</CartHeading>
        <CartParagraph>Add some products to see the list here</CartParagraph>
      </CartCard>
    </>
  )
}

export default NoCartItem
