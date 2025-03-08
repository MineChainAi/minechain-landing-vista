
import { motion } from "framer-motion";
import { Server, Lock, Cpu, Zap, Database, Globe } from "lucide-react";

export const BlockchainFeatureBadges = () => {
  return (
    <motion.div 
      className="flex flex-wrap justify-center gap-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <motion.span 
        className="px-4 py-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] text-sm backdrop-blur-sm"
        whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 115, 22, 0.2)" }}
      >
        <Server className="inline-block w-4 h-4 mr-2" /> Decentralized Compute
      </motion.span>
      <motion.span 
        className="px-4 py-2 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 text-[#0EA5E9] text-sm backdrop-blur-sm"
        whileHover={{ scale: 1.05, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
      >
        <Lock className="inline-block w-4 h-4 mr-2" /> Layer 1 Blockchain
      </motion.span>
      <motion.span 
        className="px-4 py-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm backdrop-blur-sm"
        whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
      >
        <Cpu className="inline-block w-4 h-4 mr-2" /> GPU Mining Network
      </motion.span>
      <motion.span 
        className="px-4 py-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] text-sm backdrop-blur-sm"
        whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 115, 22, 0.2)" }}
      >
        <Zap className="inline-block w-4 h-4 mr-2" /> $MINE Token
      </motion.span>
      <motion.span 
        className="px-4 py-2 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 text-[#0EA5E9] text-sm backdrop-blur-sm"
        whileHover={{ scale: 1.05, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
      >
        <Database className="inline-block w-4 h-4 mr-2" /> Smart Contracts
      </motion.span>
      <motion.span 
        className="px-4 py-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#8B5CF6] text-sm backdrop-blur-sm"
        whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
      >
        <Globe className="inline-block w-4 h-4 mr-2" /> Web3 Ecosystem
      </motion.span>
    </motion.div>
  );
};
