import styled from "styled-components";
import Container from "../Container/Container.component";
import { ButtonLink } from "../FormComponents";

export const LandingPageContainers = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || "var(--color-white-100)"};

  color: ${({ color }) => color || "inherit"};

  min-height: calc(100vh - 10rem);

  @media screen and (min-width: 45rem) {
    min-height: calc(100vh - 8rem);
  }
`;

export const LandingContainer = styled(Container)`
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

export const LandingHeadings = styled.h1`
  text-align: left;
  font-size: var(--fs-cta-heading);
  line-height: var(--fs-cta-heading-line-height);
  color: ${({ color }) => color || "var(--color-black-70)"};
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

export const CtaButton = styled(ButtonLink)`
  margin-top: 0.325rem;
`;

HomeImage.defaultProps = {
  src: "https://ik.imagekit.io/saudev001/storejs-project/site-images/home-section_GB4nmLfe1.svg?updatedAt=1627398200408",
  alt: "Shopping Store Home",
};
