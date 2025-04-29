// Impuestos feature types

export interface TaxObligation {
  id: string;
  name: string;
  type: 'iva' | 'isr' | 'ieps' | 'predial' | 'nomina' | 'other';
  dueDate: string;
  amount: number;
  status: 'pending' | 'paid' | 'overdue';
  paymentDate?: string;
  notes?: string;
}

export interface TaxCalendar {
  id: string;
  name: string;
  date: string;
  description: string;
  type: 'declaration' | 'payment' | 'reminder';
  importance: 'low' | 'medium' | 'high';
}

export interface TaxReport {
  id: string;
  name: string;
  period: string;
  generationDate: string;
  status: 'draft' | 'final' | 'submitted';
  fileUrl?: string;
}

export interface TaxStats {
  pendingTaxes: number;
  paidTaxesYear: number;
  nextDeclaration: {
    name: string;
    date: string;
  };
}
