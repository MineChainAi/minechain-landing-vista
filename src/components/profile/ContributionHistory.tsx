
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, MessageSquare, FileText, Code, Terminal, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContributionHistory = () => {
  // Mock contribution data (in a real app, this would come from an API)
  const contributions = [
    {
      type: "Documentation",
      title: "GPU Mining Optimization Guide",
      date: "May 12, 2024",
      impact: "High",
      status: "Published",
      icon: <FileText className="h-5 w-5 text-[#F97316]" />,
      color: "border-[#F97316]/30 bg-[#F97316]/10"
    },
    {
      type: "Code",
      title: "Mining Pool Connector Library",
      date: "April 28, 2024",
      impact: "Medium",
      status: "Merged",
      icon: <Code className="h-5 w-5 text-[#0EA5E9]" />,
      color: "border-[#0EA5E9]/30 bg-[#0EA5E9]/10"
    },
    {
      type: "Community",
      title: "Mining Workshop Webinar",
      date: "April 15, 2024",
      impact: "Medium",
      status: "Completed",
      icon: <MessageSquare className="h-5 w-5 text-[#F97316]" />,
      color: "border-[#F97316]/30 bg-[#F97316]/10"
    },
    {
      type: "Bug Fix",
      title: "Validator Node Connection Issue",
      date: "March 29, 2024",
      impact: "Critical",
      status: "Resolved",
      icon: <Terminal className="h-5 w-5 text-[#0EA5E9]" />,
      color: "border-[#0EA5E9]/30 bg-[#0EA5E9]/10"
    },
    {
      type: "Documentation",
      title: "Updated Network Security Guidelines",
      date: "March 10, 2024",
      impact: "Medium",
      status: "Published",
      icon: <FileText className="h-5 w-5 text-[#F97316]" />,
      color: "border-[#F97316]/30 bg-[#F97316]/10"
    }
  ];

  // Mock badges/achievements
  const achievements = [
    {
      name: "Early Adopter",
      description: "Joined during the beta phase",
      date: "March 2022",
      icon: <Award className="h-6 w-6 text-[#F97316]" />,
      color: "border-[#F97316]/30 bg-[#F97316]/10"
    },
    {
      name: "Bug Hunter",
      description: "Identified and helped resolve 5+ critical issues",
      date: "October 2022",
      icon: <Terminal className="h-6 w-6 text-[#0EA5E9]" />,
      color: "border-[#0EA5E9]/30 bg-[#0EA5E9]/10"
    },
    {
      name: "Knowledge Contributor",
      description: "Created valuable educational content",
      date: "January 2023",
      icon: <FileText className="h-6 w-6 text-[#F97316]" />,
      color: "border-[#F97316]/30 bg-[#F97316]/10"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Contribution Activity */}
      <Card className="bg-[#0F172A] border-[#1E293B]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center">
                <Activity className="h-5 w-5 mr-2 text-[#F97316]" />
                Contribution History
              </CardTitle>
              <CardDescription className="text-mine-silver">
                Your contributions to the MineChain ecosystem
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" className="border-[#1E293B] text-mine-silver hover:text-white">
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contributions.map((contribution, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg border border-[#1E293B] hover:border-[#F97316]/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className={`p-2 rounded-lg ${contribution.color}`}>
                      {contribution.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{contribution.title}</h3>
                      <p className="text-sm text-mine-silver flex items-center gap-2">
                        <span className={`inline-flex items-center rounded-full ${contribution.color} px-2 py-0.5 text-xs font-medium text-white`}>
                          {contribution.type}
                        </span>
                        <span>{contribution.date}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium 
                      ${
                        contribution.impact === "High" || contribution.impact === "Critical"
                          ? "bg-green-500/20 text-green-500"
                          : "bg-blue-500/20 text-blue-500"
                      }
                    `}>
                      {contribution.impact} Impact
                    </span>
                    <span className="text-xs text-mine-silver mt-1">
                      {contribution.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Button 
            variant="ghost" 
            className="w-full mt-4 text-[#F97316] hover:text-[#F97316] hover:bg-[#F97316]/10"
          >
            View All Contributions
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </CardContent>
      </Card>
      
      {/* Achievements & Badges */}
      <Card className="bg-[#0F172A] border-[#1E293B]">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Award className="h-5 w-5 mr-2 text-[#0EA5E9]" />
            Achievements & Badges
          </CardTitle>
          <CardDescription className="text-mine-silver">
            Recognition for your contributions and milestones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg border ${achievement.color} flex flex-col items-center text-center`}
              >
                <div className="p-3 rounded-full bg-[#0F172A]/50 mb-3">
                  {achievement.icon}
                </div>
                <h3 className="text-white font-medium">{achievement.name}</h3>
                <p className="text-sm text-mine-silver my-1">{achievement.description}</p>
                <p className="text-xs text-mine-silver">Earned: {achievement.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
