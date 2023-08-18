import { css } from "styled-components";
import responsiveCSS from "../services/responsiveCSS";

export default css`
    :root{
        --pink: #C12AEE;
        --orange: #FE6C03;
        --grey: #D2D2D2;
        --light-grey: #EFEFEF;
        --grey-orange: #ECE8E8;

        ${responsiveCSS("--test", 100, 80, 50, 30, 10)}
    }
`;