
export const Logo = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          {/* Refined gradient glow with better contrast */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[#F97316]/20 via-[#0EA5E9]/20 to-[#F97316]/20 blur-lg opacity-60"
            style={{ transform: 'scale(1.2)' }}
          />
          <img 
            src="/lovable-uploads/e50be236-f783-4a72-b2fa-46b0ded22aee.png" 
            alt="MineChain Logo" 
            className="w-12 h-12 relative z-10 object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h3 
            className="font-bold text-2xl tracking-wider bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            MINE<span className="font-extrabold">CHAIN</span>
          </h3>
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-4 bg-gradient-to-r from-[#F97316] to-transparent"/>
            <span className="text-[10px] tracking-[0.25em] text-mine-silver uppercase font-light">
              Enterprise Blockchain
            </span>
            <span className="h-[1px] w-4 bg-gradient-to-l from-[#0EA5E9] to-transparent"/>
          </div>
        </div>
      </div>
      <p className="text-mine-silver/80 text-sm font-light leading-relaxed">
        Empowering the future of decentralized computing with enterprise-grade infrastructure and AI-powered optimization.
      </p>
    </div>
  );
};
