import React, { useState } from "react";

const RandomNumberGame = () => {
  const [sumPlayer1, setSumPlayer1] = useState(0);
  const [sumPlayer2, setSumPlayer2] = useState(0);
  const [resultPlayer1, setResultPlayer1] = useState("");
  const [resultPlayer2, setResultPlayer2] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const generateRandomNumber = () => {
    if (resultPlayer1 || resultPlayer2) {
      resetGame();
      return;
    }

    const randomNumber = Math.floor(Math.random() * 15) + 1;

    if (currentPlayer === 1) {
      setSumPlayer1(sumPlayer1 + randomNumber);
      if (sumPlayer1 + randomNumber >= 21) {
        setResultPlayer1("Game Over. The sum exceeds 21. Player 2 wins!");
      } else {
        setCurrentPlayer(2);
      }
    } else if (currentPlayer === 2) {
      setSumPlayer2(sumPlayer2 + randomNumber);
      if (sumPlayer2 + randomNumber >= 21) {
        setResultPlayer2("Game Over. The sum exceeds 21. Player 1 wins!");
      } else {
        setCurrentPlayer(1);
      }
    }
  };

  const resetGame = () => {
    setSumPlayer1(0);
    setSumPlayer2(0);
    setResultPlayer1("");
    setResultPlayer2("");
    setCurrentPlayer(1);
  };

  return (
    <div>
      <h1>Random Number Game</h1>

      <div>
        <h2>Player 1</h2>
        <div>Sum: {sumPlayer1}</div>
        <div>{resultPlayer1}</div>
      </div>

      <div>
        <h2>Player 2</h2>
        <div>Sum: {sumPlayer2}</div>
        <div>{resultPlayer2}</div>
      </div>

      <button onClick={generateRandomNumber}>Generate Number</button>
      {resultPlayer1 || resultPlayer2 ? (
        <div>
          <h2>Winner</h2>
          <div>{resultPlayer1 || resultPlayer2}</div>
        </div>
      ) : null}
    </div>
  );
};

export default RandomNumberGame;
