
import { useState } from 'react';
import { useToast } from './ui/use-toast';
import { Button } from './ui/button';
import { Calendar, Clock, Users, X } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface MeetingSchedulerProps {
  isOpen: boolean;
  onClose: () => void;
  workspaceId?: string;
}

export const MeetingScheduler = ({ isOpen, onClose, workspaceId }: MeetingSchedulerProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    duration: '30',
    description: '',
    attendees: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.title || !formData.date || !formData.time) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would send the meeting data to Zoho Meeting API
    toast({
      title: "Meeting Scheduled",
      description: `Your meeting "${formData.title}" has been scheduled and attendees have been notified.`,
    });
    
    // Reset form and close modal
    setFormData({
      title: '',
      date: '',
      time: '',
      duration: '30',
      description: '',
      attendees: ''
    });
    onClose();
    
    // Open Zoho Meeting in a new tab
    window.open('https://meeting.zoho.com', '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <Card className="max-w-lg w-full bg-black/90 border border-[#F97316]/30 shadow-lg shadow-[#F97316]/20">
        <CardHeader className="bg-gradient-to-r from-[#F97316]/20 to-[#0EA5E9]/20 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[#F97316]" />
              <CardTitle className="text-white">Schedule a Meeting</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium text-white">Meeting Title</label>
              <Input
                id="title"
                name="title"
                placeholder="Innovation Hub Discussion"
                value={formData.title}
                onChange={handleChange}
                className="bg-black/50 border-white/10 text-white"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium text-white">Date</label>
                <div className="relative">
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-black/50 border-white/10 text-white"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="time" className="text-sm font-medium text-white">Time</label>
                <div className="relative">
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="bg-black/50 border-white/10 text-white"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="duration" className="text-sm font-medium text-white">Duration</label>
              <select
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-white"
                required
              >
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">1 hour</option>
                <option value="90">1.5 hours</option>
                <option value="120">2 hours</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="attendees" className="text-sm font-medium text-white">Attendees (email addresses, comma separated)</label>
              <Input
                id="attendees"
                name="attendees"
                placeholder="colleague@example.com, team@company.com"
                value={formData.attendees}
                onChange={handleChange}
                className="bg-black/50 border-white/10 text-white"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium text-white">Meeting Description</label>
              <Textarea
                id="description"
                name="description"
                placeholder="Briefly describe the purpose of this meeting..."
                value={formData.description}
                onChange={handleChange}
                className="bg-black/50 border-white/10 text-white min-h-[100px]"
              />
            </div>
            
            {workspaceId && (
              <div className="flex items-center gap-2 p-2 rounded bg-[#F97316]/10 border border-[#F97316]/20">
                <Users className="h-4 w-4 text-[#F97316]" />
                <span className="text-sm text-white">This meeting will be associated with workspace: <span className="font-semibold text-[#F97316]">{workspaceId}</span></span>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="border-t border-white/10 py-3 flex justify-between">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="border-white/10 text-white hover:bg-white/10"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-gradient-to-r from-[#F97316] to-[#0EA5E9] hover:opacity-90"
            >
              <Clock className="mr-2 h-4 w-4" /> Schedule Meeting
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
