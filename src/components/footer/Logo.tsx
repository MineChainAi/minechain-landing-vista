
import { Building } from "lucide-react";

export const Logo = () => {
  return (
    <div>
      <Building className="h-12 w-12 text-white" />
      <div className="mt-4 border-t border-white/10 pt-4">
        <p className="text-mine-silver text-sm font-semibold">
          🚀 Full Stack Miner | AI Compute | Web3 Infrastructure
        </p>
        <p className="mt-2 text-mine-silver text-sm">
          <a 
            href="mailto:dev@minechain.ai" 
            className="hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:dev@minechain.ai?subject=MineChain Inquiry";
            }}
          >
            📩 dev@minechain.ai
          </a> | 🌎 <a 
            href="https://www.minechain.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            www.minechain.ai
          </a>
        </p>
        <p className="mt-2 text-mine-silver text-sm">
          📍 MineChain Datacenter | Florida, USA
        </p>
        <p className="mt-2 text-mine-silver text-sm">
          💡 Powering AI & Blockchain with GPU Intelligence
        </p>
      </div>
    </div>
  );
};
