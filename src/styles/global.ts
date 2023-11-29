import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  :focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Inter", sans-serif;
    font-size: 1.6rem;
    background: ${theme.colors["gray-600"]};
    height: 100vh;
    width: 100vw;
  }

  ul,
  li {
    list-style: none;
  }
`}
`;

export default GlobalStyle;
