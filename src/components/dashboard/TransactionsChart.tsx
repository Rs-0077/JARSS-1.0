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
      data-oid="z21oof4"
    >
      <CardHeader data-oid="7a6ezja">
        <CardTitle className="text-xl" data-oid="pukw9gh">
          Visión general financiera
        </CardTitle>
        <CardDescription data-oid=".z0t4-e">
          Ingresos vs. Gastos en los últimos 6 meses
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="fa6:70l">
        <div className="h-[300px]" data-oid="6aabtd7">
          <ResponsiveContainer width="100%" height="100%" data-oid="m::l74m">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
              data-oid="w8sc2_i"
            >
              <defs data-oid="m9:k0pu">
                <linearGradient
                  id="colorIngresos"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  data-oid="m1.mazt"
                >
                  <stop
                    offset="5%"
                    stopColor="#059669"
                    stopOpacity={0.8}
                    data-oid="7qy.nhl"
                  />

                  <stop
                    offset="95%"
                    stopColor="#059669"
                    stopOpacity={0.1}
                    data-oid="hp1ulm."
                  />
                </linearGradient>
                <linearGradient
                  id="colorGastos"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  data-oid="l8v61b5"
                >
                  <stop
                    offset="5%"
                    stopColor="#E63946"
                    stopOpacity={0.8}
                    data-oid="9.mfpjq"
                  />

                  <stop
                    offset="95%"
                    stopColor="#E63946"
                    stopOpacity={0.1}
                    data-oid="sr:5q.f"
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                data-oid="8shyo9y"
              />

              <XAxis
                dataKey="name"
                stroke="var(--muted-foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "var(--border)" }}
                tick={{
                  fill: "var(--muted-foreground)",
                  className: "dark:fill-white transition-colors",
                }}
                className="dark:text-white transition-colors"
                data-oid="vfm99km"
              />

              <YAxis
                stroke="var(--muted-foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "var(--border)" }}
                tickFormatter={(value) => `$${value}`}
                data-oid="bmgp9do"
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
                data-oid="6:2sn9z"
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
                data-oid="vaj9gsl"
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
                data-oid="ig:xjqy"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
