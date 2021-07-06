import { Link } from "react-router-dom"
import styled from "styled-components"
import Container from "../Container/Container.component"
import { Form } from "../FormComponents"
import SignInSVG from "./SignInForm/images/login.svg"
import SignUpSVG from "./SignUpForm/images/signup.svg"
import ForgotSVG from "./ForgotPassword/images/forgot-password.svg"

export const AuthForm = styled(Form)``

export const AuthContainer = styled(Container)`
  gap: 4rem;

  @media screen and (min-width: 45rem) {
    padding: 4rem 0;
  }

  @media screen and (min-width: 60rem) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`

export const AuthLinks = styled(Link)`
  display: block;
  margin-top: 1rem;
  color: var(--color-black-70);

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`

export const SignInImage = styled.img`
  display: none;

  @media screen and (min-width: 60rem) {
    display: block;
    width: 100%;
    justify-self: right;
  }
`

export const SignUpImage = styled.img`
  display: none;

  @media screen and (min-width: 60rem) {
    display: block;
    width: 100%;
    justify-self: right;
  }
`

export const ForgotImage = styled.img`
  display: none;

  @media screen and (min-width: 60rem) {
    display: block;
    width: 100%;
    justify-self: right;
  }
`

SignInImage.defaultProps = {
  src: SignInSVG,
  alt: "Login Page",
}

SignUpImage.defaultProps = {
  src: SignUpSVG,
  alt: "Register Page",
}

ForgotImage.defaultProps = {
  src: ForgotSVG,
  alt: "Forgot Password",
}
