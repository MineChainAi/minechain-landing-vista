
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Smile, Paperclip } from 'lucide-react';

interface MessageInputProps {
  isAuthenticated: boolean;
  onSendMessage: (message: string) => void;
}

export const MessageInput = ({ isAuthenticated, onSendMessage }: MessageInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2">
      <Button 
        type="button" 
        variant="ghost" 
        size="icon" 
        className="text-white hover:bg-white/10"
      >
        <Paperclip className="h-4 w-4" />
      </Button>
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={isAuthenticated ? "Message Zoho Cliq..." : "Type your message..."}
        className="flex-grow bg-black/50 border-white/10 text-white placeholder:text-white/50"
      />
      <Button 
        type="button" 
        variant="ghost" 
        size="icon" 
        className="text-white hover:bg-white/10"
      >
        <Smile className="h-4 w-4" />
      </Button>
      <Button 
        type="submit" 
        variant="ghost" 
        size="icon" 
        className="text-[#F97316] hover:bg-[#F97316]/10"
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};
