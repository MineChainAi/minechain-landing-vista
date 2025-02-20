
import { Github, Twitter, MessageSquare, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/e50be236-f783-4a72-b2fa-46b0ded22aee.png" 
                alt="MineChain Logo" 
                className="w-8 h-8"
              />
              <h3 className="font-bold">MineChain</h3>
            </div>
            <p className="text-mine-silver text-sm">
              Empowering the future of decentralized computing with enterprise-grade infrastructure and AI-powered optimization.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
                  Documentation <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
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
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" /> Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-mine-silver hover:text-white text-sm inline-flex items-center gap-2">
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
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-mine-silver hover:text-white text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-mine-silver hover:text-white text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-mine-silver hover:text-white text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-mine-silver text-sm">
          © {new Date().getFullYear()} MineChain. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
