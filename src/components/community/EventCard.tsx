
import { Users } from 'lucide-react';
import { Event } from './types/event.types';

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
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
      <div className="flex items-center">
        <div className="flex items-center text-mine-silver text-sm">
          <Users className="h-4 w-4 mr-1" />
          <span>{event.participants} participants</span>
        </div>
      </div>
    </div>
  );
};
