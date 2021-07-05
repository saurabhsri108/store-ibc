import styled from "styled-components"
import Card from "../Card/Card.component"
import Container from "../Container/Container.component"

export const ProductsContainer = styled(Container)`
  grid-template-columns: auto auto;
`

export const FilterSection = styled(Card)`
  display: none;
  @media screen and (min-width: 60rem) {
    display: block;
  }
`

export const ListingsSection = styled.div``

export const SortingSection = styled(Card)`
  margin-bottom: 2rem;
`

export const PaginationSection = styled(Card)`
  margin-top: 2rem;
`

export const ProductSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 1rem;
`
export const ProductCategory = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  background: black;
  color: white;
  padding: 1rem 0.5rem 1rem 2rem;
  border: none;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1rem;
  border-radius: 0 0 0 4rem;
`
export const ProductImageBox = styled.div``

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  max-width: 150px;
  margin: 4rem auto 0;
`
export const ProductDetails = styled.div`
  text-align: center;
  margin: 1rem;
`

export const ProductTitle = styled.h3`
  color: var(--color-black-70);
  font-size: var(--fs-product-title);
  line-height: 1.2;
  margin-bottom: 0.4rem;
  text-align: center;
`
export const ProductRatings = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  color: var(--color-black-60);
  font-size: var(--fs-product-ratings);
  font-weight: 600;
  text-align: center;
`
export const ProductPrice = styled.h2`
  font-size: var(--fs-product-price);
  font-weight: 700;
  text-align: center;
`

export const ProductDiscount = styled.p`
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.4rem 0 2rem;
  text-align: center;
`
export const ProductOriginalPrice = styled.span`
  text-decoration: line-through;
  font-weight: 600;
  color: darkred;
  font-size: 1.2rem;
`
export const ProductDiscountPrice = styled.span`
  color: darkgreen;
  font-size: 1.4rem;
  font-weight: 600;
`

export const ProductActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`
