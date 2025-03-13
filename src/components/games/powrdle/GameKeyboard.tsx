
import React from "react";
import { KeyboardButton } from "../KeyboardButton";
import { KEYBOARD_LAYOUT } from "./constants";
import { LetterStatus } from "./types";

interface GameKeyboardProps {
  usedLetters: { [key: string]: LetterStatus };
  onKeyPress: (key: string) => void;
  disabled: boolean;
}

export const GameKeyboard: React.FC<GameKeyboardProps> = ({ 
  usedLetters, 
  onKeyPress, 
  disabled 
}) => {
  return (
    <div className="mt-4">
      {KEYBOARD_LAYOUT.map((row, rowIndex) => (
        <div key={`kb-row-${rowIndex}`} className="flex justify-center gap-1 mb-2">
          {row.map((key) => (
            <KeyboardButton
              key={key}
              letter={key}
              status={usedLetters[key] || "unused"}
              onClick={() => onKeyPress(key)}
              disabled={disabled}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
