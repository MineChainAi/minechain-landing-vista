
import { motion } from "framer-motion";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  delay: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-black/40 border border-white/10 rounded-lg p-8 hover:border-[#F97316]/30 transition-all duration-300"
      whileHover={{ 
        y: -10,
        boxShadow: "0 10px 30px -10px rgba(249, 115, 22, 0.2)",
        borderColor: "rgba(249, 115, 22, 0.3)",
        transition: { duration: 0.3 }
      }}
    >
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-mine-silver">{description}</p>
    </motion.div>
  );
};
