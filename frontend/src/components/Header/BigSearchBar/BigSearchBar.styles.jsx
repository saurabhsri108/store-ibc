import styled from "styled-components";

export const BigScreenForm = styled.form`
  display: none;

  @media screen and (min-width: 45rem) {
    display: grid;
    width: 80%;
    position: relative;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media screen and (min-width: 60rem) {
    left: 4rem;
  }
`;

export const BigSearchField = styled.input`
  display: none;

  @media screen and (min-width: 45rem) {
    display: grid;
    width: 100%;
    border: none;
    outline: none;
    padding: 1.6rem;
    font-size: var(--fs-searchbar);
    border-radius: 0.2rem;
    padding-left: 5rem;
  }
`;
