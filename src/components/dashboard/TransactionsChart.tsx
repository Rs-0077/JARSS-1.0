import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Datos de ejemplo para el gráfico
const data = [
  { name: "Ene", ingresos: 4000, gastos: 2400 },
  { name: "Feb", ingresos: 3000, gastos: 1398 },
  { name: "Mar", ingresos: 2000, gastos: 9800 },
  { name: "Abr", ingresos: 2780, gastos: 3908 },
  { name: "May", ingresos: 1890, gastos: 4800 },
  { name: "Jun", ingresos: 2390, gastos: 3800 },
];

export function TransactionsChart() {
  return (
    <Card
      className="col-span-3 dashboard-card animate-slide-up"
      data-oid="gcj_-3-"
    >
      <CardHeader data-oid="m.-6vn8">
        <CardTitle className="text-xl" data-oid="y0dkuz:">
          Visión general financiera
        </CardTitle>
        <CardDescription data-oid="4oq-a_6">
          Ingresos vs. Gastos en los últimos 6 meses
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="xk2zdq6">
        <div className="h-[300px]" data-oid="5.3gh:l">
          <ResponsiveContainer width="100%" height="100%" data-oid="hlulu6m">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
              data-oid="gedsm7v"
            >
              <defs data-oid="-o:9cmc">
                <linearGradient
                  id="colorIngresos"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  data-oid="2897qmi"
                >
                  <stop
                    offset="5%"
                    stopColor="#059669"
                    stopOpacity={0.8}
                    data-oid="kbi5xnl"
                  />

                  <stop
                    offset="95%"
                    stopColor="#059669"
                    stopOpacity={0.1}
                    data-oid="xksxg7e"
                  />
                </linearGradient>
                <linearGradient
                  id="colorGastos"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  data-oid="wuqtf5t"
                >
                  <stop
                    offset="5%"
                    stopColor="#E63946"
                    stopOpacity={0.8}
                    data-oid="u6j-ubm"
                  />

                  <stop
                    offset="95%"
                    stopColor="#E63946"
                    stopOpacity={0.1}
                    data-oid="fgf4z57"
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                data-oid="zhbrt2x"
              />

              <XAxis
                dataKey="name"
                stroke="var(--muted-foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "var(--border)" }}
                tick={{
                  fill: "var(--muted-foreground)",
                  className: "dark:fill-white transition-colors"
                }}
                className="dark:text-white transition-colors"
                data-oid="cpm741p"
              />

              <YAxis
                stroke="var(--muted-foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "var(--border)" }}
                tickFormatter={(value) => `$${value}`}
                data-oid="kydm.hh"
              />

              <Tooltip
                contentStyle={{
                  borderRadius: "var(--radius)",
                  backgroundColor: "hsl(var(--card))",
                  color: "hsl(var(--card-foreground))",
                  border: "1px solid hsl(var(--border))",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(8px)",
                }}
                animationDuration={300}
                cursor={{
                  stroke: "var(--primary)",
                  strokeWidth: 1,
                  strokeDasharray: "5 5",
                }}
                data-oid="1zvcmie"
              />

              <Area
                type="monotone"
                dataKey="ingresos"
                stroke="#059669"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorIngresos)"
                activeDot={{
                  r: 6,
                  stroke: "#059669",
                  strokeWidth: 2,
                  fill: "#fff",
                }}
                animationDuration={1500}
                animationEasing="ease-out"
                data-oid=".9yg1.:"
              />

              <Area
                type="monotone"
                dataKey="gastos"
                stroke="#E63946"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorGastos)"
                activeDot={{
                  r: 6,
                  stroke: "#E63946",
                  strokeWidth: 2,
                  fill: "#fff",
                }}
                animationDuration={1500}
                animationEasing="ease-out"
                data-oid="whr2c4e"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
