import { useState } from "react";
import {
  SectionContact,
  ContactContainer,
  FormSubmitButton,
  ContactHeading,
  ContactForm,
  FormGroup,
  FormLabel,
  FormInputField,
  FormInputArea,
  ContactDetails,
  DetailsBox,
  ExternalLink,
  DetailsInfo,
} from "./ContactSection.styles";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitContactHandler = (e) => {
    e.preventDefault();
  };

  return (
    <SectionContact id="contact">
      <ContactContainer>
        <ContactDetails>
          <ContactHeading>Contact Us</ContactHeading>
          <ContactForm onSubmit={submitContactHandler}>
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormInputField
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInputField
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormInputArea
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <FormSubmitButton type="submit">Send Message</FormSubmitButton>
            </FormGroup>
          </ContactForm>
        </ContactDetails>
        <DetailsBox>
          <DetailsInfo>
            Email:
            <ExternalLink to="mailto:vasudeveloper001@gmail.com">
              vasudeveloper001@gmail.com
            </ExternalLink>
          </DetailsInfo>
          <DetailsInfo>
            Twitter:
            <ExternalLink to="https://twitter.com/saudev001">
              @saudev001
            </ExternalLink>
          </DetailsInfo>
          <DetailsInfo>
            LinkedIn:
            <ExternalLink to="https://www.linkedin.com/in/saurabh-srivastava-b62330109/">
              saurabh-srivastava-b62330109/
            </ExternalLink>
          </DetailsInfo>
          <DetailsInfo>
            GitHub:
            <ExternalLink to="https://github.com/vasudeveloper001">
              @vasudeveloper001
            </ExternalLink>
          </DetailsInfo>
        </DetailsBox>
      </ContactContainer>
    </SectionContact>
  );
};

export default ContactSection;
