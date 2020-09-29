import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #EAECF7;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    color: #1F1F4B;
  }

  html {
    /* 1rem = 10px */
    font-size: 62.5%;
  }

  #root {
    width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
  }

  button {
    cursor: pointer;
  }
`;
