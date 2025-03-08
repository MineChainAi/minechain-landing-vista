
import { FileText, FileCode, BookOpen, Video, Download, ExternalLink, Lightbulb, GraduationCap, Brain, MessageSquareText } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define types for our resources
type BaseResource = {
  title: string;
  type: string;
  category: string;
  icon: JSX.Element;
  link: string;
};

type RegularResource = BaseResource;

type BeginnerResource = BaseResource & {
  difficulty: "beginner";
};

type Resource = RegularResource | BeginnerResource;

export const EducationResources = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const resources: RegularResource[] = [
    {
      title: "Introduction to $MINE Token Ecosystem",
      type: "document",
      category: "blockchain",
      icon: <FileText className="h-5 w-5 text-[#F97316]" />,
      link: "#"
    },
    {
      title: "AI Agent Architecture Design Principles",
      type: "document",
      category: "ai",
      icon: <FileText className="h-5 w-5 text-[#0EA5E9]" />,
      link: "#"
    },
    {
      title: "Mining Pool Setup Guide",
      type: "guide",
      category: "mining",
      icon: <BookOpen className="h-5 w-5 text-[#F97316]" />,
      link: "#"
    },
    {
      title: "GPU Hosting Optimization Techniques",
      type: "guide",
      category: "hosting",
      icon: <BookOpen className="h-5 w-5 text-[#0EA5E9]" />,
      link: "#"
    },
    {
      title: "KawPow Mining Algorithm Overview",
      type: "document",
      category: "mining",
      icon: <FileText className="h-5 w-5 text-[#F97316]" />,
      link: "#"
    },
    {
      title: "Custom AI Agent API Documentation",
      type: "code",
      category: "ai",
      icon: <FileCode className="h-5 w-5 text-[#0EA5E9]" />,
      link: "#"
    },
    {
      title: "Energy-Efficient Mining Webinar",
      type: "video",
      category: "mining",
      icon: <Video className="h-5 w-5 text-[#F97316]" />,
      link: "#"
    },
    {
      title: "AI Model Training Best Practices",
      type: "guide",
      category: "ai",
      icon: <BookOpen className="h-5 w-5 text-[#0EA5E9]" />,
      link: "#"
    }
  ];

  // New beginner-friendly resources
  const beginnerResources: BeginnerResource[] = [
    {
      title: "Blockchain 101: Understanding the Basics",
      type: "guide",
      category: "blockchain",
      icon: <Lightbulb className="h-5 w-5 text-[#F97316]" />,
      link: "#",
      difficulty: "beginner"
    },
    {
      title: "What is Proof of Work? Simple Explanation",
      type: "guide",
      category: "blockchain",
      icon: <Lightbulb className="h-5 w-5 text-[#F97316]" />,
      link: "#",
      difficulty: "beginner"
    },
    {
      title: "AI Fundamentals: Machine Learning vs Deep Learning",
      type: "guide",
      category: "ai",
      icon: <Brain className="h-5 w-5 text-[#0EA5E9]" />,
      link: "#",
      difficulty: "beginner"
    },
    {
      title: "Crypto Mining for Complete Beginners",
      type: "video",
      category: "mining",
      icon: <GraduationCap className="h-5 w-5 text-[#F97316]" />,
      link: "#",
      difficulty: "beginner"
    },
    {
      title: "How AI and Blockchain Work Together",
      type: "document",
      category: "ai",
      icon: <MessageSquareText className="h-5 w-5 text-[#0EA5E9]" />,
      link: "#",
      difficulty: "beginner"
    },
    {
      title: "GPU Mining vs CPU Mining Explained",
      type: "guide",
      category: "mining",
      icon: <Lightbulb className="h-5 w-5 text-[#F97316]" />,
      link: "#",
      difficulty: "beginner"
    }
  ];

  // Combine all resources
  const allResources: Resource[] = [...resources, ...beginnerResources];

  const filteredResources = activeTab === "all" 
    ? allResources 
    : allResources.filter(resource => resource.category === activeTab);

  // Function to check if a resource is a beginner resource
  const isBeginnerResource = (resource: Resource): resource is BeginnerResource => {
    return 'difficulty' in resource && resource.difficulty === 'beginner';
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black/0 to-black/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Educational <span className="text-gradient-orange">Resources</span>
          </h2>
          <p className="text-mine-silver text-lg mb-10">
            Access our library of documents, guides, code samples, and videos to support your learning journey.
          </p>
          
          <div className="mb-10">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-5 max-w-xl mx-auto bg-black/30">
                {["all", "ai", "blockchain", "mining", "hosting"].map((tab) => (
                  <TabsTrigger 
                    key={tab}
                    value={tab}
                    onClick={() => setActiveTab(tab)}
                    className="text-sm font-medium"
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-[#F97316]/10 border border-[#F97316]/30 rounded-lg p-4 max-w-2xl">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <Lightbulb className="h-5 w-5 text-[#F97316] mr-2" /> 
                New to Blockchain & AI?
              </h3>
              <p className="text-mine-silver text-md">
                We've curated beginner-friendly resources to help you understand the fundamentals. 
                Look for the <span className="text-[#F97316] font-semibold">Beginner</span> tag on resources designed for newcomers.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
          {filteredResources.map((resource, index) => (
            <a 
              key={index} 
              href={resource.link}
              className="bg-black/30 border border-white/10 p-4 rounded-lg flex items-center hover:border-[#F97316]/30 transition-all duration-300 hover:bg-black/40 group"
            >
              <div className="bg-white/5 p-3 rounded-lg mr-4 group-hover:bg-[#F97316]/10 transition-colors duration-300">
                {resource.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-white font-medium group-hover:text-[#F97316] transition-colors duration-300">
                  {resource.title}
                  {isBeginnerResource(resource) && (
                    <span className="ml-2 text-xs bg-[#F97316]/20 text-[#F97316] px-2 py-0.5 rounded-full">
                      Beginner
                    </span>
                  )}
                </h3>
                <p className="text-mine-silver text-sm capitalize">{resource.type}</p>
              </div>
              {resource.type === "document" && (
                <Download className="h-5 w-5 text-mine-silver opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
              {resource.type !== "document" && (
                <ExternalLink className="h-5 w-5 text-mine-silver opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </a>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-black/30 border border-white/10 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Learning Pathways</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-[#F97316]/20 rounded-lg p-4 hover:border-[#F97316]/50 transition-all duration-300 hover:bg-[#F97316]/5">
                <h4 className="font-bold mb-2 text-[#F97316]">Blockchain Basics to Advanced</h4>
                <ul className="text-mine-silver space-y-2">
                  <li className="flex items-center">
                    <span className="bg-[#F97316]/10 text-[#F97316] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">1</span>
                    <span>Blockchain Fundamentals</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#F97316]/10 text-[#F97316] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">2</span>
                    <span>Mining Algorithms</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#F97316]/10 text-[#F97316] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">3</span>
                    <span>Smart Contracts</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#F97316]/10 text-[#F97316] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">4</span>
                    <span>Decentralized Applications</span>
                  </li>
                </ul>
              </div>
              <div className="border border-[#0EA5E9]/20 rounded-lg p-4 hover:border-[#0EA5E9]/50 transition-all duration-300 hover:bg-[#0EA5E9]/5">
                <h4 className="font-bold mb-2 text-[#0EA5E9]">AI & Machine Learning Path</h4>
                <ul className="text-mine-silver space-y-2">
                  <li className="flex items-center">
                    <span className="bg-[#0EA5E9]/10 text-[#0EA5E9] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">1</span>
                    <span>AI Fundamentals</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#0EA5E9]/10 text-[#0EA5E9] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">2</span>
                    <span>Machine Learning Basics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#0EA5E9]/10 text-[#0EA5E9] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">3</span>
                    <span>Neural Networks</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-[#0EA5E9]/10 text-[#0EA5E9] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2">4</span>
                    <span>Advanced AI Applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
