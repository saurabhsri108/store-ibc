import styled from "styled-components";

const StyledInput = styled.input`
  font-size: var(--fs-searchbar);
  width: 100%;
  border: none;
  outline: none;
  padding: 1rem;
`;

const InputField = ({ children, ...props }) => {
  return <StyledInput {...props}>{children}</StyledInput>;
};

export default InputField;
