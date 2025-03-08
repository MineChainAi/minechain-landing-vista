
import { motion } from "framer-motion";

export const TokenStats = () => {
  return (
    <motion.div 
      className="mt-16 p-6 rounded-xl bg-black/30 border border-white/5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      whileHover={{ boxShadow: "0 0 25px rgba(249, 115, 22, 0.2)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatItem 
          label="Total Supply"
          value="23,000,000"
          description="Hard-Capped"
          delay={1.0}
        />
        <StatItem 
          label="Consensus"
          value="KawPow PoW"
          description="GPU-Optimized Mining"
          delay={1.2}
        />
        <StatItem 
          label="Halving"
          value="Every 3 Years"
          description="Deflationary Model"
          delay={1.4}
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
}

const StatItem = ({ label, value, description, delay }: StatItemProps) => {
  return (
    <motion.div 
      className="p-4"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <p className="text-sm text-mine-silver uppercase tracking-wider mb-2">{label}</p>
      <motion.p 
        className="text-3xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.8 }}
      >
        {value}
      </motion.p>
      <p className="text-sm text-[#F97316]">{description}</p>
    </motion.div>
  );
};
