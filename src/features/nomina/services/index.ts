// Nomina services
import { supabase } from '@/lib/supabase';
import type { Employee, PayrollPeriod, PayrollEntry, PayrollStats } from '../types';

export const getPayrollStats = async (): Promise<PayrollStats> => {
  // In a real implementation, this would fetch from Supabase
  return {
    totalEmployees: 24,
    nextPayment: {
      date: '2025-04-15',
      amount: 45320
    },
    yearlyPayments: 135960
  };
};

export const getEmployees = async (): Promise<Employee[]> => {
  try {
    const { data, error } = await supabase
      .from('employees')
      .select('*')
      .order('lastName', { ascending: true });
    
    if (error) throw error;
    
    return data as Employee[];
  } catch (error) {
    console.error('Error fetching employees:', error);
    return [];
  }
};

export const createEmployee = async (employee: Omit<Employee, 'id'>): Promise<Employee | null> => {
  try {
    const { data, error } = await supabase
      .from('employees')
      .insert([employee])
      .select()
      .single();
    
    if (error) throw error;
    
    return data as Employee;
  } catch (error) {
    console.error('Error creating employee:', error);
    return null;
  }
};

export const updateEmployee = async (id: string, updates: Partial<Employee>): Promise<Employee | null> => {
  try {
    const { data, error } = await supabase
      .from('employees')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    
    return data as Employee;
  } catch (error) {
    console.error('Error updating employee:', error);
    return null;
  }
};

export const getPayrollPeriods = async (): Promise<PayrollPeriod[]> => {
  try {
    const { data, error } = await supabase
      .from('payroll_periods')
      .select('*')
      .order('paymentDate', { ascending: false });
    
    if (error) throw error;
    
    return data as PayrollPeriod[];
  } catch (error) {
    console.error('Error fetching payroll periods:', error);
    return [];
  }
};

export const createPayrollPeriod = async (period: Omit<PayrollPeriod, 'id'>): Promise<PayrollPeriod | null> => {
  try {
    const { data, error } = await supabase
      .from('payroll_periods')
      .insert([period])
      .select()
      .single();
    
    if (error) throw error;
    
    return data as PayrollPeriod;
  } catch (error) {
    console.error('Error creating payroll period:', error);
    return null;
  }
};

export const getPayrollEntries = async (periodId: string): Promise<PayrollEntry[]> => {
  try {
    const { data, error } = await supabase
      .from('payroll_entries')
      .select('*')
      .eq('periodId', periodId);
    
    if (error) throw error;
    
    return data as PayrollEntry[];
  } catch (error) {
    console.error('Error fetching payroll entries:', error);
    return [];
  }
};
