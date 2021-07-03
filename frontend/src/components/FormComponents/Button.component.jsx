import React from "react"
import styled from "styled-components"

const CustomButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  border: none;
  outline: none;
  background-color: ${({ bg }) => bg || "var(--color-black-100)"};
  color: ${({ color }) => color || "var(--color-white-100)"};
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
    background-color: ${({ bgh }) => bgh || "hsla(0, 0%, 0%, 0.8)"};
  }
`

const Button = ({ children, ...otherProps }) => {
  return <CustomButton {...otherProps}>{children}</CustomButton>
}

export default Button
