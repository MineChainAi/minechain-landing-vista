
export const Logo = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#0EA5E9] blur-sm opacity-50 animate-pulse"></div>
          <img 
            src="/lovable-uploads/e50be236-f783-4a72-b2fa-46b0ded22aee.png" 
            alt="MineChain Logo" 
            className="w-10 h-10 relative z-10"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-xl tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
            MINE<span className="text-[#F97316]">CHAIN</span>
          </h3>
          <span className="text-xs tracking-[0.3em] text-mine-silver uppercase">EST. 2024</span>
        </div>
      </div>
      <p className="text-mine-silver text-sm">
        Empowering the future of decentralized computing with enterprise-grade infrastructure and AI-powered optimization.
      </p>
    </div>
  );
};
