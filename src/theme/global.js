import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import spacing from "./spacing";
import font from "./font";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: none;
        font-size: 100%;
        font-family: "corbel";
        line-height: 1;
    }
    
    ${colors}
    ${spacing}
    ${font}
    
`;

export default GlobalStyle;
