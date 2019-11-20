import React from "react";
import styled from "@emotion/styled";
import Board from "./Board";

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Game() {
  return (
    <FlexRow>
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </FlexRow>
  );
}
