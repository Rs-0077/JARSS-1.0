/**
 * Application configuration
 */

export const APP_CONFIG = {
  name: 'JARRS Inventory',
  version: '1.0.0',
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseKey: import.meta.env.VITE_SUPABASE_KEY,
  defaultLanguage: 'es-MX',
  defaultCurrency: 'MXN',
  defaultDateFormat: 'dd/MM/yyyy',
  defaultTheme: 'light',
  supportEmail: 'soporte@jarrsinventory.com',
};

export const ROUTES = {
  home: '/',
  panel: '/',
  finanzas: {
    index: '/finanzas',
    ingresos: '/finanzas/ingresos',
    gastos: '/finanzas/gastos',
    inversiones: '/finanzas/inversiones',
  },
  reportes: '/reportes',
  bankAccounts: '/bank-accounts',
  impuestos: '/impuestos',
  presupuestos: '/presupuestos',
  nomina: '/nomina',
  configuracion: '/configuracion',
  notFound: '*',
};

export const STORAGE_KEYS = {
  theme: 'jarrs-inventory-theme',
  language: 'jarrs-inventory-language',
  authToken: 'jarrs-inventory-auth-token',
  user: 'jarrs-inventory-user',
  userPreferences: 'jarrs-inventory-user-preferences',
  tourCompleted: 'jarrs-inventory-tour-completed',
  notifications: 'jarrs-inventory-notifications',
  lastVisit: 'jarrs-inventory-last-visit',
};
