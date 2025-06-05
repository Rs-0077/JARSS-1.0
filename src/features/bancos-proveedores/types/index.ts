// Bancos y Proveedores feature types

export interface BankAccount {
  id: string;
  name: string;
  bank_name: string;
  account_number: string;
  current_balance: number;
  currency: string;
  type: 'checking' | 'savings' | 'credit' | 'investment';
  status: 'active' | 'inactive';
  last_updated: string;
}

export interface Supplier {
  id: string;
  name: string;
  contact_person: string;
  email: string;
  phone: string;
  address: string;
  tax_id: string;
  payment_terms: string;
  status: 'active' | 'inactive';
  category: string;
}

export interface BankTransaction {
  id: string;
  account_id: string;
  date: string;
  description: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'transfer' | 'payment';
  reference: string;
  status: 'pending' | 'completed' | 'reconciled';
}

export interface SupplierPayment {
  id: string;
  supplier_id: string;
  account_id: string;
  date: string;
  amount: number;
  description: string;
  invoice_number: string;
  status: 'pending' | 'paid' | 'cancelled';
}
