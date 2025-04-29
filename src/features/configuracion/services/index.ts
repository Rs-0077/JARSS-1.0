// Configuracion services
import { supabase } from '@/lib/supabase';
import type { CompanyProfile, User, Permission, Role, SystemSettings } from '../types';

export const getCompanyProfile = async (): Promise<CompanyProfile | null> => {
  try {
    const { data, error } = await supabase
      .from('company_profile')
      .select('*')
      .single();
    
    if (error) throw error;
    
    return data as CompanyProfile;
  } catch (error) {
    console.error('Error fetching company profile:', error);
    return null;
  }
};

export const updateCompanyProfile = async (updates: Partial<CompanyProfile>): Promise<CompanyProfile | null> => {
  try {
    const { data, error } = await supabase
      .from('company_profile')
      .update(updates)
      .eq('id', updates.id)
      .select()
      .single();
    
    if (error) throw error;
    
    return data as CompanyProfile;
  } catch (error) {
    console.error('Error updating company profile:', error);
    return null;
  }
};

export const getUsers = async (): Promise<User[]> => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('lastName', { ascending: true });
    
    if (error) throw error;
    
    return data as User[];
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const createUser = async (user: Omit<User, 'id'>): Promise<User | null> => {
  try {
    const { data, error } = await supabase
      .from('users')
      .insert([user])
      .select()
      .single();
    
    if (error) throw error;
    
    return data as User;
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  }
};

export const updateUser = async (id: string, updates: Partial<User>): Promise<User | null> => {
  try {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    
    return data as User;
  } catch (error) {
    console.error('Error updating user:', error);
    return null;
  }
};

export const getRoles = async (): Promise<Role[]> => {
  try {
    const { data, error } = await supabase
      .from('roles')
      .select('*');
    
    if (error) throw error;
    
    return data as Role[];
  } catch (error) {
    console.error('Error fetching roles:', error);
    return [];
  }
};

export const getPermissions = async (): Promise<Permission[]> => {
  try {
    const { data, error } = await supabase
      .from('permissions')
      .select('*');
    
    if (error) throw error;
    
    return data as Permission[];
  } catch (error) {
    console.error('Error fetching permissions:', error);
    return [];
  }
};

export const getSystemSettings = async (): Promise<SystemSettings | null> => {
  try {
    const { data, error } = await supabase
      .from('system_settings')
      .select('*')
      .single();
    
    if (error) throw error;
    
    return data as SystemSettings;
  } catch (error) {
    console.error('Error fetching system settings:', error);
    return null;
  }
};

export const updateSystemSettings = async (updates: Partial<SystemSettings>): Promise<SystemSettings | null> => {
  try {
    const { data, error } = await supabase
      .from('system_settings')
      .update(updates)
      .eq('id', 1) // Assuming there's only one system settings record
      .select()
      .single();
    
    if (error) throw error;
    
    return data as SystemSettings;
  } catch (error) {
    console.error('Error updating system settings:', error);
    return null;
  }
};
