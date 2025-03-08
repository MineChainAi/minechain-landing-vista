
export type Event = {
  id: number;
  title: string;
  date: string;
  participants: number;
  coin?: string;
  source?: string;
  coinImageUrl?: string;
};

export interface UpcomingEventsProps {
  events?: Event[];
}
