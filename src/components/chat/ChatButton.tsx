
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

interface ChatButtonProps {
  onClick: () => void;
}

export const ChatButton = ({ onClick }: ChatButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 left-6 rounded-full p-4 z-40 bg-gradient-to-r from-[#F97316] to-[#0EA5E9]"
      aria-label="Open chat"
    >
      <MessageSquare className="w-6 h-6" />
    </Button>
  );
};
