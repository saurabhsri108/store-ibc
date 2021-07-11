import { useState } from "react"
import axios from "axios"
import * as Component from "./ContactSection.styles"
import Message from "../Messages/Message.component"
import { API_URL } from "../../currentEnv"
import * as FormElement from "../FormComponents"

const ContactSection = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const submitContactHandler = async (e) => {
    e.preventDefault()
    const payload = { name, email, message }
    try {
      const { status, data } = await axios.post(
        `${API_URL}/api/v1/messages`,
        payload
      )
      if (status === 200) setSuccessMessage(data.message)
    } catch (error) {
      console.error(error.message)
      setErrorMessage(error.message)
    }
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <Component.SectionContact id="contact">
      <Component.ContactContainer>
        <Component.ContactDetails>
          <Component.ContactHeading>Contact Us</Component.ContactHeading>
          <Component.ContactForm onSubmit={submitContactHandler}>
            <FormElement.InputGroup>
              <FormElement.Label>Name</FormElement.Label>
              <FormElement.InputField
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormElement.InputGroup>
            <FormElement.InputGroup>
              <FormElement.Label>Email</FormElement.Label>
              <FormElement.InputField
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormElement.InputGroup>
            <FormElement.InputGroup>
              <FormElement.Label>Message</FormElement.Label>
              <FormElement.TextArea
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormElement.InputGroup>
            <FormElement.InputGroup>
              <Component.FormSubmitButton type="submit">
                Send Message
              </Component.FormSubmitButton>
            </FormElement.InputGroup>
          </Component.ContactForm>
          {errorMessage != null && (
            <Message variant="error" width="100%" margin="0">
              {errorMessage}
            </Message>
          )}
          {successMessage != null && (
            <Message variant="success" width="100%" margin="0">
              {successMessage}
            </Message>
          )}
        </Component.ContactDetails>
        <Component.DetailsBox>
          <Component.DetailsInfo>
            Email:
            <Component.ExternalLink to="mailto:vasudeveloper001@gmail.com">
              vasudeveloper001@gmail.com
            </Component.ExternalLink>
          </Component.DetailsInfo>
          <Component.DetailsInfo>
            YouTube:
            <Component.ExternalLink to="https://www.youtube.com/channel/UCHBONOEjtMti0oRA_qWADYA">
              IBCoder | Tech Content Channel
            </Component.ExternalLink>
          </Component.DetailsInfo>
          <Component.DetailsInfo>
            Twitter:
            <Component.ExternalLink to="https://twitter.com/saudev001">
              @saudev001
            </Component.ExternalLink>
          </Component.DetailsInfo>
          <Component.DetailsInfo>
            LinkedIn:
            <Component.ExternalLink to="https://www.linkedin.com/in/saurabh-srivastava-b62330109/">
              saurabh-srivastava-b62330109/
            </Component.ExternalLink>
          </Component.DetailsInfo>
          <Component.DetailsInfo>
            GitHub:
            <Component.ExternalLink to="https://github.com/vasudeveloper001">
              @vasudeveloper001
            </Component.ExternalLink>
          </Component.DetailsInfo>
        </Component.DetailsBox>
      </Component.ContactContainer>
    </Component.SectionContact>
  )
}

export default ContactSection
