
import { useState } from "react";
import { WhitepaperSection } from "./WhitepaperSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { ValuePropositionSection } from "./sections/ValuePropositionSection";
import { TokenomicsSection } from "./sections/TokenomicsSection";
import { MiningSecuritySection } from "./sections/MiningSecuritySection";
import { RavencoinReserveSection } from "./sections/RavencoinReserveSection";
import { PresaleSection } from "./sections/PresaleSection"; 
import { EconomicModelSection } from "./sections/EconomicModelSection";
import { GovernanceSection } from "./sections/GovernanceSection";
import { RoadmapSection } from "./sections/RoadmapSection";
import { ConclusionSection } from "./sections/ConclusionSection";

export const WhitepaperSections = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="mt-8 space-y-4">
      <WhitepaperSection 
        title="1. Introduction: Why Hardware Matters" 
        sectionId="introduction"
        expandedSection={expandedSection}
        toggleSection={toggleSection}
      >
        <IntroductionSection />
      </WhitepaperSection>
      
      <WhitepaperSection 
        title="2. Value Proposition" 
        sectionId="value"
        expandedSection={expandedSection}
        toggleSection={toggleSection}
      >
        <ValuePropositionSection />
      </WhitepaperSection>
      
      <WhitepaperSection 
        title="3. Tokenomics" 
        sectionId="tokenomics"
        expandedSection={expandedSection}
        toggleSection={toggleSection}
      >
        <TokenomicsSection />
      </WhitepaperSection>
      
      <WhitepaperSection 
        title="4. Mining & Security" 
        sectionId="mining"
        expandedSection={expandedSection}
        toggleSection={toggleSection}
      >
        <MiningSecuritySection />
      </WhitepaperSection>
      
      <WhitepaperSection 
        title="5. Ravencoin Reserve Fund" 
        sectionId="reserve"
        expandedSection={expandedSection}
        toggleSection={toggleSection}
      >
        <RavencoinReserveSection />
      </WhitepaperSection>
      
      <WhitepaperSection 
        title="6. $MINE Token Presale" 
        sectionId="presale"
        expandedSection={expandedSection}
        toggleSection={toggleSection}
      >
        <PresaleSection />
      </WhitepaperSection>
      
      <WhitepaperSection 
        title="7. Roadmap" 
        sectionId="roadmap"
        expandedSection={expandedSection}
        toggleSection={toggleSection}
      >
        <RoadmapSection />
      </WhitepaperSection>
      
      <WhitepaperSection 
        title="8. Conclusion: Why $MINE is Different" 
        sectionId="conclusion"
        expandedSection={expandedSection}
        toggleSection={toggleSection}
      >
        <ConclusionSection />
      </WhitepaperSection>
    </div>
  );
};
