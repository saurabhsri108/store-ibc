import styled from "styled-components"
import { motion } from "framer-motion"

const StyledMessage = styled.div`
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
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

const Message = ({ variant, children, animateit, initial }) => {
  return (
    <motion.div initial={initial} animate={animateit}>
      <StyledMessage variant={variant}>{children}</StyledMessage>
    </motion.div>
  )
}

Message.defaultProps = {
  width: "80%",
  margin: "2rem auto",
}

export default Message
