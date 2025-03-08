
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
