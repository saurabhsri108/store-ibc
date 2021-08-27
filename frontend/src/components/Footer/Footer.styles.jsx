import styled from "styled-components";

export const MainFooter = styled.footer`
  background-color: var(--color-black-100);
  margin-top: auto;
  height: 10rem;
  display: flex;

  @media screen and (min-width: 45rem) {
    padding: 1rem 0;
    height: 8rem;
  }
`;

export const Container = styled.section`
  width: 80%;
  margin: auto;
  padding: 2rem 0;
  text-align: center;

  font-size: var(--fs-footer);
  font-weight: 600;
  color: var(--color-white-100);
`;

export const ExternalLink = styled.a`
  color: var(--color-white-100);
  font-weight: 700;
`;
