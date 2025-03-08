
import React, { useState } from "react";
import { 
  FileText, 
  Download, 
  Search, 
  FileImage, 
  Layout 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DownloadableResource } from "./types/resource.types";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const downloadableResources: DownloadableResource[] = [
  {
    title: "Blockchain Technology Fundamentals",
    type: "document",
    category: "blockchain",
    fileType: "pdf",
    fileSize: "2.4 MB",
    icon: <FileText className="h-5 w-5 text-[#F97316]" />,
    link: "#"
  },
  {
    title: "AI Models Comparison Cheat Sheet",
    type: "cheatsheet",
    category: "ai",
    fileType: "cheatsheet",
    fileSize: "1.1 MB",
    icon: <Layout className="h-5 w-5 text-[#0EA5E9]" />,
    link: "#"
  },
  {
    title: "Mining Hardware Comparison Guide",
    type: "infographic",
    category: "mining",
    fileType: "infographic",
    fileSize: "3.7 MB",
    icon: <FileImage className="h-5 w-5 text-[#F97316]" />,
    link: "#"
  },
  {
    title: "Decentralized Computing Architecture",
    type: "document",
    category: "hosting",
    fileType: "pdf",
    fileSize: "4.2 MB",
    icon: <FileText className="h-5 w-5 text-[#0EA5E9]" />,
    link: "#"
  },
  {
    title: "Smart Contract Security Checklist",
    type: "cheatsheet",
    category: "blockchain",
    fileType: "cheatsheet",
    fileSize: "0.9 MB",
    icon: <Layout className="h-5 w-5 text-[#F97316]" />,
    link: "#"
  },
  {
    title: "Neural Network Types Visualization",
    type: "infographic",
    category: "ai",
    fileType: "infographic",
    fileSize: "2.8 MB",
    icon: <FileImage className="h-5 w-5 text-[#0EA5E9]" />,
    link: "#"
  }
];

export const EducationDownloads = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  
  const filteredResources = downloadableResources.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.fileType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getFileTypeColor = (fileType: string) => {
    switch (fileType) {
      case "pdf": return "bg-red-500/20 text-red-500 border-red-500/30";
      case "cheatsheet": return "bg-green-500/20 text-green-500 border-green-500/30";
      case "infographic": return "bg-blue-500/20 text-blue-500 border-blue-500/30";
      default: return "bg-gray-500/20 text-gray-500 border-gray-500/30";
    }
  };
  
  const getFileTypeIcon = (fileType: string) => {
    switch (fileType) {
      case "pdf": return <FileText className="h-5 w-5" />;
      case "cheatsheet": return <Layout className="h-5 w-5" />;
      case "infographic": return <FileImage className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };
  
  const handleDownload = (resource: DownloadableResource) => {
    toast({
      title: "Download Started",
      description: `Downloading ${resource.title}`,
      duration: 3000,
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-orange">Downloadable</span> Resources
          </h2>
          <p className="text-mine-silver text-lg mb-10">
            Access our collection of PDFs, cheat sheets, and infographics to enhance your learning and keep as references.
          </p>
          
          <div className="relative max-w-md mx-auto mb-10">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-mine-silver" />
            <Input
              placeholder="Search downloadable resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-black/20 border-white/10 text-white placeholder:text-mine-silver/70"
            />
          </div>
        </div>
        
        {filteredResources.length === 0 ? (
          <div className="text-center py-10 text-mine-silver">
            <p>No downloadable resources found matching your criteria.</p>
            <p className="text-sm mt-2">Try adjusting your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <Card 
                key={index} 
                className="bg-black/30 border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#F97316]/5 hover:border-[#F97316]/30 group"
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${getFileTypeColor(resource.fileType)} flex items-center justify-center`}>
                        {getFileTypeIcon(resource.fileType)}
                      </div>
                      <div>
                        <h3 className="text-white font-medium group-hover:text-[#F97316] transition-colors duration-300">
                          {resource.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs uppercase bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-mine-silver capitalize">
                            {resource.fileType}
                          </span>
                          <span className="text-xs text-mine-silver">
                            {resource.fileSize}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-4 bg-black/40 hover:bg-[#F97316]/90 border border-white/10 group-hover:border-[#F97316]/30 flex items-center justify-center gap-2"
                    onClick={() => handleDownload(resource)}
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
