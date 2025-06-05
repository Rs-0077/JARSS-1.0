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
      data-oid=".ck-xkq"
    >
      <CardHeader data-oid="t1m-z_v">
        <CardTitle className="text-xl" data-oid="10w:71y">
          Transacciones Recientes
        </CardTitle>
        <CardDescription data-oid="q2k20:6">
          Últimas operaciones financieras registradas
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="-o641h3">
        <div className="rounded-md overflow-hidden" data-oid=":dwinsk">
          <Table data-oid="r4c:fio">
            <TableHeader className="bg-muted/50" data-oid="h6zhnw2">
              <TableRow data-oid="8u3434o">
                <TableHead data-oid="6vp94qk">Descripción</TableHead>
                <TableHead data-oid=".n9wi8o">Fecha</TableHead>
                <TableHead data-oid="qiwzr_w">Categoría</TableHead>
                <TableHead className="text-right" data-oid="u05_:-s">
                  Monto
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody data-oid="pjclz08">
              {transactions.map((transaction, index) => (
                <TableRow
                  key={transaction.id}
                  className="hover:bg-muted/30 transition-colors duration-200"
                  style={{
                    animationDelay: `${(index + 1) * 50}ms`,
                    animation: "fade-in 0.5s ease-out forwards",
                    opacity: 0,
                  }}
                  data-oid="kiy5ha_"
                >
                  <TableCell className="font-medium" data-oid="ty.q_4o">
                    {transaction.description}
                  </TableCell>
                  <TableCell data-oid="_nu2hyt">{transaction.date}</TableCell>
                  <TableCell data-oid="fgiey7f">
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs transition-all duration-200",
                        transaction.amount < 0
                          ? "bg-contable-danger/10 text-contable-danger"
                          : "bg-contable-success/10 text-contable-success",
                      )}
                      data-oid=".j8-bbh"
                    >
                      {transaction.category}
                    </span>
                  </TableCell>
                  <TableCell className="text-right" data-oid="pk9k.sy">
                    <div
                      className="flex items-center justify-end"
                      data-oid="cp024rj"
                    >
                      {transaction.amount < 0 ? (
                        <ArrowDownLeft
                          className="mr-1 h-4 w-4 text-contable-danger animate-bounce-light"
                          style={{ animationDelay: `${index * 100}ms` }}
                          data-oid="i5b1zsn"
                        />
                      ) : (
                        <ArrowUpRight
                          className="mr-1 h-4 w-4 text-contable-success animate-bounce-light"
                          style={{ animationDelay: `${index * 100}ms` }}
                          data-oid="vngcldb"
                        />
                      )}
                      <span
                        className={cn("font-medium", {
                          "text-contable-danger": transaction.amount < 0,
                          "text-contable-success": transaction.amount > 0,
                        })}
                        data-oid="a50:osb"
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
