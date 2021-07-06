import styled from "styled-components";

export const MobileSearchSection = styled.section`
  display: grid;
  margin-top: 1rem;
  @media screen and (min-width: 45rem) {
    padding: 1rem 0;
  }

  @media screen and (min-width: 45rem) {
    display: none;
  }
`;

export const MobileSearchForm = styled.form`
  display: grid;
  width: 100%;
  position: relative;
`;

export const MobileSearchField = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 1rem;
  padding-left: 3.6rem;
  font-size: var(--fs-searchbar);
  border-radius: 0.2rem;

  @media (min-width: 25rem) {
    padding-left: 4rem;
  }

  @media screen and (min-width: 45rem) {
    padding: 1.6rem;
    padding-left: 6rem;
  }

  @media screen and (min-width: 45rem) {
    padding-left: 9rem;
  }
`;
