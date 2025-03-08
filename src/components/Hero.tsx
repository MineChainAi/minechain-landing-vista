
import { BlockchainBackground } from "./hero/BlockchainBackground";
import { HeroContent } from "./hero/HeroContent";
import { ScrollToTopButton } from "./hero/ScrollToTopButton";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-[#0F172A] overflow-hidden">
      {/* Blockchain-themed background */}
      <BlockchainBackground />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <HeroContent />
      </div>

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
};
