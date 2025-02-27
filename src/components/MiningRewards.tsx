
import { Coins, Diamond, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export const MiningRewards = () => {
  const rewards = [
    {
      icon: <Coins className="h-12 w-12 text-[#F97316]" />,
      title: "Mining Rewards",
      description: "Earn passive income through GPU mining and AI compute sharing"
    },
    {
      icon: <Diamond className="h-12 w-12 text-[#F97316]" />,
      title: "NFT Rewards",
      description: "🔥 MineChain NFT Rewards: Backed by AI Compute Power, Fueled by Stable Token Incentives, and Designed for Long-Term Growth. 🔥"
    },
    {
      icon: <Award className="h-12 w-12 text-[#F97316]" />,
      title: "Staking Benefits",
      description: "Additional rewards for long-term network participants"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
            Mining & Community Rewards
          </h2>
          <p className="text-lg text-mine-silver max-w-2xl mx-auto">
            Join the MineChain ecosystem and earn rewards through multiple streams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rewards.map((reward, index) => (
            <Card 
              key={index} 
              className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-6">{reward.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{reward.title}</h3>
              <p className="text-mine-silver">{reward.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
