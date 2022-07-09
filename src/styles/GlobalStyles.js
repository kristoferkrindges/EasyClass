import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    #root {
        height: 100%;
    }
    ul, li {
        list-style: none;
    }
    body {
        /* background-color: #E8E8E8; */
        background: #4f4f4f;
  }
`;
