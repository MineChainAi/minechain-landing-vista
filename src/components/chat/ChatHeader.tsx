
import { Button } from '@/components/ui/button';
import { MessageSquare, X, Users } from 'lucide-react';

interface ChatHeaderProps {
  isAuthenticated: boolean;
  onToggleChat: () => void;
  onRedirectToZoho: () => void;
}

export const ChatHeader = ({ isAuthenticated, onToggleChat, onRedirectToZoho }: ChatHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-[#F97316]/20 to-[#0EA5E9]/20 border-b border-white/10 flex flex-row items-center justify-between p-3">
      <div className="flex items-center">
        <MessageSquare className="w-5 h-5 text-[#F97316] mr-2" />
        <h3 className="font-semibold text-white">
          {isAuthenticated ? 'Zoho Cliq Chat' : 'Innovation Hub Chat'}
          {isAuthenticated && <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded">Connected</span>}
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-white hover:bg-white/10"
          onClick={onRedirectToZoho}
          title="Open Zoho Cliq"
        >
          <Users className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-white hover:bg-white/10"
          onClick={onToggleChat}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
