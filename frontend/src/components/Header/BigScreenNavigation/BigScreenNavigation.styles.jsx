import styled from "styled-components"

export const BigScreenNav = styled.nav`
  display: none;
  @media screen and (min-width: 60rem) {
    display: grid;
  }
`

export const BigNavlist = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-items: start;
  align-items: center;
  justify-content: start;
  list-style: none;
  margin-left: 4rem;
  font-size: var(--fs-big-nav-link-item);
  font-weight: 600;
  gap: 2rem;
`
