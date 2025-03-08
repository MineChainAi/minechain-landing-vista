
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
          imageContent={
            <svg width="32" height="32" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M57.552 114.932C89.3058 114.932 115 89.1867 115 57.466C115 25.7453 89.3058 0 57.552 0C25.7983 0 0.104004 25.7453 0.104004 57.466C0.104004 89.1867 25.7983 114.932 57.552 114.932Z" fill="#00BF7F"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M44.2197 58.9309V56.0009C44.2197 53.5409 46.2197 51.5409 48.6797 51.5409H66.4197C68.8797 51.5409 70.8797 53.5409 70.8797 56.0009V58.9309H44.2197Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M70.8797 58.9307V83.6507C70.8797 86.1107 68.8797 88.1107 66.4197 88.1107H48.6797C46.2197 88.1107 44.2197 86.1107 44.2197 83.6507V58.9307H70.8797ZM57.5497 75.3507C61.1897 75.3507 64.1097 72.4607 64.1097 68.8507C64.1097 65.2407 61.1897 62.3507 57.5497 62.3507C53.9097 62.3507 50.9897 65.2407 50.9897 68.8507C50.9897 72.4607 53.9097 75.3507 57.5497 75.3507Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M57.5499 31.541C48.2299 31.541 40.6899 39.081 40.6899 48.401V51.541H44.2199V48.401C44.2199 41.081 50.2299 35.071 57.5499 35.071C64.8699 35.071 70.8799 41.081 70.8799 48.401V51.541H74.4099V48.401C74.4099 39.081 66.8699 31.541 57.5499 31.541Z" fill="white"/>
            </svg>
          }
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
  imageUrl?: string;
  imageContent?: React.ReactNode;
  link: string;
}

const WalletRecommendationCard = ({ name, description, imageUrl, imageContent, link }: WalletRecommendationCardProps) => {
  // Function to handle link click with proper external link handling
  const handleWalletLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={handleWalletLinkClick}
      className="flex items-center p-3 rounded-lg border border-[#1E293B] hover:border-[#F97316] hover:bg-[#0F172A]/50 transition-all duration-200 group"
      aria-label={`Visit ${name} website`}
    >
      <div className="mr-3 p-2 rounded-md bg-[#0F172A] border border-[#1E293B] shadow-sm flex-shrink-0 w-12 h-12 flex items-center justify-center">
        {imageContent ? (
          imageContent
        ) : (
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-8 h-8 object-contain"
            loading="lazy"
          />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium group-hover:text-[#F97316] transition-colors truncate">{name}</p>
        <div className="text-xs text-mine-silver flex items-center gap-1 truncate">
          <span className="truncate">{description}</span>
          <ExternalLink className="h-3 w-3 flex-shrink-0 group-hover:text-[#F97316] transition-colors mt-0.5" />
        </div>
      </div>
    </a>
  );
};
