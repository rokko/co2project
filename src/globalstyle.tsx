import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif, serif;
    height: 100%;
    background: #96c93d; /* fallback for old browsers */
    background: -webkit-linear-gradient(#00b09b, #96c93d); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(#00b09b, #96c93d);
    padding:3rem;
  }
  *{
    box-sizing: border-box;
  }
  
`;

export default GlobalStyle;

export{}