import { css } from "styled-components";
import { responsiveCSSauto } from "../services/Style/responsive";

export default css`
  :root {
        ${responsiveCSSauto("--space-1", 15)}
        ${responsiveCSSauto("--space-2", 20)} 
        ${responsiveCSSauto("--space-3", 40)} 
        ${responsiveCSSauto("--space-4", 50)} 
        ${responsiveCSSauto("--space-5", 80)} 
        ${responsiveCSSauto("--space-6", 100)} 
        ${responsiveCSSauto("--space-7", 150)} 
        ${responsiveCSSauto("--space-8", 200)}
        ${responsiveCSSauto("--space-9", 300)} 
        ${responsiveCSSauto("--space-10", 500)}
  }
`;
