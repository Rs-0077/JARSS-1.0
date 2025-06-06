import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
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
      data-oid="hai-6_n"
    >
      <CardHeader data-oid="lb.zs2.">
        <CardTitle className="text-xl" data-oid="8-x_pbn">
          Visión general financiera
        </CardTitle>
        <CardDescription data-oid="qt4on0n">
          Ingresos vs. Gastos en los últimos 6 meses
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="-qg6xd.">
        <div className="h-[300px]" data-oid="rzudvnb">
          <ResponsiveContainer width="100%" height="100%" data-oid="yfp210i">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
              data-oid="w6gl-1b"
            >
              <defs data-oid="eqrc6s:">
                <linearGradient
                  id="colorIngresos"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  data-oid="k4e_43l"
                >
                  <stop
                    offset="5%"
                    stopColor="#059669"
                    stopOpacity={0.8}
                    data-oid="rfq1aoe"
                  />

                  <stop
                    offset="95%"
                    stopColor="#059669"
                    stopOpacity={0.1}
                    data-oid="kw.9il0"
                  />
                </linearGradient>
                <linearGradient
                  id="colorGastos"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  data-oid="enrvcdm"
                >
                  <stop
                    offset="5%"
                    stopColor="#E63946"
                    stopOpacity={0.8}
                    data-oid="df97u0z"
                  />

                  <stop
                    offset="95%"
                    stopColor="#E63946"
                    stopOpacity={0.1}
                    data-oid="13ui.ss"
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                data-oid="y_x3t4g"
              />

              <XAxis
                dataKey="name"
                stroke="var(--muted-foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "var(--border)" }}
                tick={{
                  fill: "currentColor",
                  className: "text-muted-foreground dark:text-white",
                }}
                data-oid="a.cj7bn"
              />

              <YAxis
                stroke="var(--muted-foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "var(--border)" }}
                tickFormatter={(value) => `$${value}`}
                tick={{
                  fill: "currentColor",
                  className: "text-muted-foreground dark:text-white",
                }}
                data-oid="vy6zibt"
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
                data-oid="31:pwys"
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
                data-oid="0lt67ga"
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
                data-oid="q1895sn"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
