// Presupuestos services
import { supabase } from '@/lib/supabase';
import type { Budget, BudgetItem, BudgetSummaryStats, BudgetExecution } from '../types';

export const getBudgetSummary = async (): Promise<BudgetSummaryStats> => {
  // In a real implementation, this would fetch from Supabase
  return {
    currentBudget: 248500,
    accumulatedExpense: 142375,
    budgetAlerts: 3
  };
};

export const getBudgetExecutionSummary = async (): Promise<BudgetExecution[]> => {
  // In a real implementation, this would fetch from Supabase
  return [
    {
      category: 'Marketing',
      plannedAmount: 50000,
      actualAmount: 42500,
      percentage: 85
    },
    {
      category: 'Operaciones',
      plannedAmount: 75000,
      actualAmount: 68000,
      percentage: 90.67
    },
    {
      category: 'Tecnología',
      plannedAmount: 45000,
      actualAmount: 38700,
      percentage: 86
    },
    {
      category: 'Recursos Humanos',
      plannedAmount: 35000,
      actualAmount: 32500,
      percentage: 92.86
    },
    {
      category: 'Administración',
      plannedAmount: 25000,
      actualAmount: 18500,
      percentage: 74
    }
  ];
};

export const getBudgets = async (): Promise<Budget[]> => {
  try {
    const { data, error } = await supabase
      .from('budgets')
      .select('*')
      .order('startDate', { ascending: false });
    
    if (error) throw error;
    
    return data as Budget[];
  } catch (error) {
    console.error('Error fetching budgets:', error);
    return [];
  }
};

export const createBudget = async (budget: Omit<Budget, 'id'>): Promise<Budget | null> => {
  try {
    const { data, error } = await supabase
      .from('budgets')
      .insert([budget])
      .select()
      .single();
    
    if (error) throw error;
    
    return data as Budget;
  } catch (error) {
    console.error('Error creating budget:', error);
    return null;
  }
};

export const getBudgetItems = async (budgetId: string): Promise<BudgetItem[]> => {
  try {
    const { data, error } = await supabase
      .from('budget_items')
      .select('*')
      .eq('budgetId', budgetId);
    
    if (error) throw error;
    
    return data as BudgetItem[];
  } catch (error) {
    console.error('Error fetching budget items:', error);
    return [];
  }
};

export const createBudgetItem = async (item: Omit<BudgetItem, 'id'>): Promise<BudgetItem | null> => {
  try {
    const { data, error } = await supabase
      .from('budget_items')
      .insert([item])
      .select()
      .single();
    
    if (error) throw error;
    
    return data as BudgetItem;
  } catch (error) {
    console.error('Error creating budget item:', error);
    return null;
  }
};
