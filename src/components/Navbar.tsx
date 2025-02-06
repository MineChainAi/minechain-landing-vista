import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-mine-dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/e50be236-f783-4a72-b2fa-46b0ded22aee.png" 
              alt="MineChain Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold">MineChain</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-mine-silver hover:text-white transition-colors">Features</a>
            <a href="#integration" className="text-mine-silver hover:text-white transition-colors">Integration</a>
            <a href="#" className="text-mine-silver hover:text-white transition-colors">Docs</a>
            <Button variant="outline" className="border-mine-blue text-mine-blue hover:bg-mine-blue hover:text-white">
              Launch App
            </Button>
          </div>
          
          <button className="md:hidden p-2">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};