import styled from "styled-components"
import Card from "../Card/Card.component"
import Container from "../Container/Container.component"
import { Button } from "../FormComponents"
import EmptySVG from "./images/empty_cart.svg"

export const CartContainer = styled(Container)`
  margin: 0 auto;
  @media screen and (min-width: 45rem) {
    grid-template-columns: 2fr 1fr;
  }
`
export const CartCard = styled(Card)`
  &.no-cart-item-card {
    place-content: center;
    @media screen and (min-width: 45rem) {
      font-size: 1.4rem;
    }
  }
  &.cart-full {
    display: flex;
    place-items: start;
    gap: 1rem;

    @media screen and (min-width: 45rem) {
      flex-direction: row-reverse;
    }

    &.cart-full {
      margin-bottom: 2rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

export const CartHeading = styled.h2`
  font-size: var(--fs-product-title);
  color: var(--color-black-70);
  font-weight: 600;
  margin-bottom: 2rem;
  &.no-cart-heading {
    margin: 2rem 0 1rem 0;
  }
`

export const CartItemTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--color-black-70);
  font-weight: 600;
  line-height: 1.5;

  @media screen and (min-width: 45rem) {
    font-size: 1.8rem;
  }
  &.no-cart-heading {
    margin: 2rem 0 1rem 0;
  }
`

export const CartItemPrice = styled.p`
  font-size: 2.4rem;
  margin: 1rem 0;
  font-weight: 600;
  color: var(--color-black-70);
`
export const CartDeliveryTime = styled.p`
  color: var(--color-black-70);
  font-weight: 600;
`
export const CartItemDiscount = styled.span`
  text-decoration: line-through;
`

export const CartParagraph = styled.p`
  color: var(--color-black-70);
  font-weight: 400;
  line-height: 1.5;
`

export const CartColOne = styled.div`
  flex: 3;
  @media screen and (min-width: 45rem) {
    flex: 4;
    margin-left: 1rem;
  }

  & .heading-link {
    &:hover,
    &:focus,
    &:focus-within,
    &:active {
      text-decoration: underline;
      color: var(--color-black-70);
    }
  }
`
export const CartColTwo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CartFinalRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-black-10);

  &:nth-child(1) {
    padding-top: 0;
  }
  &:nth-child(3) {
    padding-bottom: 0;
    border-bottom: none;
  }
`

export const CartFinalItem = styled.p`
  color: var(--color-black-70);
  font-weight: 400;
  line-height: 1.5;
  font-size: 1.2rem;
  font-weight: 600;

  @media screen and (min-width: 45rem) {
    font-size: 1.4rem;
  }
`

export const CartProductImage = styled.img`
  width: 100%;
  max-width: 8rem;
  height: auto;
`
export const CartItemQty = styled.select`
  padding: 0.4rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-black-60);
  width: 100%;
  cursor: pointer;
  margin-top: 0.4rem;
  max-width: 8rem;
`

export const CartItemAction = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  &.cart-checkout {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 45rem) {
    width: 100%;
  }

  &.detail-action {
    grid-template-columns: auto auto;
    @media screen and (min-width: 45rem) {
      grid-template-columns: 1fr 1fr;
      width: 80%;
    }
    gap: 1rem;
    margin-top: 2rem;
  }
`

export const CartItemButton = styled(Button)`
  text-transform: uppercase;
  text-align: center;
  display: block;
  padding: 1.8rem;
  border-radius: 0.2rem;
  border: 1px solid var(--color-black-100);
  width: 100%;

  &.cart-action-btn {
    padding: 1rem 0.3rem;
    font-size: 1rem;
  }
  @media screen and (min-width: 45rem) {
    padding: 1.8rem 1rem;
  }
`

export const CartMissingImage = styled.img`
  width: 50%;
  height: auto;
`

CartMissingImage.defaultProps = {
  src: EmptySVG,
  alt: "No Cart Items",
}
