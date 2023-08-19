import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import spacing from "./spacing";
import font from "./font";
import transition from "./transition";

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
    ${transition}
    
`;

export default GlobalStyle;
