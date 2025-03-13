
import { motion } from "framer-motion";
import React from "react";
import { FishcakeLogo } from "./FishcakeLogo";

export const FishcakeHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center max-w-3xl mx-auto"
    >
      <FishcakeLogo />
      
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
        Welcome to <motion.span 
          className="bg-gradient-to-r from-[#F97316] to-[#F59E0B] bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ['0% center', '100% center', '0% center'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >Fishcake</motion.span>
      </h1>
      <motion.p 
        className="text-lg text-mine-silver mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        The ultimate blockchain-themed word challenge platform
      </motion.p>
    </motion.div>
  );
};
