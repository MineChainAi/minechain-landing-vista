
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, BookOpen, Video, Download } from "lucide-react";
import { useState } from "react";

export const ResourceLibrary = () => {
  const categories = ["All", "Whitepapers", "Technical Docs", "Research", "Tutorials"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const resources = [
    {
      title: "MineChain Whitepaper v1.0",
      type: "Whitepapers",
      format: "PDF",
      icon: <FileText className="h-5 w-5" />,
      description: "Comprehensive overview of the MineChain architecture, tokenomics, and ecosystem design.",
      date: "June 2023",
      size: "3.2 MB"
    },
    {
      title: "GPU Mining Technical Guide",
      type: "Technical Docs",
      format: "PDF",
      icon: <FileText className="h-5 w-5" />,
      description: "Detailed technical specification for optimizing GPU mining operations on the MineChain network.",
      date: "August 2023",
      size: "5.7 MB"
    },
    {
      title: "AI Compute Marketplace Research",
      type: "Research",
      format: "PDF",
      icon: <FileText className="h-5 w-5" />,
      description: "In-depth analysis of decentralized AI compute marketplaces and competitive landscape.",
      date: "October 2023",
      size: "4.1 MB"
    },
    {
      title: "Setting Up a Validator Node",
      type: "Tutorials",
      format: "Video",
      icon: <Video className="h-5 w-5" />,
      description: "Step-by-step video tutorial on setting up and configuring a MineChain validator node.",
      date: "December 2023",
      duration: "32 min"
    },
    {
      title: "MineChain API Documentation",
      type: "Technical Docs",
      format: "HTML",
      icon: <BookOpen className="h-5 w-5" />,
      description: "Complete API reference for developers building on the MineChain ecosystem.",
      date: "January 2024",
      updated: "Weekly"
    },
    {
      title: "Blockchain Economics Model",
      type: "Research",
      format: "PDF",
      icon: <FileText className="h-5 w-5" />,
      description: "Economic modeling and projections for the MineChain tokenomics and incentive structures.",
      date: "February 2024",
      size: "2.8 MB"
    }
  ];
  
  const filteredResources = activeCategory === "All" 
    ? resources 
    : resources.filter(resource => resource.type === activeCategory);

  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Resource Library</h2>
          <p className="text-mine-silver">Access our collection of whitepapers, technical docs, and research</p>
        </div>
        <Button variant="ghost" className="text-[#0EA5E9] hover:text-[#0EA5E9] hover:bg-[#0EA5E9]/10">
          Browse All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex overflow-x-auto space-x-2 pb-4 mb-6 scrollbar-thin scrollbar-thumb-[#1E293B] scrollbar-track-transparent">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            className={activeCategory === category 
              ? "bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white" 
              : "border-[#1E293B] text-mine-silver hover:text-white"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResources.map((resource, index) => (
          <div 
            key={index}
            className="bg-[#0F172A] border border-[#1E293B] rounded-lg p-4 hover:border-[#0EA5E9]/30 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-[#0F172A] border border-[#0EA5E9]/30 mr-3">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-medium text-white">{resource.title}</h3>
                  <p className="text-xs text-mine-silver flex items-center">
                    <span className="inline-flex items-center rounded-full bg-[#0EA5E9]/10 px-2 py-0.5 text-xs font-medium text-[#0EA5E9] mr-2">
                      {resource.type}
                    </span>
                    <span className="mr-2">{resource.format}</span>
                    <span>{resource.date}</span>
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-mine-silver mb-4">
              {resource.description}
            </p>
            
            <div className="flex justify-between items-center">
              <span className="text-xs text-mine-silver">
                {resource.size || resource.duration || resource.updated}
              </span>
              <Button size="sm" variant="ghost" className="text-[#0EA5E9] hover:text-[#0EA5E9] hover:bg-[#0EA5E9]/10">
                <Download className="h-4 w-4 mr-1" /> Download
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
