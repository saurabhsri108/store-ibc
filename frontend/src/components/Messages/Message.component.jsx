import styled from "styled-components"

const StyledMessage = styled.div`
  width: 80%;
  margin: 2rem auto;
  padding: 2rem;
  max-width: 1080px;
  font-size: 1.4rem;
  background: ${({ variant }) =>
    variant === "error" && "hsla(0, 100%, 50%, 0.3)"};
  border: 1px solid ${({ variant }) => variant === "error" && "darkred"};
  color: ${({ variant }) => variant === "error" && "darkred"};
`

const Message = ({ variant, children }) => {
  return <StyledMessage variant={variant}>{children}</StyledMessage>
}

Message.defaultProps = {
  variant: "error",
}

export default Message
