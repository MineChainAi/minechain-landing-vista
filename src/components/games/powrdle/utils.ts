
import { WORD_HINTS } from "./constants";
import { GameState, LetterStatus } from "./types";

// Get a random word from our list
export const getRandomWord = () => {
  const words = Object.keys(WORD_HINTS);
  return words[Math.floor(Math.random() * words.length)];
};

// Function to generate the initial game state
export const generateInitialState = (): GameState => {
  return {
    secretWord: getRandomWord(),
    attempts: [],
    currentAttempt: "",
    gameStatus: "playing",
    usedLetters: {},
    showHint: false
  };
};

// Check a letter's status (correct, present, absent)
export const getLetterStatus = (secretWord: string, letter: string, position: number): LetterStatus => {
  if (secretWord[position] === letter) {
    return "correct";
  } else if (secretWord.includes(letter)) {
    return "present";
  } else {
    return "absent";
  }
};

// Get hint for the given secret word
export const getHint = (secretWord: string): string => {
  return WORD_HINTS[secretWord as keyof typeof WORD_HINTS] || "No hint available";
};

// Get background color class based on letter status
export const getBgColorClass = (status: LetterStatus): string => {
  switch (status) {
    case "correct": return "bg-green-600";
    case "present": return "bg-yellow-500";
    case "absent": return "bg-gray-800";
    default: return "bg-black/60";
  }
};
