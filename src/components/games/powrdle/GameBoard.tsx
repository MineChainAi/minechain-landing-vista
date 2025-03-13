
import React from "react";
import { GuessRow } from "./GuessRow";
import { GameState } from "./types";

interface GameBoardProps {
  gameState: GameState;
}

export const GameBoard: React.FC<GameBoardProps> = ({ gameState }) => {
  return (
    <div className="my-6 bg-black/80 p-6 rounded-xl border border-white/10 shadow-lg">
      {[...Array(3)].map((_, rowIndex) => (
        <GuessRow
          key={`row-${rowIndex}`}
          attempt={gameState.attempts[rowIndex]}
          isCurrentAttempt={rowIndex === gameState.attempts.length && gameState.gameStatus === "playing"}
          rowIndex={rowIndex}
          secretWord={gameState.secretWord}
        />
      ))}
    </div>
  );
};
