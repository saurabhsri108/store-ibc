import styled from "styled-components";
import ContactSVG from "./images/contact_us.svg";
import Form from "../Form/Form.component";
import Group from "../Form/Group.component";
import Label from "../Form/Label.component";
import InputField from "../Form/InputField.component";
import InputArea from "../Form/InputArea.component";
import Button from "../Form/Button.component";
import Container from "../Container/Container.component";

export const SectionContact = styled.section``;

export const ContactContainer = styled(Container)``;

export const ContactHeading = styled.h2`
  text-align: center;
  font-size: var(--fs-cta-heading);
  color: var(--color-black-70);
  font-weight: 600;
`;

export const ContactForm = styled(Form)`
  background: var(--color-black-100);
`;

export const FormGroup = styled(Group)``;
export const FormLabel = styled(Label)``;

export const FormInputField = styled(InputField)``;

export const FormInputArea = styled(InputArea)``;

export const FormSubmitButton = styled(Button)`
  margin-top: 1.6rem;
  background-color: var(--color-black-100);
  border: 1px solid var(--color-white-100);
  color: var(--color-white-100);
  transition: all 0.1s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    transition: all 0.1s ease-in-out;
    background-color: var(--color-white-100);
    color: var(--color-color-100);
  }
`;

export const ContactDetails = styled.section``;

export const DetailsBox = styled.section`
  border: 2px solid black;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  margin: -2rem 0 2rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-black-70);
  gap: 0.5rem;

  a {
    font-size: 1.125rem;
    color: var(--color-black-60);
    text-decoration: underline;
  }
`;

export const Para = styled.p``;

export const ContactImage = styled.img`
  width: 100%;
  height: auto;
  display: none;
`;

ContactImage.defaultProps = {
  src: ContactSVG,
  alt: "Contact Us",
};
