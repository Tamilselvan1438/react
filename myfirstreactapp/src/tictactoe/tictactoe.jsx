import React, { useState } from "react";
import "./tictactoe.css";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (i) => {
    if (board[i] || calculateWinner(board)) return;

    const newBoard = board.slice(); 
    newBoard[i] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const checkDraw = (squares) => {
    return squares.every(square => square !== null) && !calculateWinner(squares);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(!isXNext);
  };

  const status = calculateWinner(board)
    ? `Winner: ${calculateWinner(board)}`
    : checkDraw(board)
    ? "It's a draw!"
    : `Next player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="board">
        {board.map((item, i) => (
          <button className="square" key={i} onClick={() => handleClick(i)}>
            {item}
          </button>
        ))}
      </div>
      <button className="restart-button" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}

export default TicTacToe;
