import { createClient } from '@supabase/supabase-js';
import { APP_CONFIG } from './config';

// Initialize Supabase client
export const supabase = createClient(
  APP_CONFIG.supabaseUrl,
  APP_CONFIG.supabaseKey
);

/**
 * Secure banking fetch function for sensitive operations
 * @param endpoint - The banking API endpoint
 * @param params - Parameters for the request
 * @returns Promise with the response data
 */
export const secureBankingFetch = async (endpoint: string, params: any): Promise<any> => {
  try {
    // In a real implementation, this would use proper authentication and encryption
    // For now, it's just a placeholder
    const { data, error } = await supabase.functions.invoke(`banking/${endpoint}`, {
      body: JSON.stringify(params),
    });
    
    if (error) throw error;
    
    return data;
  } catch (error) {
    console.error(`Error in banking operation ${endpoint}:`, error);
    throw error;
  }
};
