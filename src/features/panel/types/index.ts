// Panel feature types

export interface PanelStats {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  pendingTaxes: number;
}

export interface Transaction {
  id: string;
  description: string;
  date: string;
  amount: number;
  status: string;
  category: string;
}

export interface TaxObligation {
  id: string;
  name: string;
  dueDate: string;
  amount: number;
  status: 'pending' | 'paid' | 'overdue';
}

export interface Reminder {
  id: string;
  title: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
}
