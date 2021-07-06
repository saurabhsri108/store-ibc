import {
  SectionHome,
  HomeContainer,
  InnerSection,
  CtaHeading,
  CtaPara,
  CtaButton,
  HomeImage,
} from "./HomeSection.styles"

const HomeSection = () => {
  return (
    <SectionHome id="home">
      <HomeContainer>
        <HomeImage />
        <InnerSection>
          <CtaHeading>
            We don’t sell products, we deliver <span>aspirations</span>.
          </CtaHeading>
          <CtaPara>
            Get your most desired aspiration delivered to your home. Fast,
            Secure, and 100% satisfaction.
          </CtaPara>
          <CtaButton to="/products">Browse Products</CtaButton>
        </InnerSection>
      </HomeContainer>
    </SectionHome>
  )
}

export default HomeSection
