import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-family: Arial, Helvetica, sans-serif;
  background-color: #000;
}

body{
  height: 100vh;
  width: 100vw;
}

`;
