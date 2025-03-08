
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { PropertyRequestDialog } from "@/components/realestate/PropertyRequestDialog";
import { motion } from "framer-motion";

export const HostingCTA = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-gradient-to-r from-[#F97316]/10 to-[#0EA5E9]/10 border border-[#1E293B] rounded-xl p-8 md:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ 
            boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.2)",
            borderColor: "rgba(249, 115, 22, 0.3)"
          }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get Hosted. Get Powered. 
              <motion.span 
                className="bg-gradient-to-r from-[#F97316] to-[#0EA5E9] bg-clip-text text-transparent"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: isHovered ? "100% 50%" : "0% 50%" }}
                transition={{ duration: 1 }}
              >
                {" Get Profitable."}
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-mine-silver mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Join the growing network of AI researchers, blockchain miners, and compute-intensive 
              operations that trust MineChain for their hosting needs. Our state-of-the-art facilities 
              and experienced team ensure your hardware performs at its best.
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Button 
                size="lg" 
                className="bg-[#F97316] hover:bg-[#F97316]/90 text-white group relative overflow-hidden"
                onClick={() => setDialogOpen(true)}
              >
                <motion.span 
                  className="relative z-10 flex items-center"
                  animate={isHovered ? { x: [0, 5, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  Reserve Your Hosting Slot Today 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] opacity-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%", opacity: 1 }}
                  transition={{ duration: 0.4 }}
                ></motion.span>
              </Button>
            </motion.div>
            
            <motion.p 
              className="mt-6 text-sm text-mine-silver"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ color: "#F97316" }}
            >
              Limited slots available. Priority given to early reservations.
            </motion.p>
          </div>
        </motion.div>
      </div>
      
      <PropertyRequestDialog 
        isOpen={dialogOpen} 
        onClose={() => setDialogOpen(false)} 
        propertyTitle="GPU & AI Workstation Hosting Inquiry" 
      />
    </section>
  );
};
