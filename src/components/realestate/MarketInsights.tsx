
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Download, ExternalLink, ArrowUpRight, ArrowDownRight } from "lucide-react";

export const MarketInsights = () => {
  // Market data - this would typically come from an API in a real app
  const marketData = [
    {
      region: "Data Center Market",
      growth: 12.4,
      trend: "up",
      highlights: "Growing demand for cloud services and AI infrastructure driving expansion",
    },
    {
      region: "Energy Infrastructure",
      growth: 8.7,
      trend: "up",
      highlights: "Increasing focus on renewable energy integration and grid modernization",
    },
    {
      region: "Industrial Real Estate",
      growth: -2.3,
      trend: "down",
      highlights: "Post-pandemic adjustment in traditional industrial spaces",
    },
    {
      region: "Tech Hubs",
      growth: 15.9,
      trend: "up",
      highlights: "Major tech companies expanding physical footprint for specialized computing",
    },
  ];

  // Quarterly trends data
  const quarterlyData = [
    { quarter: "Q1 2023", value: 23 },
    { quarter: "Q2 2023", value: 28 },
    { quarter: "Q3 2023", value: 35 },
    { quarter: "Q4 2023", value: 42 },
    { quarter: "Q1 2024", value: 45 },
  ];

  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Market Insights</h2>
          <p className="text-mine-silver">
            Latest trends in industrial and energy infrastructure real estate
          </p>
        </div>
        <Button
          variant="outline"
          className="border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9]/10"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Full Report
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Market Snapshot Card */}
        <Card className="bg-[#0F172A] border border-[#1E293B] col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white text-xl">Market Snapshot</CardTitle>
              <BarChart3 className="h-5 w-5 text-[#0EA5E9]" />
            </div>
            <CardDescription className="text-mine-silver">
              Q1 2024 sector performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {marketData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                  <div>
                    <h4 className="font-medium text-white">{item.region}</h4>
                    <p className="text-xs text-mine-silver mt-1">{item.highlights}</p>
                  </div>
                  <div
                    className={`flex items-center gap-1 ${
                      item.trend === "up" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    <span className="font-bold">{item.growth}%</span>
                    {item.trend === "up" ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Growth Trends */}
        <Card className="bg-[#0F172A] border border-[#1E293B] col-span-1 lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white text-xl">
                Power Infrastructure Growth
              </CardTitle>
              <TrendingUp className="h-5 w-5 text-[#F97316]" />
            </div>
            <CardDescription className="text-mine-silver">
              Quarterly trends in energy capacity and demand
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between space-x-2">
              {quarterlyData.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-12 bg-gradient-to-t from-[#0EA5E9]/30 to-[#F97316]/50 rounded-t"
                    style={{ height: `${item.value * 2.5}px` }}
                  ></div>
                  <span className="text-xs text-mine-silver mt-2">
                    {item.quarter}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-8 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#0EA5E9]"></span>
                  <span className="text-mine-silver">Data Centers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#F97316]"></span>
                  <span className="text-mine-silver">Energy Infrastructure</span>
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-[#0EA5E9] hover:bg-[#0EA5E9]/10"
              >
                <ExternalLink className="h-4 w-4 mr-1" /> View Analysis
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
