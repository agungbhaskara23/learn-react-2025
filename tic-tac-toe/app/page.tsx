"use client";

import { useState } from 'react'
import Square from "./components/Square";

function Board({xIsNext, squares, onPlay}) {
  
  function handleClick(i){
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O'; //kotak akan terisi X atau O tergantung kondisi variabel xIsNext, jika xIsNext = True maka isian X, kalau salah maka isian O

    onPlay(nextSquares)
  }

  function calculateWinner(squares) {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8], //vertikal
      [0,3,6],[1,4,7],[2,5,8], //horizontal
      [0,4,8],[2,4,6] //diagonal
    ]
    for(let i = 0; i < lines.length; i++){
      // const a = lines[i][0];
      // const b = lines[i][1];
      // const c = lines[i][2];
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      } 
    }
    return false;
  }

  const winner = calculateWinner(squares)
  const hasNoNull = squares.every(item => item !== null); // true jika tidak ada null
  
  let status = ''
  if (winner){
    status = 'Winner: ' + winner;
  } else if (hasNoNull){
    status = 'No one win!';
  } else {
    status = 'Next Player is: ' + (xIsNext ? 'X' : 'O');
  };

  return (
    <>
      <div className="status">
        {status}
      </div>
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}

export default function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    let description = ''
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    
    return (
      <li key ={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  function resetGame(){
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <button className="button-reset" onClick={resetGame}>Reset Game</button>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}