import styled from "styled-components"

const CustomInputField = styled.input`
  font-size: var(--fs-searchbar);
  width: 100%;
  border: 1px solid var(--color-black-60);
  padding: 1.4rem;
  border: 1px solid var(--color-black-60);
  border-radius: 0.2rem;
`
const InputField = ({ ...props }) => {
  return <CustomInputField {...props} />
}

export default InputField
