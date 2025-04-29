import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Datos de ejemplo para las transacciones recientes
const transactions = [
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

export function RecentTransactions() {
  return (
    <Card className="col-span-3 dashboard-card animate-slide-up" style={{ animationDelay: '100ms' }}>
      <CardHeader>
        <CardTitle className="text-xl">Transacciones Recientes</CardTitle>
        <CardDescription>Últimas operaciones financieras registradas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead>Descripción</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead className="text-right">Monto</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction, index) => (
                <TableRow
                  key={transaction.id}
                  className="hover:bg-muted/30 transition-colors duration-200"
                  style={{
                    animationDelay: `${(index + 1) * 50}ms`,
                    animation: 'fade-in 0.5s ease-out forwards',
                    opacity: 0
                  }}
                >
                  <TableCell className="font-medium">{transaction.description}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>
                    <span className={cn(
                      "px-2 py-1 rounded-full text-xs transition-all duration-200",
                      transaction.amount < 0
                        ? "bg-contable-danger/10 text-contable-danger"
                        : "bg-contable-success/10 text-contable-success"
                    )}>
                      {transaction.category}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end">
                      {transaction.amount < 0 ? (
                        <ArrowDownLeft className="mr-1 h-4 w-4 text-contable-danger animate-bounce-light" style={{ animationDelay: `${index * 100}ms` }} />
                      ) : (
                        <ArrowUpRight className="mr-1 h-4 w-4 text-contable-success animate-bounce-light" style={{ animationDelay: `${index * 100}ms` }} />
                      )}
                      <span
                        className={cn("font-medium", {
                          "text-contable-danger": transaction.amount < 0,
                          "text-contable-success": transaction.amount > 0,
                        })}
                      >
                        ${Math.abs(transaction.amount).toLocaleString("es-MX")}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
