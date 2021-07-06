import styled from "styled-components"
import { Link } from "react-router-dom"
import { ButtonLink } from "../../FormComponents"

export const LoginNav = styled.nav`
  position: absolute;
  width: 20rem;
  left: -4.2rem;
  top: 6.125rem;
  background: var(--color-black-100);
  /* opacity: 0;
  z-index: -1; */
  transition: all 0.3s ease-in-out;

  display: none;

  @media screen and (min-width: 60rem) {
    display: ${({ isBigLoginOpen }) => (isBigLoginOpen ? "block" : "none")};
  }
`

export const LoginNavlist = styled.ul`
  width: 100%;
  list-style: none;
`

export const LoginNavLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  font-size: var(--fs-big-nav-link-item);
  color: var(--color-white-70);
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid var(--color-overlay-line-separator);
  &:hover,
  &:focus,
  &:active {
    background-color: hsla(0, 0%, 100%, 0.2);
  }
`

export const LoginSignUp = styled(ButtonLink)`
  display: block;
  text-align: center;
  width: 80%;
  margin: 2rem auto;
`
