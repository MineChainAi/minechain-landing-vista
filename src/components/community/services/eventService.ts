
import { Event } from '../types/event.types';
import { toast } from '@/hooks/use-toast';

export const fetchCryptoEvents = async (): Promise<Event[]> => {
  try {
    // Real API call to CoinMarketCal
    const apiKey = 't5q8OcZZr11UkzP9tMSp95dTUKh9sl7P4esSYHEr';
    
    try {
      const response = await fetch('https://api.coinmarketcal.com/v1/events', {
        headers: {
          'x-api-key': apiKey,
          'Accept': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      
      const data = await response.json();
      
      // Check if we have valid data
      if (data && data.body && Array.isArray(data.body)) {
        return data.body.slice(0, 4).map((event: any) => ({
          id: event.id || Math.random().toString(36).substr(2, 9),
          title: event.title['en'] || 'Crypto Event',
          date: new Date(event.date_start).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }),
          participants: Math.floor(Math.random() * 300) + 50, // Simulated participants count
          coin: event.coins && event.coins.length > 0 ? event.coins[0].symbol : 'CRYPTO',
          source: event.source || 'CoinMarketCal'
        }));
      } else {
        // If the API doesn't return the expected format, throw error
        throw new Error('Invalid API response format');
      }
    } catch (apiError) {
      console.error('API Error:', apiError);
      throw apiError;
    }
  } catch (error) {
    console.error('Error in fetchCryptoEvents:', error);
    throw error;
  }
};

export const getFallbackEvents = (): Event[] => {
  return [
    { 
      id: 1, 
      title: 'Ethereum ETF Decision Deadline', 
      date: 'July 2, 2025', 
      participants: 215,
      coin: 'ETH',
      source: 'SEC'
    },
    { 
      id: 2, 
      title: 'XRP Protocol Upgrade 2.0', 
      date: 'July 15, 2025', 
      participants: 167,
      coin: 'XRP',
      source: 'Ripple'
    },
    { 
      id: 3, 
      title: 'Bitcoin Halving Conference', 
      date: 'August 3, 2025', 
      participants: 324,
      coin: 'BTC',
      source: 'Bitcoin Foundation'
    },
    {
      id: 4,
      title: 'Solana DevCon 2025',
      date: 'August 12, 2025',
      participants: 186,
      coin: 'SOL',
      source: 'Solana Foundation'
    }
  ];
};
