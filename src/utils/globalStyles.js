import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

   a{
    text-decoration: none;
   }

   .app{
    width: 90%;
    margin: auto;
    @media screen and (min-width: 768px) {
    width: 80%
  }
   }
`;

export default GlobalStyles;
