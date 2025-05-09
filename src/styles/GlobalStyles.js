// styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/inter"; // Defaults to weight 400

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: auto;
    overflow-y: auto;
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
  }







  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    
  }
`;
