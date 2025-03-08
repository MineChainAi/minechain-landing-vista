
import { ExternalLink } from "lucide-react";

export const WalletRecommendations = () => {
  return (
    <div className="p-4 rounded-lg border border-[#1E293B] bg-[#0A0F1D]">
      <h3 className="text-white font-medium mb-2">Need a Wallet?</h3>
      <p className="text-mine-silver text-sm mb-4">
        If you don't have a blockchain wallet yet, here are some recommended options:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <WalletRecommendationCard 
          name="Metamask"
          description="For Ethereum & ERC-20 tokens"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
          link="https://metamask.io/"
        />
        
        <WalletRecommendationCard 
          name="Tangem"
          description="Hardware wallet with NFC cards"
          imageUrl="https://tangem.com/media/favicon/favicon.svg"
          link="https://tangem.com/"
        />
        
        <WalletRecommendationCard 
          name="Coinbase Wallet"
          description="Self-custody multi-chain wallet"
          imageUrl="https://www.coinbase.com/assets/favicon/favicon-256.png"
          link="https://www.coinbase.com/wallet"
        />
      </div>
    </div>
  );
};

interface WalletRecommendationCardProps {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

const WalletRecommendationCard = ({ name, description, imageUrl, link }: WalletRecommendationCardProps) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center p-3 rounded-lg border border-[#1E293B] hover:border-[#F97316] hover:bg-[#0F172A]/50 transition-all duration-200 group"
    >
      <div className="mr-3 p-2 rounded-md bg-[#0F172A] border border-[#1E293B] shadow-sm">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-8 h-8"
        />
      </div>
      <div>
        <p className="text-white font-medium group-hover:text-[#F97316] transition-colors">{name}</p>
        <p className="text-xs text-mine-silver flex items-center gap-1">
          {description}
          <ExternalLink className="h-3 w-3 group-hover:text-[#F97316] transition-colors mt-0.5" />
        </p>
      </div>
    </a>
  );
};
