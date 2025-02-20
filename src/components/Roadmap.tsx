
import { Card } from "@/components/ui/card";

export const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "AI Compute & GPU Mining",
      status: "Live Now",
      items: [
        "Fleet of NVIDIA 5090s, 4090s, H100s powering AI compute",
        "AI-powered GPU mining & decentralized AI workloads",
        "AI-Generated NFT platform for artists",
        "AI Trading & Web3 Automation Services"
      ]
    },
    {
      phase: "Phase 2",
      title: "Expanding AI & Blockchain Ecosystem",
      status: "Q2-Q3 2025",
      items: [
        "MineChain AI Datacenter Expansion",
        "XRPL Validator & Layer 1 Blockchain Research",
        "Enterprise AI Compute SaaS",
        "NFT Marketplace Expansion"
      ]
    },
    {
      phase: "Phase 3",
      title: "MineChain Layer 1 Blockchain",
      status: "Q4 2025 - 2026",
      items: [
        "MineChain L1 Testnet Launch",
        "Native $MINE Token for Security & Rewards",
        "Smart Contract AI Execution Layer",
        "Decentralized GPU Compute Market"
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F97316]/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
            The Road to Decentralized AI & Web3 Power
          </h2>
          <p className="text-lg text-mine-silver">
            MineChain is Building the Future – Join the Movement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <Card key={index} className="glass-card p-8 relative overflow-hidden group">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/5 via-transparent to-[#0EA5E9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-[#F97316]">{phase.phase}</h3>
                  <span className="text-sm px-3 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/20">
                    {phase.status}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-4">{phase.title}</h4>
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-mine-silver text-sm">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#0EA5E9] mr-3 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
