
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const TokenWhitepaper = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

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
          
          {/* Whitepaper Abstract */}
          <div className="mt-8 p-6 bg-black/20 rounded-lg border border-white/10">
            <Badge variant="outline" className="mb-3 text-[#F97316] border-[#F97316]/30">Abstract</Badge>
            <p className="text-mine-silver">
              The $MINE token is a decentralized, <strong>Proof-of-Work (PoW)</strong> mining-based asset designed to power <strong>AI workloads, decentralized compute, and blockchain mining infrastructure</strong>. Built on the <strong>KawPow algorithm</strong>, $MINE ensures fair and distributed mining while integrating real-world <strong>GPU compute, AI inference, and tokenized mining rewards</strong> into its economic model. With a <strong>23 million total supply</strong> and a <strong>halving schedule every two years</strong>, $MINE is built for long-term sustainability, scarcity, and value appreciation.
            </p>
          </div>
          
          {/* Whitepaper Sections */}
          <div className="mt-8 space-y-4">
            {/* Section 1: Introduction */}
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <button 
                className="w-full p-4 flex justify-between items-center bg-black/20 hover:bg-black/30 transition-all text-left"
                onClick={() => toggleSection('introduction')}
              >
                <h3 className="text-lg font-semibold">1. Introduction</h3>
                {expandedSection === 'introduction' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {expandedSection === 'introduction' && (
                <div className="p-4 bg-black/10">
                  <p className="text-mine-silver">
                    MineChain is revolutionizing <strong>compute-backed blockchain infrastructure</strong> by integrating GPU-driven AI workloads and PoW mining. The $MINE token is the cornerstone of this ecosystem, ensuring <strong>fair rewards for miners, compute service providers, and AI developers</strong>. Unlike speculative PoW tokens, $MINE is backed by real-world <strong>energy, compute power, and AI processing demand</strong>.
                  </p>
                </div>
              )}
            </div>
            
            {/* Section 2: Tokenomics */}
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <button 
                className="w-full p-4 flex justify-between items-center bg-black/20 hover:bg-black/30 transition-all text-left"
                onClick={() => toggleSection('tokenomics')}
              >
                <h3 className="text-lg font-semibold">2. Tokenomics</h3>
                {expandedSection === 'tokenomics' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {expandedSection === 'tokenomics' && (
                <div className="p-4 bg-black/10">
                  <ul className="text-mine-silver space-y-2 list-disc pl-5">
                    <li><strong>Total Supply</strong>: 23,000,000 $MINE (Hard Cap)</li>
                    <li><strong>Consensus Mechanism</strong>: KawPow Proof-of-Work (PoW)</li>
                    <li><strong>Block Reward Distribution</strong>:
                      <ul className="pl-5 mt-1 list-disc">
                        <li><strong>50%</strong> – Miners (Securing the Network)</li>
                        <li><strong>50%</strong> – Ecosystem & Compute Power Expansion</li>
                      </ul>
                    </li>
                    <li><strong>Halving Schedule</strong>: Every <strong>2 years</strong> to increase scarcity and value.</li>
                    <li><strong>Initial Distribution</strong>: No pre-mine, no VC allocation – <strong>100% mined by the community</strong>.</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Section 3: Mining & Security */}
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <button 
                className="w-full p-4 flex justify-between items-center bg-black/20 hover:bg-black/30 transition-all text-left"
                onClick={() => toggleSection('mining')}
              >
                <h3 className="text-lg font-semibold">3. Mining & Security</h3>
                {expandedSection === 'mining' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {expandedSection === 'mining' && (
                <div className="p-4 bg-black/10">
                  <ul className="text-mine-silver space-y-2 list-disc pl-5">
                    <li><strong>Algorithm</strong>: KawPow (GPU-Optimized PoW)</li>
                    <li><strong>Decentralization</strong>: Any GPU miner can participate, ensuring security and censorship resistance.</li>
                    <li><strong>Energy Efficiency</strong>: MineChain focuses on <strong>low-cost energy zones and efficient compute</strong> to reduce environmental impact.</li>
                    <li><strong>Fair Mining Model</strong>: No ASIC dominance—ensuring <strong>GPU miners retain network control</strong>.</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Section 4: Utility & Use Cases */}
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <button 
                className="w-full p-4 flex justify-between items-center bg-black/20 hover:bg-black/30 transition-all text-left"
                onClick={() => toggleSection('utility')}
              >
                <h3 className="text-lg font-semibold">4. Utility & Use Cases</h3>
                {expandedSection === 'utility' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {expandedSection === 'utility' && (
                <div className="p-4 bg-black/10">
                  <p className="text-mine-silver mb-3">$MINE is more than just a mining token—it's a <strong>real-world compute asset</strong>:</p>
                  <ul className="text-mine-silver space-y-2 list-disc pl-5">
                    <li><strong>GPU Compute Leasing</strong> – Users can stake $MINE to access <strong>AI inference & GPU compute power</strong>.</li>
                    <li><strong>Tokenized Compute Rewards</strong> – AI models running on MineChain pay fees in $MINE.</li>
                    <li><strong>Decentralized Compute Marketplace</strong> – Users can lease and rent GPU power via smart contracts.</li>
                    <li><strong>Mining & Yield Farming</strong> – Miners earn $MINE and can reinvest in high-performance compute nodes.</li>
                    <li><strong>Ecosystem Growth & Partnerships</strong> – $MINE is integrated into <strong>AI projects, Web3 applications, and compute-intensive workloads</strong>.</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Section 5: Economic Model */}
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <button 
                className="w-full p-4 flex justify-between items-center bg-black/20 hover:bg-black/30 transition-all text-left"
                onClick={() => toggleSection('economic')}
              >
                <h3 className="text-lg font-semibold">5. Economic Model</h3>
                {expandedSection === 'economic' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {expandedSection === 'economic' && (
                <div className="p-4 bg-black/10">
                  <p className="text-mine-silver mb-3"><strong>Deflationary Mechanism</strong>: With halving every <strong>2 years</strong>, the emission rate decreases, creating scarcity and <strong>increasing long-term value</strong>.</p>
                  <p className="text-mine-silver mb-2"><strong>Revenue Model</strong>:</p>
                  <ul className="text-mine-silver space-y-2 list-disc pl-5">
                    <li>Compute power is leased in <strong>stablecoins</strong>, ensuring a <strong>non-volatile income stream</strong>.</li>
                    <li>A portion of stablecoin revenue is used to <strong>buy back & burn</strong> $MINE tokens, further reducing supply.</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Section 6: Governance & Future Development */}
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <button 
                className="w-full p-4 flex justify-between items-center bg-black/20 hover:bg-black/30 transition-all text-left"
                onClick={() => toggleSection('governance')}
              >
                <h3 className="text-lg font-semibold">6. Governance & Future Development</h3>
                {expandedSection === 'governance' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {expandedSection === 'governance' && (
                <div className="p-4 bg-black/10">
                  <ul className="text-mine-silver space-y-2 list-disc pl-5">
                    <li><strong>Decentralized Governance</strong> – Miners & token holders can vote on protocol upgrades and resource allocation.</li>
                    <li><strong>Compute Expansion</strong> – Scaling MineChain's <strong>GPU hosting, AI compute leasing, and blockchain integrations</strong>.</li>
                    <li><strong>Interoperability</strong> – $MINE will integrate <strong>cross-chain solutions</strong> for broader adoption.</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Section 7: Roadmap */}
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <button 
                className="w-full p-4 flex justify-between items-center bg-black/20 hover:bg-black/30 transition-all text-left"
                onClick={() => toggleSection('roadmap')}
              >
                <h3 className="text-lg font-semibold">7. Roadmap</h3>
                {expandedSection === 'roadmap' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {expandedSection === 'roadmap' && (
                <div className="p-4 bg-black/10">
                  <ul className="text-mine-silver space-y-2">
                    <li className="flex items-center">
                      <Badge variant="outline" className="mr-2 bg-green-500/20 text-green-400 border-green-500/30">✓</Badge>
                      <span><strong>Phase 1</strong> – $MINE Token Launch & GPU Mining Integration</span>
                    </li>
                    <li className="flex items-center">
                      <Badge variant="outline" className="mr-2 bg-green-500/20 text-green-400 border-green-500/30">✓</Badge>
                      <span><strong>Phase 2</strong> – AI Compute Leasing & Tokenized GPU Rewards</span>
                    </li>
                    <li className="flex items-center">
                      <Badge variant="outline" className="mr-2 bg-green-500/20 text-green-400 border-green-500/30">✓</Badge>
                      <span><strong>Phase 3</strong> – Decentralized Compute Marketplace & Expansion</span>
                    </li>
                    <li className="flex items-center">
                      <Badge variant="outline" className="mr-2 bg-green-500/20 text-green-400 border-green-500/30">✓</Badge>
                      <span><strong>Phase 4</strong> – Cross-Chain Deployment & Smart Contract Integrations</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Section 8: Conclusion */}
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <button 
                className="w-full p-4 flex justify-between items-center bg-black/20 hover:bg-black/30 transition-all text-left"
                onClick={() => toggleSection('conclusion')}
              >
                <h3 className="text-lg font-semibold">8. Conclusion</h3>
                {expandedSection === 'conclusion' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {expandedSection === 'conclusion' && (
                <div className="p-4 bg-black/10">
                  <p className="text-mine-silver mb-4">
                    The $MINE token is a <strong>next-generation PoW asset</strong>, combining <strong>compute power, AI workloads, and decentralized mining rewards</strong>. Backed by <strong>real-world GPU infrastructure</strong>, $MINE provides <strong>a tangible value proposition</strong>, ensuring a <strong>long-term, sustainable ecosystem</strong> in the AI and blockchain computing space.
                  </p>
                  <p className="text-center text-xl font-bold text-gradient-orange">
                    🚀 Power the Future. Mine the Revolution. 🚀
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
