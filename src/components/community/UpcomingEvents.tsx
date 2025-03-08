
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';
import { Activity, ChevronRight, Loader2 } from 'lucide-react';
import { Event, UpcomingEventsProps } from './types/event.types';
import { fetchCryptoEvents, getFallbackEvents } from './services/eventService';
import { EventCard } from './EventCard';
import { EventsLoadingState } from './EventsLoadingState';

export const UpcomingEvents = ({ events: initialEvents }: UpcomingEventsProps) => {
  const { toast } = useToast();
  const [events, setEvents] = useState<Event[]>(initialEvents || []);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!initialEvents || initialEvents.length === 0) {
      handleFetchEvents();
    }
  }, [initialEvents]);

  const handleFetchEvents = async () => {
    setIsLoading(true);
    try {
      const fetchedEvents = await fetchCryptoEvents();
      setEvents(fetchedEvents);
      toast({
        title: "Events Updated",
        description: "Latest crypto events have been loaded from CoinMarketCal",
      });
    } catch (error) {
      // Use fallback events
      const fallbackEvents = getFallbackEvents();
      setEvents(fallbackEvents);
      toast({
        title: "Using Cached Events",
        description: "Could not connect to CoinMarketCal API. Showing cached events.",
        variant: "default"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefreshEvents = () => {
    handleFetchEvents();
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
          <EventsLoadingState />
        ) : (
          <div className="space-y-4">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
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
