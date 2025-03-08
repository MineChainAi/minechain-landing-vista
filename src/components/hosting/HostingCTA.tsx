
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { PropertyRequestDialog } from "@/components/realestate/PropertyRequestDialog";

export const HostingCTA = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#F97316]/10 to-[#0EA5E9]/10 border border-[#1E293B] rounded-xl p-8 md:p-16 transform transition-all duration-500 hover:shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white animate-fade-in">
              Get Hosted. Get Powered. 
              <span className="bg-gradient-to-r from-[#F97316] to-[#0EA5E9] bg-clip-text text-transparent"> Get Profitable.</span>
            </h2>
            
            <p className="text-lg text-mine-silver mb-10 animate-fade-in" style={{animationDelay: "0.1s"}}>
              Join the growing network of AI researchers, blockchain miners, and compute-intensive 
              operations that trust MineChain for their hosting needs. Our state-of-the-art facilities 
              and experienced team ensure your hardware performs at its best.
            </p>
            
            <Button 
              size="lg" 
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white group animate-fade-in transition-transform duration-300 hover:scale-105"
              onClick={() => setDialogOpen(true)}
              style={{animationDelay: "0.2s"}}
            >
              Reserve Your Hosting Slot Today 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <p className="mt-6 text-sm text-mine-silver animate-fade-in" style={{animationDelay: "0.3s"}}>
              Limited slots available. Priority given to early reservations.
            </p>
          </div>
        </div>
      </div>
      
      <PropertyRequestDialog 
        isOpen={dialogOpen} 
        onClose={() => setDialogOpen(false)} 
        propertyTitle="GPU & AI Workstation Hosting Inquiry" 
      />
    </section>
  );
};
