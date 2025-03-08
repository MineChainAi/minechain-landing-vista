
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Cpu } from "lucide-react";
import { useState } from "react";
import { PropertyRequestDialog } from "@/components/realestate/PropertyRequestDialog";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { sendNotificationEmail } from "@/utils/notificationService";

export const HostingHero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const { toast } = useToast();
  
  const handleReserveHosting = () => {
    // Open the dialog for detailed information
    setDialogOpen(true);
    
    // Also send a notification email to the team
    try {
      sendNotificationEmail({
        username: "Hosting Space Inquiry",
        email: "dm@minechain.ai"
      });
      
      console.log("Notification sent to dm@minechain.ai about hosting inquiry");
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };
  
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-transparent" />
      
      {/* Background grid with subtle animation */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#F97316 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 100,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
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
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            GPU & AI Workstation 
            <motion.span 
              className="bg-gradient-to-r from-[#F97316] to-[#0EA5E9] bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              whileHover={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 1 }}
            > Hosting</motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-mine-silver mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We don't just mine—we host, power, and optimize high-performance compute infrastructure 
            for AI workloads, deep learning models, and blockchain mining operations.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                size="lg"
                className="bg-[#F97316] hover:bg-[#F97316]/90 text-white group relative overflow-hidden"
                onClick={handleReserveHosting}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                <motion.span 
                  className="relative z-10 flex items-center"
                  animate={isButtonHovered ? { x: [0, 5, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  Reserve Hosting Space 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                ></motion.span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10 transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Modern GPU hosting facility image with improved presentation */}
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
      
      <PropertyRequestDialog 
        isOpen={dialogOpen} 
        onClose={() => setDialogOpen(false)} 
        propertyTitle="GPU & AI Workstation Hosting" 
      />
    </section>
  );
};
