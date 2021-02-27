import React from "react";
// styling
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import { Title } from "./styles";

// components
import Input from "./components/Input";

function App() {
  const theme = {
    firstColor: "red",
    secColor: "yellow",
    backgroundColor: "#fcf5b3",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Title>Guessing Game</Title>
        <Input />
      </div>
    </ThemeProvider>
  );
}

export default App;
