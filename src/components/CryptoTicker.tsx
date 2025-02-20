
import { useEffect, useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

interface CryptoPrice {
  symbol: string;
  price: string;
  change24h: string;
}

export const CryptoTicker = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [prices, setPrices] = useState<CryptoPrice[]>([
    { symbol: 'BTC/USD', price: '0.00', change24h: '0.00' },
    { symbol: 'ETH/USD', price: '0.00', change24h: '0.00' },
    { symbol: 'BNB/USD', price: '0.00', change24h: '0.00' },
    { symbol: 'XRP/USD', price: '0.00', change24h: '0.00' }
  ]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('Fetching crypto prices...'); // Debug log
        
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,ripple&vs_currencies=usd&include_24hr_change=true');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        console.log('Response received'); // Debug log
        const data = await response.json();
        console.log('Data parsed:', data); // Debug log
        
        const formattedPrices = [
          {
            symbol: 'BTC/USD',
            price: data.bitcoin.usd.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            }),
            change24h: data.bitcoin.usd_24h_change.toFixed(2)
          },
          {
            symbol: 'ETH/USD',
            price: data.ethereum.usd.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            }),
            change24h: data.ethereum.usd_24h_change.toFixed(2)
          },
          {
            symbol: 'BNB/USD',
            price: data.binancecoin.usd.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            }),
            change24h: data.binancecoin.usd_24h_change.toFixed(2)
          },
          {
            symbol: 'XRP/USD',
            price: data.ripple.usd.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            }),
            change24h: data.ripple.usd_24h_change.toFixed(2)
          }
        ];
        
        setPrices(formattedPrices);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto prices:', error);
        setError((error as Error).message);
        setLoading(false);
        toast({
          variant: "destructive",
          title: "Error fetching prices",
          description: "Could not fetch latest crypto prices. Retrying..."
        });
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);

    return () => clearInterval(interval);
  }, [toast]);

  return (
    <div className="w-full bg-mine-dark/80 backdrop-blur border-b border-white/10 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-2 overflow-x-auto whitespace-nowrap">
          {loading ? (
            <div className="flex items-center gap-2 text-mine-silver">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Loading prices...</span>
            </div>
          ) : error ? (
            <div className="text-red-500 text-sm">
              Error loading prices. Please try again later.
            </div>
          ) : (
            prices.map((crypto) => (
              <div
                key={crypto.symbol}
                className="flex items-center mx-6 text-sm"
              >
                <span className="text-mine-silver font-medium">{crypto.symbol}</span>
                <span className="ml-2 text-white font-bold">{crypto.price}</span>
                <span
                  className={`ml-2 text-xs font-medium ${
                    parseFloat(crypto.change24h) >= 0
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {parseFloat(crypto.change24h) >= 0 ? '+' : ''}
                  {crypto.change24h}%
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
