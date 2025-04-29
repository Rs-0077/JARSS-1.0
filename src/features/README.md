# Features Directory

This directory contains all the feature modules of the JARSS Inventory application.

Each feature module is organized following the principles of Screaming Architecture, where the structure of the code reflects the business domains rather than technical concerns.

## Structure

Each feature module follows this structure:

```
feature-name/
├── components/     # UI components specific to this feature
├── hooks/          # Custom hooks specific to this feature
├── utils/          # Utility functions specific to this feature
├── types/          # TypeScript types and interfaces
├── services/       # API services and data fetching
├── store/          # State management (if needed)
└── index.ts        # Public API of the feature
```

## Features

- **dashboard**: Main dashboard and overview components
- **finanzas**: Financial management (income, expenses, investments)
- **reportes**: Financial reports and analysis
- **impuestos**: Tax compliance
- **presupuestos**: Budget control
- **nomina**: Payroll management
- **bancos-proveedores**: Bank accounts and suppliers management
- **configuracion**: System configuration
