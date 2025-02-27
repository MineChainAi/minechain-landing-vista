
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, HardDrive, Cpu, Zap, TrendingUp } from "lucide-react";

export const MiningOverview = () => {
  // Mock mining data (in a real app, this would come from an API)
  const miningStats = {
    hashRate: "342.5 MH/s",
    activeGPUs: 4,
    powerConsumption: "1250W",
    dailyReward: "25.8 MINE",
    weeklyReward: "180.6 MINE",
    monthlyReward: "774.0 MINE"
  };
  
  // Mock mining rig data
  const miningRigs = [
    {
      name: "Main Rig Alpha",
      status: "Active",
      gpus: "3x RTX 4080",
      hashRate: "210.3 MH/s",
      power: "780W",
      temp: "62°C",
      uptime: "43d 12h"
    },
    {
      name: "Secondary Rig",
      status: "Active",
      gpus: "1x RTX 3090",
      hashRate: "132.2 MH/s",
      power: "470W",
      temp: "68°C",
      uptime: "21d 7h"
    }
  ];
  
  // Mock recent mining rewards
  const recentRewards = [
    { date: "Today", amount: "25.8 MINE", status: "Pending" },
    { date: "May 15, 2024", amount: "26.2 MINE", status: "Confirmed" },
    { date: "May 14, 2024", amount: "25.9 MINE", status: "Confirmed" },
    { date: "May 13, 2024", amount: "24.7 MINE", status: "Confirmed" },
    { date: "May 12, 2024", amount: "26.5 MINE", status: "Confirmed" }
  ];

  return (
    <div className="space-y-6">
      {/* Mining Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-[#0F172A] border-[#1E293B]">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-lg flex items-center">
              <HardDrive className="h-5 w-5 mr-2 text-[#F97316]" />
              Active GPUs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">{miningStats.activeGPUs}</div>
            <p className="text-mine-silver text-sm">Units online</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#0F172A] border-[#1E293B]">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-lg flex items-center">
              <Zap className="h-5 w-5 mr-2 text-[#0EA5E9]" />
              Hash Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">{miningStats.hashRate}</div>
            <p className="text-mine-silver text-sm">Current performance</p>
          </CardContent>
        </Card>
        
        <Card className="bg-[#0F172A] border-[#1E293B]">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-lg flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-[#F97316]" />
              Daily Rewards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">{miningStats.dailyReward}</div>
            <p className="text-mine-silver text-sm">Estimated earnings</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Mining Rigs */}
      <Card className="bg-[#0F172A] border-[#1E293B]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white">Mining Rigs</CardTitle>
            <Button variant="outline" size="sm" className="text-[#F97316] border-[#1E293B] hover:bg-[#F97316]/10">
              <Cpu className="h-4 w-4 mr-1" />
              Add Rig
            </Button>
          </div>
          <CardDescription className="text-mine-silver">
            Your active mining hardware and performance metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#1E293B]">
                  <th className="py-3 px-4 text-mine-silver font-medium">Name</th>
                  <th className="py-3 px-4 text-mine-silver font-medium">Status</th>
                  <th className="py-3 px-4 text-mine-silver font-medium">GPUs</th>
                  <th className="py-3 px-4 text-mine-silver font-medium">Hash Rate</th>
                  <th className="py-3 px-4 text-mine-silver font-medium">Power</th>
                  <th className="py-3 px-4 text-mine-silver font-medium">Temp</th>
                  <th className="py-3 px-4 text-mine-silver font-medium">Uptime</th>
                </tr>
              </thead>
              <tbody>
                {miningRigs.map((rig, index) => (
                  <tr key={index} className="border-b border-[#1E293B]">
                    <td className="py-3 px-4 text-white font-medium">{rig.name}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-semibold text-green-500">
                        {rig.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-mine-silver">{rig.gpus}</td>
                    <td className="py-3 px-4 text-mine-silver">{rig.hashRate}</td>
                    <td className="py-3 px-4 text-mine-silver">{rig.power}</td>
                    <td className="py-3 px-4 text-mine-silver">{rig.temp}</td>
                    <td className="py-3 px-4 text-mine-silver">{rig.uptime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      {/* Recent Rewards */}
      <Card className="bg-[#0F172A] border-[#1E293B]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white">Recent Rewards</CardTitle>
            <Button variant="ghost" size="sm" className="text-[#0EA5E9] hover:text-[#0EA5E9] hover:bg-[#0EA5E9]/10">
              View All
              <ArrowUpRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <CardDescription className="text-mine-silver">
            Recent mining rewards and payment history
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentRewards.map((reward, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-[#1E293B] last:border-0">
                <div>
                  <p className="text-white font-medium">{reward.date}</p>
                  <p className="text-mine-silver text-sm">Daily Mining Reward</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">{reward.amount}</p>
                  <p className={`text-xs ${
                    reward.status === "Confirmed" ? "text-green-500" : "text-yellow-500"
                  }`}>
                    {reward.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Projected Rewards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[#0F172A] border-[#1E293B]">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-base">Daily Projection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{miningStats.dailyReward}</div>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-[#F97316] text-sm">+2.1% from yesterday</span>
              <TrendingUp className="h-4 w-4 text-[#F97316]" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#0F172A] border-[#1E293B]">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-base">Weekly Projection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{miningStats.weeklyReward}</div>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-[#0EA5E9] text-sm">+5.3% from last week</span>
              <TrendingUp className="h-4 w-4 text-[#0EA5E9]" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#0F172A] border-[#1E293B]">
          <CardHeader className="pb-2">
            <CardTitle className="text-white text-base">Monthly Projection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{miningStats.monthlyReward}</div>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-[#F97316] text-sm">+8.7% from last month</span>
              <TrendingUp className="h-4 w-4 text-[#F97316]" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
