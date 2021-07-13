import { FaTimes } from "react-icons/fa"
import styled from "styled-components"
import { Button } from "../../FormComponents"

export const FilterContainer = styled.aside`
  position: fixed;
  z-index: 1;
  top: 0;
  left: ${({ isFilterOpen }) => (isFilterOpen ? "0" : "-100%")};
  height: 100vh;
  width: 100%;
  background: var(--color-black-100);
  overflow: auto;
  font-size: var(--fs-searchbar);
  color: var(--color-white-70);
  transition: 0.3s ease-in-out;

  @media screen and (min-width: 45rem) {
    width: 50%;
    z-index: 0;
  }

  @media screen and (min-width: 60rem) {
    width: 100%;
    position: static;
    background: var(--color-white-100);
    color: var(--black-black-70);
    border: 1px solid var(--color-black-10);
    transition: none;
    height: max-content;
    box-shadow: 1px 1px 4px var(--color-black-10);
  }
`

export const FilterMainHeading = styled.h2`
  font-size: var(--fs-product-title);
  padding: 2rem;
  border-bottom: 1px solid var(--color-overlay-line-separator);
  text-transform: uppercase;
  color: var(--color-white-100);

  @media screen and (min-width: 60rem) {
    color: var(--black-black-100);
    border-bottom: 1px solid var(--color-black-10);
  }
`

export const FilterSpace = styled.section`
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--color-overlay-line-separator);

  @media screen and (min-width: 60rem) {
    border-bottom: 1px solid var(--color-black-10);
  }
`

export const FilterHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 600;
`
export const StyledFaTimes = styled(FaTimes)`
  position: absolute;
  color: white;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  z-index: 1;
  cursor: pointer;

  @media screen and (min-width: 45rem) {
    top: 2.4rem;
  }

  @media screen and (min-width: 60rem) {
    display: none;
  }
`
export const FilterButton = styled(Button)`
  margin: 2rem;
  border: 1px solid var(--color-white-70);

  @media screen and (min-width: 60rem) {
    border: none;
  }
`
