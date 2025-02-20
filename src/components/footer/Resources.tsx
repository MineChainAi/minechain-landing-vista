
import { ExternalLink } from "lucide-react";

export const Resources = () => {
  return (
    <div>
      <h3 className="font-bold mb-4">Resources</h3>
      <ul className="space-y-2">
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
        <li>
          <a href="#" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
            API Reference <ExternalLink className="h-3 w-3" />
          </a>
        </li>
      </ul>
    </div>
  );
};
