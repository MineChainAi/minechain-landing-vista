
import React from "react";
import { Delete } from "lucide-react";

type LetterStatus = "correct" | "present" | "absent" | "unused";

interface KeyboardButtonProps {
  letter: string;
  status: LetterStatus;
  onClick: () => void;
  disabled: boolean;
}

export const KeyboardButton: React.FC<KeyboardButtonProps> = ({
  letter,
  status,
  onClick,
  disabled
}) => {
  // Get background color based on status
  const getBgColor = (status: LetterStatus): string => {
    switch (status) {
      case "correct": return "bg-green-600 hover:bg-green-700";
      case "present": return "bg-yellow-500 hover:bg-yellow-600";
      case "absent": return "bg-gray-800 hover:bg-gray-900";
      default: return "bg-gray-700 hover:bg-gray-800";
    }
  };

  // Calculate button width based on special keys
  const getWidth = (): string => {
    if (letter === "ENTER") return "w-16";
    if (letter === "BACKSPACE") return "w-16";
    return "w-8";
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${getBgColor(status)} ${getWidth()} h-10 rounded text-white font-medium text-sm flex items-center justify-center transition-colors ${disabled ? 'opacity-50' : ''} shadow-md`}
    >
      {letter === "BACKSPACE" ? <Delete size={16} /> : letter}
    </button>
  );
};
