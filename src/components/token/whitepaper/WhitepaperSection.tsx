
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface WhitepaperSectionProps {
  title: string;
  sectionId: string;
  expandedSection: string | null;
  toggleSection: (section: string) => void;
  children: React.ReactNode;
}

export const WhitepaperSection = ({ 
  title, 
  sectionId, 
  expandedSection, 
  toggleSection,
  children 
}: WhitepaperSectionProps) => {
  const isExpanded = expandedSection === sectionId;
  
  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <button 
        className="w-full p-4 flex justify-between items-center bg-black/20 hover:bg-black/30 transition-all text-left"
        onClick={() => toggleSection(sectionId)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isExpanded && (
        <div className="p-4 bg-black/10">
          {children}
        </div>
      )}
    </div>
  );
};
