
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Welcome to <span className="text-[#F97316]">Fishcake</span>
              </h1>
              <p className="text-lg text-mine-silver mb-8">
                Test your blockchain knowledge with our word-guessing game, PoWrdle!
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 mb-12"
            >
              <PoWrdleGame />
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-black/40 border border-white/10 rounded-lg p-8 hover:border-[#F97316]/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">How to Play</h3>
                <p className="text-mine-silver">
                  Guess the 5-letter blockchain word in 3 tries. After each guess, the color of the tiles will
                  change to show how close your guess was to the word.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-black/40 border border-white/10 rounded-lg p-8 hover:border-[#F97316]/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Color Guide</h3>
                <p className="text-mine-silver">
                  <span className="inline-block w-4 h-4 bg-green-500 mr-2 rounded"></span> 
                  Green means the letter is correct and in the right position.<br/>
                  <span className="inline-block w-4 h-4 bg-yellow-500 mr-2 mt-2 rounded"></span> 
                  Yellow means the letter is in the word but in the wrong position.<br/>
                  <span className="inline-block w-4 h-4 bg-gray-700 mr-2 mt-2 rounded"></span> 
                  Gray means the letter is not in the word.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-black/40 border border-white/10 rounded-lg p-8 hover:border-[#F97316]/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Challenge Friends</h3>
                <p className="text-mine-silver">
                  Share your results with friends and challenge them to beat your score. 
                  All words are related to blockchain and cryptocurrency.
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
