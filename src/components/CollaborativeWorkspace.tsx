
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { VideoCallButton } from './VideoCallButton';
import { MeetingScheduler } from './MeetingScheduler';
import { Users, Brain, Lightbulb, Rocket, Calendar } from 'lucide-react';
import { useToast } from './ui/use-toast';

export const CollaborativeWorkspace = () => {
  const [activeSpace, setActiveSpace] = useState<string | null>(null);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState<string | undefined>(undefined);
  const { toast } = useToast();
  
  const workspaces = [
    {
      id: 'brainstorm',
      title: 'Brainstorming Space',
      description: 'Collaborative ideation for innovative concepts',
      icon: <Brain className="h-6 w-6 text-[#F97316]" />,
      members: 12
    },
    {
      id: 'research',
      title: 'Research Lab',
      description: 'Deep dive into AI and blockchain technologies',
      icon: <Lightbulb className="h-6 w-6 text-[#F97316]" />,
      members: 8
    },
    {
      id: 'incubator',
      title: 'Project Incubator',
      description: 'Turn ideas into minimum viable products',
      icon: <Rocket className="h-6 w-6 text-[#F97316]" />,
      members: 15
    }
  ];
  
  const handleJoinSpace = (id: string) => {
    setActiveSpace(id);
    // In a real app, this would connect to the workspace
    toast({
      title: "Joining Workspace",
      description: `You've joined the ${workspaces.find(w => w.id === id)?.title} collaborative space.`,
    });
    console.log(`Joining workspace: ${id}`);
  };
  
  const openScheduler = (workspaceId: string) => {
    setSelectedWorkspace(workspaceId);
    setIsSchedulerOpen(true);
  };

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-black/50 to-mine-dark">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316] to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent">
            Collaborative Innovation Spaces
          </h2>
          <p className="text-mine-silver max-w-2xl mx-auto">
            Join our virtual workspaces with Zoho Meeting integration to collaborate in real-time with team members and AI experts on groundbreaking projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {workspaces.map((workspace) => (
            <Card 
              key={workspace.id} 
              className="bg-black/40 backdrop-blur-sm border border-white/10 hover:border-[#F97316]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]"
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {workspace.icon}
                  <CardTitle className="text-white">{workspace.title}</CardTitle>
                </div>
                <CardDescription className="text-mine-silver">
                  {workspace.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-mine-silver mb-4">
                  <Users className="h-4 w-4 mr-2 text-[#0EA5E9]" />
                  <span>{workspace.members} members active</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleJoinSpace(workspace.id)}
                  className="text-[#F97316] border-[#F97316]/30 hover:bg-[#F97316]/10 hover:text-[#F97316]"
                >
                  Join Space
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openScheduler(workspace.id)}
                  className="text-[#0EA5E9] border-[#0EA5E9]/30 hover:bg-[#0EA5E9]/10 hover:text-[#0EA5E9]"
                >
                  <Calendar className="mr-1 h-4 w-4" />
                  Schedule
                </Button>
                <VideoCallButton className="h-9 px-3" />
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Feature highlight */}
        <div className="mt-20 text-center">
          <div className="inline-block p-2 bg-[#F97316]/20 rounded-full mb-4">
            <Rocket className="h-8 w-8 text-[#F97316]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Ready to Launch Your Next Big Idea?</h3>
          <p className="text-mine-silver max-w-xl mx-auto mb-6">
            Our virtual collaboration spaces powered by Zoho Meetings provide the perfect environment to bring your innovation to life.
          </p>
        </div>
      </div>
      
      {/* Meeting Scheduler Modal */}
      <MeetingScheduler 
        isOpen={isSchedulerOpen} 
        onClose={() => setIsSchedulerOpen(false)} 
        workspaceId={selectedWorkspace}
      />
    </section>
  );
};
