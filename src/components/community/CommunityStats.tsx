
import { Card, CardContent, CardHeader } from '../ui/card';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';

type CommunityStat = {
  label: string;
  value: string;
  icon: React.ReactNode;
  change: string;
};

interface CommunityStatsProps {
  stats: CommunityStat[];
}

export const CommunityStats = ({ stats }: CommunityStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-black/40 backdrop-blur-sm border border-white/10 hover:border-[#0EA5E9]/50 transition-all">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              {stat.icon}
              <span className="text-[#0EA5E9] bg-[#0EA5E9]/10 px-2 py-1 rounded text-xs font-medium flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" /> {stat.change}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-mine-silver text-sm">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
