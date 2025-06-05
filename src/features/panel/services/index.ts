// Panel services
import { supabase } from '@/core/supabase';
import type { PanelStats, Transaction, TaxObligation, Reminder } from '../types';

// Mock data for now, would be replaced with actual API calls
export const getPanelStats = async (): Promise<PanelStats> => {
  // In a real implementation, this would fetch from Supabase
  return {
    totalBalance: 128250,
    monthlyIncome: 42500,
    monthlyExpenses: 28350,
    pendingTaxes: 27700
  };
};

export const getRecentTransactions = async (): Promise<Transaction[]> => {
  // In a real implementation, this would fetch from Supabase
  return [
    {
      id: "1",
      description: "Pago de Factura #1234",
      date: "2025-04-04",
      amount: -2500,
      status: "Completado",
      category: "Gastos Operativos",
    },
    {
      id: "2",
      description: "Ingreso por Ventas",
      date: "2025-04-03",
      amount: 5800,
      status: "Completado",
      category: "Ventas",
    },
    {
      id: "3",
      description: "Pago de Nómina",
      date: "2025-04-02",
      amount: -8500,
      status: "Completado",
      category: "Nómina",
    },
    {
      id: "4",
      description: "Pago de Servicios",
      date: "2025-04-01",
      amount: -1200,
      status: "Completado",
      category: "Servicios",
    },
    {
      id: "5",
      description: "Ingreso por Servicios",
      date: "2025-03-31",
      amount: 3500,
      status: "Completado",
      category: "Ventas",
    },
  ];
};

export const getTaxObligations = async (): Promise<TaxObligation[]> => {
  // In a real implementation, this would fetch from Supabase
  return [
    {
      id: "1",
      name: "IVA Mensual",
      dueDate: "2025-04-15",
      amount: 8500,
      status: "pending",
    },
    {
      id: "2",
      name: "ISR Trimestral",
      dueDate: "2025-04-30",
      amount: 12500,
      status: "pending",
    },
    {
      id: "3",
      name: "Impuesto Predial",
      dueDate: "2025-05-10",
      amount: 3200,
      status: "pending",
    },
  ];
};

export const getReminders = async (): Promise<Reminder[]> => {
  // In a real implementation, this would fetch from Supabase
  return [
    {
      id: "1",
      title: "Renovar contrato de arrendamiento",
      dueDate: "2025-04-20",
      priority: "high",
    },
    {
      id: "2",
      title: "Revisar facturas pendientes",
      dueDate: "2025-04-12",
      priority: "medium",
    },
    {
      id: "3",
      title: "Actualizar inventario",
      dueDate: "2025-04-25",
      priority: "low",
    },
  ];
};
