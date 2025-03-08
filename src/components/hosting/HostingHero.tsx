import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Cpu } from "lucide-react";
import { useState } from "react";
import { PropertyRequestDialog } from "@/components/realestate/PropertyRequestDialog";

export const HostingHero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-transparent" />
      
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#F97316 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center px-3 py-1 bg-[#F97316]/10 border border-[#F97316]/20 rounded-full">
            <Server className="h-4 w-4 text-[#F97316] mr-2" />
            <span className="text-sm font-medium text-[#F97316]">
              Next-Gen GPU & AI Hosting Infrastructure
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            GPU & AI Workstation 
            <span className="bg-gradient-to-r from-[#F97316] to-[#0EA5E9] bg-clip-text text-transparent"> Hosting</span>
          </h1>
          
          <p className="text-lg md:text-xl text-mine-silver mb-10 max-w-3xl mx-auto">
            We don't just mine—we host, power, and optimize high-performance compute infrastructure 
            for AI workloads, deep learning models, and blockchain mining operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
              onClick={() => setDialogOpen(true)}
            >
              Reserve Hosting Space <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Modern GPU mining rig image */}
      <div className="mt-16 max-w-6xl mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden border border-[#1E293B] shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
            alt="GPU Mining Rig Setup" 
            className="w-full h-auto object-cover" 
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <div className="flex flex-wrap gap-4">
              <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-medium">Tier 3+ Data Center</span>
              </div>
              <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-medium">24/7 Technical Support</span>
              </div>
              <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-medium">99.99% Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <PropertyRequestDialog 
        isOpen={dialogOpen} 
        onClose={() => setDialogOpen(false)} 
        propertyTitle="GPU & AI Workstation Hosting" 
      />
    </section>
  );
};
