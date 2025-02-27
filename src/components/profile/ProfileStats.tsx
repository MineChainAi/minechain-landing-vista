
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Award, Landmark, Shield } from "lucide-react";

interface UserData {
  id: string;
  username: string;
  name: string;
  bio: string;
  avatar: string;
  coverImage: string;
  joinedDate: string;
  location?: string;
  website?: string;
  social?: {
    twitter?: string;
    discord?: string;
    github?: string;
  };
  stats: {
    contributions: number;
    stakeAmount: string;
    miningRewards: string;
    validatorStatus: string;
  };
}

interface ProfileStatsProps {
  userData: UserData;
}

export const ProfileStats = ({ userData }: ProfileStatsProps) => {
  const statItems = [
    {
      label: "Contributions",
      value: userData.stats.contributions,
      icon: <Award className="h-5 w-5 text-[#F97316]" />,
      color: "border-[#F97316]/20 bg-[#F97316]/5"
    },
    {
      label: "Total Staked",
      value: userData.stats.stakeAmount,
      icon: <Landmark className="h-5 w-5 text-[#0EA5E9]" />,
      color: "border-[#0EA5E9]/20 bg-[#0EA5E9]/5"
    },
    {
      label: "Mining Rewards",
      value: userData.stats.miningRewards,
      icon: <Zap className="h-5 w-5 text-[#F97316]" />,
      color: "border-[#F97316]/20 bg-[#F97316]/5"
    },
    {
      label: "Validator Status",
      value: userData.stats.validatorStatus,
      icon: <Shield className="h-5 w-5 text-[#0EA5E9]" />,
      color: "border-[#0EA5E9]/20 bg-[#0EA5E9]/5"
    }
  ];

  return (
    <Card className="bg-[#0F172A] border-[#1E293B]">
      <CardHeader>
        <CardTitle className="text-white text-lg">Profile Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {statItems.map((item, index) => (
          <div key={index} className={`p-4 rounded-lg border ${item.color} flex items-center gap-3`}>
            <div className="p-2 rounded-full bg-[#0F172A]/50">
              {item.icon}
            </div>
            <div>
              <p className="text-mine-silver text-sm">{item.label}</p>
              <p className="text-white font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
