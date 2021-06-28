import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  width: 100%;
  padding: 2rem 1rem;
`;

const Form = ({ children, ...props }) => {
  return <StyledForm {...props}>{children}</StyledForm>;
};

export default Form;
