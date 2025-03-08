
import { ExternalLink } from "lucide-react";

export const WalletRecommendations = () => {
  return (
    <div className="p-4 rounded-lg border border-[#1E293B] bg-[#0A0F1D]">
      <h3 className="text-white font-medium mb-2">Need a Wallet?</h3>
      <p className="text-mine-silver text-sm mb-4">
        If you don't have a blockchain wallet yet, here are some recommended options:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a 
          href="https://metamask.io/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center p-3 rounded-lg border border-[#1E293B] hover:border-[#F97316] transition-colors group"
        >
          <div className="mr-3 p-2 rounded-md bg-[#0F172A]">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" 
              alt="Metamask" 
              className="w-8 h-8"
            />
          </div>
          <div>
            <p className="text-white font-medium">Metamask</p>
            <p className="text-xs text-mine-silver flex items-center gap-1">
              For Ethereum & ERC-20 tokens
              <ExternalLink className="h-3 w-3 group-hover:text-[#F97316] transition-colors" />
            </p>
          </div>
        </a>
        
        <a 
          href="https://tangem.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center p-3 rounded-lg border border-[#1E293B] hover:border-[#F97316] transition-colors group"
        >
          <div className="mr-3 p-2 rounded-md bg-[#0F172A]">
            <img 
              src="https://tangem.com/media/favicon/favicon.svg" 
              alt="Tangem Wallet" 
              className="w-8 h-8"
            />
          </div>
          <div>
            <p className="text-white font-medium">Tangem</p>
            <p className="text-xs text-mine-silver flex items-center gap-1">
              Hardware wallet with NFC cards
              <ExternalLink className="h-3 w-3 group-hover:text-[#F97316] transition-colors" />
            </p>
          </div>
        </a>
        
        <a 
          href="https://www.coinbase.com/wallet" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center p-3 rounded-lg border border-[#1E293B] hover:border-[#F97316] transition-colors group"
        >
          <div className="mr-3 p-2 rounded-md bg-[#0F172A]">
            <img 
              src="https://www.coinbase.com/assets/favicon/favicon-256.png" 
              alt="Coinbase Wallet" 
              className="w-8 h-8"
            />
          </div>
          <div>
            <p className="text-white font-medium">Coinbase Wallet</p>
            <p className="text-xs text-mine-silver flex items-center gap-1">
              Self-custody multi-chain wallet
              <ExternalLink className="h-3 w-3 group-hover:text-[#F97316] transition-colors" />
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};
