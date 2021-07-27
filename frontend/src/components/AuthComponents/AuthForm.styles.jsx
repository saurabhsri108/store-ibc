import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../Container/Container.component";
import { Form } from "../FormComponents";

export const AuthForm = styled(Form)``;

export const AuthContainer = styled(Container)`
  gap: 4rem;

  @media screen and (min-width: 45rem) {
    padding: 4rem 0;
  }

  @media screen and (min-width: 60rem) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const AuthLinks = styled(Link)`
  display: block;
  margin-top: 1rem;
  color: var(--color-black-70);

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;

export const SignInImage = styled.img`
  display: none;

  @media screen and (min-width: 60rem) {
    display: block;
    width: 100%;
    justify-self: right;
  }
`;

export const SignUpImage = styled.img`
  display: none;

  @media screen and (min-width: 60rem) {
    display: block;
    width: 100%;
    justify-self: right;
  }
`;

export const ForgotImage = styled.img`
  display: none;

  @media screen and (min-width: 60rem) {
    display: block;
    width: 100%;
    justify-self: right;
  }
`;

SignInImage.defaultProps = {
  src: "https://ik.imagekit.io/saudev001/storejs-project/site-images/login-section_2jRVw4_bb.svg?updatedAt=1627398196615",
  alt: "Login Page",
};

SignUpImage.defaultProps = {
  src: "https://ik.imagekit.io/saudev001/storejs-project/site-images/sign-up_YQ2ycp0IR.svg?updatedAt=1627398197108",
  alt: "Register Page",
};

ForgotImage.defaultProps = {
  src: "https://ik.imagekit.io/saudev001/storejs-project/site-images/forgot-password_-hImxQwoL.svg?updatedAt=1627398199557",
  alt: "Forgot Password",
};
