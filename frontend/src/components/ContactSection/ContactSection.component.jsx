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
  ContactImage,
  DetailsBox,
  Para,
} from "./ContactSection.styles";
import ExternalRedirect from "../../helpers/ExternalRedirect";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitContactHandler = (e) => {
    e.preventDefault();
  };

  return (
    <SectionContact>
      <ContactContainer>
        <ContactHeading>Contact Us</ContactHeading>
        <ContactForm onSubmit={submitContactHandler}>
          <FormGroup>
            <FormLabel>
              <FormInputField
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormLabel>
          </FormGroup>
          <FormGroup>
            <FormLabel>
              <FormInputField
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormLabel>
          </FormGroup>
          <FormGroup>
            <FormLabel>
              <FormInputArea
                type="text"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormLabel>
          </FormGroup>
          <FormSubmitButton type="submit">Send Message</FormSubmitButton>
        </ContactForm>
        <ContactDetails>
          <ContactImage />
          <DetailsBox>
            <Para>
              Email:{" "}
              <ExternalRedirect to="mailto:vasudeveloper001@gmail.com">
                vasudeveloper001@gmail.com
              </ExternalRedirect>
            </Para>
            <Para>
              Twitter:{" "}
              <ExternalRedirect to="https://twitter.com/saudev001">
                @saudev001
              </ExternalRedirect>
            </Para>
            <Para>
              LinkedIn:{" "}
              <ExternalRedirect to="https://www.linkedin.com/in/saurabh-srivastava-b62330109/">
                saurabh-srivastava-b62330109/
              </ExternalRedirect>
            </Para>
            <Para>
              GitHub:{" "}
              <ExternalRedirect to="https://github.com/vasudeveloper001">
                @vasudeveloper001
              </ExternalRedirect>
            </Para>
          </DetailsBox>
        </ContactDetails>
      </ContactContainer>
    </SectionContact>
  );
};

export default ContactSection;
