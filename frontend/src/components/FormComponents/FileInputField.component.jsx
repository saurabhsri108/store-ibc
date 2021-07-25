import styled from "styled-components"
import Label from "./Label.component"

const StyledFileLabel = styled(Label)`
  cursor: pointer;
  margin-top: 0.5rem;
  background-color: var(--color-white-100);
  border: 1px solid hsla(0, 0%, 0%, 0.2);
  font-weight: 400;
  width: max-content;
  padding: 1rem;

  &:hover,
  &:active,
  &:focus {
    background-color: hsla(0, 0%, 90%, 0.6);
  }
`

const StyledFileInput = styled.input`
  display: none;
`

const FileInputField = ({ children, ...otherProps }) => {
  return (
    <StyledFileLabel htmlFor={otherProps.id}>
      {otherProps.labelText}
      <StyledFileInput {...otherProps}>{children}</StyledFileInput>
    </StyledFileLabel>
  )
}

export default FileInputField
