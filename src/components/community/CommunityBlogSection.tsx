
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Newspaper, Calendar, User, ChevronRight } from 'lucide-react';
import { useToast } from '../ui/use-toast';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl?: string;
};

export const CommunityBlogSection = () => {
  const { toast } = useToast();
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "MineChain's Vision for Decentralized AI Infrastructure",
      excerpt: "Explore how MineChain is building the foundation for truly decentralized AI processing power.",
      date: "June 15, 2025",
      author: "David Chen",
    },
    {
      id: 2,
      title: "Optimizing Mining Efficiency: New Protocols Released",
      excerpt: "Our engineering team has developed new protocols that reduce energy consumption by up to 32%.",
      date: "June 10, 2025",
      author: "Sophia Williams",
    },
    {
      id: 3,
      title: "Community Spotlight: XRP Integration Success Stories",
      excerpt: "Members share their experiences implementing XRP within the MineChain ecosystem.",
      date: "June 5, 2025",
      author: "Marcus Johnson",
    }
  ];

  const handleReadMore = (postId: number) => {
    toast({
      title: "Blog Post Opening",
      description: "This would navigate to the full blog post in a real implementation.",
    });
  };

  return (
    <Card className="bg-black/40 backdrop-blur-sm border border-white/10">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Newspaper className="h-5 w-5 text-[#F97316]" />
          <CardTitle className="text-white">Latest from the Blog</CardTitle>
        </div>
        <CardDescription className="text-mine-silver">
          Stay updated with the latest MineChain news and insights
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <h4 className="font-medium text-white mb-2">{post.title}</h4>
              <p className="text-mine-silver text-sm mb-3">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[#0EA5E9] text-sm gap-4">
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#F97316] hover:bg-[#F97316]/10 p-1 h-8"
                  onClick={() => handleReadMore(post.id)}
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          variant="ghost" 
          className="w-full text-[#F97316] hover:bg-[#F97316]/10"
        >
          View All Blog Posts <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
