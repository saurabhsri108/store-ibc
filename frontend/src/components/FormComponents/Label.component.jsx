import styled from "styled-components"

const CustomLabel = styled.label`
  margin-bottom: 0.4rem;
  display: block;
  user-select: none;
`

const Label = ({ children, ...otherProps }) => {
  return <CustomLabel {...otherProps}>{children}</CustomLabel>
}

export default Label
