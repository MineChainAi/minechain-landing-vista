
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Coins, TrendingUp, BarChart4, Zap } from "lucide-react";

export const TokenHoldings = () => {
  // Mock data - in a real app, this would be fetched from Supabase
  const holdings = [
    {
      token: "MINE",
      amount: "2,450",
      value: "$245.00",
      change: "+12.5%",
      positive: true
    },
    {
      token: "RVN",
      amount: "15,000",
      value: "$450.00",
      change: "+3.2%",
      positive: true
    }
  ];

  const stakingRewards = {
    total: "125 MINE",
    pending: "15 MINE",
    nextPayout: "24h 35m",
    apy: "12.5%"
  };

  return (
    <div className="space-y-6">
      <Card className="bg-[#0F172A] border-[#1E293B]">
        <CardHeader className="pb-3">
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <Coins className="h-5 w-5 text-[#F97316]" />
            Token Holdings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {holdings.map((holding, index) => (
              <div key={index} className="p-4 rounded-lg border border-[#1E293B] bg-[#0A0F1D]">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-[#0F172A]">
                      {holding.token === "MINE" ? (
                        <img 
                          src="/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png" 
                          alt="MINE" 
                          className="h-6 w-6 rounded-full"
                        />
                      ) : (
                        <Coins className="h-6 w-6 text-[#0EA5E9]" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-white">${holding.token}</p>
                      <p className="text-xs text-mine-silver">{holding.token === "MINE" ? "MineChain Token" : "Ravencoin"}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-white">{holding.amount}</p>
                    <p className="text-xs text-mine-silver">{holding.value}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <TrendingUp className={`h-4 w-4 ${holding.positive ? "text-green-500" : "text-red-500"}`} />
                    <span className={`text-sm ${holding.positive ? "text-green-500" : "text-red-500"}`}>
                      {holding.change} (24h)
                    </span>
                  </div>
                  <Progress 
                    value={65} 
                    className="h-1.5 w-24 bg-[#1E293B]" 
                    indicatorClassName={holding.token === "MINE" ? "bg-[#F97316]" : "bg-[#0EA5E9]"} 
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 rounded-lg border border-[#1E293B]/50 bg-[#0A0F1D]/50">
            <div className="flex items-center gap-2 mb-3">
              <BarChart4 className="h-5 w-5 text-[#F97316]" />
              <h3 className="font-medium text-white">Staking Overview</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div>
                <p className="text-xs text-mine-silver">Total Staked</p>
                <p className="text-white font-semibold">{stakingRewards.total}</p>
              </div>
              <div>
                <p className="text-xs text-mine-silver">Pending Rewards</p>
                <p className="text-white font-semibold">{stakingRewards.pending}</p>
              </div>
              <div>
                <p className="text-xs text-mine-silver">Next Payout</p>
                <p className="text-white font-semibold">{stakingRewards.nextPayout}</p>
              </div>
              <div>
                <p className="text-xs text-mine-silver">Current APY</p>
                <p className="text-white font-semibold">{stakingRewards.apy}</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-[#1E293B]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4 text-[#F97316]" />
                  <span className="text-sm text-white">Auto-compounding</span>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-500">Active</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
