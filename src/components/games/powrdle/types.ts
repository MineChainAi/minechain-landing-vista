
// Define common types used in the Wordle game
export type LetterStatus = "correct" | "present" | "absent" | "unused";
export type GameStatusType = "playing" | "won" | "lost";

export interface GameState {
  secretWord: string;
  attempts: string[];
  currentAttempt: string;
  gameStatus: GameStatusType;
  usedLetters: {
    [key: string]: LetterStatus;
  };
  showHint: boolean;
}
