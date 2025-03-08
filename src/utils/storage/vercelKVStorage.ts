
/**
 * Vercel KV Storage Service
 * 
 * This service provides an interface for interacting with Vercel KV (Redis) storage.
 * Currently implemented as a localStorage fallback for development,
 * but ready to be connected to actual Vercel KV in production.
 */

// Keys for storage
export const STORAGE_KEYS = {
  USER_PROFILE: "minechain_user_profile",
  PROFILE_EXISTS: "minechain_profile_exists",
  USER_WALLETS: "minechain_user_wallets",
  USER_SETTINGS: "minechain_user_settings",
  AUTH_TOKEN: "minechain_auth_token",
  TOKEN_PRICE_HISTORY: "minechain_token_price_history",
  TOKEN_HOLDINGS: "minechain_token_holdings",
  TOKEN_TRANSACTIONS: "minechain_token_transactions",
  TOKEN_STAKING: "minechain_token_staking",
};

/**
 * Set a value in storage
 */
export const setStorageItem = async <T>(key: string, value: T): Promise<void> => {
  try {
    // In production, this would use Vercel KV
    // Example: await kv.set(key, JSON.stringify(value));
    
    // For now, use localStorage as fallback
    localStorage.setItem(key, JSON.stringify(value));
    console.log(`Data saved to storage with key: ${key}`);
  } catch (error) {
    console.error(`Error storing data with key ${key}:`, error);
    throw error;
  }
};

/**
 * Get a value from storage
 */
export const getStorageItem = async <T>(key: string, defaultValue: T | null = null): Promise<T | null> => {
  try {
    // In production, this would use Vercel KV
    // Example: const value = await kv.get(key);
    
    // For now, use localStorage as fallback
    const value = localStorage.getItem(key);
    
    if (value === null) {
      return defaultValue;
    }
    
    return JSON.parse(value) as T;
  } catch (error) {
    console.error(`Error retrieving data with key ${key}:`, error);
    return defaultValue;
  }
};

/**
 * Remove a value from storage
 */
export const removeStorageItem = async (key: string): Promise<void> => {
  try {
    // In production, this would use Vercel KV
    // Example: await kv.delete(key);
    
    // For now, use localStorage as fallback
    localStorage.removeItem(key);
    console.log(`Data removed from storage with key: ${key}`);
  } catch (error) {
    console.error(`Error removing data with key ${key}:`, error);
    throw error;
  }
};

/**
 * Clear all storage (use with caution)
 */
export const clearStorage = async (): Promise<void> => {
  try {
    // In production, this would need to clear only app-specific keys
    // Example: for (const key of Object.values(STORAGE_KEYS)) await kv.delete(key);
    
    // For now, clear localStorage
    localStorage.clear();
    console.log("Storage cleared");
  } catch (error) {
    console.error("Error clearing storage:", error);
    throw error;
  }
};

/**
 * Get token price history (mock data for now)
 */
export const getTokenPriceHistory = async (): Promise<{date: string, price: number}[]> => {
  const storedData = await getStorageItem<{date: string, price: number}[]>(
    STORAGE_KEYS.TOKEN_PRICE_HISTORY, 
    generateMockPriceHistory()
  );
  return storedData || [];
};

/**
 * Generate mock price history data
 */
const generateMockPriceHistory = (): {date: string, price: number}[] => {
  const today = new Date();
  const data = [];
  let price = 0.02; // Starting price
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    
    // Add some randomness to the price movements
    const changePercent = (Math.random() * 0.1) - 0.03; // -3% to +7%
    price = price * (1 + changePercent);
    
    data.push({
      date: date.toISOString().split('T')[0],
      price: parseFloat(price.toFixed(4))
    });
  }
  
  return data;
};
