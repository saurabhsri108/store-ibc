import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"
import styled from "styled-components"
import Card from "../../Card/Card.component"
import { Container } from "../../Footer/Footer.styles"
import { ButtonLink } from "../../FormComponents"

export const VerifiedContainer = styled(Container)`
  color: var(--color-black-70);
`
export const VerifiedCard = styled(Card)`
  padding: 2rem;
  box-shadow: none;
  border: none;
`
export const VerifiedSuccessIcon = styled(FaCheckCircle)`
  width: 6rem;
  height: 6rem;
  color: var(--color-black-60);
  @media screen and (min-width: 60rem) {
    width: 8rem;
    height: 8rem;
  }
`
export const VerifiedFailedIcon = styled(FaTimesCircle)`
  width: 6rem;
  height: 6rem;
  color: var(--color-black-60);
  @media screen and (min-width: 60rem) {
    width: 8rem;
    height: 8rem;
  }
`

export const VerifiedMessage = styled.h1`
  letter-spacing: 0.1rem;
  color: var(--color-black-60);
  text-align: center;
  font-size: var(--fs-product-price);
  font-weight: 400;
  text-transform: capitalize;
  line-height: 1.2;
`
export const VerifiedLink = styled(ButtonLink)`
  margin-top: 2rem;
`
