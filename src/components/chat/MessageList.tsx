
import { LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface ChatMessage {
  id: number;
  user: string;
  text: string;
  timestamp: string;
}

interface MessageListProps {
  messages: ChatMessage[];
  isAuthenticated: boolean;
  onAuthenticate: () => void;
}

export const MessageList = ({ messages, isAuthenticated, onAuthenticate }: MessageListProps) => {
  return (
    <div className="flex-grow overflow-y-auto p-3 space-y-3">
      {!isAuthenticated && (
        <div className="bg-[#F97316]/10 border border-[#F97316]/30 rounded-md p-3 mb-3">
          <p className="text-white text-sm mb-2">
            You're viewing the demo chat. Connect with your Zoho account for full functionality.
          </p>
          <Button 
            size="sm" 
            className="bg-[#F97316] hover:bg-[#F97316]/80 text-white w-full"
            onClick={onAuthenticate}
          >
            <LogIn className="h-4 w-4 mr-2" /> Authenticate with Zoho
          </Button>
        </div>
      )}
      
      {messages.map((msg) => (
        <div 
          key={msg.id} 
          className={`flex flex-col ${msg.user === 'You' ? 'items-end' : 'items-start'}`}
        >
          <div className="text-xs text-mine-silver mb-1">
            {msg.user} • {msg.timestamp}
            {msg.user === 'Zoho Support' && isAuthenticated && (
              <span className="ml-1 inline-block w-2 h-2 bg-green-500 rounded-full"></span>
            )}
          </div>
          <div className={`px-3 py-2 rounded-lg max-w-[80%] ${
            msg.user === 'You' 
              ? 'bg-[#F97316]/20 text-white' 
              : msg.user === 'System'
                ? 'bg-yellow-500/20 text-yellow-200 border border-yellow-500/30'
                : 'bg-white/10 text-white'
          }`}>
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};
