import styled from "styled-components"
import HomeSVG from "../images/m_home.svg"

export const SectionHome = styled.section`
  background-color: var(--c-w10-white);
`

export const Container = styled.section`
  display: grid;
  place-content: center;
  place-items: center;
  width: 80%;
  margin: auto;
  padding: 2rem 0;
  gap: 2rem;
`
export const InnerSection = styled.section`
  display: grid;
  place-content: center;
  place-items: center;
  gap: 2rem;
`

export const HomeImage = styled.img`
  width: 100%;
  height: auto;
`

export const CtaHeading = styled.h1`
  text-align: center;
  font-size: var(--fs-cta-heading);
  color: var(--c-b7-black);
  font-weight: 600;
`

export const CtaPara = styled.p`
  text-align: center;
  font-size: var(--fs-cta-subheading);
  color: var(--c-b6-black-alpha);
  letter-spacing: 0.1rem;
  line-height: 1.5;
  margin-top: -1.2rem;
`

export const CtaButton = styled.button`
  border: none;
  outline: none;
  background: var(--c-b10-black);
  color: var(--c-w10-white);
  font-size: var(--fs-cta-button);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 1.6rem 3.6rem;
  border-radius: 4rem;
  margin-top: 0.325rem;

  @media (min-width: 21rem) {
    padding: 2rem 4rem;
    margin-top: 1rem;
  }
`

HomeImage.defaultProps = {
  src: HomeSVG,
  alt: "Shopping Store Home",
}
