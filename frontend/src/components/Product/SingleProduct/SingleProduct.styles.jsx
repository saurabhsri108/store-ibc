import styled from "styled-components"
import Container from "../../Container/Container.component"
import { Button } from "../../FormComponents"

export const SingleProductContainer = styled(Container)`
  width: 100%;
  @media screen and (min-width: 45rem) {
    grid-template-columns: auto auto;
    width: 80%;
    gap: 4rem;
    padding: 8rem 0;
  }
`

export const SingleProductImageContainer = styled.section`
  text-align: center;
  width: 80%;
  margin: auto;

  @media screen and (min-width: 45rem) {
    width: 100%;
  }
`
export const SingleProductImage = styled.img`
  width: 50%;
  max-width: 280px;

  @media screen and (min-width: 45rem) {
    width: 100%;
  }
`

export const SingleProductDetailsContainer = styled.section`
  width: 80%;
  margin: auto;
  display: grid;
  place-content: start;
  gap: 2rem;
  @media screen and (min-width: 45rem) {
    width: 100%;
    margin: 0;
  }
`
export const SingleProductHeading = styled.h2`
  color: var(--color-black-70);
  font-size: var(--fs-product-title);
  line-height: 1.2;
  text-align: center;

  @media screen and (min-width: 45rem) {
    text-align: left;
  }
`
export const SingleProductRatings = styled.div`
  margin: 1rem 0;
  display: grid;
  gap: 0.4rem;
  justify-content: center;
  justify-items: center;
  margin-top: -1rem;
  margin-bottom: -1rem;

  @media screen and (min-width: 45rem) {
    justify-content: left;
    justify-items: left;
  }
`
export const SingleProductRating = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  color: var(--color-black-60);
  font-size: var(--fs-product-ratings);
  font-weight: 600;
  text-align: center;
`
export const SingleProductReviews = styled.span`
  color: var(--color-black-60);
  font-size: var(--fs-product-ratings);
  font-weight: 600;
`
export const SingleProductDescription = styled.p`
  text-align: center;
  font-size: var(--fs-product-description);
  color: var(--color-black-60);
  font-weight: 600;
  line-height: 1.5;

  @media screen and (min-width: 45rem) {
    text-align: left;
  }
`

export const SingleProductPriceContainer = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  border: 1px solid var(--color-black-70);
  padding: 1rem;
  width: 100%;
  margin: auto;
  @media screen and (min-width: 45rem) {
    margin: 0;
    width: 256px;
  }
`
export const SingleProductPrice = styled.div`
  text-align: center;
  display: grid;
  gap: 1rem;
`
export const SingleProductPriceHeading = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-black-70);

  @media screen and (min-width: 45rem) {
    font-size: 1.8rem;
  }
`
export const SingleProductPriceValue = styled.h3`
  font-size: var(--fs-product-price);
  font-weight: 600;
  color: var(--color-black-70);
`
export const SingleProductStatus = styled.div`
  text-align: center;
  display: grid;
  gap: 1rem;
`
export const SingleProductStatusHeading = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-black-70);
  @media screen and (min-width: 45rem) {
    font-size: 1.8rem;
  }
`
export const SingleProductStatusValue = styled.h3`
  font-size: var(--fs-product-price);
  font-weight: 600;
  color: var(--color-black-70);
`
export const SingleProductActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: sticky;
  z-index: 1;
  bottom: 0;
  @media screen and (min-width: 45rem) {
    width: 100%;
    position: static;
  }
`
export const SingleProductButton = styled(Button)`
  text-transform: uppercase;
  text-align: center;
  display: block;
  padding: 1.8rem;
  border-radius: 0;
  border: 1px solid var(--color-black-100);

  @media screen and (min-width: 45rem) {
    padding: 1.8rem 1rem;
  }

  &:first-child {
    background-color: var(--color-white-100);
    color: var(--color-black-100);

    &:hover,
    &:focus {
      background-color: hsla(0, 0%, 100%, 0.8);
    }
  }
`
