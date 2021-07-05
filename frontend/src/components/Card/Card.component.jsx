import styled from "styled-components"

const StyledCard = styled.div`
  display: grid;
  place-items: center;
  border: 1px solid var(--color-black-10);
  border-radius: 0.2rem;
  box-shadow: 1px 1px 4px var(--color-black-10);
  padding: 1rem;
  position: relative;
`

const Card = ({ children, ...otherProps }) => {
  return <StyledCard {...otherProps}>{children}</StyledCard>
}

export default Card
