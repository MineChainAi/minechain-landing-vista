
import React from "react";
import { LetterTile } from "./LetterTile";
import { LetterStatus } from "./types";
import { getLetterStatus } from "./utils";

interface GuessRowProps {
  attempt?: string;
  isCurrentAttempt: boolean;
  rowIndex: number;
  secretWord: string;
  currentAttempt?: string;
}

export const GuessRow: React.FC<GuessRowProps> = ({ 
  attempt, 
  isCurrentAttempt, 
  rowIndex,
  secretWord,
  currentAttempt = ""
}) => {
  // If we have a completed attempt
  if (attempt) {
    return (
      <div className="flex justify-center gap-2 mb-2">
        {Array.from(attempt).map((letter, colIndex) => {
          const status = getLetterStatus(secretWord, letter, colIndex);
          return (
            <LetterTile 
              key={`${rowIndex}-${colIndex}`} 
              letter={letter} 
              status={status} 
            />
          );
        })}
      </div>
    );
  }
  
  // If this is the current row (where user is typing)
  if (isCurrentAttempt) {
    const currentLetters = currentAttempt.split('');
    const emptySpaces = Array(5 - currentLetters.length).fill('');
    const displayLetters = [...currentLetters, ...emptySpaces];
    
    return (
      <div className="flex justify-center gap-2 mb-2">
        {displayLetters.map((letter, colIndex) => (
          <LetterTile
            key={`current-${colIndex}`}
            letter={letter}
            status="unused"
            isCurrentGuess={true}
          />
        ))}
      </div>
    );
  }
  
  // Empty future rows
  return (
    <div className="flex justify-center gap-2 mb-2">
      {Array(5).fill(null).map((_, colIndex) => (
        <LetterTile
          key={`empty-${rowIndex}-${colIndex}`}
          letter=""
          status="unused"
        />
      ))}
    </div>
  );
};
