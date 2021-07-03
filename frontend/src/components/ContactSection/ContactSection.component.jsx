import { useState } from "react"
import { InputField, InputGroup, Label, TextArea } from "../FormComponents"
import {
  SectionContact,
  ContactContainer,
  ContactHeading,
  ContactForm,
  FormSubmitButton,
  ContactDetails,
  DetailsBox,
  ExternalLink,
  DetailsInfo,
} from "./ContactSection.styles"

const ContactSection = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const submitContactHandler = (e) => {
    e.preventDefault()
  }

  return (
    <SectionContact id="contact">
      <ContactContainer>
        <ContactDetails>
          <ContactHeading>Contact Us</ContactHeading>
          <ContactForm onSubmit={submitContactHandler}>
            <InputGroup>
              <Label>Name</Label>
              <InputField
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label>Email</Label>
              <InputField
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label>Message</Label>
              <TextArea
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <FormSubmitButton type="submit">Send Message</FormSubmitButton>
            </InputGroup>
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
            YouTube:
            <ExternalLink to="https://www.youtube.com/channel/UCHBONOEjtMti0oRA_qWADYA">
              IBCoder | Tech Content Channel
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
  )
}

export default ContactSection
