import {
  LandingContainer,
  LandingHeadings,
  LandingPageContainers,
} from "../HomeSection/HomeSection.styles";
import {
  SectionAbout,
  AboutContainer,
  AboutDetails,
  AboutImage,
  AboutHeading,
  AboutParagraph,
} from "./AboutSection.styles";

const AboutSection = () => {
  return (
    <LandingPageContainers
      bgColor="var(--color-black-100)"
      color="var(--color-white-60)"
      id="about"
    >
      <LandingContainer>
        <AboutDetails>
          <LandingHeadings as="h2" color="var(--color-white-70)">
            Who are We?
          </LandingHeadings>
          <AboutParagraph>
            We have served millions of people who aspire to better their lives.
          </AboutParagraph>
          <AboutParagraph className="last-para">
            We are present in 10 countries around the globe & are constantly
            expanding.
          </AboutParagraph>
        </AboutDetails>
        <AboutImage />
      </LandingContainer>
    </LandingPageContainers>
  );
};

export default AboutSection;
