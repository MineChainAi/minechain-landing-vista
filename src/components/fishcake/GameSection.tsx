
import { motion } from "framer-motion";
import React from "react";
import { PoWrdleGame } from "../games/PoWrdleGame";
import { GameIntroduction } from "./GameIntroduction";

export const GameSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-4 mb-12"
    >
      <GameIntroduction />
      <div className="max-w-2xl mx-auto scale-110 transform origin-top">
        <PoWrdleGame />
      </div>
    </motion.div>
  );
};
