import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollerLink } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const MainHeader = styled.header`
  background-color: var(--color-black-100);
`;

export const Container = styled.section`
  width: 80%;
  margin: auto;
`;

export const FirstHeaderSection = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 1rem 0 1.4rem 0;
  @media screen and (min-width: 33rem) {
  }
`;

export const LogoSection = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  place-content: center;
`;

export const MobileSearchSection = styled.section`
  display: grid;
  padding: 0 0 1rem 0;
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
`;

export const LogoLink = styled(RouterLink)`
  font-size: var(--fs-brand);
  text-decoration: none;
  color: var(--color-white-100);
  margin-right: 2rem;
  margin-left: 0.325rem;
  font-weight: 600;
  line-height: 1;
  font-family: "Raleway", sans-serif;
`;

export const BigScreenNav = styled.nav`
  display: none;
  @media screen and (min-width: 45rem) {
    display: grid;
  }
`;

export const UserActionsNav = styled.nav`
  margin-left: 0.625rem;
`;

export const Navlist = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  text-decoration: none;
  list-style: none;
  gap: 1.4rem;
  height: 100%;
  font-weight: 600;
  font-size: var(--fs-user-actions);
  place-items: center;

  @media screen and (min-width: 45rem) {
    /* grid-template-columns: repeat(3, auto); */
  }
`;

export const Navitem = styled.li``;

export const Navlink = styled(RouterLink)`
  color: var(--color-white-70);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  /* letter-spacing: 0.06rem; */
  /* font-family: "Raleway", sans-serif; */
  /* font-size: 1.6rem; */
  &.ctaLink {
    /* border: 1px solid var(--color-white-100); */
    color: var(--color-white-100);
    /* font-weight: bold;
    border-radius: 2rem;
    padding: 0.3rem 0.6rem;

    @media screen and (min-width: 33rem) {
      padding: 0.625rem 2rem;
      font-size: 1.6rem;
    } */
  }
`;

export const Scroller = styled(ScrollerLink)``;

export const BigScreenForm = styled.form`
  display: none;

  /* display="grid" width="100%" position="relative" */
`;

export const MobileSearchForm = styled.form`
  display: grid;
  width: 100%;
  position: relative;
`;

export const SearchField = styled.input.attrs((props) => ({
  type: "search",
}))`
  width: 100%;
  border: none;
  outline: none;
  padding: 1rem;
  padding-left: 3rem;
  font-size: var(--fs-searchbar);

  @media (min-width: 25rem) {
    padding-left: 4rem;
  }
`;

export const SearchIcon = styled.div`
  color: var(--color-black-70);
  display: grid;
  background-color: var(--color-white-100);
  position: absolute;
  padding: 0.1rem 0.625rem 0.1rem 0.625rem;
  height: 100%;
  place-items: center;
`;

export const Overlay = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    to bottom,
    hsla(0, 0%, 0%, 0.96),
    hsla(0, 0%, 0%, 0.96)
  );
  z-index: 999;
  top: 0;
  transition: 0.2s ease-in-out;
  left: ${({ isOverlayOpen }) => (isOverlayOpen ? "0" : "-100rem")};

  @media screen and (min-width: 45rem) {
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

  a {
    display: grid;
    grid-template-columns: auto 1fr;
    place-items: center;
    font-size: var(--fs-login);
    text-decoration: none;
    color: var(--color-white-100);
    gap: 1rem;
    font-weight: 600;
  }

  p {
    font-family: "Raleway", sans-serif;
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
`;

export const ONav = styled.nav`
  width: 100%;
  border-bottom: 0.1rem solid var(--color-overlay-line-separator);
  padding: 1rem 0;
  @media screen and (min-width: 25rem) {
    padding: 2rem 0;
  }
  a {
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

    &:first-child {
      /* margin-top: 1rem; */
    }

    &:hover,
    &:focus,
    &:active {
      background-color: hsla(0, 10%, 100%, 0.06);
    }
  }

  p {
    font-family: "Raleway", sans-serif;
  }
`;

export const ONavlist = styled.ul``;

export const ONavitem = styled.li``;

export const Octa = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  display: grid;
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
  padding: 1.5rem;
  @media screen and (min-width: 25rem) {
    padding: 2rem;
  }
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
