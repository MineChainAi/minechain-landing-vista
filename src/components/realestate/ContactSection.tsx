
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { PropertyRequestDialog } from "./PropertyRequestDialog";

export const ContactSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="mb-20">
      <div className="bg-gradient-to-r from-[#F97316]/10 to-[#0EA5E9]/10 border border-[#1E293B] rounded-lg p-8 md:p-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-mine-silver max-w-2xl mx-auto">
            Looking for the perfect site for your AI or blockchain project? Let MineChain Real Estate Hub secure your next high-value industrial site.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-[#0F172A]/80 border border-[#1E293B] rounded-lg p-6 text-center flex flex-col items-center">
            <div className="p-3 bg-[#F97316]/10 border border-[#F97316]/20 rounded-full mb-4">
              <Mail className="h-6 w-6 text-[#F97316]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
            <p className="text-mine-silver mb-4">Send us a message anytime</p>
            <a href="mailto:dm@minechain.ai" className="text-[#F97316] hover:text-[#F97316]/80">
              dm@minechain.ai
            </a>
          </div>
          
          <div className="bg-[#0F172A]/80 border border-[#1E293B] rounded-lg p-6 text-center flex flex-col items-center">
            <div className="p-3 bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-full mb-4">
              <Phone className="h-6 w-6 text-[#0EA5E9]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
            <p className="text-mine-silver mb-4">Mon-Fri, 9am-5pm EST</p>
            <a href="tel:+18005551234" className="text-[#0EA5E9] hover:text-[#0EA5E9]/80">
              +1 (800) 555-1234
            </a>
          </div>
          
          <div className="bg-[#0F172A]/80 border border-[#1E293B] rounded-lg p-6 text-center flex flex-col items-center">
            <div className="p-3 bg-[#F97316]/10 border border-[#F97316]/20 rounded-full mb-4">
              <MessageSquare className="h-6 w-6 text-[#F97316]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Schedule a Consultation</h3>
            <p className="text-mine-silver mb-4">Discuss your requirements with our experts</p>
            <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-white">
              Book Now
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-white font-medium mb-4">Explore exclusive opportunities in the AI, crypto mining, and energy space</p>
          <Button 
            size="lg" 
            className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white"
            onClick={() => setDialogOpen(true)}
          >
            Request Property Information
          </Button>
        </div>
      </div>

      <PropertyRequestDialog 
        isOpen={dialogOpen} 
        onClose={() => setDialogOpen(false)} 
        propertyTitle="General Property Information" 
      />
    </section>
  );
};
