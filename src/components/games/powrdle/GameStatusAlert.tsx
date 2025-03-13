
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { GameStatusType } from "./types";

interface GameStatusAlertProps {
  gameStatus: GameStatusType;
  secretWord: string;
}

export const GameStatusAlert: React.FC<GameStatusAlertProps> = ({ gameStatus, secretWord }) => {
  if (gameStatus === "playing") {
    return null;
  }

  if (gameStatus === "won") {
    return (
      <Alert className="mb-4 bg-green-500/20 border-green-500/40">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Congratulations!</AlertTitle>
        <AlertDescription>
          You guessed {secretWord} correctly!
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert className="mb-4 bg-red-500/20 border-red-500/40">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Game Over</AlertTitle>
      <AlertDescription>
        The word was {secretWord}
      </AlertDescription>
    </Alert>
  );
};
