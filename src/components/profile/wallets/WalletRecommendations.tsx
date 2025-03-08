
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
          imageContent={
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.2912 3.95996L17.5168 11.0368L19.4368 6.82944L27.2912 3.95996Z" fill="#E2761B" stroke="#E2761B" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.7008 3.95996L14.3968 11.1088L12.5632 6.82944L4.7008 3.95996Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23.7344 20.928L21.0432 25.024L26.7968 26.624L28.4544 21.0208L23.7344 20.928Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.56006 21.0208L5.20326 26.624L10.9568 25.024L8.26566 20.928L3.56006 21.0208Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.5952 14.0128L8.9248 16.544L14.6208 16.8L14.3968 10.688L10.5952 14.0128Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.3968 14.0128L17.5424 10.6163L17.5168 16.8L23.2 16.544L21.3968 14.0128Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.9568 25.024L14.2 23.264L11.4 21.0592L10.9568 25.024Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.792 23.264L21.0432 25.024L20.592 21.0592L17.792 23.264Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.0432 25.024L17.792 23.264L18.0992 25.536L18.0608 26.5536L21.0432 25.024Z" fill="#D7C1B3" stroke="#D7C1B3" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.9568 25.024L13.9392 26.5536L13.9136 25.536L14.2 23.264L10.9568 25.024Z" fill="#D7C1B3" stroke="#D7C1B3" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.0032 19.4496L11.3024 18.6304L13.2288 17.7344L14.0032 19.4496Z" fill="#233447" stroke="#233447" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.9888 19.4496L18.7632 17.7344L20.7024 18.6304L17.9888 19.4496Z" fill="#233447" stroke="#233447" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.9568 25.024L11.4256 20.928L8.26566 21.0208L10.9568 25.024Z" fill="#CD6116" stroke="#CD6116" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.5744 20.928L21.0432 25.024L23.7344 21.0208L20.5744 20.928Z" fill="#CD6116" stroke="#CD6116" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23.2 16.544L17.5168 16.8L17.9968 19.4496L18.7712 17.7344L20.7104 18.6304L23.2 16.544Z" fill="#CD6116" stroke="#CD6116" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.3024 18.6304L13.2416 17.7344L14.0032 19.4496L14.4959 16.8L8.9248 16.544L11.3024 18.6304Z" fill="#CD6116" stroke="#CD6116" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.9248 16.544L11.4 21.0592L11.3024 18.6304L8.9248 16.544Z" fill="#E4751F" stroke="#E4751F" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.7104 18.6304L20.592 21.0592L23.2 16.544L20.7104 18.6304Z" fill="#E4751F" stroke="#E4751F" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.4959 16.8L14.0032 19.4496L14.6208 22.7744L14.7392 18.1536L14.4959 16.8Z" fill="#E4751F" stroke="#E4751F" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5168 16.8L17.2863 18.1408L17.3712 22.7744L17.9968 19.4496L17.5168 16.8Z" fill="#E4751F" stroke="#E4751F" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.9968 19.4496L17.3712 22.7744L17.792 23.264L20.592 21.0592L20.7104 18.6304L17.9968 19.4496Z" fill="#F6851B" stroke="#F6851B" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.3024 18.6304L11.4 21.0592L14.2 23.264L14.6208 22.7744L14.0032 19.4496L11.3024 18.6304Z" fill="#F6851B" stroke="#F6851B" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.0608 26.5536L18.0992 25.536L17.8176 25.2864H14.1824L13.9136 25.536L13.9392 26.5536L10.9568 25.024L12.1216 25.9712L14.1568 27.3792H17.8304L19.8784 25.9712L21.0432 25.024L18.0608 26.5536Z" fill="#C0AD9E" stroke="#C0AD9E" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.792 23.264L17.3712 22.7744H14.6208L14.2 23.264L13.9136 25.536L14.1824 25.2864H17.8176L18.0992 25.536L17.792 23.264Z" fill="#161616" stroke="#161616" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M28.032 11.4432L28.9056 7.12L27.2912 3.95996L17.792 10.752L21.3968 14.0128L26.6656 15.6448L27.8304 14.2944L27.3216 13.92L28.1088 13.1584L27.4832 12.672L28.2704 12.0336L28.032 11.4432Z" fill="#763D16" stroke="#763D16" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.0944 7.12L3.968 11.4432L3.7168 12.0336L4.5168 12.672L3.8912 13.1584L4.6784 13.92L4.1696 14.2944L5.3216 15.6448L10.5952 14.0128L14.2 10.752L4.7008 3.95996L3.0944 7.12Z" fill="#763D16" stroke="#763D16" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M26.6656 15.6448L21.3968 14.0128L23.2 16.544L20.592 21.0592L23.7344 21.0208H28.4544L26.6656 15.6448Z" fill="#F6851B" stroke="#F6851B" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.5952 14.0128L5.3216 15.6448L3.56006 21.0208H8.26566L11.4 21.0592L8.9248 16.544L10.5952 14.0128Z" fill="#F6851B" stroke="#F6851B" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5168 16.8L17.792 10.752L19.4368 6.82944H12.5632L14.2 10.752L14.4959 16.8L14.6079 18.1664L14.6208 22.7744H17.3712L17.3968 18.1664L17.5168 16.8Z" fill="#F6851B" stroke="#F6851B" strokeWidth="0.128" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
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
          imageContent={
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0C7.163 0 0 7.163 0 16C0 24.837 7.163 32 16 32C24.837 32 32 24.837 32 16C32 7.163 24.837 0 16 0Z" fill="#0052FF"/>
              <path d="M16.0006 21.6C19.0831 21.6 21.6006 19.0825 21.6006 16C21.6006 12.9175 19.0831 10.4 16.0006 10.4C12.9181 10.4 10.4006 12.9175 10.4006 16C10.4006 19.0825 12.9181 21.6 16.0006 21.6Z" fill="white"/>
            </svg>
          }
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
