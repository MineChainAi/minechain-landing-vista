
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

export const TokenWhitepaper = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#F97316]/10 to-[#0EA5E9]/10 border border-white/10 rounded-xl p-8 md:p-12">
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
          
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-white">Technical Specifications</h3>
              <p className="text-sm text-mine-silver">Detailed breakdown of the $MINE token architecture, consensus mechanism, and network security features.</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-white">Economic Model</h3>
              <p className="text-sm text-mine-silver">Analysis of the token distribution, mining rewards, inflation schedule, and long-term sustainability mechanisms.</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-white">Governance Framework</h3>
              <p className="text-sm text-mine-silver">Overview of the decentralized governance system, proposal mechanisms, and community-driven development roadmap.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
