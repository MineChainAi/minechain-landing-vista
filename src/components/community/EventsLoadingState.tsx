
import { Loader2 } from 'lucide-react';

export const EventsLoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <Loader2 className="h-8 w-8 text-[#0EA5E9] animate-spin mb-2" />
      <p className="text-mine-silver">Loading cryptocurrency events...</p>
    </div>
  );
};
