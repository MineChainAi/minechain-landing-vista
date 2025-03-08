
import { motion } from "framer-motion";
import { Battery, Cpu, Flame, Pickaxe, Zap } from "lucide-react";

export const TokenStats = () => {
  return (
    <motion.div 
      className="mt-16 p-6 rounded-xl bg-[#0A0A1E]/90 border border-[#0EA5E9]/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      whileHover={{ boxShadow: "0 0 30px rgba(14, 165, 233, 0.2)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatItem 
          label="Total Supply"
          value="23,000,000"
          description="Hard-Capped"
          delay={1.0}
          icon={<Flame className="w-6 h-6 text-[#0EA5E9]" />}
        />
        <StatItem 
          label="Consensus"
          value="KawPow PoW"
          description="Energy-Optimized Mining"
          delay={1.2}
          icon={<Cpu className="w-6 h-6 text-[#0EA5E9]" />}
        />
        <StatItem 
          label="Halving"
          value="Every 3 Years"
          description="Deflationary Model"
          delay={1.4}
          icon={<Pickaxe className="w-6 h-6 text-[#0EA5E9]" />}
        />
      </div>
      
      {/* Power Rate Indicator */}
      <motion.div 
        className="mt-6 p-4 rounded-lg border border-[#0EA5E9]/30 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div 
              className="p-2 rounded-full bg-[#0EA5E9]/20"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 rgba(14, 165, 233, 0.4)",
                  "0 0 15px rgba(14, 165, 233, 0.6)",
                  "0 0 0 rgba(14, 165, 233, 0.4)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-5 h-5 text-[#0EA5E9]" />
            </motion.div>
            <div>
              <p className="text-sm text-[#0EA5E9]/80 uppercase tracking-wider">Current Power Rate</p>
              <div className="flex items-end gap-2">
                <motion.span 
                  className="text-2xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                >
                  $0.08
                </motion.span>
                <span className="text-sm text-gray-400">per kWh</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#0EA5E9] to-[#F97316] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "40%" }}
                transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between">
              <p className="text-xs text-gray-400 mt-1">Competitive mining advantage</p>
              <motion.div 
                className="flex items-center gap-1"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Battery className="w-3 h-3 text-[#0EA5E9]" />
                <span className="text-xs text-[#0EA5E9]">Energy Efficient</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
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
      className="p-4 relative overflow-hidden rounded-lg border border-[#0EA5E9]/10 bg-black/20"
      whileHover={{ 
        scale: 1.03,
        borderColor: "rgba(14, 165, 233, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div 
        className="absolute top-0 right-0 m-3 opacity-30"
        whileHover={{ scale: 1.2, rotate: 15, opacity: 0.6 }}
      >
        {icon}
      </motion.div>
      
      <p className="text-sm text-[#0EA5E9]/80 uppercase tracking-wider mb-2">{label}</p>
      <motion.p 
        className="text-3xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.8 }}
      >
        {value}
      </motion.p>
      <p className="text-sm text-gray-400 mt-1">{description}</p>
      
      {/* Electric circuit decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0EA5E9]/30 to-transparent"></div>
    </motion.div>
  );
};
