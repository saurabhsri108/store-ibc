import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 2rem;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  letter-spacing: 0.1rem;
  font-size: 1.2rem;
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
