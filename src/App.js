import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

const initMatrix = [];

function App() {
  const [matrix, setMatrix] = useState(initMatrix);
  const [matrixSize, setMatrixSize] = useState(3);
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [setC, setSetC] = useState(null);
  const [setR, setSetR] = useState(null);
  const [winner, setWinner] = useState(false);
  const [reset, setReset] = useState(false);
  useEffect(() => {
    setWinner(false);
    setSetC(null);
    setSetR(null);
    const row = new Array(matrixSize).fill(null);
    const tempMatrix = [];

    for (let i = 0; i < matrixSize; i++) {
      tempMatrix.push([...row]);
    }
    setMatrix(tempMatrix);
  }, [reset]);

  const squareClick = (r, c) => {
    if (!matrix[r][c] && !winner) {
      setSetC(c);
      setSetR(r);
      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setCurrentPlayer(nextPlayer);
      const matrixCopy = [...matrix];
      matrixCopy[r][c] = nextPlayer;
      setMatrix(matrixCopy);
    }
  };

  const isWinner = () => {
    let vertical = true;
    let horizontal = true;
    let d1 = true;
    let d2 = true;

    if (setC === null || setR === null) {
      return;
    }

    for (let i = 0; i < matrixSize; i++) {
      if (matrix[i][setC] !== currentPlayer) {
        vertical = false;
      }
      if (matrix[setR][i] !== currentPlayer) {
        horizontal = false;
      }
      if (matrix[i][i] !== currentPlayer) {
        d1 = false;
      }
      if (matrix[i][matrixSize - i - 1] !== currentPlayer) {
        d2 = false;
      }
    }

    if (vertical || horizontal || d1 || d2) {
      setWinner(true);
    }
  };

  useEffect(() => {
    if (!winner) {
      isWinner();
    }
  });

  const resetGame = () => {
    setReset(!reset);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          {matrix.map((val, c) => (
            <div key={c} className='c'>
              {val.map((val1, r) => (
                <div
                  key={r}
                  onClick={() => {
                    squareClick(r, c);
                  }}
                  className='r'
                >
                  {matrix[r][c]}
                </div>
              ))}
            </div>
          ))}
        </div>
        <h2>{winner ? `Player ${currentPlayer} is the winner!!` : ''}</h2>
        <button onClick={resetGame}>RESET</button>
      </header>
    </div>
  );
}

export default App;
