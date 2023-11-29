import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      Ignite ToDo List
    </ThemeProvider>
  );
}

export default App;
