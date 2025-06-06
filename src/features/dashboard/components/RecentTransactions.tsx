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
      data-oid="ow-f2ti"
    >
      <CardHeader data-oid="_76uec8">
        <CardTitle className="text-xl" data-oid="5ypc2u:">
          Transacciones Recientes
        </CardTitle>
        <CardDescription data-oid="1yarj4u">
          Últimas operaciones financieras registradas
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="nqo.42m">
        <div className="rounded-md overflow-hidden" data-oid="hk7g0t3">
          <Table data-oid="n5a_09x">
            <TableHeader className="bg-muted/50" data-oid="6thg:0-">
              <TableRow data-oid="dzyle24">
                <TableHead data-oid="-b79_9q">Descripción</TableHead>
                <TableHead data-oid="shlskp.">Fecha</TableHead>
                <TableHead data-oid="0l237ei">Categoría</TableHead>
                <TableHead className="text-right" data-oid="0_r1i_o">
                  Monto
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody data-oid="x1du37c">
              {transactions.map((transaction, index) => (
                <TableRow
                  key={transaction.id}
                  className="hover:bg-muted/30 transition-colors duration-200"
                  style={{
                    animationDelay: `${(index + 1) * 50}ms`,
                    animation: "fade-in 0.5s ease-out forwards",
                    opacity: 0,
                  }}
                  data-oid="agsl598"
                >
                  <TableCell className="font-medium" data-oid="cr9a4pn">
                    {transaction.description}
                  </TableCell>
                  <TableCell data-oid="7lr_1dk">{transaction.date}</TableCell>
                  <TableCell data-oid="bt--df4">
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs transition-all duration-200",
                        transaction.amount < 0
                          ? "bg-contable-danger/10 text-contable-danger"
                          : "bg-contable-success/10 text-contable-success",
                      )}
                      data-oid="tzkbmr0"
                    >
                      {transaction.category}
                    </span>
                  </TableCell>
                  <TableCell className="text-right" data-oid="hpzqh6q">
                    <div
                      className="flex items-center justify-end"
                      data-oid="b4_br6k"
                    >
                      {transaction.amount < 0 ? (
                        <ArrowDownLeft
                          className="mr-1 h-4 w-4 text-contable-danger animate-bounce-light"
                          style={{ animationDelay: `${index * 100}ms` }}
                          data-oid="xqjcq8e"
                        />
                      ) : (
                        <ArrowUpRight
                          className="mr-1 h-4 w-4 text-contable-success animate-bounce-light"
                          style={{ animationDelay: `${index * 100}ms` }}
                          data-oid="2k-q:_q"
                        />
                      )}
                      <span
                        className={cn("font-medium", {
                          "text-contable-danger": transaction.amount < 0,
                          "text-contable-success": transaction.amount > 0,
                        })}
                        data-oid=":h:1nxq"
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
