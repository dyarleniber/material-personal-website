import { createGlobalStyle } from "styled-components";

import FiraSans from "../fonts/FiraSans-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FiraSans';
    font-style: normal;
    font-weight: 400;
    src: local('FiraSans'), url(${FiraSans}) format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body {
    font-family: 'FiraSans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.25s ease-in-out 0s;
  }
`;

export default GlobalStyle;
