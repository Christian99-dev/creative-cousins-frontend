import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import spacing from "./spacing";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: none;
        font-size: 100%;
        font-family: inherit;
        line-height: 1;
    }
    
    ${colors}
    ${spacing}
    
`;

export default GlobalStyle;
