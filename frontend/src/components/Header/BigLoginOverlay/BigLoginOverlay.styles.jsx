import styled from "styled-components"
import { Link } from "react-router-dom"
import { Button, ButtonLink } from "../../FormComponents"

export const LoginMenuList = styled.li`
  @media screen and (min-width: 60rem) {
    position: relative;
    &:hover .inside-menu,
    &:focus-within .inside-menu,
    &:focus .inside-menu {
      visibility: visible;
      opacity: 1;
      z-index: 1;
      transform: translateY(0);
      transition-delay: 0s, 0s;
    }
  }
`

export const LoginNavlist = styled.ul`
  display: none;
  @media screen and (min-width: 60rem) {
    display: block;
    width: 180px;
    list-style: none;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    background: var(--color-white-100);
    border: 1px solid var(--color-black-10);
    top: 100%;
    right: 0;
    transform: translateY(-3em);
    z-index: -1;
    transition: all 0.3s ease 0s, visibility 0s linear 0.3s;
  }
`

export const LoginNavLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  font-size: var(--fs-big-nav-link-item);
  color: var(--color-black-70);
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid var(--color-black-10);
  transition: background-color 300ms ease;
  &:hover,
  &:focus,
  &:active {
    background-color: hsla(0, 0%, 0%, 0.2);
  }
`

export const LoginSignUp = styled(ButtonLink)`
  display: block;
  text-align: center;
  width: 80%;
  margin: 2rem auto;
  border-radius: 0.2rem;
`
export const Logout = styled(Button)`
  display: block;
  text-align: center;
  width: 80%;
  margin: 2rem auto;
  border-radius: 0.2rem;
`
