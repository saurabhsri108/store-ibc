import styled, { keyframes } from "styled-components"

const spinner = keyframes`
    to {
        transform: rotate(360deg);
    }
`

const Loader = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;

  &::before {
    content: "";
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-top: 2px solid #07d;
    border-right: 2px solid #07d;
    animation: ${spinner} 0.6s linear infinite;
  }
`

export default Loader
