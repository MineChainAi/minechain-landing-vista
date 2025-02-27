
import { useState } from 'react';
import { Button } from './ui/button';
import { VideoCall } from './VideoCall';
import { Video } from 'lucide-react';

export const VideoCallButton = () => {
  const [isCallActive, setIsCallActive] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsCallActive(true)}
        className="fixed bottom-6 right-6 rounded-full p-4 z-40"
      >
        <Video className="w-6 h-6" />
        <span className="ml-2">Join Stream</span>
      </Button>

      {isCallActive && (
        <VideoCall onClose={() => setIsCallActive(false)} />
      )}
    </>
  );
};
