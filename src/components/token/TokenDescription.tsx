
import { motion } from "framer-motion";

export const TokenDescription = () => {
  return (
    <>
      <motion.div 
        className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span className="mr-2 h-2 w-2 rounded-full bg-[#F97316] animate-pulse"></span>
        <span className="text-sm font-medium text-white/80">Premium Crypto Experience</span>
      </motion.div>
      
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500">$MINE Token</span> – Luxurious Decentralized Finance
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl text-mine-silver mb-12 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        A <span className="text-amber-400 font-medium">premium asset-backed</span> cryptocurrency designed for the 
        <span className="text-amber-400 font-medium"> discerning investor</span>, 
        powering the future of luxury in the blockchain space.
      </motion.p>
    </>
  );
};
