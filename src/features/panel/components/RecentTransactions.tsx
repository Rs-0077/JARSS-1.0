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
      data-oid="uctlk3l"
    >
      <CardHeader data-oid="ifwladp">
        <CardTitle className="text-xl" data-oid="glmjp6z">
          Transacciones Recientes
        </CardTitle>
        <CardDescription data-oid="ravf26p">
          Últimas operaciones financieras registradas
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="zy_ibjt">
        <div className="rounded-md overflow-hidden" data-oid="7tyndme">
          <Table data-oid="-.a72pw">
            <TableHeader className="bg-muted/50" data-oid="3kr0g6v">
              <TableRow data-oid="l8bcmrg">
                <TableHead data-oid="_98rfz8">Descripción</TableHead>
                <TableHead data-oid="6-qny4o">Fecha</TableHead>
                <TableHead data-oid="tkd_25t">Categoría</TableHead>
                <TableHead className="text-right" data-oid="1b-i44f">
                  Monto
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody data-oid="i-.p3rp">
              {transactions.map((transaction, index) => (
                <TableRow
                  key={transaction.id}
                  className="hover:bg-muted/30 transition-colors duration-200"
                  style={{
                    animationDelay: `${(index + 1) * 50}ms`,
                    animation: "fade-in 0.5s ease-out forwards",
                    opacity: 0,
                  }}
                  data-oid="_ezhe76"
                >
                  <TableCell className="font-medium" data-oid="1put1nx">
                    {transaction.description}
                  </TableCell>
                  <TableCell data-oid="7r-..50">{transaction.date}</TableCell>
                  <TableCell data-oid="lpi_vp-">
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs transition-all duration-200",
                        transaction.amount < 0
                          ? "bg-contable-danger/10 text-contable-danger"
                          : "bg-contable-success/10 text-contable-success",
                      )}
                      data-oid="jnmr_0c"
                    >
                      {transaction.category}
                    </span>
                  </TableCell>
                  <TableCell className="text-right" data-oid="unuen0p">
                    <div
                      className="flex items-center justify-end"
                      data-oid="yzw7zjg"
                    >
                      {transaction.amount < 0 ? (
                        <ArrowDownLeft
                          className="mr-1 h-4 w-4 text-contable-danger animate-bounce-light"
                          style={{ animationDelay: `${index * 100}ms` }}
                          data-oid=".hnd_3:"
                        />
                      ) : (
                        <ArrowUpRight
                          className="mr-1 h-4 w-4 text-contable-success animate-bounce-light"
                          style={{ animationDelay: `${index * 100}ms` }}
                          data-oid="ak7x6hb"
                        />
                      )}
                      <span
                        className={cn("font-medium", {
                          "text-contable-danger": transaction.amount < 0,
                          "text-contable-success": transaction.amount > 0,
                        })}
                        data-oid="xp-m9k_"
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
