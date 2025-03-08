
import { motion } from "framer-motion";
import { Cpu, Flame, Pickaxe } from "lucide-react";

export const TokenStats = () => {
  return (
    <motion.div 
      className="mt-16 p-6 rounded-xl bg-[#222222]/90 border border-[#F97316]/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      whileHover={{ boxShadow: "0 0 30px rgba(249, 115, 22, 0.2)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatItem 
          label="Total Supply"
          value="23,000,000"
          description="Hard-Capped"
          delay={1.0}
          icon={<Flame className="w-6 h-6 text-[#F97316]" />}
        />
        <StatItem 
          label="Consensus"
          value="KawPow PoW"
          description="GPU-Optimized Mining"
          delay={1.2}
          icon={<Cpu className="w-6 h-6 text-[#F97316]" />}
        />
        <StatItem 
          label="Halving"
          value="Every 3 Years"
          description="Deflationary Model"
          delay={1.4}
          icon={<Pickaxe className="w-6 h-6 text-[#F97316]" />}
        />
      </div>
    </motion.div>
  );
};

interface StatItemProps {
  label: string;
  value: string;
  description: string;
  delay: number;
  icon: React.ReactNode;
}

const StatItem = ({ label, value, description, delay, icon }: StatItemProps) => {
  return (
    <motion.div 
      className="p-4 relative overflow-hidden rounded-lg border border-[#F97316]/10 bg-black/20"
      whileHover={{ 
        scale: 1.03,
        borderColor: "rgba(249, 115, 22, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div 
        className="absolute top-0 right-0 m-3 opacity-30"
        whileHover={{ scale: 1.2, rotate: 15, opacity: 0.6 }}
      >
        {icon}
      </motion.div>
      
      <p className="text-sm text-[#F97316]/80 uppercase tracking-wider mb-2">{label}</p>
      <motion.p 
        className="text-3xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.8 }}
      >
        {value}
      </motion.p>
      <p className="text-sm text-gray-400 mt-1">{description}</p>
      
      {/* Industrial circuit decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent"></div>
    </motion.div>
  );
};
