
import { motion } from "framer-motion";
import React from "react";

export const FishcakeLogo = () => {
  return (
    <div className="flex justify-center mb-6">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="relative w-32 h-32"
        whileHover={{ 
          scale: 1.05,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#F97316]/30 to-[#0EA5E9]/30 rounded-full blur-xl opacity-70"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <img
          src="/lovable-uploads/8037cb9d-08bc-4fb1-a49b-bf1eeb793a8e.png"
          alt="Fishcake Logo"
          className="w-full h-full object-contain relative z-10"
        />
      </motion.div>
    </div>
  );
};
