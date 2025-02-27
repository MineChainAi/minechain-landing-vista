
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, ThumbsUp, Eye, Clock } from "lucide-react";

export const CommunityGuides = () => {
  const guides = [
    {
      title: "Optimizing GPU Performance for Mining",
      author: "MineChain Team",
      authorAvatar: "/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png",
      date: "Mar 15, 2024",
      views: 1245,
      likes: 89,
      readTime: "12 min",
      excerpt: "Learn advanced techniques to maximize your GPU mining efficiency and reduce power consumption while maintaining optimal hash rates."
    },
    {
      title: "Setting Up a Full Node: Complete Guide",
      author: "Validator Council",
      authorAvatar: "/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png",
      date: "Feb 28, 2024",
      views: 2189,
      likes: 156,
      readTime: "15 min",
      excerpt: "Step-by-step instructions for deploying and maintaining a full MineChain node, including security best practices and troubleshooting."
    },
    {
      title: "Tokenomics Explained: A Deep Dive",
      author: "Economics Working Group",
      authorAvatar: "/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png", 
      date: "Jan 18, 2024",
      views: 3751,
      likes: 245,
      readTime: "10 min",
      excerpt: "Understanding MineChain's token distribution, utility, governance mechanisms, and economic model in simple, accessible terms."
    }
  ];

  return (
    <section className="mb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Community Guides</h2>
          <p className="text-mine-silver">Practical knowledge and tutorials created by our community experts</p>
        </div>
        <Button variant="ghost" className="text-[#F97316] hover:text-[#F97316] hover:bg-[#F97316]/10">
          View All <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-6">
        {guides.map((guide, index) => (
          <div 
            key={index}
            className="bg-[#0F172A] border border-[#1E293B] rounded-lg p-6 hover:border-[#F97316]/30 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{guide.title}</h3>
            
            <div className="flex items-center mb-4">
              <img 
                src={guide.authorAvatar} 
                alt={guide.author} 
                className="w-8 h-8 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="text-white text-sm">{guide.author}</p>
                <p className="text-xs text-mine-silver">{guide.date}</p>
              </div>
            </div>
            
            <p className="text-mine-silver mb-4">{guide.excerpt}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="flex items-center text-mine-silver text-sm">
                  <Eye className="h-4 w-4 mr-1" /> {guide.views}
                </span>
                <span className="flex items-center text-mine-silver text-sm">
                  <ThumbsUp className="h-4 w-4 mr-1" /> {guide.likes}
                </span>
                <span className="flex items-center text-mine-silver text-sm">
                  <Clock className="h-4 w-4 mr-1" /> {guide.readTime}
                </span>
              </div>
              
              <Button size="sm" className="bg-[#F97316] hover:bg-[#F97316]/90 text-white">
                Read Guide
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 border border-dashed border-[#F97316]/30 rounded-lg bg-[#F97316]/5 text-center">
        <Users className="h-8 w-8 text-[#F97316] mx-auto mb-3" />
        <h3 className="text-xl font-semibold text-white mb-2">Contribute Your Knowledge</h3>
        <p className="text-mine-silver mb-4 max-w-xl mx-auto">
          Share your expertise with the MineChain community by creating guides, tutorials, or documentation. Community contributors receive recognition and rewards.
        </p>
        <Button className="bg-[#F97316] hover:bg-[#F97316]/90 text-white">
          Submit a Guide
        </Button>
      </div>
    </section>
  );
};
