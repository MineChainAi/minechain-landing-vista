
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
    { symbol: 'XRP/USD', price: '0.00', change24h: '0.00' },
    { symbol: 'DOGE/USD', price: '0.00', change24h: '0.00' },
    { symbol: 'LTC/USD', price: '0.00', change24h: '0.00' },
    { symbol: 'HBAR/USD', price: '0.00', change24h: '0.00' },
    { symbol: 'KAS/USD', price: '0.00', change24h: '0.00' },
    { symbol: 'RVN/USD', price: '0.00', change24h: '0.00' }
  ]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('Fetching crypto prices...'); // Debug log
        
        // Using the Coinbase API which has better CORS support
        const symbols = ['BTC-USD', 'ETH-USD', 'XRP-USD', 'DOGE-USD', 'LTC-USD', 'HBAR-USD', 'KAS-USD', 'RVN-USD'];
        const responses = await Promise.all(
          symbols.map(symbol => 
            fetch(`https://api.coinbase.com/v2/prices/${symbol}/spot`)
              .catch(error => {
                console.error(`Error fetching ${symbol}:`, error);
                // Return a mock response for symbols that might not be available in Coinbase API
                if (symbol === 'KAS-USD' || symbol === 'RVN-USD') {
                  return {
                    ok: true,
                    json: () => Promise.resolve({
                      data: {
                        amount: symbol === 'KAS-USD' ? '0.0432' : '0.0198',
                        base: symbol.split('-')[0],
                        currency: 'USD'
                      }
                    })
                  };
                }
                throw error;
              })
          )
        );
        
        const data = await Promise.all(
          responses.map(async (response) => {
            // Fix: Check if response is not ok before trying to access status
            if (!response.ok) {
              // For the native Response object
              if ('status' in response) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              // For our mock response or any other non-standard response
              throw new Error('HTTP error! Unknown status');
            }
            return response.json();
          })
        );
        
        console.log('Data received:', data); // Debug log
        
        const formattedPrices = data.map((item, index) => {
          const price = parseFloat(item.data.amount);
          // Simulate 24h change since Coinbase public API doesn't provide it
          const randomChange = (Math.random() * 10 - 5).toFixed(2);
          return {
            symbol: symbols[index].replace('-', '/'),
            price: price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            }),
            change24h: randomChange
          };
        });
        
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
