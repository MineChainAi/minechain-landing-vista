
import { useEffect, useState, useRef } from 'react';
import { Button } from './ui/button';
import { trackCallMetrics } from '../utils/monitoring';
import { toast } from './ui/use-toast';
import { Loader2, CopyIcon, Video, MicOff, Mic, VideoOff, Users } from 'lucide-react';

interface VideoCallProps {
  onClose?: () => void;
}

// Zoho Meeting configuration
const ZOHO_MEETING_API_DOMAIN = 'https://meeting.zoho.com/api/v1';
const ZOHO_CLIENT_ID = '1000.57EGQCIJ62K0G032K193HXE9AJP1ZL';
// In a real implementation, you would store this securely
const ZOHO_CLIENT_SECRET = 'yourZohoClientSecret';
const ZOHO_AUTH_TOKEN = 'yourZohoAuthToken';

export const VideoCall = ({ onClose }: VideoCallProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [meetingUrl, setMeetingUrl] = useState<string | null>(null);
  const [connectionStartTime, setConnectionStartTime] = useState<number>(0);
  const [meetingId, setMeetingId] = useState<string>('');
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [participantCount, setParticipantCount] = useState(1);
  const [connectionQuality, setConnectionQuality] = useState(1); // 1-3, with 3 being best
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();
  
  // Generate a unique meeting name based on the current time and a random string
  const [meetingName] = useState('minechain-meeting-' + Math.random().toString(36).slice(2, 7));

  // Helper to make authenticated API calls to Zoho Meeting
  const callZohoAPI = async (endpoint: string, method: string = 'GET', body?: any) => {
    try {
      // In a real implementation, you would make an API call with proper auth
      console.log(`Calling Zoho API: ${endpoint} (${method})`);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo, we'll just return a success response with mock data
      return {
        success: true,
        data: {
          meetingId: Math.random().toString(36).slice(2, 10),
          joinUrl: `https://meeting.zoho.com/join?key=${Math.random().toString(36).slice(2, 10)}&client_id=${ZOHO_CLIENT_ID}`
        }
      };
    } catch (err) {
      console.error('Zoho API error:', err);
      throw new Error('Failed to communicate with Zoho Meeting API');
    }
  };

  const createMeeting = async () => {
    setIsLoading(true);
    setConnectionStartTime(Date.now());
    
    try {
      // In a real implementation, this would call the Zoho Meeting API
      const response = await callZohoAPI('/meeting', 'POST', {
        topic: meetingName,
        type: 2, // Scheduled meeting
        start_time: new Date().toISOString(),
        duration: 60, // 60 minutes
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        settings: {
          host_video: true,
          participant_video: true,
          join_before_host: true,
          mute_upon_entry: false,
          waiting_room: false
        }
      });

      if (response && response.success) {
        setMeetingId(response.data.meetingId);
        setMeetingUrl(response.data.joinUrl);
        
        // Log metrics for the successful connection
        trackCallMetrics({
          connectionTime: Date.now() - connectionStartTime,
          participantCount: 1, // Initial participant (the host)
          videoEnabled: true,
          audioEnabled: true,
          networkQuality: 3, // Assuming good connection
          provider: 'zoho'
        });

        toast({
          title: "Meeting created",
          description: `Meeting ID: ${response.data.meetingId}`,
        });
        
        // Simulate network quality fluctuations
        intervalRef.current = setInterval(() => {
          const quality = Math.floor(Math.random() * 3) + 1;
          setConnectionQuality(quality);
        }, 30000);

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
      } else {
        throw new Error('Invalid response from Zoho Meeting API');
      }
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

  useEffect(() => {
    createMeeting();
    
    return () => {
      // Cleanup intervals when component unmounts
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [meetingName]);

  // Function to communicate with the Zoho Meeting iframe
  const sendCommandToZohoMeeting = (command: string, value?: any) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      // In a real implementation, you would use the Zoho Meeting API/SDK
      console.log(`Sending command to Zoho Meeting: ${command}`, value);
      
      // Simulate successful command
      return true;
    }
    return false;
  };

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
    const newMicState = !isMicMuted;
    const success = sendCommandToZohoMeeting('toggleAudio', { muted: newMicState });
    
    if (success) {
      setIsMicMuted(newMicState);
      toast({
        title: newMicState ? "Microphone muted" : "Microphone enabled",
      });
      
      // Update call metrics
      trackCallMetrics({
        connectionTime: 0,
        participantCount,
        videoEnabled: !isVideoOff,
        audioEnabled: !newMicState,
        networkQuality: connectionQuality,
        provider: 'zoho'
      });
    }
  };
  
  const toggleVideo = () => {
    const newVideoState = !isVideoOff;
    const success = sendCommandToZohoMeeting('toggleVideo', { disabled: newVideoState });
    
    if (success) {
      setIsVideoOff(newVideoState);
      toast({
        title: newVideoState ? "Camera disabled" : "Camera enabled",
      });
      
      // Update call metrics
      trackCallMetrics({
        connectionTime: 0,
        participantCount,
        videoEnabled: !newVideoState,
        audioEnabled: !isMicMuted,
        networkQuality: connectionQuality,
        provider: 'zoho'
      });
    }
  };

  const endMeeting = () => {
    // In a real implementation, you would call the Zoho Meeting API to end the meeting
    sendCommandToZohoMeeting('endMeeting');
    
    if (onClose) {
      onClose();
    }
  };

  if (error) {
    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center">
        <div className="text-white mb-4">{error}</div>
        <div className="flex space-x-4">
          <Button variant="outline" onClick={() => { setError(null); createMeeting(); }}>
            Try Again
          </Button>
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
        <Button variant="destructive" onClick={endMeeting}>End Meeting</Button>
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
          ref={iframeRef}
          src={meetingUrl}
          className="w-full h-full border-none"
          allow="camera; microphone; fullscreen; speaker; display-capture"
          title="Zoho Meeting"
        />
      </div>
      
      <div className="bg-mine-dark p-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div className="text-white text-sm flex items-center">
            <div className="mr-4">
              Meeting ID: <span className="font-mono">{meetingId}</span>
            </div>
            <div className="flex items-center ml-4 text-mine-silver">
              <Users className="h-4 w-4 mr-1 text-[#0EA5E9]" />
              <span className="text-[#0EA5E9]">{participantCount}</span> participants
            </div>
            <div className="ml-4">
              {/* Connection quality indicator */}
              <div className="flex items-center space-x-1">
                <div className={`h-2 w-2 rounded-full ${connectionQuality >= 1 ? 'bg-[#F97316]' : 'bg-gray-600'}`}></div>
                <div className={`h-2 w-2 rounded-full ${connectionQuality >= 2 ? 'bg-[#F97316]' : 'bg-gray-600'}`}></div>
                <div className={`h-2 w-2 rounded-full ${connectionQuality >= 3 ? 'bg-[#F97316]' : 'bg-gray-600'}`}></div>
              </div>
            </div>
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
