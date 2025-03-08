
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Wallet, Copy, Check, Info, ExternalLink, Link } from "lucide-react";

interface WalletsData {
  mine: string;
  ethereum: string;
  bitcoin: string;
  ravencoin: string;
  usdc: string;
  donation: string;
}

interface WalletAddressesProps {
  wallets: WalletsData;
  onWalletsUpdate: (wallets: WalletsData) => void;
}

export const WalletAddresses = ({ wallets, onWalletsUpdate }: WalletAddressesProps) => {
  const { toast } = useToast();
  const [walletData, setWalletData] = useState<WalletsData>(wallets);
  const [isSaving, setIsSaving] = useState(false);
  const [isLinking, setIsLinking] = useState(false);
  const [tangemLinked, setTangemLinked] = useState(false);
  const [copiedStates, setCopiedStates] = useState({
    mine: false,
    ethereum: false,
    bitcoin: false,
    ravencoin: false,
    usdc: false,
    donation: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWalletData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      onWalletsUpdate(walletData);
      setIsSaving(false);
      
      toast({
        title: "Wallet Addresses Updated",
        description: "Your wallet addresses have been saved successfully.",
      });
    }, 800);
  };

  const handleCopy = (type: keyof WalletsData) => {
    if (!walletData[type]) return;
    
    navigator.clipboard.writeText(walletData[type]);
    
    // Set the copied state for this wallet
    setCopiedStates(prev => ({
      ...prev,
      [type]: true
    }));
    
    // Reset after 2 seconds
    setTimeout(() => {
      setCopiedStates(prev => ({
        ...prev,
        [type]: false
      }));
    }, 2000);
    
    toast({
      title: "Address Copied",
      description: `${type.charAt(0).toUpperCase() + type.slice(1)} wallet address copied to clipboard.`,
    });
  };

  const handleLinkTangem = () => {
    setIsLinking(true);
    
    // Simulate connecting to Tangem wallet
    setTimeout(() => {
      // Update all relevant wallet addresses with values from Tangem
      // This is simulated - in a real app, you'd use Tangem SDK to get these values
      const tangemAddresses = {
        ethereum: "0x7a95fA73230a9F49b3F548aaB68fa7dA7f0c054c",
        bitcoin: "bc1q0l9zaqu5v6ygdpruq2jvaqk66u0u3f7pvaxqny",
        ravencoin: "RKXB6bHXL6a5TMuUEFaRxrHpSXS71xjYVf",
        usdc: "0x7a95fA73230a9F49b3F548aaB68fa7dA7f0c054c"
      };
      
      setWalletData(prev => ({
        ...prev,
        ...tangemAddresses
      }));
      
      setIsLinking(false);
      setTangemLinked(true);
      
      toast({
        title: "Tangem Wallet Linked",
        description: "Your Tangem wallet has been successfully linked to your MineChain profile.",
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-[#0F172A] border-[#1E293B]">
        <CardHeader className="pb-3">
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <Wallet className="h-5 w-5 text-[#F97316]" />
            Wallet Addresses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Tangem Wallet Linking Section */}
            <div className="p-4 rounded-lg border border-[#1E293B] bg-[#0A0F1D] mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-[#0F172A]">
                    <img 
                      src="https://tangem.com/media/favicon/favicon.svg" 
                      alt="Tangem Wallet" 
                      className="w-8 h-8"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Tangem Hardware Wallet</h3>
                    <p className="text-xs text-mine-silver mt-1">
                      {tangemLinked 
                        ? "Your Tangem wallet is connected. All relevant addresses have been imported." 
                        : "Connect your Tangem hardware wallet to auto-fill your blockchain addresses"}
                    </p>
                  </div>
                </div>
                
                <Button
                  onClick={handleLinkTangem}
                  className={`${tangemLinked 
                    ? "bg-green-600 hover:bg-green-700" 
                    : "bg-[#F97316] hover:bg-[#F97316]/90"} text-white`}
                  disabled={isLinking || tangemLinked}
                >
                  <Link className="h-4 w-4 mr-2" />
                  {isLinking 
                    ? "Connecting..." 
                    : tangemLinked 
                      ? "Connected" 
                      : "Link Tangem Wallet"}
                </Button>
              </div>
              
              {tangemLinked && (
                <div className="mt-4 pt-4 border-t border-[#1E293B]">
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <Check className="h-3.5 w-3.5" />
                    Tangem wallet addresses have been successfully imported to the fields below
                  </p>
                </div>
              )}
            </div>

            <div className="p-4 rounded-lg border border-[#1E293B] bg-[#0A0F1D]">
              <h3 className="text-white font-medium mb-4">Your Receiving Addresses</h3>
              <p className="text-mine-silver text-sm mb-4">
                Add your blockchain wallet addresses below to receive payments, mining rewards, and tokens.
              </p>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-white text-sm flex items-center gap-1">
                    MineChain Address
                    <span className="relative group cursor-help">
                      <Info className="h-3.5 w-3.5 text-mine-silver" />
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        Your primary MineChain wallet address
                      </span>
                    </span>
                  </label>
                  <div className="flex gap-2">
                    <Input
                      name="mine"
                      value={walletData.mine}
                      onChange={handleChange}
                      placeholder="Enter your MineChain wallet address"
                      className="bg-[#0A0F1D] border-[#1E293B] text-white flex-1"
                    />
                    {walletData.mine && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-[#1E293B] text-mine-silver"
                        onClick={() => handleCopy('mine')}
                      >
                        {copiedStates.mine ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-white text-sm flex items-center gap-1">
                    Ethereum Address
                    <span className="relative group cursor-help">
                      <Info className="h-3.5 w-3.5 text-mine-silver" />
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        Your Ethereum wallet address for ETH and ERC-20 tokens
                      </span>
                    </span>
                  </label>
                  <div className="flex gap-2">
                    <Input
                      name="ethereum"
                      value={walletData.ethereum}
                      onChange={handleChange}
                      placeholder="Enter your Ethereum wallet address"
                      className="bg-[#0A0F1D] border-[#1E293B] text-white flex-1"
                    />
                    {walletData.ethereum && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-[#1E293B] text-mine-silver"
                        onClick={() => handleCopy('ethereum')}
                      >
                        {copiedStates.ethereum ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-white text-sm flex items-center gap-1">
                    Bitcoin Address
                    <span className="relative group cursor-help">
                      <Info className="h-3.5 w-3.5 text-mine-silver" />
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        Your Bitcoin wallet address for BTC payments
                      </span>
                    </span>
                  </label>
                  <div className="flex gap-2">
                    <Input
                      name="bitcoin"
                      value={walletData.bitcoin}
                      onChange={handleChange}
                      placeholder="Enter your Bitcoin wallet address"
                      className="bg-[#0A0F1D] border-[#1E293B] text-white flex-1"
                    />
                    {walletData.bitcoin && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-[#1E293B] text-mine-silver"
                        onClick={() => handleCopy('bitcoin')}
                      >
                        {copiedStates.bitcoin ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm flex items-center gap-1">
                    Ravencoin Address
                    <span className="relative group cursor-help">
                      <Info className="h-3.5 w-3.5 text-mine-silver" />
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        Your Ravencoin (RVN) wallet address
                      </span>
                    </span>
                  </label>
                  <div className="flex gap-2">
                    <Input
                      name="ravencoin"
                      value={walletData.ravencoin}
                      onChange={handleChange}
                      placeholder="Enter your Ravencoin wallet address"
                      className="bg-[#0A0F1D] border-[#1E293B] text-white flex-1"
                    />
                    {walletData.ravencoin && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-[#1E293B] text-mine-silver"
                        onClick={() => handleCopy('ravencoin')}
                      >
                        {copiedStates.ravencoin ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm flex items-center gap-1">
                    USDC Address
                    <span className="relative group cursor-help">
                      <Info className="h-3.5 w-3.5 text-mine-silver" />
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        Your USDC stablecoin wallet address
                      </span>
                    </span>
                  </label>
                  <div className="flex gap-2">
                    <Input
                      name="usdc"
                      value={walletData.usdc}
                      onChange={handleChange}
                      placeholder="Enter your USDC wallet address"
                      className="bg-[#0A0F1D] border-[#1E293B] text-white flex-1"
                    />
                    {walletData.usdc && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-[#1E293B] text-mine-silver"
                        onClick={() => handleCopy('usdc')}
                      >
                        {copiedStates.usdc ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-[#1E293B]">
                  <div className="space-y-2">
                    <label className="text-white text-sm flex items-center gap-1">
                      Donation Address
                      <span className="relative group cursor-help">
                        <Info className="h-3.5 w-3.5 text-mine-silver" />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 px-2 py-1 bg-gray-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                          This address will be shown publicly for donations
                        </span>
                      </span>
                    </label>
                    <div className="flex gap-2">
                      <Input
                        name="donation"
                        value={walletData.donation}
                        onChange={handleChange}
                        placeholder="Enter a wallet address for receiving donations"
                        className="bg-[#0A0F1D] border-[#1E293B] text-white flex-1"
                      />
                      {walletData.donation && (
                        <Button
                          variant="outline"
                          size="icon"
                          className="border-[#1E293B] text-mine-silver"
                          onClick={() => handleCopy('donation')}
                        >
                          {copiedStates.donation ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      )}
                    </div>
                    <p className="text-xs text-mine-silver">
                      This address will be displayed on your public profile for community donations.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <Button
                    className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
                    onClick={handleSave}
                    disabled={isSaving}
                  >
                    {isSaving ? "Saving..." : "Save Wallet Addresses"}
                  </Button>
                </div>
              </div>
            </div>
            
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
