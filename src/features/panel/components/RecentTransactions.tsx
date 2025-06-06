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
    <Card
      className="col-span-3 panel-card animate-slide-up"
      style={{ animationDelay: "100ms" }}
      data-oid="7-le3y7"
    >
      <CardHeader data-oid="2p1n.vl">
        <CardTitle className="text-xl" data-oid="7:vc6pb">
          Transacciones Recientes
        </CardTitle>
        <CardDescription data-oid="4u.p72_">
          Últimas operaciones financieras registradas
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="z2h_y59">
        <div className="rounded-md overflow-hidden" data-oid="fft042a">
          <Table data-oid="15-84rj">
            <TableHeader className="bg-muted/50" data-oid="-0cv53e">
              <TableRow data-oid="uge3o5b">
                <TableHead data-oid="dhgn_o1">Descripción</TableHead>
                <TableHead data-oid="q84-ya3">Fecha</TableHead>
                <TableHead data-oid="5cynwws">Categoría</TableHead>
                <TableHead className="text-right" data-oid="-hf7hhy">
                  Monto
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody data-oid="gf_-u9j">
              {transactions.map((transaction, index) => (
                <TableRow
                  key={transaction.id}
                  className="hover:bg-muted/30 transition-colors duration-200"
                  style={{
                    animationDelay: `${(index + 1) * 50}ms`,
                    animation: "fade-in 0.5s ease-out forwards",
                    opacity: 0,
                  }}
                  data-oid="blhs2rm"
                >
                  <TableCell className="font-medium" data-oid="_wlktx1">
                    {transaction.description}
                  </TableCell>
                  <TableCell data-oid="q-2hr-4">{transaction.date}</TableCell>
                  <TableCell data-oid="wh2:6j9">
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs transition-all duration-200",
                        transaction.amount < 0
                          ? "bg-contable-danger/10 text-contable-danger"
                          : "bg-contable-success/10 text-contable-success",
                      )}
                      data-oid="znc27:8"
                    >
                      {transaction.category}
                    </span>
                  </TableCell>
                  <TableCell className="text-right" data-oid="k7aakq5">
                    <div
                      className="flex items-center justify-end"
                      data-oid="mhg263j"
                    >
                      {transaction.amount < 0 ? (
                        <ArrowDownLeft
                          className="mr-1 h-4 w-4 text-contable-danger animate-bounce-light"
                          style={{ animationDelay: `${index * 100}ms` }}
                          data-oid="9tzqh5h"
                        />
                      ) : (
                        <ArrowUpRight
                          className="mr-1 h-4 w-4 text-contable-success animate-bounce-light"
                          style={{ animationDelay: `${index * 100}ms` }}
                          data-oid="h-z_z:p"
                        />
                      )}
                      <span
                        className={cn("font-medium", {
                          "text-contable-danger": transaction.amount < 0,
                          "text-contable-success": transaction.amount > 0,
                        })}
                        data-oid="6exzmef"
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
