
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, GraduationCap, ChevronRight } from "lucide-react";

export const LearningPathways = () => {
  const pathways = [
    {
      title: "Blockchain Fundamentals",
      description: "Learn the core concepts of blockchain technology, consensus mechanisms, and distributed ledgers.",
      icon: <Lightbulb className="h-6 w-6 text-[#F97316]" />,
      color: "from-[#F97316]/20 to-transparent",
      border: "border-[#F97316]/30",
      modules: ["Blockchain Basics", "Consensus Mechanisms", "Smart Contracts", "Cryptocurrencies"],
      level: "Beginner",
      duration: "4 weeks"
    },
    {
      title: "AI & GPU Infrastructure",
      description: "Explore the intersection of AI and blockchain with a focus on GPU infrastructure and computational power.",
      icon: <GraduationCap className="h-6 w-6 text-[#0EA5E9]" />,
      color: "from-[#0EA5E9]/20 to-transparent",
      border: "border-[#0EA5E9]/30",
      modules: ["GPU Architecture", "AI Models", "Mining Software", "Optimization Techniques"],
      level: "Intermediate",
      duration: "6 weeks"
    },
    {
      title: "Enterprise Blockchain Solutions",
      description: "Master the implementation of blockchain technology in enterprise environments and real-world use cases.",
      icon: <Lightbulb className="h-6 w-6 text-[#F97316]" />,
      color: "from-[#F97316]/20 to-transparent",
      border: "border-[#F97316]/30",
      modules: ["Enterprise Integration", "Security Compliance", "Scalability Solutions", "Use Case Development"],
      level: "Advanced",
      duration: "8 weeks"
    }
  ];

  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Learning Pathways</h2>
          <p className="text-mine-silver">Structured educational journeys to master blockchain and AI technologies</p>
        </div>
        <Button variant="ghost" className="text-[#F97316] hover:text-[#F97316] hover:bg-[#F97316]/10">
          View All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pathways.map((pathway, index) => (
          <Card key={index} className="bg-[#0F172A] border-[#1E293B] hover:border-[#F97316]/30 transition-all duration-300 overflow-hidden group">
            <div className={`h-1 w-full bg-gradient-to-r ${pathway.color}`}></div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg bg-[#0F172A] ${pathway.border}`}>
                  {pathway.icon}
                </div>
                <div className="flex space-x-2">
                  <span className="inline-flex items-center rounded-full border border-white/10 px-2.5 py-0.5 text-xs font-semibold text-white">
                    {pathway.level}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/10 px-2.5 py-0.5 text-xs font-semibold text-white">
                    {pathway.duration}
                  </span>
                </div>
              </div>
              <CardTitle className="text-white mt-2">{pathway.title}</CardTitle>
              <CardDescription className="text-mine-silver">
                {pathway.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="text-sm font-medium text-white mb-2">Modules include:</h4>
              <ul className="space-y-1">
                {pathway.modules.map((module, idx) => (
                  <li key={idx} className="text-mine-silver text-sm flex items-center">
                    <ChevronRight className="h-3 w-3 text-[#F97316] mr-1 flex-shrink-0" />
                    {module}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full text-[#F97316] hover:text-[#F97316] hover:bg-[#F97316]/10 group-hover:bg-[#F97316]/5">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
