// Nomina feature types

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  department: string;
  hireDate: string;
  salary: number;
  status: 'active' | 'inactive' | 'on_leave';
  email?: string;
  phone?: string;
}

export interface PayrollPeriod {
  id: string;
  startDate: string;
  endDate: string;
  paymentDate: string;
  status: 'pending' | 'processing' | 'completed';
  totalAmount: number;
  employeeCount: number;
}

export interface PayrollEntry {
  id: string;
  periodId: string;
  employeeId: string;
  baseSalary: number;
  bonuses: number;
  deductions: number;
  taxes: number;
  netAmount: number;
  status: 'pending' | 'paid';
}

export interface PayrollStats {
  totalEmployees: number;
  nextPayment: {
    date: string;
    amount: number;
  };
  yearlyPayments: number;
}
