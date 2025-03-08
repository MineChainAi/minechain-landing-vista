
import { Server } from "lucide-react";
import { motion } from "framer-motion";

export const HeroTitleBadge = () => {
  return (
    <motion.div 
      className="mb-6 inline-flex items-center px-3 py-1 bg-[#F97316]/10 border border-[#F97316]/20 rounded-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.05, 
        backgroundColor: "rgba(249, 115, 22, 0.15)",
        boxShadow: "0 0 15px rgba(249, 115, 22, 0.2)"
      }}
    >
      <Server className="h-4 w-4 text-[#F97316] mr-2" />
      <span className="text-sm font-medium text-[#F97316]">
        Next-Gen GPU & AI Hosting Infrastructure
      </span>
    </motion.div>
  );
};
