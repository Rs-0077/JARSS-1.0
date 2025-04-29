// Impuestos services
import { supabase } from '@/lib/supabase';
import type { TaxObligation, TaxCalendar, TaxReport, TaxStats } from '../types';

export const getTaxStats = async (): Promise<TaxStats> => {
  // In a real implementation, this would fetch from Supabase
  return {
    pendingTaxes: 12450,
    paidTaxesYear: 45320,
    nextDeclaration: {
      name: 'IVA Mensual',
      date: '2025-04-15'
    }
  };
};

export const getTaxObligations = async (): Promise<TaxObligation[]> => {
  try {
    const { data, error } = await supabase
      .from('tax_obligations')
      .select('*')
      .order('dueDate', { ascending: true });
    
    if (error) throw error;
    
    return data as TaxObligation[];
  } catch (error) {
    console.error('Error fetching tax obligations:', error);
    return [];
  }
};

export const createTaxObligation = async (obligation: Omit<TaxObligation, 'id'>): Promise<TaxObligation | null> => {
  try {
    const { data, error } = await supabase
      .from('tax_obligations')
      .insert([obligation])
      .select()
      .single();
    
    if (error) throw error;
    
    return data as TaxObligation;
  } catch (error) {
    console.error('Error creating tax obligation:', error);
    return null;
  }
};

export const updateTaxObligation = async (id: string, updates: Partial<TaxObligation>): Promise<TaxObligation | null> => {
  try {
    const { data, error } = await supabase
      .from('tax_obligations')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    
    return data as TaxObligation;
  } catch (error) {
    console.error('Error updating tax obligation:', error);
    return null;
  }
};

export const getTaxCalendar = async (): Promise<TaxCalendar[]> => {
  try {
    const { data, error } = await supabase
      .from('tax_calendar')
      .select('*')
      .order('date', { ascending: true });
    
    if (error) throw error;
    
    return data as TaxCalendar[];
  } catch (error) {
    console.error('Error fetching tax calendar:', error);
    return [];
  }
};

export const getTaxReports = async (): Promise<TaxReport[]> => {
  try {
    const { data, error } = await supabase
      .from('tax_reports')
      .select('*')
      .order('generationDate', { ascending: false });
    
    if (error) throw error;
    
    return data as TaxReport[];
  } catch (error) {
    console.error('Error fetching tax reports:', error);
    return [];
  }
};
