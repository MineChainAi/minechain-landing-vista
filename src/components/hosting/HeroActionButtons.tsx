
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { sendNotificationEmail } from "@/utils/notificationService";

interface HeroActionButtonsProps {
  onReserveClick: () => void;
}

export const HeroActionButtons = ({ onReserveClick }: HeroActionButtonsProps) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  const handleReserveHosting = () => {
    // Open the dialog for detailed information
    onReserveClick();
    
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
  );
};
