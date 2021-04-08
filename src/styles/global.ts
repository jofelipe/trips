import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #ed1844;
    --background: #222;
    --text: #ddd;
    --container: 100rem;
    --small: 1.2rem;
    --medium: 2.4rem;
    --large: 3.2rem;
    --extra-large: 6.4rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background: var(--background);
    color: var(--text);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  p {
    font-size: 2rem;
    line-height: var(--large);
  }

  a {
    color: var(--primary);
  }
`;

export default GlobalStyles;
