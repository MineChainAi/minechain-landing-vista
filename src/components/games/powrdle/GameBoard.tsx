
import React from "react";
import { GuessRow } from "./GuessRow";
import { GameState } from "./types";

interface GameBoardProps {
  gameState: GameState;
}

export const GameBoard: React.FC<GameBoardProps> = ({ gameState }) => {
  // Create an array to represent all rows (both completed and future attempts)
  const rowsToRender = Array(3).fill(null);

  return (
    <div className="my-6">
      {rowsToRender.map((_, rowIndex) => (
        <GuessRow
          key={`row-${rowIndex}`}
          attempt={gameState.attempts[rowIndex]}
          isCurrentAttempt={rowIndex === gameState.attempts.length && gameState.gameStatus === "playing"}
          rowIndex={rowIndex}
          secretWord={gameState.secretWord}
          currentAttempt={rowIndex === gameState.attempts.length ? gameState.currentAttempt : ""}
        />
      ))}
    </div>
  );
};
