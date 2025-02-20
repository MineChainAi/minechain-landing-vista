
import { Github, Twitter, MessageSquare } from "lucide-react";

export const Community = () => {
  return (
    <div>
      <h3 className="font-bold mb-4">Community</h3>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
            <MessageSquare className="h-4 w-4" /> Discord
          </a>
        </li>
        <li>
          <a href="https://x.com/caballerzdev" target="_blank" rel="noopener noreferrer" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
            <Twitter className="h-4 w-4" /> Twitter
          </a>
        </li>
        <li>
          <a href="https://github.com/MineChainAi" target="_blank" rel="noopener noreferrer" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};
