import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import styled from "styled-components"

const StyledSpan = styled.span`
  svg {
    height: 1.4rem;
    width: 1.4rem;
  }

  &:last-child {
    margin-left: 0.4rem;
  }
`

const Rating = ({ ratings, text }) => {
  return (
    <>
      <StyledSpan>
        {ratings >= 1 ? (
          <FaStar />
        ) : ratings >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </StyledSpan>
      <StyledSpan>
        {ratings >= 2 ? (
          <FaStar />
        ) : ratings >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </StyledSpan>
      <StyledSpan>
        {ratings >= 3 ? (
          <FaStar />
        ) : ratings >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </StyledSpan>
      <StyledSpan>
        {ratings >= 4 ? (
          <FaStar />
        ) : ratings >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </StyledSpan>
      <StyledSpan>
        {ratings >= 5 ? (
          <FaStar />
        ) : ratings >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </StyledSpan>
      <StyledSpan>{text && text}</StyledSpan>
    </>
  )
}

export default Rating
