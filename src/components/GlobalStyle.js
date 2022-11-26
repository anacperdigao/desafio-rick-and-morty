import {createGlobalStyle} from 'styled-components';
import { bgDarkGreen } from './UI/colorVar';



export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
    background-color: ${bgDarkGreen};
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
}
`;

