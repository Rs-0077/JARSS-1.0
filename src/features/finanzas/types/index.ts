// Finanzas feature types

export interface FinancialTransaction {
  id: string;
  type: 'ingreso' | 'gasto' | 'transferencia';
  amount: number;
  description: string;
  category: string;
  date: string;
  accountId: string;
  client?: string;
  supplier?: string;
  status: 'pending' | 'completed' | 'cancelled';
}

export interface FinancialAccount {
  id: string;
  name: string;
  type: 'checking' | 'savings' | 'credit' | 'investment';
  balance: number;
  currency: string;
  bankName?: string;
  accountNumber?: string;
  lastUpdated: string;
}

export interface Investment {
  id: string;
  name: string;
  type: 'stock' | 'bond' | 'mutual_fund' | 'real_estate' | 'other';
  initialAmount: number;
  currentValue: number;
  purchaseDate: string;
  expectedReturn: number;
  notes?: string;
}

export interface FinancialStats {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  accountsReceivable: number;
}
