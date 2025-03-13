
import React from "react";
import { LetterTile } from "./LetterTile";
import { LetterStatus } from "./types";
import { getLetterStatus } from "./utils";

interface GuessRowProps {
  attempt?: string;
  isCurrentAttempt: boolean;
  rowIndex: number;
  secretWord: string;
}

export const GuessRow: React.FC<GuessRowProps> = ({ 
  attempt, 
  isCurrentAttempt, 
  rowIndex,
  secretWord
}) => {
  // If we have a completed attempt
  if (attempt) {
    return (
      <div key={rowIndex} className="flex justify-center gap-2 mb-2">
        {[...attempt].map((letter, colIndex) => {
          const status = getLetterStatus(secretWord, letter, colIndex);
          return (
            <LetterTile 
              key={`${rowIndex}-${colIndex}`} 
              letter={letter} 
              status={status} 
              index={colIndex}
            />
          );
        })}
      </div>
    );
  }
  
  // If this is the current row (where user is typing)
  if (isCurrentAttempt) {
    const currentAttempt = attempt || "";
    const paddedAttempt = currentAttempt.padEnd(5, " ");
    
    return (
      <div className="flex justify-center gap-2 mb-2">
        {[...paddedAttempt].map((letter, colIndex) => (
          <LetterTile
            key={`current-${colIndex}`}
            letter={letter}
            isCurrentGuess={true}
          />
        ))}
      </div>
    );
  }
  
  // Empty future rows
  return (
    <div className="flex justify-center gap-2 mb-2">
      {[...Array(5)].map((_, colIndex) => (
        <LetterTile
          key={`empty-${rowIndex}-${colIndex}`}
          letter=""
          isEmpty={true}
        />
      ))}
    </div>
  );
};
