
import React from "react";
import { GuessRow } from "./GuessRow";
import { GameState } from "./types";

interface GameBoardProps {
  gameState: GameState;
}

export const GameBoard: React.FC<GameBoardProps> = ({ gameState }) => {
  const { attempts, currentAttempt, secretWord } = gameState;
  
  return (
    <div className="mb-4 mt-3">
      {/* Completed attempts */}
      {attempts.map((attempt, index) => (
        <GuessRow 
          key={`attempt-${index}`}
          attempt={attempt}
          isCurrentAttempt={false}
          rowIndex={index}
          secretWord={secretWord}
        />
      ))}
      
      {/* Current attempt (where user is typing) */}
      {gameState.gameStatus === "playing" && (
        <GuessRow 
          isCurrentAttempt={true}
          rowIndex={attempts.length}
          secretWord={secretWord}
          currentAttempt={currentAttempt}
        />
      )}
      
      {/* Empty rows for remaining attempts */}
      {gameState.gameStatus === "playing" && [...Array(Math.max(0, 2 - attempts.length))].map((_, index) => (
        <GuessRow 
          key={`empty-${index}`}
          isCurrentAttempt={false}
          rowIndex={attempts.length + 1 + index}
          secretWord={secretWord}
        />
      ))}
    </div>
  );
};
