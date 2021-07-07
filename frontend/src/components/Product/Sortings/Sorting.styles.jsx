import styled from "styled-components"
import { Button } from "../../FormComponents"

export const SortContainer = styled.section`
  position: fixed;
  z-index: 10;
  top: 0;
  right: ${({ isSortOpen }) => (isSortOpen ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  background: var(--color-black-100);
  overflow: auto;
  font-size: var(--fs-searchbar);
  color: var(--color-white-70);
  border-radius: 0.2rem;
  transition: 0.3s ease-in-out;

  @media screen and (min-width: 45rem) {
    width: 50%;
  }

  @media screen and (min-width: 60rem) {
    width: 100%;
    position: static;
    background: var(--color-white-100);
    color: var(--black-black-70);
    border: 1px solid var(--color-black-10);
    transition: none;
    height: max-content;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 1px 1px 4px var(--color-black-10);
  }
`
export const CategoryHeading = styled.h2`
  display: none;

  @media screen and (min-width: 60rem) {
    display: block;
    font-size: var(--fs-product-title);
    font-weight: 600;
    text-transform: uppercase;
    color: var(--color-black-100);
    margin-bottom: 2rem;
  }
`
export const SortingActions = styled.ul`
  display: grid;
  gap: 0.6rem;
  padding: 2rem;

  @media screen and (min-width: 60rem) {
    padding: 0;
    gap: 2rem;
    grid-template-columns: repeat(4, auto);
  }
`
export const SortHeading = styled.h2`
  font-size: var(--fs-product-title);
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: var(--color-white-100);
  letter-spacing: 0.1rem;
  border-bottom: 1px solid var(--color-overlay-line-separator);
  padding-bottom: 2rem;

  @media screen and (min-width: 60rem) {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
    font-size: var(--fs-searchbar);
    color: var(--color-black-70);
    font-weight: bold;
  }
`
export const SortButton = styled(Button)`
  margin: 2rem;
  border: 1px solid var(--color-white-70);

  @media screen and (min-width: 60rem) {
    border: none;
    margin: 1rem 0 0 0;
  }
`
