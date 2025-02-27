
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { 
  Users, 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  Award,
  BarChart3,
  ChevronRight,
  Globe,
  Activity,
  TrendingUp,
  Loader2
} from 'lucide-react';

export const CommunityEngagement = () => {
  const { toast } = useToast();
  const [isLoadingTopics, setIsLoadingTopics] = useState(false);
  
  // Mock engagement data
  const communityStats = [
    { label: 'Active Members', value: '1,245', icon: <Users className="h-5 w-5 text-[#0EA5E9]" />, change: '+12%' },
    { label: 'Projects', value: '87', icon: <Award className="h-5 w-5 text-[#F97316]" />, change: '+5%' },
    { label: 'Global Reach', value: '32 countries', icon: <Globe className="h-5 w-5 text-[#0EA5E9]" />, change: '+3' }
  ];
  
  // State for trending topics
  const [trendingTopics, setTrendingTopics] = useState([
    { id: 1, title: 'AI Model Optimization for GPU Clusters', likes: 89, comments: 34 },
    { id: 2, title: 'Decentralized Infrastructure Scaling', likes: 76, comments: 29 },
    { id: 3, title: 'Embedding Quantum Computing in Blockchain', likes: 63, comments: 42 }
  ]);
  
  const upcomingEvents = [
    { id: 1, title: 'AI Compute Architecture Workshop', date: 'June 15, 2025', participants: 78 },
    { id: 2, title: 'Blockchain Innovation Roundtable', date: 'June 22, 2025', participants: 45 },
    { id: 3, title: 'Dev Caballerz Community Meetup', date: 'June 30, 2025', participants: 120 }
  ];
  
  useEffect(() => {
    fetchTrendingTopics();
  }, []);

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
  
  const handleJoinEvent = (eventId: number) => {
    toast({
      title: "RSVP Confirmed!",
      description: "You've been added to the event. A calendar invite has been sent to your email.",
    });
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
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-mine-dark to-black/80">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0EA5E9] via-white to-[#F97316] bg-clip-text text-transparent">
            Community Engagement Hub
          </h2>
          <p className="text-mine-silver max-w-2xl mx-auto">
            Connect, collaborate, and grow with our global community of innovators, developers, and AI enthusiasts.
          </p>
        </div>
        
        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <Card key={index} className="bg-black/40 backdrop-blur-sm border border-white/10 hover:border-[#0EA5E9]/50 transition-all">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  {stat.icon}
                  <span className="text-[#0EA5E9] bg-[#0EA5E9]/10 px-2 py-1 rounded text-xs font-medium flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" /> {stat.change}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-mine-silver text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Trending Topics */}
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
          
          {/* Upcoming Events */}
          <Card className="bg-black/40 backdrop-blur-sm border border-white/10">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-[#0EA5E9]" />
                <CardTitle className="text-white">Upcoming Events</CardTitle>
              </div>
              <CardDescription className="text-mine-silver">
                Connect with the community in real-time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <h4 className="font-medium text-white mb-1">{event.title}</h4>
                    <p className="text-[#0EA5E9] text-sm mb-2">{event.date}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-mine-silver text-sm">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{event.participants} participants</span>
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/80 text-white"
                        onClick={() => handleJoinEvent(event.id)}
                      >
                        RSVP
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <Button 
                variant="ghost" 
                className="w-full text-[#0EA5E9] hover:bg-[#0EA5E9]/10"
                onClick={() => window.open('https://meeting.zoho.com', '_blank')}
              >
                View All Events <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Join Community CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-1 rounded-md bg-gradient-to-r from-[#0EA5E9] to-[#F97316]">
            <Button 
              variant="outline" 
              className="bg-mine-dark border-0 hover:bg-black/50 text-white text-lg px-8 py-6"
              onClick={() => window.open('https://discord.gg/CmTXH8ejf4', '_blank')}
            >
              <Users className="mr-2 h-5 w-5" />
              Join Our Global Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
