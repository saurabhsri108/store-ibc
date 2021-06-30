import styled from "styled-components";
import { Link as ScrollerLink } from "react-scroll";

export const MainHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--color-black-100);
  padding: 1.2rem 0;
`;

export const HeaderContainer = styled.section`
  width: 80%;
  margin: auto;
  max-width: 1080px;
`;

export const FirstHeaderSection = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;

  @media screen and (min-width: 45rem) {
    grid-template-columns: auto 1fr auto;
  }

  @media screen and (min-width: 60rem) {
    grid-template-columns: auto auto 1fr auto;
  }
`;

export const Scroller = styled(ScrollerLink)`
  color: var(--color-white-60);
  cursor: pointer;
  font-family: "Raleway", sans-serif;

  &.active {
    color: var(--color-white-100);
  }
`;

export const SearchIcon = styled.div`
  color: var(--color-black-70);
  display: grid;
  background-color: transparent;
  position: absolute;
  padding: 0.1rem 0.625rem 0.1rem 0.625rem;
  height: 100%;
  place-items: center;
  border-radius: 0.2rem;

  @media screen and (min-width: 45rem) {
    padding: 0 1.2rem;
  }
`;
