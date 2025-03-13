
import { motion } from "framer-motion";
import React, { useState } from "react";
import { PoWrdleGame } from "../games/PoWrdleGame";
import { GameIntroduction } from "./GameIntroduction";

export const GameSection = () => {
  const [isActive] = useState(true); // Keep game active by default, remove unused setter

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-4 mb-12"
    >
      <GameIntroduction />
      {isActive && (
        <motion.div 
          className="max-w-4xl mx-auto transform origin-top"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <PoWrdleGame />
        </motion.div>
      )}
    </motion.div>
  );
};
