
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { PoWrdleGame } from "../games/PoWrdleGame";
import { GameIntroduction } from "./GameIntroduction";
import { useIsMobile } from "@/hooks/use-mobile";

export const GameSection = () => {
  const [isActive, setIsActive] = useState(true); // Keep game active by default
  const isMobile = useIsMobile();

  // Ensure game is activated when component mounts
  useEffect(() => {
    if (!isActive) {
      setIsActive(true);
    }
  }, [isActive]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-4 mb-12 px-4 sm:px-0"
    >
      <GameIntroduction />
      {isActive && (
        <motion.div 
          className="mx-auto transform origin-top"
          style={{ maxWidth: isMobile ? "100%" : "40rem" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10">
            <PoWrdleGame />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
