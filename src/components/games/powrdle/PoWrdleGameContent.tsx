
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { GameBoard } from "./GameBoard";
import { HintSection } from "./HintSection";
import { GameStatusAlert } from "./GameStatusAlert";
import { GameKeyboard } from "./GameKeyboard";
import { GameState, LetterStatus } from "./types";
import { generateInitialState, getLetterStatus } from "./utils";

export const PoWrdleGameContent: React.FC = () => {
  // Use useState with a function to ensure it's only evaluated once during initial render
  const [gameState, setGameState] = useState<GameState>(() => generateInitialState());
  const { toast } = useToast();
  
  // Reset the game
  const resetGame = useCallback(() => {
    setGameState(generateInitialState());
  }, []);

  // Process a guess and provide feedback
  const submitGuess = useCallback(() => {
    if (gameState.currentAttempt.length !== 5) {
      toast({
        title: "Word too short",
        description: "Please enter a 5-letter word",
        variant: "destructive"
      });
      return;
    }

    const newAttempts = [...gameState.attempts, gameState.currentAttempt];
    const newUsedLetters = { ...gameState.usedLetters };
    
    // Update letter statuses
    [...gameState.currentAttempt].forEach((letter, index) => {
      const status = getLetterStatus(gameState.secretWord, letter, index);
      
      // Only upgrade the status (unused -> absent -> present -> correct)
      const currentStatus = newUsedLetters[letter];
      if (!currentStatus || 
         (currentStatus === "unused" && status !== "unused") ||
         (currentStatus === "absent" && (status === "present" || status === "correct")) ||
         (currentStatus === "present" && status === "correct")) {
        newUsedLetters[letter] = status;
      }
    });

    let newGameStatus = gameState.gameStatus;
    
    // Check if the player won
    if (gameState.currentAttempt === gameState.secretWord) {
      newGameStatus = "won";
      toast({
        title: "🎉 Congratulations!",
        description: "You've guessed the word correctly!",
      });
    } 
    // Check if the player lost (used all 3 attempts)
    else if (newAttempts.length >= 3) {
      newGameStatus = "lost";
      toast({
        title: "Game Over",
        description: `The word was ${gameState.secretWord}`,
        variant: "destructive"
      });
    }

    // Update game state
    setGameState({
      ...gameState,
      attempts: newAttempts,
      currentAttempt: "",
      gameStatus: newGameStatus,
      usedLetters: newUsedLetters
    });
  }, [gameState, toast]);

  // Toggle hint visibility
  const toggleHint = useCallback(() => {
    setGameState(prevState => ({
      ...prevState,
      showHint: !prevState.showHint
    }));
  }, []);

  // Handle keyboard input
  const handleKeyPress = useCallback((key: string) => {
    if (gameState.gameStatus !== "playing") return;

    if (key === "ENTER") {
      submitGuess();
    } else if (key === "BACKSPACE") {
      setGameState(prevState => ({
        ...prevState,
        currentAttempt: prevState.currentAttempt.slice(0, -1)
      }));
    } else if (/^[A-Z]$/.test(key) && gameState.currentAttempt.length < 5) {
      setGameState(prevState => ({
        ...prevState,
        currentAttempt: prevState.currentAttempt + key
      }));
    }
  }, [gameState, submitGuess]);

  // Handle physical keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleKeyPress("ENTER");
      } else if (e.key === "Backspace") {
        handleKeyPress("BACKSPACE");
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        handleKeyPress(e.key.toUpperCase());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyPress]);

  return (
    <Card className="bg-black/80 border-white/10 p-6 rounded-xl max-w-md mx-auto shadow-2xl">
      <div className="mb-6">
        <div className="text-center mb-2">
          <h2 className="text-white text-xl font-bold">PoWrdle</h2>
          <p className="text-mine-silver text-sm">
            Guess the 5-letter blockchain word in 3 tries
          </p>
        </div>
        
        {/* Hint section */}
        <HintSection 
          secretWord={gameState.secretWord}
          showHint={gameState.showHint}
          toggleHint={toggleHint}
        />
        
        {/* Game board */}
        <GameBoard gameState={gameState} />

        {/* Game result display */}
        <GameStatusAlert 
          gameStatus={gameState.gameStatus} 
          secretWord={gameState.secretWord} 
        />

        {/* Keyboard */}
        <GameKeyboard 
          usedLetters={gameState.usedLetters}
          onKeyPress={handleKeyPress}
          disabled={gameState.gameStatus !== "playing"}
        />

        {/* Reset button */}
        {gameState.gameStatus !== "playing" && (
          <div className="mt-4 text-center">
            <Button 
              onClick={resetGame}
              className="bg-gradient-to-r from-mine-orange to-mine-blue"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Play Again
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};
