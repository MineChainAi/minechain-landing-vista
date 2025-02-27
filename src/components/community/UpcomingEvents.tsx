
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';
import { 
  Users, 
  Activity,
  ChevronRight,
} from 'lucide-react';

type Event = {
  id: number;
  title: string;
  date: string;
  participants: number;
};

interface UpcomingEventsProps {
  events: Event[];
}

export const UpcomingEvents = ({ events }: UpcomingEventsProps) => {
  const { toast } = useToast();

  const handleJoinEvent = (eventId: number) => {
    toast({
      title: "RSVP Confirmed!",
      description: "You've been added to the event. A calendar invite has been sent to your email.",
    });
  };

  return (
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
          {events.map((event) => (
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
  );
};
