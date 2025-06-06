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
      className="col-span-3 dashboard-card animate-slide-up"
      style={{ animationDelay: "100ms" }}
      data-oid="kq42rts"
    >
      <CardHeader data-oid=".cisypp">
        <CardTitle className="text-xl" data-oid="kbulw4x">
          Transacciones Recientes
        </CardTitle>
        <CardDescription data-oid="iaf279e">
          Últimas operaciones financieras registradas
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="lp5ozcp">
        <div className="rounded-md overflow-hidden" data-oid="4nr_pb7">
          <Table data-oid="xibkizc">
            <TableHeader className="bg-muted/50" data-oid="nypq09c">
              <TableRow data-oid="im22a5s">
                <TableHead data-oid="68sezx9">Descripción</TableHead>
                <TableHead data-oid="y.e6w:2">Fecha</TableHead>
                <TableHead data-oid=":u8k:_g">Categoría</TableHead>
                <TableHead className="text-right" data-oid=".wt6byx">
                  Monto
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody data-oid="dp6caef">
              {transactions.map((transaction, index) => (
                <TableRow
                  key={transaction.id}
                  className="hover:bg-muted/30 transition-colors duration-200"
                  style={{
                    animationDelay: `${(index + 1) * 50}ms`,
                    animation: "fade-in 0.5s ease-out forwards",
                    opacity: 0,
                  }}
                  data-oid="wpqnjuj"
                >
                  <TableCell className="font-medium" data-oid="p.xqimy">
                    {transaction.description}
                  </TableCell>
                  <TableCell data-oid="ny1fslk">{transaction.date}</TableCell>
                  <TableCell data-oid="999oq0m">
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs transition-all duration-200",
                        transaction.amount < 0
                          ? "bg-contable-danger/10 text-contable-danger"
                          : "bg-contable-success/10 text-contable-success",
                      )}
                      data-oid="ulk59fx"
                    >
                      {transaction.category}
                    </span>
                  </TableCell>
                  <TableCell className="text-right" data-oid="_g7-.yh">
                    <div
                      className="flex items-center justify-end"
                      data-oid="0ho_sil"
                    >
                      {transaction.amount < 0 ? (
                        <ArrowDownLeft
                          className="mr-1 h-4 w-4 text-contable-danger animate-bounce-light"
                          style={{ animationDelay: `${index * 100}ms` }}
                          data-oid="u4fwlay"
                        />
                      ) : (
                        <ArrowUpRight
                          className="mr-1 h-4 w-4 text-contable-success animate-bounce-light"
                          style={{ animationDelay: `${index * 100}ms` }}
                          data-oid="7ep6q7b"
                        />
                      )}
                      <span
                        className={cn("font-medium", {
                          "text-contable-danger": transaction.amount < 0,
                          "text-contable-success": transaction.amount > 0,
                        })}
                        data-oid="wio6jam"
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
