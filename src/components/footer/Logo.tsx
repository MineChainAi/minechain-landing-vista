
export const Logo = () => {
  return (
    <div>
      <img 
        src="/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png"
        alt="MineChain AI Logo" 
        className="h-12 w-12 text-white object-cover rounded-full"
      />
      <div className="mt-4 border-t border-white/10 pt-4">
        <p className="text-mine-silver text-sm font-semibold">
          🚀 Full Stake Miners | AI Compute | Web3 Infrastructure
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
