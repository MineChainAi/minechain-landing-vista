
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { PoWrdleGame } from "../games/PoWrdleGame";
import { GameIntroduction } from "./GameIntroduction";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sparkles } from "lucide-react";

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
          style={{ maxWidth: isMobile ? "100%" : "32rem" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="relative z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-mine-orange to-mine-blue px-4 py-1 rounded-full z-20 flex items-center gap-2 shadow-lg">
              <Sparkles size={16} className="text-white" />
              <span className="text-white text-sm font-bold">Play Now!</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-mine-orange/20 to-mine-blue/20 rounded-xl blur-md z-0"></div>
            <PoWrdleGame />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};
