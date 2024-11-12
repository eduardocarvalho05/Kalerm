// styles/Global.styled.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'); */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  body {
    font-family: 'Poppins', sans-serif;
    overflow-y: scroll; /* Garante que a barra de rolagem vertical sempre estará presente */
    overflow-x: hidden; /* Evita rolagem horizontal */
  }
`;
