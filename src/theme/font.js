import { css } from "styled-components";
import { responsiveCSS } from "../services/Style/responsiveCSS";

export default css`
  :root {
    ${responsiveCSS("--fs-4", 22, 20, 18, 17, 16)}
    ${responsiveCSS("--fs-3", 27, 25, 23, 22, 21)}
    ${responsiveCSS("--fs-2", 29, 27, 25, 24, 23)}
    ${responsiveCSS("--fs-1", 32, 30, 28, 27, 26)}
  }
`;
