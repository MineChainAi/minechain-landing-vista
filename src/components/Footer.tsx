import { Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">MineChain</h3>
            <p className="text-mine-silver text-sm">
              Empowering the future of decentralized computing
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-mine-silver hover:text-white text-sm">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-mine-silver hover:text-white text-sm">Whitepaper</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-mine-silver hover:text-white text-sm">Discord</a>
              </li>
              <li>
                <a href="#" className="text-mine-silver hover:text-white text-sm">Twitter</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Developers</h3>
            <a 
              href="#" 
              className="inline-flex items-center text-mine-silver hover:text-white text-sm"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-mine-silver text-sm">
          © {new Date().getFullYear()} MineChain. All rights reserved.
        </div>
      </div>
    </footer>
  );
};