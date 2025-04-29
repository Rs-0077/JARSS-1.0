// Presupuestos feature types

export interface Budget {
  id: string;
  name: string;
  type: 'departamento' | 'proyecto' | 'trimestral' | 'anual';
  startDate: string;
  endDate: string;
  totalAmount: number;
  spentAmount: number;
  status: 'active' | 'completed' | 'cancelled';
  notes?: string;
}

export interface BudgetItem {
  id: string;
  budgetId: string;
  category: string;
  description: string;
  plannedAmount: number;
  actualAmount: number;
  variance: number;
  status: 'under_budget' | 'on_budget' | 'over_budget';
}

export interface BudgetSummaryStats {
  currentBudget: number;
  accumulatedExpense: number;
  budgetAlerts: number;
}

export interface BudgetExecution {
  category: string;
  plannedAmount: number;
  actualAmount: number;
  percentage: number;
}
