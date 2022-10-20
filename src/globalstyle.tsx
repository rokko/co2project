import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif, serif;
    height: 100%;
    background: #96c93d; /* fallback for old browsers */
    background: -webkit-linear-gradient(#4CFFAE, #ffffff); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(#4CFFAE, #ffffff);
  }
  *{
    box-sizing: border-box;
  }
  
  
`;

export default GlobalStyle;

export {};
