
import { ExternalLink, BookOpen, Newspaper, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export const Resources = () => {
  return (
    <div>
      <h3 className="font-bold mb-4">Resources</h3>
      <ul className="space-y-2">
        <li>
          <Link 
            to="/education"
            className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2 group"
          >
            <BookOpen className="h-3 w-3 group-hover:text-[#F97316] transition-colors duration-300" /> Education Hub
          </Link>
        </li>
        <li>
          <a 
            href="#"
            className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2"
          >
            <Newspaper className="h-3 w-3 text-[#F97316]" /> Blog & News
          </a>
        </li>
        <li>
          <a 
            href="https://discord.gg/CmTXH8ejf4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2"
          >
            <MessageSquare className="h-3 w-3 text-[#0EA5E9]" /> Community Forum
          </a>
        </li>
        <li>
          <a 
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2"
          >
            Documentation <ExternalLink className="h-3 w-3" />
          </a>
        </li>
        <li>
          <a 
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2"
          >
            Whitepaper <ExternalLink className="h-3 w-3" />
          </a>
        </li>
      </ul>
    </div>
  );
};
