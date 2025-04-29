// Finanzas services
import { supabase } from '@/lib/supabase';
import type { FinancialTransaction, FinancialAccount, Investment, FinancialStats } from '../types';

export const getFinancialStats = async (): Promise<FinancialStats> => {
  // In a real implementation, this would fetch from Supabase
  return {
    totalBalance: 124500,
    monthlyIncome: 28750,
    monthlyExpenses: 12340,
    accountsReceivable: 18300
  };
};

export const getTransactions = async (
  type?: 'ingreso' | 'gasto' | 'transferencia',
  startDate?: string,
  endDate?: string
): Promise<FinancialTransaction[]> => {
  try {
    let query = supabase.from('transactions').select('*');
    
    if (type) {
      query = query.eq('type', type);
    }
    
    if (startDate) {
      query = query.gte('date', startDate);
    }
    
    if (endDate) {
      query = query.lte('date', endDate);
    }
    
    const { data, error } = await query.order('date', { ascending: false });
    
    if (error) throw error;
    
    return data as FinancialTransaction[];
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
};

export const createTransaction = async (transaction: Omit<FinancialTransaction, 'id'>): Promise<FinancialTransaction | null> => {
  try {
    const { data, error } = await supabase
      .from('transactions')
      .insert([transaction])
      .select()
      .single();
    
    if (error) throw error;
    
    return data as FinancialTransaction;
  } catch (error) {
    console.error('Error creating transaction:', error);
    return null;
  }
};

export const getAccounts = async (): Promise<FinancialAccount[]> => {
  try {
    const { data, error } = await supabase
      .from('accounts')
      .select('*');
    
    if (error) throw error;
    
    return data as FinancialAccount[];
  } catch (error) {
    console.error('Error fetching accounts:', error);
    return [];
  }
};

export const getInvestments = async (): Promise<Investment[]> => {
  try {
    const { data, error } = await supabase
      .from('investments')
      .select('*');
    
    if (error) throw error;
    
    return data as Investment[];
  } catch (error) {
    console.error('Error fetching investments:', error);
    return [];
  }
};

export const createInvestment = async (investment: Omit<Investment, 'id'>): Promise<Investment | null> => {
  try {
    const { data, error } = await supabase
      .from('investments')
      .insert([investment])
      .select()
      .single();
    
    if (error) throw error;
    
    return data as Investment;
  } catch (error) {
    console.error('Error creating investment:', error);
    return null;
  }
};
