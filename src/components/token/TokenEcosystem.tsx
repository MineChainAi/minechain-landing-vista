
import { Card, CardContent } from "@/components/ui/card";

export const TokenEcosystem = () => {
  const useCases = [
    {
      title: "GPU & AI Compute Marketplace",
      description: "Rent GPU power for AI workloads using $MINE tokens, enabling decentralized compute resources."
    },
    {
      title: "Mining Pool Rewards",
      description: "Earn $MINE by contributing GPU power to the MineChain mining network."
    },
    {
      title: "Governance & Voting",
      description: "Participate in protocol governance decisions by staking $MINE tokens."
    },
    {
      title: "Fee Reductions",
      description: "Get discounted hosting and transaction fees when paying with $MINE tokens."
    },
    {
      title: "Compute-as-a-Service",
      description: "Access on-demand AI compute resources by spending $MINE tokens."
    },
    {
      title: "NFT-Backed Mining Operations",
      description: "Own fractionalized mining hardware represented by NFTs, earning $MINE rewards."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black/0 to-black/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              $MINE <span className="text-gradient-orange">Ecosystem</span>
            </h2>
            <p className="text-mine-silver text-lg">
              Powering a complete ecosystem of decentralized compute resources,
              mining operations, and AI infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-black/30 border-[#F97316]/20 text-white">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-full bg-[#F97316]/10 flex items-center justify-center mb-4">
                    <span className="text-[#F97316] text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-mine-silver">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#F97316]/20 to-[#0EA5E9]/20 border border-white/10 text-center">
            <h3 className="text-2xl font-bold mb-4">$MINE Token Utility Roadmap</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="bg-white/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#F97316] font-bold text-lg">Q3 2025</span>
                </div>
                <h4 className="font-bold mb-2">Mining Launch</h4>
                <p className="text-sm text-mine-silver">Fair launch mining begins, token distribution starts</p>
              </div>
              <div>
                <div className="bg-white/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#F97316] font-bold text-lg">Q1 2026</span>
                </div>
                <h4 className="font-bold mb-2">Marketplace Launch</h4>
                <p className="text-sm text-mine-silver">GPU marketplace with $MINE as payment currency</p>
              </div>
              <div>
                <div className="bg-white/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#F97316] font-bold text-lg">Q3 2026</span>
                </div>
                <h4 className="font-bold mb-2">DAO Governance</h4>
                <p className="text-sm text-mine-silver">Full decentralized governance for protocol decisions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
