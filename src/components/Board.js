import React from "react";
import styled from "@emotion/styled";
import Square from "./Square";
import GameStatus from "./GameStatus";
import { calculateWinner } from "../lib/helpers.js";

const BoardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: stretch;
  > * {
    background: lightgreen;
    flex-basis: ${props => 100 / Math.sqrt(props.size)}%;
  }
`;

export default function Board({ gameSize }) {
  const [squares, setSquares] = React.useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = React.useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner ${winner}`;
  } else {
    status = xIsNext ? "Next player: X" : "Next player: O";
  }
  console.log(calculateWinner(squares));

  function handleClick(index) {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    const squaresClone = [...squares];
    squaresClone[index] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);

    setSquares(squaresClone);
  }

  return (
    <div>
      <GameStatus>{status}</GameStatus>
      <BoardGrid size={gameSize}>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </BoardGrid>
    </div>
  );
}
