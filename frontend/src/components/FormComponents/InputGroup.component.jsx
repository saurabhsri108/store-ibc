import styled from "styled-components"

const CustomFormGroup = styled.div`
  width: 100%;
`

const InputGroup = ({ children, ...otherProps }) => {
  return <CustomFormGroup {...otherProps}>{children}</CustomFormGroup>
}

export default InputGroup
