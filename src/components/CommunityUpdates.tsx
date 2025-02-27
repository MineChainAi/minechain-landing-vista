
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
      date: "February 2024",
      title: "NFT Mining Rewards Program",
      description: "Introducing unique NFT rewards for early miners and network contributors."
    },
    {
      date: "January 2024",
      title: "Partnership Announcement",
      description: "Strategic partnership with leading GPU manufacturers for optimal mining performance."
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
            <Card key={index} className={`bg-black/50 border-white/10 ${index === 0 ? 'border-[#F97316]/50 ring-1 ring-[#F97316]/30' : ''}`}>
              <CardHeader>
                <CardDescription className={index === 0 ? "text-[#F97316] font-bold" : "text-[#F97316]"}>
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
