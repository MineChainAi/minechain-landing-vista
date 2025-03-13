
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RefreshCw, AlertCircle, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { KeyboardButton } from "./KeyboardButton";

// List of 5-letter blockchain-related words with their hints
const WORD_HINTS = {
  "BLOCK": "The foundation of a blockchain",
  "CHAIN": "Links digital records together",
  "TOKEN": "A digital asset on the blockchain",
  "MINER": "Validates transactions and secures the network",
  "NODES": "Network participants that maintain the blockchain",
  "CRYPT": "Related to securing data through encoding",
  "COINS": "Digital currency units",
  "STAKE": "Locking up tokens to support network operations",
  "LEDGE": "A record of financial transactions",
  "DEBIT": "A type of payment that reduces balance",
  "TRADE": "Exchange of assets between parties",
  "WHALES": "Entities holding large amounts of crypto",
  "NONCE": "Number used once in crypto mining",
  "SMART": "Self-executing contracts with code",
  "VAULT": "Secure storage for digital assets",
  "ASSET": "Item of value owned by an individual",
  "SHARD": "Database partitioning in blockchain",
  "PROOF": "Verification method in blockchain",
  "YIELD": "Returns generated from crypto investments",
  "FORKS": "Blockchain protocol upgrades or splits"
};

// Get a random word from our list
const getRandomWord = () => {
  const words = Object.keys(WORD_HINTS);
  return words[Math.floor(Math.random() * words.length)];
};

type LetterStatus = "correct" | "present" | "absent" | "unused";
type GameStatusType = "playing" | "won" | "lost";

interface GameState {
  secretWord: string;
  attempts: string[];
  currentAttempt: string;
  gameStatus: GameStatusType;
  usedLetters: {
    [key: string]: LetterStatus;
  };
  showHint: boolean;
}

// Function to generate the initial game state
const generateInitialState = (): GameState => {
  return {
    secretWord: getRandomWord(),
    attempts: [],
    currentAttempt: "",
    gameStatus: "playing" as GameStatusType,
    usedLetters: {},
    showHint: false
  };
};

