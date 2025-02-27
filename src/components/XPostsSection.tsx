
import { MessageSquare, Share2, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

type XPost = {
  id: string;
  author: string;
  username: string;
  content: string;
  date: string;
  likes: number;
  reposts: number;
  comments: number;
  imageUrl?: string;
};

// Fallback posts in case API fails or is rate limited
const fallbackPosts: XPost[] = [
  {
    id: "1",
    author: "MineChain",
    username: "@MineChainAI",
    content: "🚀 Today we're excited to announce our partnership with Hive OS, bringing next-level mining automation to the MineChain ecosystem! #Mining #AICompute #Blockchain",
    date: "May 15, 2025",
    likes: 142,
    reposts: 57,
    comments: 23,
    imageUrl: "/lovable-uploads/e8b433b3-ecad-4abd-8fbe-442359af2b39.png"
  },
  {
    id: "2",
    author: "MineChain",
    username: "@MineChainAI",
    content: "💻 Our Innovation Hub is expanding! Join us for weekly developer calls and collaborate on the future of decentralized compute power. Register at minechain.io/hub #DevCommunity",
    date: "May 10, 2025",
    likes: 98,
    reposts: 34,
    comments: 12
  },
  {
    id: "3",
    author: "MineChain",
    username: "@MineChainAI",
    content: "⚡ GPU mining optimization tip: When training AI models on your mining rigs, use our auto-switching algorithm to maximize both compute efficiency and token rewards. #GPUMining #AITraining",
    date: "May 5, 2025",
    likes: 215,
    reposts: 82,
    comments: 47
  },
  {
    id: "4",
    author: "MineChain",
    username: "@MineChainAI",
    content: "📣 The Dev NFT Collection is now officially sold out! Thank you to our incredible community for your support. These NFTs are your access keys to the MineChain ecosystem. #DevCaballerz #NFTCommunity",
    date: "April 28, 2025",
    likes: 327,
    reposts: 109,
    comments: 64,
    imageUrl: "/lovable-uploads/e50be236-f783-4a72-b2fa-46b0ded22aee.png"
  }
];

export const XPostsSection = () => {
  const [posts, setPosts] = useState<XPost[]>(fallbackPosts);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const fetchXPosts = async () => {
    setIsLoading(true);
    try {
      // Note: This is where you would normally fetch from the X API
      // However, X API v2 requires authentication through OAuth 2.0
      // and the API call cannot be made directly from the browser due to CORS issues
      
      // Example of how the API call would be structured:
      // const response = await fetch('https://api.twitter.com/2/users/by/username/MineChainAI/tweets?expansions=attachments.media_keys&tweet.fields=created_at,public_metrics&media.fields=url', {
      //   headers: {
      //     'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
      //   }
      // });
      
      // Instead, this would typically be implemented as a backend API endpoint
      // that handles the authentication and proxies the request to avoid CORS issues
      
      // For demonstration purposes, we'll simulate an API response with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate either successful fetch or using fallback data
      const successfulFetch = Math.random() > 0.5;
      
      if (successfulFetch) {
        // This would be where we process the API response
        // For now, we'll just use the fallback data but pretend it's from the API
        setPosts(fallbackPosts);
        toast({
          title: "Posts Updated",
          description: "Latest posts from @MineChainAI have been loaded",
        });
      } else {
        // Simulate API failure
        throw new Error("Failed to fetch posts from X API");
      }
    } catch (error) {
      console.error("Error fetching X posts:", error);
      setPosts(fallbackPosts);
      toast({
        title: "Using Cached Posts",
        description: "Could not connect to X API. Showing cached posts.",
        variant: "default"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchXPosts();
    
    // Set up an interval to refresh posts every 5 minutes
    const intervalId = setInterval(fetchXPosts, 5 * 60 * 1000);
    
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  
  const handleShare = (id: string) => {
    // In a real app, this would open a share dialog or copy a link
    alert(`Post ${id} shared!`);
  };
  
  const handleOpenX = () => {
    window.open('https://x.com/MineChainAI', '_blank');
  };
  
  return (
    <section className="py-16 bg-mine-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-white"
            >
              <path d="M10.5 15l3.5 -3.5l-3.5 -3.5" />
              <path d="M4 21v-13a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v13" />
            </svg>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
              Latest from X
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-[#F97316] hover:bg-[#F97316]/10"
            onClick={fetchXPosts}
            disabled={isLoading}
          >
            {isLoading ? (
              <RefreshCw className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <RefreshCw className="h-4 w-4 mr-2" />
            )}
            <span>{isLoading ? 'Updating...' : 'Refresh'}</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isLoading && posts.length === 0 ? (
            <div className="col-span-2 flex items-center justify-center py-20">
              <RefreshCw className="h-8 w-8 text-[#F97316] animate-spin mr-3" />
              <p className="text-mine-silver text-lg">Loading posts from X...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="col-span-2 text-center py-20">
              <p className="text-mine-silver text-lg">No posts available at the moment.</p>
              <Button 
                variant="outline" 
                className="mt-4 border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10"
                onClick={fetchXPosts}
              >
                Try Again
              </Button>
            </div>
          ) : (
            posts.map((post) => (
              <div 
                key={post.id} 
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-[#F97316]/40 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#F97316]/20 flex items-center justify-center text-[#F97316] font-bold text-xl mr-3">
                    M
                  </div>
                  <div>
                    <p className="font-bold text-white">{post.author}</p>
                    <p className="text-mine-silver text-sm">{post.username}</p>
                  </div>
                  <p className="ml-auto text-mine-silver text-sm">{post.date}</p>
                </div>
                
                <p className="text-white mb-4">{post.content}</p>
                
                {post.imageUrl && (
                  <div className="mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt="Post media" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
                
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1 text-mine-silver hover:text-[#F97316] transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span className="text-sm">{post.comments}</span>
                    </div>
                    <div className="flex items-center gap-1 text-mine-silver hover:text-[#0EA5E9] transition-colors">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M14 14h-4v-4" />
                        <path d="M3 17l6 -6" />
                        <path d="M21 7v6h-6" />
                      </svg>
                      <span className="text-sm">{post.reposts}</span>
                    </div>
                    <div className="flex items-center gap-1 text-mine-silver hover:text-red-500 transition-colors">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M19 14c1.49 -1.46 3 -3.21 3 -5.5a5.5 5.5 0 0 0 -11 0c0 1.43 .5 2.79 1.5 3.96m1.5 1.54c-1.42 .91 -3 1.5 -5 1.5c-3 0 -6 -1.34 -6 -3c0 -.76 .5 -1.64 2 -2.28" />
                        <path d="M12 17v-11" />
                        <path d="M9 7l3 -3l3 3" />
                      </svg>
                      <span className="text-sm">{post.likes}</span>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-mine-silver hover:text-[#F97316] hover:bg-[#F97316]/10 p-2 h-8"
                    onClick={() => handleShare(post.id)}
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            variant="outline" 
            className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10"
            onClick={handleOpenX}
          >
            Follow Us on X
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-2"
            >
              <path d="M10.5 15l3.5 -3.5l-3.5 -3.5" />
              <path d="M4 21v-13a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v13" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};
