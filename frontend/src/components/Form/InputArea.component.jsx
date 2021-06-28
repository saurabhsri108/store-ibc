import styled from "styled-components";

const StyledTextArea = styled.textarea`
  font-size: var(--fs-searchbar);
  width: 100%;
  border: none;
  outline: none;
  padding: 1rem;
  margin: 0px;
  height: 100%;
`;

const InputArea = ({ children, ...props }) => {
  return <StyledTextArea {...props}>{children}</StyledTextArea>;
};

export default InputArea;
