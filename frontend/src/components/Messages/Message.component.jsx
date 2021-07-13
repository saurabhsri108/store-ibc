import styled from "styled-components"

const StyledMessage = styled.div`
  width: ${({ width }) => width || "80%"};
  margin: ${({ margin }) => margin || "2rem 0"};
  padding: 2rem;
  max-width: 1080px;
  font-size: 1.4rem;

  /** Error variant */
  background: ${({ variant }) =>
    variant === "error" && "hsla(0, 100%, 50%, 0.3)"};
  border: 1px solid ${({ variant }) => variant === "error" && "darkred"};
  color: ${({ variant }) => variant === "error" && "darkred"};

  /** Success variant */
  background: ${({ variant }) =>
    variant === "success" && "hsla(130, 100%, 50%, .3)"};
  border: 1px solid ${({ variant }) => variant === "success" && "darkgreen"};
  color: ${({ variant }) => variant === "success" && "darkgreen"};
`

const Message = ({ variant, children, ...otherProps }) => {
  return (
    <StyledMessage variant={variant} {...otherProps}>
      {children}
    </StyledMessage>
  )
}

export default Message
