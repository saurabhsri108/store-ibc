import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const CustomButtonLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  border: none;
  outline: none;
  background-color: ${({ white }) =>
    white ? "var(--color-white-100)" : "var(--color-black-100)"};
  color: ${({ white }) =>
    white ? "var(--color-black-100)" : "var(--color-white-100)"};
  font-size: var(--fs-cta-button);
  font-family: "Raleway", sans-serif;
  text-transform: ${({ sm }) => (sm ? "" : "uppercase")};
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: ${({ sm }) => (sm ? "0.8rem 2rem" : "1.4rem 1.8rem")};
  border-radius: 0.2rem;
  cursor: pointer;

  @media screen and (min-width: 60rem) {
    padding: ${({ sm }) => (sm ? "0.8rem 2rem" : "1.8rem 2.4rem")};
  }

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ white }) =>
      white ? "hsla(0, 0%, 100%, 0.8)" : "hsla(0, 0%, 0%, 0.8)"};
  }
`

const ButtonLink = ({ children, ...otherProps }) => {
  return <CustomButtonLink {...otherProps}>{children}</CustomButtonLink>
}

export default ButtonLink
