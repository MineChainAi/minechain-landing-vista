
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

export const WhitepaperHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Whitepaper Document Icon */}
      <div className="bg-black/30 p-6 rounded-xl border border-white/10 flex items-center justify-center">
        <FileText className="h-20 w-20 text-[#F97316]" />
      </div>
      
      {/* Whitepaper Content */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-3">
          $MINE Token <span className="text-[#F97316]">Whitepaper</span>
        </h2>
        
        <p className="text-mine-silver mb-6">
          Our comprehensive whitepaper details the tokenomics, utility, and technical architecture of the $MINE token ecosystem. Learn how $MINE powers decentralized GPU compute, AI infrastructure, and provides incentives for network participants.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
            onClick={() => window.open("https://chatgpt.com/canvas/shared/67cb8f787f9c8191ac72817b5cdd64fb", "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" /> View Whitepaper
          </Button>
          
          <Button
            variant="outline"
            className="border-[#F97316]/50 text-[#F97316] hover:bg-[#F97316]/10"
          >
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
};
