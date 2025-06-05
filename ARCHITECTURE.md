# Arquitectura de JARSS Inventory

## Arquitectura Screaming

Este proyecto sigue los principios de la **Arquitectura Screaming** (Screaming Architecture), donde la estructura del código refleja el dominio del negocio en lugar de los detalles técnicos.

### Estructura de Carpetas

```
src/
├── core/                  # Núcleo de la aplicación
│   ├── auth.ts            # Autenticación
│   ├── config.ts          # Configuración global
│   ├── supabase.ts        # Cliente de Supabase
│   └── index.ts           # Exportaciones públicas
│
├── features/              # Características organizadas por dominio de negocio
│   ├── dashboard/         # Funcionalidad del dashboard principal
│   │   ├── components/    # Componentes específicos del dashboard
│   │   ├── services/      # Servicios para obtener datos del dashboard
│   │   ├── types/         # Tipos y interfaces del dashboard
│   │   └── index.ts       # Exportaciones públicas
│   │
│   ├── finanzas/          # Gestión financiera (ingresos, gastos, inversiones)
│   ├── reportes/          # Informes y análisis financieros
│   ├── impuestos/         # Cumplimiento fiscal
│   ├── presupuestos/      # Control presupuestario
│   ├── nomina/            # Gestión de nómina
│   ├── bancos-proveedores/# Gestión de cuentas bancarias y proveedores
│   └── configuracion/     # Configuración del sistema
│
├── shared/                # Componentes y utilidades compartidas
│   ├── components/        # Componentes de UI reutilizables
│   │   ├── ui/            # Componentes de UI básicos
│   │   └── layout/        # Componentes de layout
│   ├── hooks/             # Hooks personalizados
│   └── utils/             # Funciones utilitarias
│
└── pages/                 # Páginas de la aplicación
```

### Principios de Diseño

1. **Organización por Dominio**: El código está organizado por características de negocio, no por tipos técnicos.
2. **Encapsulamiento**: Cada módulo expone una API pública clara a través de archivos `index.ts`.
3. **Independencia**: Los módulos de características son independientes entre sí.
4. **Reutilización**: Los componentes y utilidades compartidas están en el módulo `shared`.
5. **Núcleo Centralizado**: La configuración global y servicios centrales están en el módulo `core`.

### Ventajas de esta Arquitectura

- **Claridad**: La estructura del proyecto comunica claramente el propósito de la aplicación.
- **Escalabilidad**: Facilita añadir nuevas características sin afectar las existentes.
- **Mantenibilidad**: Localiza los cambios relacionados en el mismo lugar.
- **Onboarding**: Facilita a los nuevos desarrolladores entender el propósito del sistema.
- **Testabilidad**: Permite probar características de forma aislada.

## Flujo de Datos

1. **Páginas**: Componen la interfaz de usuario utilizando componentes de características.
2. **Características**: Contienen la lógica de negocio y los componentes específicos de cada dominio.
3. **Servicios**: Manejan la comunicación con el backend y la manipulación de datos.
4. **Estado**: Cada característica gestiona su propio estado.
5. **Componentes Compartidos**: Proporcionan bloques de construcción reutilizables.

## Convenciones de Código

### Importaciones

- Utiliza importaciones absolutas desde la raíz del proyecto:
  ```typescript
  import { Button } from "@/shared/components/ui/button";
  import { formatCurrency } from "@/shared/utils/formatters";
  import { DashboardStats } from "@/features/dashboard/types";
  ```

### Exportaciones

- Cada módulo debe tener un archivo `index.ts` que exporte su API pública:
  ```typescript
  // features/dashboard/index.ts
  export * from './components';
  export * from './types';
  export * from './services';
  ```

### Componentes

- Los componentes deben ser funcionales y utilizar TypeScript.
- Cada componente debe tener una interfaz de props definida.
- Los componentes específicos de una característica deben estar en la carpeta de esa característica.

### Servicios

- Los servicios deben ser funciones asíncronas que devuelvan promesas.
- Deben manejar sus propios errores y proporcionar valores por defecto.
- Deben estar tipados correctamente.

## Migración a la Arquitectura Screaming

La migración a la Arquitectura Screaming se está realizando gradualmente:

1. **Fase 1**: Crear la estructura de carpetas y mover archivos existentes.
2. **Fase 2**: Refactorizar componentes para utilizar la nueva estructura.
3. **Fase 3**: Implementar servicios y tipos para cada característica.
4. **Fase 4**: Actualizar las páginas para utilizar los componentes de características.

## Recursos Adicionales

- [Clean Architecture: A Craftsman's Guide to Software Structure and Design](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164) por Robert C. Martin
- [Domain-Driven Design: Tackling Complexity in the Heart of Software](https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215) por Eric Evans
