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
    <SectionAbout id="about">
      <AboutContainer>
        <AboutDetails>
          <AboutHeading>Who are We?</AboutHeading>
          <AboutParagraph>
            We have served millions of people who aspire to better their lives.
          </AboutParagraph>
          <AboutParagraph className="last-para">
            We are present in 10 countries around the globe & are constantly
            expanding.
          </AboutParagraph>
        </AboutDetails>
        <AboutImage />
      </AboutContainer>
    </SectionAbout>
  );
};

export default AboutSection;
