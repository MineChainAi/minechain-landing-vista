
import { Button } from '../ui/button';
import { Users } from 'lucide-react';

export const CommunityCallToAction = () => {
  return (
    <div className="mt-12 text-center">
      <div className="inline-flex items-center justify-center p-1 rounded-md bg-gradient-to-r from-[#0EA5E9] to-[#F97316]">
        <Button 
          variant="outline" 
          className="bg-mine-dark border-0 hover:bg-black/50 text-white text-lg px-8 py-6"
          onClick={() => window.open('https://discord.gg/CmTXH8ejf4', '_blank')}
        >
          <Users className="mr-2 h-5 w-5" />
          Join Our Global Community
        </Button>
      </div>
    </div>
  );
};
