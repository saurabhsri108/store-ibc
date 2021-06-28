import styled from "styled-components";
import Container from "../Container/Container.component";
import AboutSVG from "./images/about.svg";

export const SectionAbout = styled.section`
  background: var(--color-black-100);
  color: var(--color-white-60);
`;

export const AboutContainer = styled(Container)`
  place-content: center;
  place-items: center;
`;

export const AboutHeading = styled.h2`
  text-align: center;
  font-size: var(--fs-cta-heading);
  color: var(--color-white-70);
  font-weight: 600;
`;

export const AboutParagraph = styled.p`
  font-size: var(--fs-cta-subheading);
  text-align: center;

  &.last-para {
    margin-top: -1rem;
    margin-bottom: 4rem;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: auto;
`;

AboutImage.defaultProps = {
  src: AboutSVG,
  alt: "Features Listings",
};
