import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
// import { fonts } from "./font.styles";
import { variables } from "./variables.styles";
import { main } from "./main.styles";

const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${variables}
    ${main}
`;

export default GlobalStyle;
