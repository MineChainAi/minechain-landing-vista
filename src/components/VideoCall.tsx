
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { trackCallMetrics } from '../utils/monitoring';
import { toast } from './ui/use-toast';

interface VideoCallProps {
  onClose?: () => void;
}

// Zoho Meeting configuration
const ZOHO_MEETING_DOMAIN = 'https://meeting.zoho.com';
const ZOHO_CLIENT_ID = '1000.57EGQCIJ62K0G032K193HXE9AJP1ZL';

export const VideoCall = ({ onClose }: VideoCallProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [meetingUrl, setMeetingUrl] = useState<string | null>(null);
  const [connectionStartTime, setConnectionStartTime] = useState<number>(0);
  
  // Generate a unique meeting name based on the current time and a random string
  const [meetingName] = useState('minechain-meeting-' + Math.random().toString(36).slice(2, 7));

  useEffect(() => {
    const initializeMeeting = async () => {
      setIsLoading(true);
      setConnectionStartTime(Date.now());
      
      try {
        // In a production environment, this would be handled by your backend
        // Here we're creating a simple meeting link that anyone can join
        const generatedUrl = `${ZOHO_MEETING_DOMAIN}/meeting/join?key=${meetingName}&client_id=${ZOHO_CLIENT_ID}`;
        
        // In a real implementation, you would:
        // 1. Call your backend API to create a meeting
        // 2. Get back the meeting URL and credentials
        // 3. Set those in the state
        
        setMeetingUrl(generatedUrl);
        
        // Log metrics for the successful connection
        trackCallMetrics({
          connectionTime: Date.now() - connectionStartTime,
          participantCount: 1, // Initial participant (the host)
          videoEnabled: true,
          audioEnabled: true,
          networkQuality: 1,
          provider: 'zoho'
        });

        toast({
          title: "Meeting created",
          description: `Meeting ID: ${meetingName}`,
        });
      } catch (err) {
        console.error('Failed to create Zoho meeting:', err);
        setError('Failed to create video meeting. Please try again later.');
        toast({
          variant: "destructive",
          title: "Meeting creation failed",
          description: "Could not create Zoho meeting. Please try again.",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    initializeMeeting();
  }, [meetingName]);

  const handleCopyLink = () => {
    if (meetingUrl) {
      navigator.clipboard.writeText(meetingUrl);
      toast({
        title: "Meeting link copied",
        description: "Share this link with participants to join the meeting",
      });
    }
  };

  if (error) {
    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center">
        <div className="text-white mb-4">{error}</div>
        <div className="flex space-x-4">
          <Button variant="outline" onClick={() => setError(null)}>Try Again</Button>
          <Button variant="destructive" onClick={onClose}>Close</Button>
        </div>
      </div>
    );
  }

  if (isLoading || !meetingUrl) {
    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
        <div className="text-white">Creating Zoho meeting...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex flex-col">
      <div className="absolute right-4 top-4 z-10 flex space-x-2">
        <Button variant="outline" onClick={handleCopyLink}>Copy Meeting Link</Button>
        <Button variant="destructive" onClick={onClose}>Close Meeting</Button>
      </div>
      
      <div className="flex-1 mt-16">
        <iframe
          src={meetingUrl}
          className="w-full h-full border-none"
          allow="camera; microphone; fullscreen; speaker; display-capture"
          title="Zoho Meeting"
        />
      </div>
      
      <div className="bg-mine-dark p-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div className="text-white text-sm">
            Meeting ID: <span className="font-mono">{meetingName}</span>
          </div>
          <div className="text-white text-sm">
            Powered by Zoho Meeting
          </div>
        </div>
      </div>
    </div>
  );
};
