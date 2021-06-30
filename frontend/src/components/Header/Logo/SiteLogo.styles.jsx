import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const LogoSection = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  place-content: center;
`;

export const Hamburger = styled.button.attrs((props) => ({
  type: "button",
}))`
  width: auto;
  height: 2rem;
  background-color: var(--color-black-100);
  border: none;
  color: var(--color-white-100);
  margin-right: 0.625rem;
  cursor: pointer;

  @media screen and (min-width: 60rem) {
    display: none;
  }
`;

export const LogoLink = styled(RouterLink)`
  font-size: var(--fs-brand);
  text-decoration: none;
  color: var(--color-white-100);
  margin-right: 2rem;
  margin-left: 0.325rem;
  font-weight: 600;
  line-height: 1;

  span {
    margin-left: 0.2rem;
    font-weight: 600;
    font-family: "Font Awesome 5", sans-serif;
  }
`;
