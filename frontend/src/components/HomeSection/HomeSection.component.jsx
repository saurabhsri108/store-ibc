import {
  SectionHome,
  HomeContainer,
  InnerSection,
  CtaHeading,
  CtaPara,
  CtaButton,
  HomeImage,
  LandingPageContainers,
  LandingContainer,
  LandingHeadings,
} from "./HomeSection.styles";

const HomeSection = () => {
  return (
    <LandingPageContainers id="home">
      <LandingContainer>
        <HomeImage />
        <InnerSection>
          <LandingHeadings>
            We don’t sell products, we deliver <span>aspirations</span>.
          </LandingHeadings>
          <CtaPara>
            Get your most desired aspiration delivered to your home. Fast,
            Secure, and 100% satisfaction.
          </CtaPara>
          <CtaButton to="/products">Browse Products</CtaButton>
        </InnerSection>
      </LandingContainer>
    </LandingPageContainers>
  );
};

export default HomeSection;
