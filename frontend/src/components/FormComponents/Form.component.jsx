import styled from "styled-components"

const StyledForm = styled.form`
  display: grid;
  gap: 1.4rem;
  font-size: var(--fs-searchbar);
  font-weight: bold;
  color: var(--color-black-60);
`

const Form = ({ children, ...otherProps }) => {
  return <StyledForm {...otherProps}>{children}</StyledForm>
}

export default Form
