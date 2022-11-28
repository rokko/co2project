import { createGlobalStyle } from "styled-components";
import "../src/fonts/circularstd/CircularStd-Black.ttf";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.cdnfonts.com/css/circular-std');
html{scroll-behavior:smooth}

  body {
    margin: 0;
    font-family:  'Circular Std', sans-serif;
    height: 100%;
  }
  *{
    box-sizing: border-box;
  }


  
`;

export default GlobalStyle;

export {};
