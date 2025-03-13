
import React from "react";
import { GuessRow } from "./GuessRow";
import { GameState } from "./types";

interface GameBoardProps {
  gameState: GameState;
}

export const GameBoard: React.FC<GameBoardProps> = ({ gameState }) => {
  return (
    <div className="my-6 p-4 bg-black/60 rounded-lg shadow-inner border border-white/10">
      {Array(3).fill(null).map((_, rowIndex) => {
        // Check if this row is for a completed attempt
        const isCompletedAttempt = rowIndex < gameState.attempts.length;
        
        // Check if this row is for the current attempt
        const isCurrentAttempt = rowIndex === gameState.attempts.length && gameState.gameStatus === "playing";
        
        return (
          <GuessRow
            key={`row-${rowIndex}`}
            attempt={isCompletedAttempt ? gameState.attempts[rowIndex] : undefined}
            isCurrentAttempt={isCurrentAttempt}
            rowIndex={rowIndex}
            secretWord={gameState.secretWord}
            currentAttempt={isCurrentAttempt ? gameState.currentAttempt : ""}
          />
        );
      })}
    </div>
  );
};
