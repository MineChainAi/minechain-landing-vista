
import { useState } from 'react';
import { Button } from './ui/button';
import { VideoCall } from './VideoCall';
import { Video } from 'lucide-react';

interface VideoCallButtonProps {
  className?: string;
}

export const VideoCallButton = ({ className }: VideoCallButtonProps) => {
  const [isCallActive, setIsCallActive] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsCallActive(true)}
        className={className}
      >
        <Video className="w-6 h-6" />
        <span className="ml-2">Start Meeting</span>
      </Button>

      {isCallActive && (
        <VideoCall onClose={() => setIsCallActive(false)} />
      )}
    </>
  );
};
