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
      data-oid="m-1l2-n"
    >
      <CardHeader data-oid="s-_utj3">
        <CardTitle className="text-xl" data-oid="0prvksw">
          Transacciones Recientes
        </CardTitle>
        <CardDescription data-oid="iwmwi-5">
          Últimas operaciones financieras registradas
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="2dbh90z">
        <div className="rounded-md overflow-hidden" data-oid="6o1mk09">
          <Table data-oid="3ak5_c8">
            <TableHeader className="bg-muted/50" data-oid="ey2boay">
              <TableRow data-oid="i1a7flb">
                <TableHead data-oid="3hmpb8u">Descripción</TableHead>
                <TableHead data-oid="youh0yk">Fecha</TableHead>
                <TableHead data-oid="g4a.0-j">Categoría</TableHead>
                <TableHead className="text-right" data-oid="jo36_9k">
                  Monto
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody data-oid="qk5tyku">
              {transactions.map((transaction, index) => (
                <TableRow
                  key={transaction.id}
                  className="hover:bg-muted/30 transition-colors duration-200"
                  style={{
                    animationDelay: `${(index + 1) * 50}ms`,
                    animation: "fade-in 0.5s ease-out forwards",
                    opacity: 0,
                  }}
                  data-oid="joxjtv6"
                >
                  <TableCell className="font-medium" data-oid="6lnyzpu">
                    {transaction.description}
                  </TableCell>
                  <TableCell data-oid=":le640f">{transaction.date}</TableCell>
                  <TableCell data-oid="gntlsp0">
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs transition-all duration-200",
                        transaction.amount < 0
                          ? "bg-contable-danger/10 text-contable-danger"
                          : "bg-contable-success/10 text-contable-success",
                      )}
                      data-oid="65b51cw"
                    >
                      {transaction.category}
                    </span>
                  </TableCell>
                  <TableCell className="text-right" data-oid="dte69f.">
                    <div
                      className="flex items-center justify-end"
                      data-oid="nm_owt6"
                    >
                      {transaction.amount < 0 ? (
                        <ArrowDownLeft
                          className="mr-1 h-4 w-4 text-contable-danger animate-bounce-light"
                          style={{ animationDelay: `${index * 100}ms` }}
                          data-oid="jiu4c19"
                        />
                      ) : (
                        <ArrowUpRight
                          className="mr-1 h-4 w-4 text-contable-success animate-bounce-light"
                          style={{ animationDelay: `${index * 100}ms` }}
                          data-oid="tkpmboo"
                        />
                      )}
                      <span
                        className={cn("font-medium", {
                          "text-contable-danger": transaction.amount < 0,
                          "text-contable-success": transaction.amount > 0,
                        })}
                        data-oid="szxx-02"
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
