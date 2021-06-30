import styled, { css } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollerLink } from "react-scroll";

export const Overlay = styled.section`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    to bottom,
    hsla(0, 0%, 0%, 0.96),
    hsla(0, 0%, 0%, 0.96)
  );
  z-index: 1;
  top: 0;
  transition: 0.2s ease-in-out;
  left: ${({ isOverlayOpen }) => (isOverlayOpen ? "0" : "-100%")};

  @media screen and (min-width: 45rem) {
    width: 50%;
  }

  @media screen and (min-width: 60rem) {
    display: none;
  }
`;

export const OLogin = styled.section`
  display: flex;
  justify-content: space-between;
  color: white;
  width: 100%;
  border-bottom: 0.1rem solid var(--color-overlay-line-separator);
  padding: 2rem;

  &:hover,
  &:focus,
  &:active {
    background: hsla(0, 10%, 100%, 0.06);
  }
`;

export const OLoginLink = styled(Link)`
  display: grid;
  grid-template-columns: auto 1fr;
  place-items: center;
  font-size: var(--fs-login);
  text-decoration: none;
  color: var(--color-white-100);
  gap: 1rem;
  font-weight: 600;
`;

export const OLoginPara = styled.p`
  font-family: "Raleway", sans-serif;
  @media screen and (min-width: 45rem) {
    padding: 2rem 0;
  }
`;

export const StyledFaTimes = styled(FaTimes)`
  position: absolute;
  color: white;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  z-index: 1000;
  cursor: pointer;

  @media screen and (min-width: 45rem) {
    top: 4.6rem;
  }
`;

export const ONav = styled.nav`
  width: 100%;
  border-bottom: 0.1rem solid var(--color-overlay-line-separator);
  padding: 1rem 0;
  @media screen and (min-width: 25rem) {
    padding: 2rem 0;
  }

  p {
    font-family: "Raleway", sans-serif;
  }
`;

const navLinkStyles = css`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  font-size: var(--fs-nav-link-item);
  text-decoration: none;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.1rem;
  color: var(--color-white-70);
  line-height: 1.6;
  cursor: pointer;
  padding: 1rem 2rem;

  &:hover,
  &:focus,
  &:active {
    background-color: hsla(0, 10%, 100%, 0.06);
  }
`;

export const ONavLink = styled(Link)`
  ${navLinkStyles}
`;

export const Scroller = styled(ScrollerLink)`
  ${navLinkStyles}
`;

export const Octa = styled.section`
  width: 100%;
  padding: 2rem;
  display: grid;
  place-content: start;
  gap: 2rem;
  margin-top: 1rem;
  font-family: "Raleway", sans-serif;
`;

export const OctaButton = styled.button`
  border: none;
  outline: none;
  font-size: var(--fs-overlay-buttons);
  font-weight: 700;
  text-transform: uppercase;
  background-color: var(--color-black-100);
  color: var(--color-white-100);
  border: 0.2rem solid var(--color-white-100);
  border-radius: 4rem;
  padding: 1.2rem 1.8rem;
  cursor: pointer;
  transition: all 0.125s ease-in;

  &:hover,
  &:focus,
  &:active {
    transition: all 0.125s ease-in;
    background-color: var(--color-white-100);
    color: var(--color-black-100);
    border: 0.2rem solid var(--color-black-100);
  }

  &:last-child {
    color: var(--color-white-60);
    border-color: var(--color-white-60);
    transition: all 0.125s ease-in;

    &:hover {
      transition: all 0.125s ease-in;
      color: var(--color-black-60);
      border-color: var(--color-black-60);
      background-color: var(--color-white-70);
    }
  }
`;
