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
    border: 1px solid var(--color-black-10);
    border-radius: 0.2rem;
    padding: 0.4rem;
    opacity: ${({ active }) => (active ? "1" : "0.3")};
    transition: opacity 300ms ease-in-out;

    &:hover,
    &:focus,
    &:active {
      opacity: 1;
      box-shadow: 1px 1px 4px black;
    }
  }
`

const Slides = ({ images, children }) => {
  const [chosenImageId, setChosenImageId] = useState(images[0].id)

  const chooseImage = (id) => {
    setChosenImageId(id)
  }

  return (
    <SingleProductStyle.ImageContainer>
      <StyledSlides>
        {images.map((image) => (
          <SingleProductStyle.Image
            key={image.id}
            src={image.image}
            alt={image.title}
            active={chosenImageId === image.id ? true : false}
            onMouseOver={() => chooseImage(image.id)}
            onClick={() => chooseImage(image.id)}
          />
        ))}
      </StyledSlides>
      <SingleProductStyle.Image
        src={images[chosenImageId - 1].image}
        alt={images[chosenImageId - 1].title}
      />
    </SingleProductStyle.ImageContainer>
  )
}

export default Slides
