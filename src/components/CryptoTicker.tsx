
import { useEffect, useState } from 'react';

interface CryptoPrice {
  symbol: string;
  price: string;
  change24h: string;
}

export const CryptoTicker = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>([
    { symbol: 'BTC/USD', price: '0.00', change24h: '0.00' },
    { symbol: 'ETH/USD', price: '0.00', change24h: '0.00' },
    { symbol: 'BNB/USD', price: '0.00', change24h: '0.00' }
  ]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ETHUSDT","BNBUSDT"]');
        const data = await response.json();
        
        const formattedPrices = data.map((item: any) => ({
          symbol: item.symbol.replace('USDT', '/USD'),
          price: parseFloat(item.lastPrice).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          }),
          change24h: parseFloat(item.priceChangePercent).toFixed(2)
        }));
        
        setPrices(formattedPrices);
      } catch (error) {
        console.error('Error fetching crypto prices:', error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-mine-dark/80 backdrop-blur border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-2 overflow-x-auto whitespace-nowrap">
          {prices.map((crypto) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};
