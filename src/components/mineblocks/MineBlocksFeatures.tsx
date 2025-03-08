
import { Card, CardContent } from "@/components/ui/card";
import { Coins, TrendingUp, Server, Zap, RefreshCw, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const MineBlocksFeatures = () => {
  const features = [
    {
      icon: <Coins className="w-10 h-10 text-[#F97316]" />,
      title: "High-Payout, Low-Fee Mining",
      description: "Keep more of your hard-earned $MINE with industry-leading low fees (0.9%) and optimized block rewards."
    },
    {
      icon: <Server className="w-10 h-10 text-[#F97316]" />,
      title: "Decentralized, No ASIC Domination",
      description: "We keep mining fair and GPU-optimized, ensuring decentralization remains at the core of $MINE."
    },
    {
      icon: <Zap className="w-10 h-10 text-[#F97316]" />,
      title: "High-Uptime, Ultra-Fast Servers",
      description: "Global mining nodes ensure low latency and maximum efficiency, keeping your hashrate stable."
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-[#F97316]" />,
      title: "Auto-Swap Feature",
      description: "Mine $MINE and automatically convert your rewards to BTC, LTC, DOGE, KAS, or XRP – get paid in the crypto you love."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#F97316]" />,
      title: "Seamless Payouts",
      description: "Flexible payout options ensure you get your $MINE directly to your Tangem Wallet, Raven Core, or preferred exchange."
    },
    {
      icon: <Bot className="w-10 h-10 text-[#F97316]" />,
      title: "AI-Powered Optimization",
      description: "MineChain integrates AI-driven algorithms to optimize mining efficiency, reducing power consumption and boosting profits."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black/0 to-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#F97316]/10 text-[#F97316] border-[#F97316]/30 hover:bg-[#F97316]/20">Why Mine With Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🔥 Why Mine with <span className="text-gradient-orange">MineChain?</span> 🔥
          </h2>
          <p className="text-mine-silver text-lg">
            Whether you're running a single 4090 or an entire GPU farm, we provide the most optimized, high-performance mining experience in the game.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-black/30 border-[#F97316]/20 hover:border-[#F97316]/50 transition-all text-white">
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
