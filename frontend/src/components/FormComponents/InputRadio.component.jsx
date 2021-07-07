import { Label } from "."
import styled from "styled-components"

const StyledRadio = styled.input`
  box-sizing: border-box;
  padding: 0;
  margin-right: 1rem;
  width: 16px;
  height: 16px;
  cursor: pointer;
`

const StyledLabel = styled(Label)`
  display: inline-flex;
  cursor: pointer;
  user-select: none;
`

const InputRadio = ({ children, ...otherProps }) => {
  return (
    <StyledLabel>
      <StyledRadio type="radio" {...otherProps} />
      {children}
    </StyledLabel>
  )
}

export default InputRadio
