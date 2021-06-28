import {
  SectionAbout,
  AboutContainer,
  AboutImage,
  AboutHeading,
  AboutParagraph,
} from "./AboutSection.styles";

const AboutSection = () => {
  return (
    <SectionAbout>
      <AboutContainer>
        <AboutHeading>Who are We?</AboutHeading>
        <AboutParagraph>
          We have served millions of people who aspire to better their lives.
        </AboutParagraph>
        <AboutParagraph className="last-para">
          We are present in 10 countries around the globe & are constantly
          expanding.
        </AboutParagraph>
        <AboutImage />
      </AboutContainer>
    </SectionAbout>
  );
};

export default AboutSection;
