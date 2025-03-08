
import { motion } from "framer-motion";
import { BlockchainFeatureBadges } from "./BlockchainFeatureBadges";
import { HeroCallToAction } from "./HeroCallToAction";

export const HeroContent = () => {
  return (
    <motion.div 
      className="text-center max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo with blockchain-inspired styling */}
      <motion.div 
        className="mb-8 flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="p-3 bg-[#F97316]/10 border border-[#F97316]/20 rounded-full relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/20 via-[#8B5CF6]/20 to-[#0EA5E9]/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          <motion.img 
            src="/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png"
            alt="MineChain Blockchain Network Logo - Decentralized GPU Computing Platform" 
            className="w-24 h-24 object-cover relative z-10"
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            width="96"
            height="96"
            loading="eager"
          />
        </div>
      </motion.div>
      
      {/* Main heading with blockchain-inspired animation */}
      <motion.h1 
        className="text-5xl md:text-7xl mb-4 font-extrabold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.span 
          className="bg-gradient-to-r from-[#F97316] via-[#8B5CF6] to-[#0EA5E9] bg-clip-text text-transparent inline-block"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear" 
          }}
          style={{ backgroundSize: "200% 200%" }}
        >
          MineChain
        </motion.span>
      </motion.h1>
      
      {/* Subheadline with blockchain animation */}
      <motion.h2 
        className="text-4xl md:text-6xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Blockchain <span className="text-[#8B5CF6]">Innovation</span> Hub
      </motion.h2>
      
      {/* Description with blockchain-focused language */}
      <motion.p 
        className="text-lg md:text-xl text-mine-silver mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Forging the next generation of decentralized AI compute power, blockchain-powered infrastructure, and web3 enterprise data centers through Layer 1 technology, GPU mining solutions, and tokenized real estate assets.
        <motion.span 
          className="block mt-2 text-[#F97316]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Decentralization • Consensus • Innovation
        </motion.span>
      </motion.p>
      
      {/* Blockchain feature badges */}
      <BlockchainFeatureBadges />
      
      {/* CTA buttons with blockchain styling */}
      <HeroCallToAction />
    </motion.div>
  );
};
