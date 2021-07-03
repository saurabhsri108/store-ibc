import styled from "styled-components"
import Error from "./images/404.svg"
import Container from "../Container/Container.component"
import { ButtonLink } from "../FormComponents"

export const ErrorContainer = styled(Container)`
  gap: 4rem;

  @media screen and (min-width: 45rem) {
    padding: 8rem 0;
  }

  @media screen and (min-width: 60rem) {
    grid-template-columns: auto auto;
  }
`

export const ErrorSection = styled.section`
  display: grid;
  justify-items: left;
  gap: 2rem;

  @media screen and (min-width: 60rem) {
    width: 400px;
    justify-self: left;
  }
`

export const ErrorHeading = styled.h1`
  text-align: left;
  font-size: var(--fs-cta-heading);
  line-height: var(--fs-cta-heading-line-height);
  color: var(--color-black-70);
  font-weight: 600;
  margin: 0;

  & span {
    color: var(--color-black-100);
  }

  &::after {
    content: "";
    width: 2.4rem;
    height: 0.4rem;
    display: block;
    background: var(--color-black-100);
    margin-top: 1rem;
  }
`

export const ErrorPara = styled.p`
  text-align: left;
  font-size: var(--fs-cta-subheading);
  line-height: var(--fs-cta-subheading-line-height);
  color: var(--color-black-60);
  letter-spacing: 0.1rem;
  line-height: 1.5;
  margin-top: -1.2rem;
`

export const ErrorButton = styled(ButtonLink)`
  margin-top: 0.325rem;
`

export const ErrorImage = styled.img`
  width: 100%;
  height: auto;
  order: 1;

  @media screen and (min-width: 60rem) {
    height: auto;
    width: 540px;
    justify-self: right;
  }
`

ErrorImage.defaultProps = {
  src: Error,
  alt: "404 Error",
}
