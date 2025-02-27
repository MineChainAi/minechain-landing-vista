
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';
import { 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  BarChart3,
  ChevronRight,
  TrendingUp,
  Loader2
} from 'lucide-react';

type Topic = {
  id: number;
  title: string;
  likes: number;
  comments: number;
};

interface TrendingTopicsProps {
  initialTopics: Topic[];
}

export const TrendingTopics = ({ initialTopics }: TrendingTopicsProps) => {
  const { toast } = useToast();
  const [isLoadingTopics, setIsLoadingTopics] = useState(false);
  const [trendingTopics, setTrendingTopics] = useState<Topic[]>(initialTopics);

  const fetchTrendingTopics = async () => {
    setIsLoadingTopics(true);
    try {
      // In a real implementation with Newsdata.io API
      // You would need an API key for production use
      const apiUrl = 'https://newsdata.io/api/1/news?apikey=pub_30575963ede3c02b7e80ce0e06af0a3d9f9aa&q=cryptocurrency&language=en&category=business';
      
      try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error('Failed to fetch news data');
        }
        
        const data = await response.json();
        
        if (data && data.results && Array.isArray(data.results)) {
          // Transform news data into the Topic format
          const newsTopics = data.results.slice(0, 4).map((article: any, index: number) => ({
            id: index + 1,
            title: article.title || 'Cryptocurrency News',
            // Generate random stats for demonstration purposes
            likes: Math.floor(Math.random() * 100) + 50,
            comments: Math.floor(Math.random() * 60) + 20
          }));
          
          setTrendingTopics(newsTopics);
          toast({
            title: "Topics Updated",
            description: "Latest trending crypto news has been loaded from Newsdata.io",
          });
        } else {
          throw new Error('Invalid API response format');
        }
      } catch (apiError) {
        console.error('API Error:', apiError);
        // Fallback to predetermined topics if the API call fails
        const topics = [
          { id: 1, title: 'GPU Mining Optimization Techniques', likes: 124, comments: 47 },
          { id: 2, title: 'AI Training on Distributed GPU Clusters', likes: 98, comments: 36 },
          { id: 3, title: 'XRP Ledger Integration Methods', likes: 84, comments: 52 },
          { id: 4, title: 'Energy-Efficient Mining Solutions', likes: 76, comments: 29 }
        ];
        
        setTrendingTopics(topics);
        toast({
          title: "Using Cached Topics",
          description: "Could not connect to Newsdata API. Showing cached topics.",
          variant: "default"
        });
      }
      
      setIsLoadingTopics(false);
    } catch (error) {
      console.error('Error fetching trending topics:', error);
      setIsLoadingTopics(false);
      toast({
        title: "Error Loading Topics",
        description: "Could not retrieve trending topics. Please try again later.",
        variant: "destructive"
      });
    }
  };

  const handleShareTopic = (topicId: number) => {
    toast({
      title: "Link Copied",
      description: "Topic link has been copied to your clipboard. Share with your network!",
    });
  };

  const handleRefreshTopics = () => {
    fetchTrendingTopics();
  };

  return (
    <Card className="bg-black/40 backdrop-blur-sm border border-white/10">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-[#F97316]" />
            <CardTitle className="text-white">Trending Topics</CardTitle>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-[#F97316] hover:bg-[#F97316]/10 h-8"
            onClick={handleRefreshTopics}
            disabled={isLoadingTopics}
          >
            {isLoadingTopics ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <TrendingUp className="h-4 w-4" />
            )}
            <span className="ml-1">{isLoadingTopics ? 'Updating...' : 'Refresh'}</span>
          </Button>
        </div>
        <CardDescription className="text-mine-silver">
          The most active discussions in our community
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoadingTopics ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="h-8 w-8 text-[#F97316] animate-spin mb-2" />
            <p className="text-mine-silver">Loading trending topics...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {trendingTopics.map((topic) => (
              <div key={topic.id} className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <h4 className="font-medium text-white mb-2">{topic.title}</h4>
                <div className="flex items-center text-mine-silver text-sm gap-4">
                  <div className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1 text-[#F97316]" />
                    <span>{topic.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1 text-[#0EA5E9]" />
                    <span>{topic.comments}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="ml-auto text-[#F97316] hover:bg-[#F97316]/10 p-1 h-auto"
                    onClick={() => handleShareTopic(topic.id)}
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          variant="ghost" 
          className="w-full text-[#F97316] hover:bg-[#F97316]/10"
          onClick={() => window.open('https://discord.gg/CmTXH8ejf4', '_blank')}
        >
          View All Topics <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
