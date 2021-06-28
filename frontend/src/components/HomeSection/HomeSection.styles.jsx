import styled from "styled-components";
import HomeSVG from "./images/m_home.svg";
import Container from "../Container/Container.component";

export const SectionHome = styled.section`
  background-color: var(--color-white-100);
`;

export const HeaderContainer = styled(Container)`
  place-content: center;
  place-items: center;

  @media screen and (min-width: 33rem) {
    place-items: normal;
  }
`;
export const InnerSection = styled.section`
  display: grid;
  place-content: center;
  place-items: center;
  gap: 2rem;

  @media screen and (min-width: 33rem) {
    margin-top: -8rem;
  }
`;

export const HomeImage = styled.img`
  width: 100%;
  height: auto;

  @media screen and (min-width: 33rem) {
    height: 70%;
  }
`;

export const CtaHeading = styled.h1`
  text-align: center;
  font-size: var(--fs-cta-heading);
  color: var(--color-black-70);
  font-weight: 600;
  margin: 0;

  & span {
    color: var(--color-black-100);
  }
`;

export const CtaPara = styled.p`
  text-align: center;
  font-size: var(--fs-cta-subheading);
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
  padding: 1.6rem 3.6rem;
  border-radius: 4rem;
  margin-top: 0.325rem;
  font-family: "Raleway", sans-serif;

  @media (min-width: 21rem) {
    padding: 2rem 4rem;
    margin-top: 1rem;
  }
`;

HomeImage.defaultProps = {
  src: HomeSVG,
  alt: "Shopping Store Home",
};
