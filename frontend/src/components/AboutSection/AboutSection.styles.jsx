import styled from "styled-components";
import Container from "../Container/Container.component";

export const SectionAbout = styled.section`
  background: var(--color-black-100);
  color: var(--color-white-60);
`;

export const AboutContainer = styled(Container)`
  gap: 4rem;

  @media screen and (min-width: 45rem) {
    padding: 8rem 0;
  }

  @media screen and (min-width: 60rem) {
    grid-template-columns: auto auto;
  }
`;

export const AboutDetails = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: 60rem) {
    width: 400px;
    justify-self: left;
  }
`;

export const AboutHeading = styled.h2`
  text-align: left;
  font-size: var(--fs-cta-heading);
  line-height: var(--fs-cta-heading-line-height);
  color: var(--color-white-70);
  font-weight: 600;

  &::after {
    content: "";
    background-color: var(--color-white-100);
    width: 2.4rem;
    height: 0.4rem;
    display: block;
    margin-top: 1rem;
  }
`;

export const AboutParagraph = styled.p`
  font-size: var(--fs-cta-subheading);
  line-height: var(--fs-cta-subheading-line-height);
  text-align: left;

  &.last-para {
    margin-top: -1rem;
    margin-bottom: 2rem;

    @media screen and (min-width: 60rem) {
      margin-bottom: 10rem;
    }
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: auto;

  @media screen and (min-width: 60rem) {
    height: auto;
    width: 540px;
    justify-self: right;
  }
`;

AboutImage.defaultProps = {
  src: "https://ik.imagekit.io/saudev001/storejs-project/site-images/about-section_QPySadRsa.svg?updatedAt=1627398197985",
  alt: "Features Listings",
};
