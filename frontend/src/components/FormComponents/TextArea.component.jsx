import styled from "styled-components"

const CustomTextArea = styled.textarea`
  height: 100px;
  font-size: var(--fs-searchbar);
  width: 100%;
  border: 1px solid var(--color-black-60);
  padding: 1.4rem;
  border: 1px solid var(--color-black-60);
  border-radius: 0.2rem;
`

const TextArea = ({ children, ...otherProps }) => {
  return <CustomTextArea {...otherProps}>{children}</CustomTextArea>
}

export default TextArea
