import styled from "styled-components";
import HomeSVG from "./images/m_home.svg";
import Container from "../Container/Container.component";

export const SectionHome = styled.section`
  background-color: var(--color-white-100);
`;

export const HomeContainer = styled(Container)`
  gap: 4rem;

  @media screen and (min-width: 45rem) {
    padding: 8rem 0;
  }

  @media screen and (min-width: 60rem) {
    grid-template-columns: auto auto;
  }
`;

export const InnerSection = styled.section`
  display: grid;
  justify-items: left;
  gap: 2rem;
`;

export const HomeImage = styled.img`
  width: 100%;
  height: auto;
  order: 1;

  @media screen and (min-width: 60rem) {
    height: auto;
    width: 480px;
  }
`;

export const CtaHeading = styled.h1`
  text-align: left;
  font-size: var(--fs-cta-heading);
  line-height: var(--fs-cta-heading-line-height);
  color: var(--color-black-70);
  font-weight: 600;
  margin: 0;

  & span {
    color: var(--color-black-100);
  }

  &::after {
    content: "";
    width: 2.4rem;
    height: 0.4rem;
    display: block;
    background: var(--color-black-100);
    margin-top: 1rem;
  }
`;

export const CtaPara = styled.p`
  text-align: left;
  font-size: var(--fs-cta-subheading);
  line-height: var(--fs-cta-subheading-line-height);
  color: var(--color-black-60);
  letter-spacing: 0.1rem;
  line-height: 1.5;
  margin-top: -1.2rem;

  @media screen and (min-width: 72rem) {
    margin-top: -4rem;
  }
`;

export const CtaButton = styled.button`
  border: none;
  outline: none;
  background: var(--color-black-100);
  color: var(--color-white-100);
  font-size: var(--fs-cta-button);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 1rem 1.8rem;
  border-radius: 0.2rem;
  margin-top: 0.325rem;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
  transition: transform 300ms ease-in-out, margin-left 300ms ease-in-out;

  &:hover,
  &:focus,
  &:active {
    transform: scale(1.1);
    margin-left: 1rem;
  }
`;

HomeImage.defaultProps = {
  src: HomeSVG,
  alt: "Shopping Store Home",
};
