import { Link } from "react-router-dom"
import styled from "styled-components"
import Card from "../../Card/Card.component"
import { Container } from "../../Footer/Footer.styles"
import { InputGroup } from "../../FormComponents"

export const ShippingContainer = styled(Container)`
  color: var(--color-black-70);
  margin: 2rem auto;
  text-align: left;
`
export const ShippingCard = styled(Card)`
  grid-template-columns: auto;
  font-size: 1.2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 45rem) {
    grid-template-columns: repeat(4, auto);
    margin-bottom: 4rem;
  }
`
export const ShippingLink = styled(Link)`
  color: inherit;
  padding: 1rem;
  text-align: center;

  &:not(.active) {
    display: none;
  }

  @media screen and (min-width: 45rem) {
    &:not(.active) {
      display: block;
    }
  }

  &.active {
    background: var(--color-black-100);
    color: var(--color-white-100);
  }
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  @media screen and (min-width: 45rem) {
    margin-top: 4rem;
  }
`
export const InputGroupStyled = styled(InputGroup)`
  @media screen and (min-width: 45rem) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & label {
      flex: 1;
    }

    & input {
      flex: 4;
    }
  }
`
