
import React from "react";
import { motion } from "framer-motion";
import { LetterStatus } from "./types";
import { getBgColorClass } from "./utils";

interface LetterTileProps {
  letter: string;
  status?: LetterStatus;
  isCurrentGuess?: boolean;
  isEmpty?: boolean;
  index?: number;
}

export const LetterTile: React.FC<LetterTileProps> = ({ 
  letter, 
  status = "unused", 
  isCurrentGuess = false,
  isEmpty = false,
  index = 0
}) => {
  if (isEmpty) {
    return (
      <div
        className="flex items-center justify-center w-12 h-12 border border-white/10 rounded bg-black/30"
      ></div>
    );
  }

  if (isCurrentGuess) {
    return (
      <motion.div
        initial={{ scale: letter !== " " ? 1.1 : 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className={`flex items-center justify-center w-12 h-12 border ${letter !== " " ? "border-white/50" : "border-white/20"} rounded text-white font-bold text-2xl bg-black/50 shadow-inner`}
      >
        {letter !== " " ? letter : ""}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ rotateX: -90 }}
      animate={{ rotateX: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`${getBgColorClass(status)} flex items-center justify-center w-12 h-12 border border-white/20 rounded text-white font-bold text-2xl shadow-md`}
    >
      {letter}
    </motion.div>
  );
};
