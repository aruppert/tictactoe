import React from "react";
import styled from "@emotion/styled";
import Game from "./components/Game";
import GlobalStyles from "./components/GlobalStyles";

const Container = styled.div`
  text-align: center;
  justify-content: center;
  background-color: #282c34;
  min-height: 100vh;
  padding: 20px;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <h1>TicTacToe</h1>
      <Game />
    </Container>
  );
}

export default App;
