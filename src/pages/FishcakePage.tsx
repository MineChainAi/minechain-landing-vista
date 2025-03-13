
import React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { PoWrdleGame } from "@/components/games/PoWrdleGame";
import { Sparkles } from "lucide-react";

const FishcakePage = () => {
  return (
    <>
      <Helmet>
        <title>Fishcake - MineChain</title>
        <meta name="description" content="Play PoWrdle, a blockchain word game on MineChain's Fishcake platform." />
      </Helmet>
      <div className="min-h-screen bg-mine-dark overflow-hidden">
        <Navbar />
        
        <section className="pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#080F1D]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-[#080F1D] opacity-70" />
          <div className="absolute inset-0 bg-dots opacity-10" />
          
          {/* Animated background particles */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5 }}
          >
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#F97316]"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 30 - 15],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4 + Math.random() * 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center max-w-3xl mx-auto"
            >
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
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 mb-12"
            >
              <motion.div 
                className="max-w-3xl mx-auto bg-gradient-to-r from-black/60 to-black/80 p-6 rounded-xl border border-[#F97316]/20 mb-8"
                whileHover={{ borderColor: "rgba(249, 115, 22, 0.4)", transition: { duration: 0.3 } }}
                animate={{ boxShadow: ["0 0 10px 0px rgba(249, 115, 22, 0.1)", "0 0 20px 0px rgba(249, 115, 22, 0.2)", "0 0 10px 0px rgba(249, 115, 22, 0.1)"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <h2 className="text-2xl font-bold text-white mb-3 flex items-center justify-center">
                  <motion.span 
                    className="text-[#F97316] flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                    PoWrdle
                  </motion.span>
                </h2>
                <p className="text-white text-center mb-4">The Blockchain Word Game</p>
                <motion.p 
                  className="text-mine-silver mb-4 text-center italic"
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
                <p className="text-mine-silver mb-4">
                  Welcome to PoWrdle, the ultimate blockchain-themed word challenge powered by Fishcake.ai.
                  You've got 3 tries to guess a 5-letter word straight from the world of crypto, mining, and Web3.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="inline-block w-4 h-4 bg-green-500 mr-2 rounded"></span>
                    <span className="text-white">Green = Right letter, right place.</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="inline-block w-4 h-4 bg-yellow-500 mr-2 rounded"></span>
                    <span className="text-white">Yellow = Right letter, wrong place.</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="inline-block w-4 h-4 bg-gray-700 mr-2 rounded"></span>
                    <span className="text-white">Gray = Not in the word.</span>
                  </motion.div>
                </div>
                <motion.p 
                  className="text-mine-silver text-center font-semibold"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ 
                    opacity: [0.8, 1, 0.8],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  viewport={{ once: false }}
                >
                  Are you a real PoW OG, or just another paper-handed trader?<br/>
                  Play now and test your blockchain knowledge! 🚀💎
                </motion.p>
              </motion.div>

              <PoWrdleGame />
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-black/40 border border-white/10 rounded-lg p-8 hover:border-[#F97316]/30 transition-all duration-300"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 30px -10px rgba(249, 115, 22, 0.2)",
                  borderColor: "rgba(249, 115, 22, 0.3)",
                  transition: { duration: 0.3 }
                }}
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
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 30px -10px rgba(249, 115, 22, 0.2)",
                  borderColor: "rgba(249, 115, 22, 0.3)",
                  transition: { duration: 0.3 }
                }}
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
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 30px -10px rgba(249, 115, 22, 0.2)",
                  borderColor: "rgba(249, 115, 22, 0.3)",
                  transition: { duration: 0.3 }
                }}
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
