import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  width: 80%;
  margin: auto;
  padding: 2rem 0;
  gap: 2rem;
`;

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
