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
      <div>
        <Board gameSize={16} />
      </div>
      <div>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </FlexRow>
  );
}
