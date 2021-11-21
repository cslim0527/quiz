import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'InfinitySans-RegularA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding: 40px;
    color: #2f2f2f;
    font-family: 'SBAggroB';
  }

  ol, ul, li {
    list-style-type: none;
  }

  input[type="text"] {
    height: 42px;
    padding: 6px;
  }

  button {
    font-family: 'SBAggroB';
    border: 0;
    padding: 6px;
    height: 42px;
    cursor: pointer;
    background-color: transparent;
  }

  textarea {
    font-family: 'InfinitySans-RegularA1';
  }

  .container {
    margin: 0 auto;
    max-width: 480px;
  }
  
`
export default GlobalStyles

