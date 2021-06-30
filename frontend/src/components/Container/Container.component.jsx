import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  width: 80%;
  margin: auto;
  padding: 2rem 0;
  gap: 2rem;
  max-width: 1080px;

  @media screen and (min-width: 60rem) {
    width: 90%;
  }
`;

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
