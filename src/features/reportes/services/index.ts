// Reportes services
import { supabase } from '@/lib/supabase';
import type { 
  FinancialReport, 
  BalanceSheet, 
  IncomeStatement, 
  CashFlow, 
  ReportFilter 
} from '../types';

export const getFinancialReports = async (filter?: ReportFilter): Promise<FinancialReport[]> => {
  try {
    let query = supabase.from('financial_reports').select('*');
    
    if (filter?.type) {
      query = query.eq('type', filter.type);
    }
    
    if (filter?.startDate) {
      query = query.gte('generationDate', filter.startDate);
    }
    
    if (filter?.endDate) {
      query = query.lte('generationDate', filter.endDate);
    }
    
    const { data, error } = await query.order('generationDate', { ascending: false });
    
    if (error) throw error;
    
    return data as FinancialReport[];
  } catch (error) {
    console.error('Error fetching financial reports:', error);
    return [];
  }
};

export const createFinancialReport = async (report: Omit<FinancialReport, 'id'>): Promise<FinancialReport | null> => {
  try {
    const { data, error } = await supabase
      .from('financial_reports')
      .insert([report])
      .select()
      .single();
    
    if (error) throw error;
    
    return data as FinancialReport;
  } catch (error) {
    console.error('Error creating financial report:', error);
    return null;
  }
};

export const getBalanceSheet = async (period: string): Promise<BalanceSheet | null> => {
  try {
    // In a real implementation, this would fetch from Supabase
    // For now, returning mock data
    return {
      assets: [
        { category: 'Activos Corrientes', subcategory: 'Efectivo y Equivalentes', amount: 85000 },
        { category: 'Activos Corrientes', subcategory: 'Cuentas por Cobrar', amount: 45000 },
        { category: 'Activos Corrientes', subcategory: 'Inventario', amount: 35000 },
        { category: 'Activos No Corrientes', subcategory: 'Propiedad, Planta y Equipo', amount: 120000 },
        { category: 'Activos No Corrientes', subcategory: 'Intangibles', amount: 25000 },
      ],
      liabilities: [
        { category: 'Pasivos Corrientes', subcategory: 'Cuentas por Pagar', amount: 30000 },
        { category: 'Pasivos Corrientes', subcategory: 'Impuestos por Pagar', amount: 15000 },
        { category: 'Pasivos No Corrientes', subcategory: 'Préstamos a Largo Plazo', amount: 75000 },
      ],
      equity: [
        { category: 'Capital', subcategory: 'Capital Social', amount: 100000 },
        { category: 'Capital', subcategory: 'Utilidades Retenidas', amount: 90000 },
      ],
      totalAssets: 310000,
      totalLiabilities: 120000,
      totalEquity: 190000
    };
  } catch (error) {
    console.error('Error fetching balance sheet:', error);
    return null;
  }
};

export const getIncomeStatement = async (period: string): Promise<IncomeStatement | null> => {
  try {
    // In a real implementation, this would fetch from Supabase
    // For now, returning mock data
    return {
      revenues: [
        { category: 'Ventas', amount: 250000 },
        { category: 'Servicios', amount: 75000 },
        { category: 'Otros Ingresos', amount: 15000 },
      ],
      expenses: [
        { category: 'Costo de Ventas', amount: 120000 },
        { category: 'Gastos Operativos', subcategory: 'Salarios', amount: 85000 },
        { category: 'Gastos Operativos', subcategory: 'Alquiler', amount: 25000 },
        { category: 'Gastos Operativos', subcategory: 'Servicios', amount: 15000 },
        { category: 'Gastos Financieros', amount: 10000 },
        { category: 'Impuestos', amount: 25000 },
      ],
      totalRevenues: 340000,
      totalExpenses: 280000,
      netIncome: 60000
    };
  } catch (error) {
    console.error('Error fetching income statement:', error);
    return null;
  }
};

export const getCashFlow = async (period: string): Promise<CashFlow | null> => {
  try {
    // In a real implementation, this would fetch from Supabase
    // For now, returning mock data
    return {
      operatingActivities: [
        { category: 'Ingresos por Ventas', amount: 325000 },
        { category: 'Pagos a Proveedores', amount: -120000 },
        { category: 'Pagos a Empleados', amount: -85000 },
        { category: 'Pagos de Impuestos', amount: -25000 },
      ],
      investingActivities: [
        { category: 'Compra de Equipos', amount: -35000 },
        { category: 'Venta de Activos', amount: 15000 },
      ],
      financingActivities: [
        { category: 'Pago de Préstamos', amount: -20000 },
        { category: 'Nuevos Préstamos', amount: 50000 },
        { category: 'Pago de Dividendos', amount: -15000 },
      ],
      totalOperating: 95000,
      totalInvesting: -20000,
      totalFinancing: 15000,
      netCashFlow: 90000
    };
  } catch (error) {
    console.error('Error fetching cash flow:', error);
    return null;
  }
};
