
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
      // In a real implementation, this would fetch from an API endpoint
      // For demonstration, we'll simulate a fetch with setTimeout
      setTimeout(() => {
        // Updated trending topics with more current and relevant information
        const topics = [
          { id: 1, title: 'GPU Mining Optimization Techniques', likes: 124, comments: 47 },
          { id: 2, title: 'AI Training on Distributed GPU Clusters', likes: 98, comments: 36 },
          { id: 3, title: 'XRP Ledger Integration Methods', likes: 84, comments: 52 },
          { id: 4, title: 'Energy-Efficient Mining Solutions', likes: 76, comments: 29 }
        ];
        setTrendingTopics(topics);
        setIsLoadingTopics(false);
        toast({
          title: "Topics Updated",
          description: "Latest trending topics have been loaded from the community",
        });
      }, 1500); // Simulate network delay
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
