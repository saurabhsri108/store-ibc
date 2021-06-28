import {
  SectionHome,
  Container,
  InnerSection,
  CtaHeading,
  CtaPara,
  CtaButton,
  HomeImage,
} from "./HomeSection.styles";

const HomeSection = () => {
  return (
    <SectionHome>
      <Container>
        <HomeImage />
        <InnerSection>
          <CtaHeading>
            We don’t sell products, we deliver <span>aspirations</span>.
          </CtaHeading>
          <CtaPara>
            Get your most desired aspiration delivered to your home. Fast,
            Secure, and 100% satisfaction.
          </CtaPara>
          <CtaButton>Browse Products</CtaButton>
        </InnerSection>
      </Container>
    </SectionHome>
  );
};

export default HomeSection;
