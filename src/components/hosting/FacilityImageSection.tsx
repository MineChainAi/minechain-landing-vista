
import { motion } from "framer-motion";

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
          className="w-full h-auto object-cover" 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="flex flex-wrap gap-4">
            <motion.div 
              className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-white font-medium">Tier 3+ Data Center</span>
            </motion.div>
            <motion.div 
              className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-white font-medium">24/7 Technical Support</span>
            </motion.div>
            <motion.div 
              className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-white font-medium">99.99% Uptime SLA</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
