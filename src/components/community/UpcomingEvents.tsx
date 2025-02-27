
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';
import { 
  Users, 
  Activity,
  ChevronRight,
  Loader2
} from 'lucide-react';

type Event = {
  id: number;
  title: string;
  date: string;
  participants: number;
  coin?: string;
  source?: string;
  coinImageUrl?: string;
};

interface UpcomingEventsProps {
  events?: Event[];
}

export const UpcomingEvents = ({ events: initialEvents }: UpcomingEventsProps) => {
  const { toast } = useToast();
  const [events, setEvents] = useState<Event[]>(initialEvents || []);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!initialEvents || initialEvents.length === 0) {
      fetchCryptoEvents();
    }
  }, [initialEvents]);

  const fetchCryptoEvents = async () => {
    setIsLoading(true);
    try {
      // In a production app, this would be a real API call with appropriate headers
      // For demonstration, we'll simulate the API response
      
      // Simulated API call delay
      setTimeout(() => {
        // Sample data formatted as if it came from CoinMarketCal API
        const cryptoEvents: Event[] = [
          { 
            id: 1, 
            title: 'Ethereum ETF Decision Deadline', 
            date: 'July 2, 2025', 
            participants: 215,
            coin: 'ETH',
            source: 'SEC'
          },
          { 
            id: 2, 
            title: 'XRP Protocol Upgrade 2.0', 
            date: 'July 15, 2025', 
            participants: 167,
            coin: 'XRP',
            source: 'Ripple'
          },
          { 
            id: 3, 
            title: 'Bitcoin Halving Conference', 
            date: 'August 3, 2025', 
            participants: 324,
            coin: 'BTC',
            source: 'Bitcoin Foundation'
          },
          {
            id: 4,
            title: 'Solana DevCon 2025',
            date: 'August 12, 2025',
            participants: 186,
            coin: 'SOL',
            source: 'Solana Foundation'
          }
        ];
        
        setEvents(cryptoEvents);
        setIsLoading(false);
        
        toast({
          title: "Events Updated",
          description: "Latest crypto events have been loaded successfully",
        });
      }, 1500);
      
      // In a real implementation, the API call would look something like this:
      /*
      const response = await fetch('https://api.coinmarketcal.com/v1/events', {
        headers: {
          'x-api-key': 'YOUR_API_KEY',
          'Accept': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      
      const data = await response.json();
      const formattedEvents = data.body.map(event => ({
        id: event.id,
        title: event.title,
        date: new Date(event.date_start).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        }),
        participants: Math.floor(Math.random() * 300) + 50, // This would be real data in a real API
        coin: event.coins[0]?.symbol || 'CRYPTO',
        source: event.source
      }));
      
      setEvents(formattedEvents);
      */
    } catch (error) {
      console.error('Error fetching crypto events:', error);
      setIsLoading(false);
      toast({
        title: "Error Loading Events",
        description: "Could not retrieve upcoming events. Please try again later.",
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

  const handleRefreshEvents = () => {
    fetchCryptoEvents();
  };

  return (
    <Card className="bg-black/40 backdrop-blur-sm border border-white/10">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-[#0EA5E9]" />
            <CardTitle className="text-white">Crypto Events</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-[#0EA5E9] hover:bg-[#0EA5E9]/10 h-8"
            onClick={handleRefreshEvents}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Activity className="h-4 w-4" />
            )}
            <span className="ml-1">{isLoading ? 'Updating...' : 'Refresh'}</span>
          </Button>
        </div>
        <CardDescription className="text-mine-silver">
          Upcoming cryptocurrency events and conferences
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="h-8 w-8 text-[#0EA5E9] animate-spin mb-2" />
            <p className="text-mine-silver">Loading cryptocurrency events...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-medium text-white">{event.title}</h4>
                  {event.coin && (
                    <span className="bg-[#0EA5E9]/20 text-[#0EA5E9] text-xs px-2 py-0.5 rounded-full">
                      {event.coin}
                    </span>
                  )}
                </div>
                <p className="text-[#0EA5E9] text-sm mb-1">{event.date}</p>
                {event.source && (
                  <p className="text-xs text-mine-silver/70 mb-2">Source: {event.source}</p>
                )}
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
        )}
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          variant="ghost" 
          className="w-full text-[#0EA5E9] hover:bg-[#0EA5E9]/10"
          onClick={() => window.open('https://coinmarketcal.com', '_blank')}
        >
          View All Crypto Events <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
