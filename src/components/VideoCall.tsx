
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { trackCallMetrics } from '../utils/monitoring';
import { toast } from './ui/use-toast';
import { Loader2, CopyIcon, Video, MicOff, Mic, VideoOff } from 'lucide-react';

interface VideoCallProps {
  onClose?: () => void;
}

// Zoho Meeting configuration
const ZOHO_MEETING_API_DOMAIN = 'https://meeting.zoho.com/api/v1';
const ZOHO_CLIENT_ID = '1000.57EGQCIJ62K0G032K193HXE9AJP1ZL';

export const VideoCall = ({ onClose }: VideoCallProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [meetingUrl, setMeetingUrl] = useState<string | null>(null);
  const [connectionStartTime, setConnectionStartTime] = useState<number>(0);
  const [meetingId, setMeetingId] = useState<string>('');
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [participantCount, setParticipantCount] = useState(1);
  
  // Generate a unique meeting name based on the current time and a random string
  const [meetingName] = useState('minechain-meeting-' + Math.random().toString(36).slice(2, 7));

  useEffect(() => {
    const initializeMeeting = async () => {
      setIsLoading(true);
      setConnectionStartTime(Date.now());
      
      try {
        // In a real implementation, you would make an API call to create a meeting
        // Here we're simulating the API response
        console.log('Creating Zoho meeting with name:', meetingName);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Construct a meeting URL (this would normally come from the API)
        const generatedMeetingId = Math.random().toString(36).slice(2, 10);
        setMeetingId(generatedMeetingId);
        
        // Create a URL that would be used in a real implementation
        const generatedUrl = `https://meeting.zoho.com/join?key=${generatedMeetingId}&client_id=${ZOHO_CLIENT_ID}`;
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
          description: `Meeting ID: ${generatedMeetingId}`,
        });
        
        // Simulate participants joining over time
        const participantInterval = setInterval(() => {
          setParticipantCount(prev => {
            const newCount = prev + 1;
            if (newCount >= 5) {
              clearInterval(participantInterval);
            }
            return newCount;
          });
        }, 20000);
        
        // Cleanup the interval on component unmount
        return () => clearInterval(participantInterval);
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
  
  const toggleMicrophone = () => {
    setIsMicMuted(prev => !prev);
    toast({
      title: isMicMuted ? "Microphone enabled" : "Microphone muted",
    });
    // In a real implementation, you would call the Zoho Meeting API to mute/unmute the microphone
  };
  
  const toggleVideo = () => {
    setIsVideoOff(prev => !prev);
    toast({
      title: isVideoOff ? "Camera enabled" : "Camera disabled",
    });
    // In a real implementation, you would call the Zoho Meeting API to enable/disable the camera
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
      <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 text-[#F97316] animate-spin mb-4" />
        <div className="text-white">Creating Zoho meeting...</div>
        <div className="text-mine-silver mt-2 text-sm">This may take a few moments</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex flex-col">
      <div className="absolute right-4 top-4 z-10 flex space-x-2">
        <Button variant="outline" className="flex items-center gap-1" onClick={handleCopyLink}>
          <CopyIcon className="h-4 w-4" />
          Copy Link
        </Button>
        <Button variant="destructive" onClick={onClose}>Close Meeting</Button>
      </div>
      
      <div className="flex-1 mt-16 relative">
        {isVideoOff && (
          <div className="absolute inset-0 flex items-center justify-center bg-mine-dark z-10">
            <div className="text-white text-center">
              <VideoOff className="h-16 w-16 mx-auto mb-4 text-[#F97316]" />
              <p>Your camera is off</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={toggleVideo}
              >
                Turn On Camera
              </Button>
            </div>
          </div>
        )}
        
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
            Meeting ID: <span className="font-mono">{meetingId}</span>
            <span className="ml-4 text-mine-silver">
              <span className="text-[#0EA5E9]">{participantCount}</span> participants
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full ${isMicMuted ? 'bg-red-500/20 border-red-500/50 text-white' : 'bg-[#0EA5E9]/20 border-[#0EA5E9]/50 text-white'}`}
              onClick={toggleMicrophone}
            >
              {isMicMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full ${isVideoOff ? 'bg-red-500/20 border-red-500/50 text-white' : 'bg-[#0EA5E9]/20 border-[#0EA5E9]/50 text-white'}`}
              onClick={toggleVideo}
            >
              {isVideoOff ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
            </Button>
          </div>
          
          <div className="text-white text-sm">
            Powered by Zoho Meeting
          </div>
        </div>
      </div>
    </div>
  );
};
