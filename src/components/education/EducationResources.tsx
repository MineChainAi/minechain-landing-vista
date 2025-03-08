
import { FileText, FileCode, BookOpen, Video, Download, ExternalLink } from "lucide-react";
import { useState } from "react";

export const EducationResources = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const resources = [
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

  const filteredResources = activeTab === "all" 
    ? resources 
    : resources.filter(resource => resource.category === activeTab);

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
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["all", "ai", "blockchain", "mining", "hosting"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-[#F97316] to-[#0EA5E9] text-white' 
                    : 'bg-black/30 border border-white/10 text-mine-silver hover:border-[#F97316]/30'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
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
                <h3 className="text-white font-medium group-hover:text-[#F97316] transition-colors duration-300">{resource.title}</h3>
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
      </div>
    </section>
  );
};
