import { supabase } from './supabase';
import { STORAGE_KEYS } from './config';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

/**
 * Sign in with email and password
 * @param email - User email
 * @param password - User password
 * @returns Promise with the signed in user
 */
export const signIn = async (email: string, password: string): Promise<User | null> => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    
    if (data?.user) {
      // Fetch additional user data from profiles table
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', data.user.id)
        .single();
      
      const user: User = {
        id: data.user.id,
        email: data.user.email || '',
        firstName: profileData?.first_name || '',
        lastName: profileData?.last_name || '',
        role: profileData?.role || 'user',
      };
      
      // Store user in local storage
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
      
      return user;
    }
    
    return null;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
};

/**
 * Sign out the current user
 */
export const signOut = async (): Promise<void> => {
  try {
    await supabase.auth.signOut();
    localStorage.removeItem(STORAGE_KEYS.user);
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

/**
 * Get the current user from local storage
 * @returns The current user or null
 */
export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem(STORAGE_KEYS.user);
  return userJson ? JSON.parse(userJson) : null;
};

/**
 * Check if the user is authenticated
 * @returns Promise with authentication state
 */
export const checkAuth = async (): Promise<AuthState> => {
  try {
    const { data } = await supabase.auth.getSession();
    
    if (data?.session) {
      const user = getCurrentUser();
      return {
        user,
        isAuthenticated: !!user,
        isLoading: false,
      };
    }
    
    return {
      user: null,
      isAuthenticated: false,
      isLoading: false,
    };
  } catch (error) {
    console.error('Error checking auth:', error);
    return {
      user: null,
      isAuthenticated: false,
      isLoading: false,
    };
  }
};
