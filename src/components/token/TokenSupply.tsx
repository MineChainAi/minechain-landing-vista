
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const TokenSupply = () => {
  // Updated distribution data to match the new whitepaper (60/40 split)
  const distribution = [
    { name: "Mining Rewards", percentage: 60, color: "bg-[#F97316]" },
    { name: "Ecosystem Development", percentage: 25, color: "bg-[#0EA5E9]" },
    { name: "AI Revenue Burns", percentage: 15, color: "bg-purple-500" },
  ];

  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              $MINE <span className="text-gradient-orange">Tokenomics</span>
            </h2>
            <p className="text-mine-silver text-lg">
              A fair launch, community-mined token with a sustainable emission schedule
              designed for long-term value creation.
            </p>
          </div>
          
          <Card className="bg-black/50 border-white/10 text-white mb-10">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium">Supply Progress</span>
                <span className="text-sm text-mine-silver">
                  <span className="text-[#F97316] font-medium">2,300,000</span> / 23,000,000 Mined
                </span>
              </div>
              <Progress value={10} className="h-3 bg-white/5">
                <div className="h-full bg-gradient-to-r from-[#F97316] to-[#0EA5E9] rounded-full" />
              </Progress>
              <div className="mt-3 text-xs text-mine-silver text-right">
                10% of total supply in circulation
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Card className="bg-black/50 border-white/10 text-white h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Emission Schedule</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#F97316]"></div>
                    <div>
                      <p className="font-medium">Years 1-2: <span className="text-[#F97316]">4M $MINE annually</span></p>
                      <p className="text-sm text-mine-silver">Initial mining phase</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#F97316]"></div>
                    <div>
                      <p className="font-medium">Years 3-4: <span className="text-[#F97316]">2M $MINE annually</span></p>
                      <p className="text-sm text-mine-silver">First halving</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#F97316]"></div>
                    <div>
                      <p className="font-medium">Years 5-6: <span className="text-[#F97316]">1M $MINE annually</span></p>
                      <p className="text-sm text-mine-silver">Second halving</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#F97316]"></div>
                    <div>
                      <p className="font-medium">Continuing pattern</p>
                      <p className="text-sm text-mine-silver">Until max supply is reached</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-black/50 border-white/10 text-white h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Token Distribution</h3>
                <div className="space-y-4">
                  {distribution.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.name}</span>
                        <span>{item.percentage}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full">
                        <div 
                          className={`h-full ${item.color} rounded-full`} 
                          style={{ width: `${item.percentage}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-sm text-mine-silver">
                    <span className="text-[#F97316] font-medium">Fair Launch:</span> No pre-mine, 
                    no VC allocation – 100% mined by the community
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
