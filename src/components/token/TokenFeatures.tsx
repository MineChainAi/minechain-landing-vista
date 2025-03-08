
import { Card, CardContent } from "@/components/ui/card";
import { Coins, TrendingUp, Cpu, Server } from "lucide-react";

export const TokenFeatures = () => {
  const features = [
    {
      icon: <Coins className="w-10 h-10 text-[#F97316]" />,
      title: "Mining-Backed Tokenomics",
      description: "Every $MINE token is earned through real compute work, ensuring organic supply and demand fundamentals."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#F97316]" />,
      title: "Deflationary Model",
      description: "With a 2-year halving cycle, supply decreases over time, driving long-term value appreciation."
    },
    {
      icon: <Cpu className="w-10 h-10 text-[#F97316]" />,
      title: "Decentralized & Permissionless",
      description: "Anyone can mine and earn $MINE, ensuring true PoW decentralization and fair distribution."
    },
    {
      icon: <Server className="w-10 h-10 text-[#F97316]" />,
      title: "Compute Power Integration",
      description: "$MINE will be used for GPU leasing, AI compute transactions, and tokenized mining rewards."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why <span className="text-gradient-orange">$MINE?</span>
          </h2>
          <p className="text-mine-silver text-lg">
            $MINE is designed as a utility token with real-world applications, 
            powering the entire MineChain ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card-hover p-2">
              <CardContent className="p-6">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-mine-silver">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
