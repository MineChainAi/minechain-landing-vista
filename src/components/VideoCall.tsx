
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

interface VideoCallProps {
  onClose?: () => void;
}

export const VideoCall = ({ onClose }: VideoCallProps) => {
  const [token, setToken] = useState('');
  const [roomName, setRoomName] = useState('minechain-space-' + Math.random().toString(36).slice(2, 7));
  const [connectionStartTime, setConnectionStartTime] = useState<number>(0);

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
      }
    }, [connectionState, participants.length, tracks]);

    return null;
  };

  useEffect(() => {
    const getToken = async () => {
      setConnectionStartTime(Date.now());
      try {
        const resp = await fetch(
          `https://demo.livekit.cloud/api/token?room=${roomName}&username=user_${Math.random().toString(36).slice(2, 7)}`
        );
        const data = await resp.json();
        setToken(data.token);
      } catch (e) {
        console.error('Failed to get token:', e);
      }
    };
    getToken();
  }, [roomName]);

  if (!token) {
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
        serverUrl="wss://demo.livekit.cloud"
        connect={true}
        video={true}
        audio={true}
      >
        <CallMetrics />
        <VideoConference />
        <ControlBar variation="minimal" />
      </LiveKitRoom>
    </div>
  );
};
