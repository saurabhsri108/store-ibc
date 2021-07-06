import {
  ErrorContainer,
  ErrorSection,
  ErrorHeading,
  ErrorPara,
  ErrorButton,
  ErrorImage,
} from "./Error.styles"

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorSection>
        <ErrorHeading>Page not found</ErrorHeading>
        <ErrorPara>
          It seems the path you entered is wrong and you are lost! Click the
          link button below to go back to products listing
        </ErrorPara>
        <ErrorButton>Browse Products</ErrorButton>
      </ErrorSection>
      <ErrorImage />
    </ErrorContainer>
  )
}

export default Error
