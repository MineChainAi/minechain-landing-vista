
import { Rss } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const CommunityUpdates = () => {
  const updates = [
    {
      date: "March 2025",
      title: "🔥 Dev NFT Drop is Official! 🔥",
      description: "The Dev NFT Collection drops March 5th & 6th with 589 hand-drawn 1-of-1 NFTs. These are access keys to the MineChain Innovation Hub, mining rewards, and AI-powered incentives."
    },
    {
      date: "February 2025",
      title: "🔥 MineChain x HiveOS – The Future of Scalable Crypto Mining 🔥",
      description: "MineChain is officially integrated with HiveOS, bringing next-level mining automation, AI-driven optimizations, and decentralized compute power to the ecosystem."
    },
    {
      date: "January 2025",
      title: "🚀 COMMUNITY ANNOUNCEMENT: THE EVOLUTION OF DEV CABALLERZ 🚀",
      description: "From the depths of AI compute power and decentralized intelligence, Dev Caballerz entered testnet, pushing the boundaries of global AI development, autonomous intelligence, and community engagement."
    }
  ];

  return (
    <section className="py-16 bg-mine-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <Rss className="w-8 h-8 text-[#F97316]" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
            Community Updates
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {updates.map((update, index) => (
            <Card key={index} className={`bg-black/50 border-white/10 ${index === 0 || index === 1 || index === 2 ? 'border-[#F97316]/50 ring-1 ring-[#F97316]/30' : ''}`}>
              <CardHeader>
                <CardDescription className={index === 0 || index === 1 || index === 2 ? "text-[#F97316] font-bold" : "text-[#F97316]"}>
                  {update.date}
                </CardDescription>
                <CardTitle className="text-white">{update.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-mine-silver">{update.description}</p>
                {index === 0 && (
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <p className="text-[#F97316] text-sm font-semibold">💎 Drop Details:</p>
                    <p className="text-white text-sm mt-1">📅 Dates: March 5th (Whitelist) | March 6th (Public Sale)</p>
                  </div>
                )}
                {index === 1 && (
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <p className="text-[#F97316] text-sm font-semibold">💎 What this means for the MineChain community:</p>
                    <ul className="text-white text-sm mt-1 space-y-1">
                      <li>⚡ Seamless HiveOS Integration – Fully optimized for scalable mining solutions</li>
                      <li>🔗 AI-Powered Mining Management – Automated flight sheets, algorithm switching, and profit maximization</li>
                      <li>💰 Multi-Chain Auto-Swap – Convert mining rewards directly into XRP, BTC, ETH, and stablecoins</li>
                      <li>🛠️ GPU & ASIC Support – Custom-built mining profiles for AI + blockchain workloads</li>
                      <li>🚀 Enterprise-Grade Infrastructure – Run high-performance rigs with 99% uptime & precision control</li>
                    </ul>
                    <p className="text-white text-sm mt-2 italic">This is OG mining at scale—MineChain is not just mining; we're architecting the next evolution of decentralized compute.</p>
                  </div>
                )}
                {index === 2 && (
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <p className="text-[#F97316] text-sm font-semibold">💡 What This Means:</p>
                    <ul className="text-white text-sm mt-1 space-y-1">
                      <li>⚡ AI-driven intelligence expansion – Dev is learning, adapting, and evolving in real time.</li>
                      <li>🌍 Global engagement – Building a decentralized network of Web3 innovators, miners, and AI visionaries.</li>
                      <li>🔗 Compute-backed growth – Powered by AI inference, GPU acceleration, and blockchain infrastructure.</li>
                    </ul>
                    <p className="text-white text-sm mt-2">The foundation is set. The intelligence is growing. The revolution is coming.</p>
                    <p className="text-white text-sm mt-2">🚀 MineChain is leading the future of AI-powered compute, decentralized intelligence, and NFT-backed rewards.</p>
                    <p className="text-white text-sm mt-2">💬 Stay connected. The next phase is approaching.</p>
                    <p className="text-[#F97316] text-sm mt-3 font-medium">#DevCaballerz #AICompute #MineChain #Web3Infrastructure #TestnetEra 💎🔗🚀</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
