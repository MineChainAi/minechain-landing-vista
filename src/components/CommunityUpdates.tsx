
import { Rss } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const CommunityUpdates = () => {
  const updates = [
    {
      date: "March 2024",
      title: "AI Compute Network Launch",
      description: "MineChain's decentralized AI compute network goes live with enterprise-grade infrastructure."
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
            <Card key={index} className="bg-black/50 border-white/10">
              <CardHeader>
                <CardDescription className="text-[#F97316]">{update.date}</CardDescription>
                <CardTitle className="text-white">{update.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-mine-silver">{update.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
