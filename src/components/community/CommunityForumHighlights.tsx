
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { MessageSquare, Users, TrendingUp, ChevronRight, ExternalLink } from 'lucide-react';
import { useToast } from '../ui/use-toast';

type ForumThread = {
  id: number;
  title: string;
  category: string;
  participants: number;
  replies: number;
  lastActive: string;
};

export const CommunityForumHighlights = () => {
  const { toast } = useToast();
  
  const forumThreads: ForumThread[] = [
    {
      id: 1,
      title: "Best Practices for Scaling Your Mining Operation",
      category: "Mining",
      participants: 28,
      replies: 47,
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      title: "Introducing Yourself: New Community Members Thread",
      category: "General",
      participants: 153,
      replies: 213,
      lastActive: "4 hours ago"
    },
    {
      id: 3,
      title: "Technical Discussion: XRP Ledger Integration Guide",
      category: "Development",
      participants: 42,
      replies: 86,
      lastActive: "6 hours ago"
    }
  ];

  const handleOpenThread = (threadId: number) => {
    toast({
      title: "Opening Forum Thread",
      description: "This would navigate to the forum thread in a real implementation.",
    });
  };

  return (
    <Card className="bg-black/40 backdrop-blur-sm border border-white/10">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-[#0EA5E9]" />
          <CardTitle className="text-white">Active Forum Discussions</CardTitle>
        </div>
        <CardDescription className="text-mine-silver">
          Join the conversation in our community forums
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {forumThreads.map((thread) => (
            <div key={thread.id} className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium text-white">{thread.title}</h4>
                <span className="bg-[#0EA5E9]/20 text-[#0EA5E9] text-xs px-2 py-0.5 rounded-full">
                  {thread.category}
                </span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-4">
                  <span className="text-mine-silver text-sm flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {thread.participants}
                  </span>
                  <span className="text-mine-silver text-sm flex items-center">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    {thread.replies}
                  </span>
                </div>
                <span className="text-[#F97316] text-xs flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {thread.lastActive}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          variant="ghost" 
          className="w-full text-[#0EA5E9] hover:bg-[#0EA5E9]/10"
          onClick={() => window.open('https://discord.gg/CmTXH8ejf4', '_blank')}
        >
          Join Our Discord Community <ExternalLink className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
