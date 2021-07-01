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

  @media screen and (min-width: 60rem) {
    width: 400px;
    justify-self: left;
  }
`;

export const HomeImage = styled.img`
  width: 100%;
  height: auto;
  order: 1;

  @media screen and (min-width: 60rem) {
    height: auto;
    width: 540px;
    justify-self: right;
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
  padding: 1.4rem 1.8rem;
  border-radius: 0.2rem;
  margin-top: 0.325rem;
  font-family: "Raleway", sans-serif;
  cursor: pointer;

  @media screen and (min-width: 60rem) {
    padding: 1.8rem 2.4rem;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: hsla(0, 0%, 0%, 0.8);
  }
`;

HomeImage.defaultProps = {
  src: HomeSVG,
  alt: "Shopping Store Home",
};
