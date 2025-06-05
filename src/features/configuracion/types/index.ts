// Configuracion feature types

export interface CompanyProfile {
  id: string;
  name: string;
  taxId: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  logo?: string;
  industry: string;
  fiscalYear: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'manager' | 'accountant' | 'viewer';
  status: 'active' | 'inactive' | 'pending';
  lastLogin?: string;
}

export interface Permission {
  id: string;
  name: string;
  description: string;
  module: string;
  actions: ('view' | 'create' | 'edit' | 'delete')[];
}

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[]; // Permission IDs
}

export interface SystemSettings {
  currency: string;
  dateFormat: string;
  timeZone: string;
  language: string;
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
}
