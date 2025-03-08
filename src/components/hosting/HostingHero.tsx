
import { useState } from "react";
import { PropertyRequestDialog } from "@/components/realestate/PropertyRequestDialog";
import { useToast } from "@/hooks/use-toast";
import { HeroTitleBadge } from "./HeroTitleBadge";
import { HeroHeading } from "./HeroHeading";
import { HeroDescription } from "./HeroDescription";
import { HeroActionButtons } from "./HeroActionButtons";
import { FacilityImageSection } from "./FacilityImageSection";
import { HeroBackground } from "./HeroBackground";

export const HostingHero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();
  
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Background components */}
      <HeroBackground />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <HeroTitleBadge />
          <HeroHeading />
          <HeroDescription />
          <HeroActionButtons onReserveClick={() => setDialogOpen(true)} />
        </div>
      </div>
      
      {/* Modern GPU hosting facility image with improved presentation */}
      <FacilityImageSection />
      
      <PropertyRequestDialog 
        isOpen={dialogOpen} 
        onClose={() => setDialogOpen(false)} 
        propertyTitle="GPU & AI Workstation Hosting" 
      />
    </section>
  );
};
