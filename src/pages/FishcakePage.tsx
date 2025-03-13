
import React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { PoWrdleGame } from "@/components/games/PoWrdleGame";

const FishcakePage = () => {
  return (
    <>
      <Helmet>
        <title>Fishcake - MineChain</title>
        <meta name="description" content="Play PoWrdle, a blockchain word game on MineChain's Fishcake platform." />
      </Helmet>
      <div className="min-h-screen bg-mine-dark">
        <Navbar />
        
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#080F1D]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#080F1D] opacity-70" />
          <div className="absolute inset-0 bg-dots opacity-10" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative w-32 h-32"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/30 to-[#0EA5E9]/30 rounded-full blur-xl opacity-70"></div>
                  <img
                    src="/lovable-uploads/8037cb9d-08bc-4fb1-a49b-bf1eeb793a8e.png"
                    alt="Fishcake Logo"
                    className="w-full h-full object-contain relative z-10"
                  />
                </motion.div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Welcome to <span className="text-[#F97316]">Fishcake</span>
              </h1>
              <p className="text-lg text-mine-silver mb-8">
                The ultimate blockchain-themed word challenge platform
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 mb-12"
            >
              <div className="max-w-3xl mx-auto bg-gradient-to-r from-black/60 to-black/80 p-6 rounded-xl border border-[#F97316]/20 mb-8">
                <h2 className="text-2xl font-bold text-white mb-3 flex items-center justify-center">
                  <span className="text-[#F97316] mr-2">PoWrdle</span> – The Blockchain Word Game
                </h2>
                <p className="text-mine-silver mb-4 text-center italic">🔥 Think you know crypto? Prove it. 🔥</p>
                <p className="text-mine-silver mb-4">
                  Welcome to PoWrdle, the ultimate blockchain-themed word challenge powered by Fishcake.ai.
                  You've got 3 tries to guess a 5-letter word straight from the world of crypto, mining, and Web3.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
                  <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-green-500 mr-2 rounded"></span>
                    <span className="text-white">Green = Right letter, right place.</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-yellow-500 mr-2 rounded"></span>
                    <span className="text-white">Yellow = Right letter, wrong place.</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-gray-700 mr-2 rounded"></span>
                    <span className="text-white">Gray = Not in the word.</span>
                  </div>
                </div>
                <p className="text-mine-silver text-center font-semibold">
                  Are you a real PoW OG, or just another paper-handed trader?<br/>
                  Play now and test your blockchain knowledge! 🚀💎
                </p>
              </div>

              <PoWrdleGame />
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-black/40 border border-white/10 rounded-lg p-8 hover:border-[#F97316]/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Word Selection</h3>
                <p className="text-mine-silver">
                  All words are carefully selected from blockchain and crypto terminology. Expand your vocabulary 
                  while having fun testing your knowledge.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-black/40 border border-white/10 rounded-lg p-8 hover:border-[#F97316]/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Share Your Score</h3>
                <p className="text-mine-silver">
                  Challenge your friends and colleagues to beat your score. Show off your blockchain expertise
                  and climb the leaderboards of crypto knowledge.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-black/40 border border-white/10 rounded-lg p-8 hover:border-[#F97316]/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Coming Soon</h3>
                <p className="text-mine-silver">
                  Stay tuned for daily challenges, themed word packs, and more blockchain-related games on the
                  Fishcake.ai platform. The future of Web3 gaming is here!
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <p className="text-mine-silver">
                PoWrdle is part of Fishcake.ai, a platform for blockchain-related games and educational content.
                Check back regularly for new words and features!
              </p>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default FishcakePage;
