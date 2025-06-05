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
      data-oid="a7wcn15"
    >
      <CardHeader data-oid="x:vs7ac">
        <CardTitle className="text-xl" data-oid="333g9vo">
          Transacciones Recientes
        </CardTitle>
        <CardDescription data-oid="x_j4:9.">
          Últimas operaciones financieras registradas
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="3l3mkm_">
        <div className="rounded-md overflow-hidden" data-oid="39-678k">
          <Table data-oid="79xxetb">
            <TableHeader className="bg-muted/50" data-oid="g4uu_qh">
              <TableRow data-oid="zio93bf">
                <TableHead data-oid="6rr38-e">Descripción</TableHead>
                <TableHead data-oid="cev69ly">Fecha</TableHead>
                <TableHead data-oid=".ndzt.o">Categoría</TableHead>
                <TableHead className="text-right" data-oid="75cdow6">
                  Monto
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody data-oid="5yaigun">
              {transactions.map((transaction, index) => (
                <TableRow
                  key={transaction.id}
                  className="hover:bg-muted/30 transition-colors duration-200"
                  style={{
                    animationDelay: `${(index + 1) * 50}ms`,
                    animation: "fade-in 0.5s ease-out forwards",
                    opacity: 0,
                  }}
                  data-oid="ktm00-w"
                >
                  <TableCell className="font-medium" data-oid="9wiehzq">
                    {transaction.description}
                  </TableCell>
                  <TableCell data-oid="0:qgn_n">{transaction.date}</TableCell>
                  <TableCell data-oid="arw.c_0">
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs transition-all duration-200",
                        transaction.amount < 0
                          ? "bg-contable-danger/10 text-contable-danger"
                          : "bg-contable-success/10 text-contable-success",
                      )}
                      data-oid=".tc17-k"
                    >
                      {transaction.category}
                    </span>
                  </TableCell>
                  <TableCell className="text-right" data-oid="u2ogydj">
                    <div
                      className="flex items-center justify-end"
                      data-oid="am_.foo"
                    >
                      {transaction.amount < 0 ? (
                        <ArrowDownLeft
                          className="mr-1 h-4 w-4 text-contable-danger animate-bounce-light"
                          style={{ animationDelay: `${index * 100}ms` }}
                          data-oid="fynxfqu"
                        />
                      ) : (
                        <ArrowUpRight
                          className="mr-1 h-4 w-4 text-contable-success animate-bounce-light"
                          style={{ animationDelay: `${index * 100}ms` }}
                          data-oid="ltfwl9-"
                        />
                      )}
                      <span
                        className={cn("font-medium", {
                          "text-contable-danger": transaction.amount < 0,
                          "text-contable-success": transaction.amount > 0,
                        })}
                        data-oid="rwm9:ed"
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
