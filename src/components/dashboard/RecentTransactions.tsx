import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
      className="col-span-3 dashboard-card animate-slide-up"
      style={{ animationDelay: "100ms" }}
      data-oid="ur7hciu"
    >
      <CardHeader data-oid=":awpya:">
        <CardTitle className="text-xl" data-oid="_7um2a0">
          Transacciones Recientes
        </CardTitle>
        <CardDescription data-oid="awtnsoq">
          Últimas operaciones financieras registradas
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="uscmo2d">
        <div className="rounded-md overflow-hidden" data-oid="gw7k6uk">
          <Table data-oid="1t_l3ml">
            <TableHeader className="bg-muted/50" data-oid="92xni:2">
              <TableRow data-oid="xcz_r.i">
                <TableHead data-oid=":a359__">Descripción</TableHead>
                <TableHead data-oid="z:f4mc9">Fecha</TableHead>
                <TableHead data-oid="x5psmf5">Categoría</TableHead>
                <TableHead className="text-right" data-oid="7dbds9i">
                  Monto
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody data-oid="6ojkyv4">
              {transactions.map((transaction, index) => (
                <TableRow
                  key={transaction.id}
                  className="hover:bg-muted/30 transition-colors duration-200"
                  style={{
                    animationDelay: `${(index + 1) * 50}ms`,
                    animation: "fade-in 0.5s ease-out forwards",
                    opacity: 0,
                  }}
                  data-oid="emax11c"
                >
                  <TableCell className="font-medium" data-oid="_390b8x">
                    {transaction.description}
                  </TableCell>
                  <TableCell data-oid="o-lgm1x">{transaction.date}</TableCell>
                  <TableCell data-oid="gq6mvs-">
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs transition-all duration-200",
                        transaction.amount < 0
                          ? "bg-contable-danger/10 text-contable-danger"
                          : "bg-contable-success/10 text-contable-success",
                      )}
                      data-oid="4zyek_0"
                    >
                      {transaction.category}
                    </span>
                  </TableCell>
                  <TableCell className="text-right" data-oid="p9aboyr">
                    <div
                      className="flex items-center justify-end"
                      data-oid="2sy21x_"
                    >
                      {transaction.amount < 0 ? (
                        <ArrowDownLeft
                          className="mr-1 h-4 w-4 text-contable-danger animate-bounce-light"
                          style={{ animationDelay: `${index * 100}ms` }}
                          data-oid="pnw9.x5"
                        />
                      ) : (
                        <ArrowUpRight
                          className="mr-1 h-4 w-4 text-contable-success animate-bounce-light"
                          style={{ animationDelay: `${index * 100}ms` }}
                          data-oid="h7b.s8u"
                        />
                      )}
                      <span
                        className={cn("font-medium", {
                          "text-contable-danger": transaction.amount < 0,
                          "text-contable-success": transaction.amount > 0,
                        })}
                        data-oid="j0psslj"
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
