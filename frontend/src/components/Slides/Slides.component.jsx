import { useState } from "react"
import styled from "styled-components"
import * as SingleProductStyle from "../Product/SingleProduct/SingleProduct.styles"

const StyledSlides = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.4rem;

  img {
    cursor: pointer;
    min-width: 4.8rem;
    border: 1px solid var(--color-black-10);
    border-radius: 0.2rem;
    padding: 0.4rem;
    opacity: 0.3;
    transition: opacity 300ms ease;

    &:hover,
    &:focus,
    &:active {
      opacity: 1;
      box-shadow: 1px 1px 4px black;
    }

    &.active {
      opacity: 1;
    }
  }
`

const Slides = ({ images, children }) => {
  const [chosenImageId, setChosenImageId] = useState(images[0]._id)

  const chooseImage = (id) => {
    setChosenImageId(id)
  }

  return (
    <SingleProductStyle.ImageContainer>
      <StyledSlides>
        {images?.map((image) => (
          <SingleProductStyle.Image
            key={image._id}
            src={image.image}
            alt={image.alt}
            className={chosenImageId === image._id ? "active" : ""}
            onMouseOver={() => chooseImage(image._id)}
            onClick={() => chooseImage(image._id)}
          />
        ))}
      </StyledSlides>
      <SingleProductStyle.Image
        src={images.find((i) => i._id === chosenImageId).image}
        alt={images.find((i) => i._id === chosenImageId).alt}
      />
    </SingleProductStyle.ImageContainer>
  )
}

export default Slides
