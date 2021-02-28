import React from "react";
// styling
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import { Title } from "./styles";
import img from "./q1.jpg";

// components
import Input from "./components/Input";

function App() {
  const theme = {
    backgroundImage: `url(${img})`,
    firstColor: "yellow",
    secColor: "yellow",
    // backgroundColor: "#fcf5b3",
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
