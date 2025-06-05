// Bancos y Proveedores services
import { supabase, secureBankingFetch } from '@/lib/supabase';
import type { BankAccount, Supplier, BankTransaction, SupplierPayment } from '../types';

export const getBankAccounts = async (): Promise<BankAccount[]> => {
  try {
    const result = await secureBankingFetch('get_accounts', {});
    return result.accounts || [];
  } catch (error) {
    console.error('Error fetching bank accounts:', error);
    return [];
  }
};

export const createBankAccount = async (account: Omit<BankAccount, 'id'>): Promise<BankAccount | null> => {
  try {
    const result = await secureBankingFetch('create_account', { account });
    return result.account || null;
  } catch (error) {
    console.error('Error creating bank account:', error);
    return null;
  }
};

export const getBankTransactions = async (accountId: string): Promise<BankTransaction[]> => {
  try {
    const result = await secureBankingFetch('get_transactions', { accountId });
    return result.transactions || [];
  } catch (error) {
    console.error('Error fetching bank transactions:', error);
    return [];
  }
};

export const getSuppliers = async (): Promise<Supplier[]> => {
  try {
    const { data, error } = await supabase
      .from('suppliers')
      .select('*')
      .order('name', { ascending: true });
    
    if (error) throw error;
    
    return data as Supplier[];
  } catch (error) {
    console.error('Error fetching suppliers:', error);
    return [];
  }
};

export const createSupplier = async (supplier: Omit<Supplier, 'id'>): Promise<Supplier | null> => {
  try {
    const { data, error } = await supabase
      .from('suppliers')
      .insert([supplier])
      .select()
      .single();
    
    if (error) throw error;
    
    return data as Supplier;
  } catch (error) {
    console.error('Error creating supplier:', error);
    return null;
  }
};

export const updateSupplier = async (id: string, updates: Partial<Supplier>): Promise<Supplier | null> => {
  try {
    const { data, error } = await supabase
      .from('suppliers')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    
    return data as Supplier;
  } catch (error) {
    console.error('Error updating supplier:', error);
    return null;
  }
};

export const getSupplierPayments = async (supplierId?: string): Promise<SupplierPayment[]> => {
  try {
    let query = supabase.from('supplier_payments').select('*');
    
    if (supplierId) {
      query = query.eq('supplier_id', supplierId);
    }
    
    const { data, error } = await query.order('date', { ascending: false });
    
    if (error) throw error;
    
    return data as SupplierPayment[];
  } catch (error) {
    console.error('Error fetching supplier payments:', error);
    return [];
  }
};
