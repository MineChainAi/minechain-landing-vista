
import { motion } from "framer-motion";
import { AnimatedFacilityBadge } from "./AnimatedFacilityBadge";

export const FacilityImageSection = () => {
  return (
    <motion.div 
      className="mt-16 max-w-6xl mx-auto px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.div 
        className="relative rounded-lg overflow-hidden border border-[#1E293B] shadow-xl"
        whileHover={{ 
          boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 8px 10px -6px rgba(249, 115, 22, 0.1)",
          borderColor: "rgba(249, 115, 22, 0.3)" 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
        <motion.img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
          alt="Modern GPU Hosting Facility" 
          className="w-full h-[400px] object-cover" 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="flex flex-wrap gap-4">
            <AnimatedFacilityBadge>Tier 3+ Data Center</AnimatedFacilityBadge>
            <AnimatedFacilityBadge>24/7 Technical Support</AnimatedFacilityBadge>
            <AnimatedFacilityBadge>99.99% Uptime SLA</AnimatedFacilityBadge>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
