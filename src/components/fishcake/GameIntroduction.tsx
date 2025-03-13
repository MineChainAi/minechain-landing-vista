
import { motion } from "framer-motion";
import React from "react";
import { Sparkles } from "lucide-react";

export const GameIntroduction = () => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto bg-gradient-to-r from-black/60 to-black/80 p-8 rounded-xl border border-[#F97316]/20 mb-8"
      whileHover={{ borderColor: "rgba(249, 115, 22, 0.4)", transition: { duration: 0.3 } }}
      animate={{ boxShadow: ["0 0 10px 0px rgba(249, 115, 22, 0.1)", "0 0 20px 0px rgba(249, 115, 22, 0.2)", "0 0 10px 0px rgba(249, 115, 22, 0.1)"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <h2 className="text-3xl font-bold text-white mb-3 flex items-center justify-center">
        <motion.span 
          className="text-[#F97316] flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-6 h-6 mr-2 text-yellow-400" />
          PoWrdle
        </motion.span>
      </h2>
      <p className="text-white text-center text-xl mb-4">The Blockchain Word Game</p>
      <motion.p 
        className="text-mine-silver mb-6 text-center italic text-lg"
        animate={{ 
          color: ['#94A3B8', '#F97316', '#94A3B8'] 
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🔥 Think you know crypto? Prove it. 🔥
      </motion.p>
      <p className="text-mine-silver mb-6 text-lg">
        Welcome to PoWrdle, the ultimate blockchain-themed word challenge powered by Fishcake.ai.
        You've got 3 tries to guess a 5-letter word straight from the world of crypto, mining, and Web3.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05, x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="inline-block w-5 h-5 bg-green-500 mr-2 rounded"></span>
          <span className="text-white">Green = Right letter, right place.</span>
        </motion.div>
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05, x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="inline-block w-5 h-5 bg-yellow-500 mr-2 rounded"></span>
          <span className="text-white">Yellow = Right letter, wrong place.</span>
        </motion.div>
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05, x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="inline-block w-5 h-5 bg-gray-700 mr-2 rounded"></span>
          <span className="text-white">Gray = Not in the word.</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
