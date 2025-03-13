
import React from "react";
import { motion } from "framer-motion";
import { LetterStatus } from "./types";
import { getBgColorClass } from "./utils";

interface LetterTileProps {
  letter: string;
  status?: LetterStatus;
  isCurrentGuess?: boolean;
}

export const LetterTile: React.FC<LetterTileProps> = ({ 
  letter, 
  status = "unused", 
  isCurrentGuess = false,
}) => {
  if (!letter && !isCurrentGuess) {
    return (
      <div
        className="flex items-center justify-center w-12 h-12 border border-white/20 rounded bg-black/30 shadow-inner"
      ></div>
    );
  }

  if (isCurrentGuess) {
    return (
      <div
        className={`flex items-center justify-center w-12 h-12 border ${letter ? "border-white/60" : "border-white/30"} rounded text-white font-bold text-2xl bg-black/60 shadow-inner`}
      >
        {letter}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ rotateX: -90 }}
      animate={{ rotateX: 0 }}
      transition={{ duration: 0.3 }}
      className={`${getBgColorClass(status)} flex items-center justify-center w-12 h-12 border border-white/30 rounded text-white font-bold text-2xl shadow-md`}
    >
      {letter}
    </motion.div>
  );
};
