
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-mine-dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="relative">
              {/* Refined gradient glow with better contrast */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-[#F97316]/20 via-[#0EA5E9]/20 to-[#F97316]/20 blur-lg opacity-60"
                style={{ transform: 'scale(1.2)' }}
              />
              <img
                src="/lovable-uploads/e8b433b3-ecad-4abd-8fbe-442359af2b39.png"
                alt="MineChain Logo"
                className="w-8 h-8 relative z-10 object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h3 
                className="font-bold text-xl tracking-wider bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent" 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                MINE<span className="font-extrabold">CHAIN</span>
              </h3>
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-3 bg-gradient-to-r from-[#F97316] to-transparent"/>
                <span className="text-[10px] tracking-[0.25em] text-mine-silver uppercase font-light">
                  Enterprise Blockchain
                </span>
                <span className="h-[1px] w-3 bg-gradient-to-l from-[#0EA5E9] to-transparent"/>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-mine-silver hover:text-white transition-colors">Features</a>
            <a href="#integration" className="text-mine-silver hover:text-white transition-colors">Integration</a>
            <a href="#" className="text-mine-silver hover:text-white transition-colors">Docs</a>
          </div>
          
          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="glass-card px-2 py-4 rounded-lg mt-2 mb-4 flex flex-col gap-4">
              <a 
                href="#features" 
                className="text-mine-silver hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#integration" 
                className="text-mine-silver hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Integration
              </a>
              <a 
                href="#" 
                className="text-mine-silver hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Docs
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