export const PoWrdleGame = () => {
  const [gameState, setGameState] = useState<GameState>(generateInitialState());
  const { toast } = useToast();
  
  // Reset the game
  const resetGame = useCallback(() => {
    setGameState(generateInitialState());
  }, []);

  // Check a letter's status (correct, present, absent)
  const getLetterStatus = useCallback((letter: string, position: number, word: string): LetterStatus => {
    if (gameState.secretWord[position] === letter) {
      return "correct";
    } else if (gameState.secretWord.includes(letter)) {
      return "present";
    } else {
      return "absent";
    }
  }, [gameState.secretWord]);

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
      const status = getLetterStatus(letter, index, gameState.currentAttempt);
      
      // Only upgrade the status (unused -> absent -> present -> correct)
      const currentStatus = newUsedLetters[letter];
      if (!currentStatus || 
         (currentStatus === "unused" && status !== "unused") ||
         (currentStatus === "absent" && (status === "present" || status === "correct")) ||
         (currentStatus === "present" && status === "correct")) {
        newUsedLetters[letter] = status;
      }
    });

    let newGameStatus: GameStatusType = gameState.gameStatus;
    
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
  }, [gameState, getLetterStatus, toast]);

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
      setGameState({
        ...gameState,
        currentAttempt: gameState.currentAttempt.slice(0, -1)
      });
    } else if (/^[A-Z]$/.test(key) && gameState.currentAttempt.length < 5) {
      setGameState({
        ...gameState,
        currentAttempt: gameState.currentAttempt + key
      });
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

  // Character status background colors
  const getBgColor = (status: LetterStatus): string => {
    switch (status) {
      case "correct": return "bg-green-500";
      case "present": return "bg-yellow-500";
      case "absent": return "bg-gray-700";
      default: return "bg-black/40";
    }
  };

  // Get hint for current secret word
  const getHint = useCallback(() => {
    return WORD_HINTS[gameState.secretWord as keyof typeof WORD_HINTS] || "No hint available";
  }, [gameState.secretWord]);

  // Define the rows we need to display (3 attempts + current attempt)
  const guessRows = [...Array(3)].map((_, rowIndex) => {
    // If we have an attempt for this row, display it with appropriate colors
    if (rowIndex < gameState.attempts.length) {
      const attempt = gameState.attempts[rowIndex];
      return (
        <div key={rowIndex} className="flex justify-center gap-2 mb-2">
          {[...attempt].map((letter, colIndex) => {
            const status = getLetterStatus(letter, colIndex, attempt);
            return (
              <motion.div
                key={`${rowIndex}-${colIndex}`}
                initial={{ rotateX: -90 }}
                animate={{ rotateX: 0 }}
                transition={{ duration: 0.3, delay: colIndex * 0.1 }}
                className={`${getBgColor(status)} flex items-center justify-center w-12 h-12 border border-white/20 rounded text-white font-bold text-xl`}
              >
                {letter}
              </motion.div>
            );
          })}
        </div>
      );
    } 
    // If this is the current row (where user is typing)
    else if (rowIndex === gameState.attempts.length && gameState.gameStatus === "playing") {
      const currentAttempt = gameState.currentAttempt.padEnd(5, " ");
      return (
        <div key={rowIndex} className="flex justify-center gap-2 mb-2">
          {[...currentAttempt].map((letter, colIndex) => (
            <motion.div
              key={`current-${colIndex}`}
              initial={{ scale: letter !== " " ? 1.1 : 1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center justify-center w-12 h-12 border border-white/20 ${letter !== " " ? "border-white/40" : ""} rounded text-white font-bold text-xl bg-black/40`}
            >
              {letter !== " " ? letter : ""}
            </motion.div>
          ))}
        </div>
      );
    } 
    // Empty future rows
    else {
      return (
        <div key={rowIndex} className="flex justify-center gap-2 mb-2">
          {[...Array(5)].map((_, colIndex) => (
            <div
              key={`empty-${rowIndex}-${colIndex}`}
              className="flex items-center justify-center w-12 h-12 border border-white/10 rounded bg-black/20"
            ></div>
          ))}
        </div>
      );
    }
  });

  // Generate the keyboard layout
  const keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"]
  ];

  return (
    <Card className="bg-black/60 border-white/10 p-6 rounded-xl max-w-md mx-auto">
      <div className="mb-6">
        <div className="text-center mb-2">
          <h2 className="text-white text-xl font-bold">PoWrdle</h2>
          <p className="text-mine-silver text-sm">
            Guess the 5-letter blockchain word in 3 tries
          </p>
        </div>
        
        {/* Hint section */}
        <div className="my-4">
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: gameState.showHint ? 1 : 0,
              height: gameState.showHint ? "auto" : 0 
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-[#1A2138] p-3 rounded-lg border border-orange-500/30 mb-3">
              <p className="text-mine-silver text-sm">
                <span className="text-orange-400 font-medium">Hint:</span> {getHint()}
              </p>
            </div>
          </motion.div>
          
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleHint}
              className="bg-transparent border-orange-500/30 text-orange-400 hover:bg-orange-500/10 text-xs flex items-center gap-1"
            >
              <Lightbulb className="h-3 w-3" />
              {gameState.showHint ? "Hide Hint" : "Show Hint"}
            </Button>
          </div>
        </div>
        
        {/* Game board */}
        <div className="my-6">
          {guessRows}
        </div>

        {/* Game result display */}
        {gameState.gameStatus === "won" && (
          <Alert className="mb-4 bg-green-500/20 border-green-500/40">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Congratulations!</AlertTitle>
            <AlertDescription>
              You guessed {gameState.secretWord} correctly!
            </AlertDescription>
          </Alert>
        )}

        {gameState.gameStatus === "lost" && (
          <Alert className="mb-4 bg-red-500/20 border-red-500/40">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Game Over</AlertTitle>
            <AlertDescription>
              The word was {gameState.secretWord}
            </AlertDescription>
          </Alert>
        )}

        {/* Keyboard */}
        <div className="mt-4">
          {keyboard.map((row, rowIndex) => (
            <div key={`kb-row-${rowIndex}`} className="flex justify-center gap-1 mb-2">
              {row.map((key) => (
                <KeyboardButton
                  key={key}
                  letter={key}
                  status={gameState.usedLetters[key] || "unused"}
                  onClick={() => handleKeyPress(key)}
                  disabled={gameState.gameStatus !== "playing"}
                />
              ))}
            </div>
          ))}
        </div>

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
