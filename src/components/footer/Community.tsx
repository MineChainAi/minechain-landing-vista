
import { Github, Twitter, MessageSquare, Newspaper, Users } from "lucide-react";

export const Community = () => {
  return (
    <div>
      <h3 className="font-bold mb-4">Community</h3>
      <ul className="space-y-2">
        <li>
          <a href="https://discord.gg/CmTXH8ejf4" target="_blank" rel="noopener noreferrer" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-[#F97316]" /> Discord
          </a>
        </li>
        <li>
          <a href="https://x.com/Minechainai" target="_blank" rel="noopener noreferrer" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
            <Twitter className="h-4 w-4 text-[#0EA5E9]" /> Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/MineChainAi" target="_blank" rel="noopener noreferrer" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </li>
        <li>
          <a href="#" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
            <Newspaper className="h-4 w-4 text-[#F97316]" /> Blog
          </a>
        </li>
        <li>
          <a href="#" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
            <Users className="h-4 w-4 text-[#0EA5E9]" /> Community Events
          </a>
        </li>
      </ul>
    </div>
  );
};
