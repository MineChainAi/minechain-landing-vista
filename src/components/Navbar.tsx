
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginButton } from "@/components/auth/LoginButton";
import { ProfileButton } from "@/components/auth/ProfileButton";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const checkLoginStatus = () => {
      const profileExists = localStorage.getItem("minechain_profile_exists") === "true";
      setIsLoggedIn(profileExists);
    };
    
    checkLoginStatus();
    
    window.addEventListener('storage', checkLoginStatus);
    window.addEventListener('login-state-change', checkLoginStatus);
    
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
      window.removeEventListener('login-state-change', checkLoginStatus);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-mine-dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-4">
              <div className="relative">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-[#F97316]/20 via-[#0EA5E9]/20 to-[#F97316]/20 blur-lg opacity-60"
                  style={{ transform: 'scale(1.2)' }}
                />
                <img
                  src="/lovable-uploads/bf49290c-2a09-4f24-9ad1-1a2bf454ddbf.png"
                  alt="MineChain Logo"
                  className="w-8 h-8 relative z-10 object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h3 
                  className="font-bold text-xl tracking-wider bg-gradient-to-r from-[#F97316] via-white to-[#0EA5E9] bg-clip-text text-transparent" 
                  style={{ fontFamily: "'Inter', sans-serif" }}
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
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/marketplace" className="text-mine-silver hover:text-[#F97316] transition-colors">Marketplace</Link>
            <Link to="/hosting" className="text-mine-silver hover:text-[#F97316] transition-colors">Hosting</Link>
            <Link to="/token" className="text-mine-silver hover:text-[#F97316] transition-colors">$MINE Token</Link>
            <Link to="/ai-agent" className="text-mine-silver hover:text-[#F97316] transition-colors">AI Agents</Link>
            <Link to="/realestate" className="text-mine-silver hover:text-[#F97316] transition-colors">Real Estate Mine</Link>
            <Link to="/education" className="text-mine-silver hover:text-[#F97316] transition-colors">Education Hub</Link>
            <Link to="/fishcake" className="text-mine-silver hover:text-[#F97316] transition-colors">Fishcake</Link>
            <Link to="/profile" className="text-mine-silver hover:text-[#F97316] transition-colors">My Profile</Link>
            
            {isLoggedIn ? <ProfileButton /> : <LoginButton />}
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

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="bg-black/50 border border-white/10 px-2 py-4 rounded-lg mt-2 mb-4 flex flex-col gap-4">
              <Link 
                to="/marketplace"
                className="text-mine-silver hover:text-[#F97316] transition-colors px-4 py-2 rounded-md hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link 
                to="/hosting" 
                className="text-mine-silver hover:text-[#F97316] transition-colors px-4 py-2 rounded-md hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hosting
              </Link>
              <Link 
                to="/token" 
                className="text-mine-silver hover:text-[#F97316] transition-colors px-4 py-2 rounded-md hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                $MINE Token
              </Link>
              <Link 
                to="/ai-agent" 
                className="text-mine-silver hover:text-[#F97316] transition-colors px-4 py-2 rounded-md hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI Agents
              </Link>
              <Link 
                to="/realestate" 
                className="text-mine-silver hover:text-[#F97316] transition-colors px-4 py-2 rounded-md hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Real Estate Mine
              </Link>
              <Link 
                to="/education" 
                className="text-mine-silver hover:text-[#F97316] transition-colors px-4 py-2 rounded-md hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Education Hub
              </Link>
              <Link 
                to="/fishcake" 
                className="text-mine-silver hover:text-[#F97316] transition-colors px-4 py-2 rounded-md hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fishcake
              </Link>
              <Link 
                to="/profile" 
                className="text-mine-silver hover:text-[#F97316] transition-colors px-4 py-2 rounded-md hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Profile
              </Link>
              <div className="px-4 py-2">
                {isLoggedIn ? <ProfileButton /> : <LoginButton />}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
