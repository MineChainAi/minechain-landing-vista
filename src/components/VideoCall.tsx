
import { useEffect, useState } from 'react';
import {
  LiveKitRoom,
  VideoConference,
  ControlBar,
  useTracks,
} from '@livekit/components-react';
import '@livekit/components-styles';
import { Track } from 'livekit-client';
import { Button } from './ui/button';

interface VideoCallProps {
  onClose?: () => void;
}

export const VideoCall = ({ onClose }: VideoCallProps) => {
  const [token, setToken] = useState('');
  const [roomName, setRoomName] = useState('minechain-space-' + Math.random().toString(36).slice(2, 7));

  // In a production app, you would get this token from your server
  // For demo purposes, we're using the LiveKit test server
  useEffect(() => {
    const getToken = async () => {
      try {
        const resp = await fetch(
          `https://demo.livekit.cloud/api/token?room=${roomName}&username=user_${Math.random().toString(36).slice(2, 7)}`
        );
        const data = await resp.json();
        setToken(data.token);
      } catch (e) {
        console.error(e);
      }
    };
    getToken();
  }, [roomName]);

  if (!token) {
    return <div>Loading...</div>;
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
        <VideoConference />
        <ControlBar variation="minimal" />
      </LiveKitRoom>
    </div>
  );
};
