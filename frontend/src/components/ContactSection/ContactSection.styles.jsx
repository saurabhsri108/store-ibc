import styled from "styled-components"
import Container from "../Container/Container.component"
import Button from "../FormComponents/Button.component"
import InputField from "../FormComponents/InputField.component"
import InputGroup from "../FormComponents/InputGroup.component"
import Label from "../FormComponents/Label.component"
import TextArea from "../FormComponents/TextArea.component"
import ContactSVG from "./images/contact_us.svg"

export const SectionContact = styled.section``

export const ContactContainer = styled(Container)`
  gap: 4rem;

  @media screen and (min-width: 45rem) {
    padding: 8rem 0;
  }

  @media screen and (min-width: 60rem) {
    grid-template-columns: auto auto;
  }
`

export const ContactDetails = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: 60rem) {
    width: 400px;
    justify-self: left;
  }
`

export const ContactHeading = styled.h2`
  text-align: left;
  font-size: var(--fs-cta-heading);
  line-height: var(--fs-cta-heading-line-height);
  color: var(--color-black-70);
  font-weight: 600;

  &::after {
    content: "";
    background-color: var(--color-black-100);
    width: 2.4rem;
    height: 0.4rem;
    display: block;
    margin-top: 1rem;
  }
`

export const DetailsBox = styled.section`
  display: grid;
  color: var(--color-black-100);
  font-size: var(--fs-cta-subheading);
  line-height: var(--fs-cta-subheading-line-height);
  font-weight: 600;
  gap: 0.5rem;
  border-top: 1px solid hsla(0, 0%, 0%, 0.2);
  padding: 2rem 0;

  @media screen and (min-width: 60rem) {
    padding: 0;
    gap: 0;
    border: none;
    align-content: center;
    width: 540px;
    justify-self: right;
    height: max-content;
    align-self: center;
  }
`

export const DetailsInfo = styled.p`
  padding: 1rem 0;
`

export const ExternalLink = styled.a`
  color: var(--color-black-70);
  text-decoration: underline;
  display: block;
`

export const ContactForm = styled.form`
  font-size: var(--fs-searchbar);
  font-weight: bold;
  color: var(--color-black-60);
  display: grid;
  justify-items: left;
  gap: 1.4rem;
`

export const FormSubmitButton = styled(Button)`
  margin-top: 2rem;
`

export const ContactImage = styled.img`
  width: 100%;
  height: auto;

  @media screen and (min-width: 60rem) {
    height: auto;
    width: 480px;
  }
`

ContactImage.defaultProps = {
  src: ContactSVG,
  alt: "Contacts",
}
