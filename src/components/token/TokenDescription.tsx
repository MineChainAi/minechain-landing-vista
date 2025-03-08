
import { motion } from "framer-motion";
import { Cpu, Pickaxe } from "lucide-react";

export const TokenDescription = () => {
  return (
    <>
      <motion.div 
        className="mb-4 inline-flex items-center px-4 py-2 rounded-full bg-[#333333]/80 border border-[#F97316]/30"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.div 
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mr-2"
        >
          <Pickaxe className="h-4 w-4 text-[#F9A826]" />
        </motion.div>
        <span className="text-sm font-medium text-white/90">Powered By Mining</span>
      </motion.div>
      
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] via-[#F5D04A] to-[#D4AF37]">$MINE Token</span> – <br />
        <span className="text-3xl md:text-5xl">Raw Computational Power</span>
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        A <span className="text-[#F97316] font-medium">computing power-backed</span> cryptocurrency 
        forged through <span className="text-[#F5D04A] font-medium">proof-of-work mining</span>, 
        representing real computational resources in the blockchain ecosystem.
      </motion.p>
    </>
  );
};
