import { css } from "styled-components";

export default css`
  :root {
    --pink: #c12aee;
    --orange: #fe6c03;
    --grey: #d2d2d2;
    --light-grey: #efefef;
    --grey-orange: #ece8e8;
    --grey-transparent: rgba(201, 201, 201, 0.6);
    --white-transparen: rgba(255, 255, 255, 0.5);
    --white-transparen-hard: rgba(255, 255, 255, 0.8);
    --orange-transparen: rgba(254, 108, 3, 0.5);
    --pink-filter: invert(44%) sepia(95%) saturate(5496%) hue-rotate(272deg)
      brightness(92%) contrast(107%);
    --white-filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(87deg)
      brightness(100%) contrast(96%);
  }
`;
