
import { useEffect, useState } from 'react';
import {
  LiveKitRoom,
  VideoConference,
  ControlBar,
  useTracks,
  useParticipants,
  useConnectionState,
} from '@livekit/components-react';
import '@livekit/components-styles';
import { Track, ConnectionState } from 'livekit-client';
import { Button } from './ui/button';
import { trackCallMetrics } from '../utils/monitoring';
import { toast } from './ui/use-toast';

interface VideoCallProps {
  onClose?: () => void;
}

// Your LiveKit Cloud credentials
const LIVEKIT_SERVER_URL = 'wss://minechain.livekit.cloud';
const LIVEKIT_API_KEY = 'APIs26buG66J5aU';
// WARNING: This is just for demo purposes. In production, you should NEVER expose your API secret in client-side code.
// You should create a secure backend endpoint that generates tokens.

export const VideoCall = ({ onClose }: VideoCallProps) => {
  const [token, setToken] = useState('');
  const [roomName, setRoomName] = useState('minechain-space-' + Math.random().toString(36).slice(2, 7));
  const [connectionStartTime, setConnectionStartTime] = useState<number>(0);
  const [isConnecting, setIsConnecting] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const CallMetrics = () => {
    const participants = useParticipants();
    const connectionState = useConnectionState();
    const tracks = useTracks();

    useEffect(() => {
      if (connectionState === ConnectionState.Connected) {
        const videoTrack = tracks.find(track => track.source === Track.Source.Camera);
        const audioTrack = tracks.find(track => track.source === Track.Source.Microphone);
        
        trackCallMetrics({
          connectionTime: Date.now() - connectionStartTime,
          participantCount: participants.length,
          videoEnabled: !!videoTrack,
          audioEnabled: !!audioTrack,
          networkQuality: 1, // This would be dynamic in production
        });

        toast({
          title: "Connected to space",
          description: `Joined room: ${roomName}`,
        });
      }
    }, [connectionState, participants.length, tracks]);

    return null;
  };

  useEffect(() => {
    const getToken = async () => {
      setIsConnecting(true);
      setConnectionStartTime(Date.now());
      try {
        // For now, we're still using the demo server for token generation
        // In production, replace this with your secure backend endpoint
        const resp = await fetch(
          `https://demo.livekit.cloud/api/token?room=${roomName}&username=user_${Math.random().toString(36).slice(2, 7)}`
        );
        
        if (!resp.ok) {
          throw new Error('Failed to get token');
        }
        
        const data = await resp.json();
        setToken(data.token);
        setError(null);
      } catch (e) {
        console.error('Failed to get token:', e);
        setError('Failed to connect to video space. Please try again later.');
        toast({
          variant: "destructive",
          title: "Connection failed",
          description: "Could not connect to video space. Please try again.",
        });
      } finally {
        setIsConnecting(false);
      }
    };
    getToken();
  }, [roomName]);

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

  if (isConnecting || !token) {
    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
        <div className="text-white">Connecting to video space...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-50">
      <div className="absolute right-4 top-4 z-10">
        <Button variant="destructive" onClick={onClose}>Close Call</Button>
      </div>
      <LiveKitRoom
        token={token}
        serverUrl={LIVEKIT_SERVER_URL}
        connect={true}
        video={true}
        audio={true}
        onError={(error) => {
          console.error('LiveKit connection error:', error);
          toast({
            variant: "destructive",
            title: "Connection error",
            description: error.message || "An error occurred during the video call",
          });
        }}
      >
        <CallMetrics />
        <VideoConference />
        <ControlBar variation="minimal" />
      </LiveKitRoom>
    </div>
  );
};
