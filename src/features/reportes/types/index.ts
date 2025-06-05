// Reportes feature types

export interface FinancialReport {
  id: string;
  name: string;
  type: 'balance' | 'income_statement' | 'cash_flow' | 'custom';
  period: string;
  generationDate: string;
  status: 'draft' | 'final';
  fileUrl?: string;
}

export interface ReportFilter {
  startDate?: string;
  endDate?: string;
  type?: string;
  category?: string;
  account?: string;
}

export interface BalanceSheetItem {
  category: string;
  subcategory?: string;
  amount: number;
}

export interface BalanceSheet {
  assets: BalanceSheetItem[];
  liabilities: BalanceSheetItem[];
  equity: BalanceSheetItem[];
  totalAssets: number;
  totalLiabilities: number;
  totalEquity: number;
}

export interface IncomeStatementItem {
  category: string;
  subcategory?: string;
  amount: number;
}

export interface IncomeStatement {
  revenues: IncomeStatementItem[];
  expenses: IncomeStatementItem[];
  totalRevenues: number;
  totalExpenses: number;
  netIncome: number;
}

export interface CashFlowItem {
  category: string;
  subcategory?: string;
  amount: number;
}

export interface CashFlow {
  operatingActivities: CashFlowItem[];
  investingActivities: CashFlowItem[];
  financingActivities: CashFlowItem[];
  totalOperating: number;
  totalInvesting: number;
  totalFinancing: number;
  netCashFlow: number;
}
