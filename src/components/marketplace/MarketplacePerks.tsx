
import { motion } from "framer-motion";
import { ShoppingCart, Coins, CreditCard, Zap } from "lucide-react";

export const MarketplacePerks = () => {
  const perks = [
    {
      icon: <ShoppingCart className="h-10 w-10 text-[#F97316]" />,
      title: "Discounted Hardware",
      description: "Exclusive deals for $MINE token holders & MineChain members",
    },
    {
      icon: <Coins className="h-10 w-10 text-[#0EA5E9]" />,
      title: "Staking Rewards for Vendors",
      description: "Verified vendors can stake $MINE for boosted visibility and premium listings",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-[#10B981]" />,
      title: "Instant Crypto Transactions",
      description: "Buy and sell hardware using RVN, BTC, USDT, or stablecoins",
    },
    {
      icon: <Zap className="h-10 w-10 text-[#8B5CF6]" />,
      title: "On-Chain Verification",
      description: "Prevent scams with smart contract-powered transactions & escrow services",
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] to-black opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Exclusive <span className="text-[#F97316]">Perks</span> for MineChain Community
          </h2>
          <p className="text-lg text-mine-silver">
            Members of the MineChain ecosystem enjoy special benefits when using the marketplace
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-black/40 border border-white/10 rounded-lg p-8 h-full transition-all duration-300 hover:border-[#F97316]/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)]">
                <div className="mb-6">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{perk.title}</h3>
                <p className="text-mine-silver">{perk.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
