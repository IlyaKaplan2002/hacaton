import { createGlobalStyle } from 'styled-components';
import { modernNormalize } from 'styled-modern-normalize';

const GlobalStyles = createGlobalStyle`
    ${modernNormalize}

    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
        margin: 0;
        font-family: 'Actor', sans-serif;
        font-weight: 400;
        color: #000000;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    p {
      margin: 0;
      padding: 0;
    }

    button {
      background: none;
      border: none;
      margin: 0;
      padding: 0;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    h1, h2, h3 {
      margin: 0;
      padding: 0;
    }
    a {
      text-decoration: none;
    }
`;

export default GlobalStyles;
