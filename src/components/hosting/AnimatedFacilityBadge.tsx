
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedFacilityBadgeProps {
  children: ReactNode;
}

export const AnimatedFacilityBadge = ({ children }: AnimatedFacilityBadgeProps) => {
  return (
    <motion.div 
      className="bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
      whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 0, 0.8)", borderColor: "rgba(249, 115, 22, 0.3)" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <span className="text-white font-medium">{children}</span>
    </motion.div>
  );
};
