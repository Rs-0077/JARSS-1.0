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
    <Card className="col-span-3 panel-card animate-slide-up" data-oid="2cnhgcm">
      <CardHeader data-oid="v7b68b:">
        <CardTitle className="text-xl" data-oid="vvy7q2b">
          Visión general financiera
        </CardTitle>
        <CardDescription data-oid="tbj6h_1">
          Ingresos vs. Gastos en los últimos 6 meses
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="lae6cci">
        <div className="h-[300px] text-muted-foreground" data-oid="3_esg3h">
          <ResponsiveContainer width="100%" height="100%" data-oid="a8q3833">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
              data-oid="8v6ooy5"
            >
              <defs data-oid="ha_6_:-">
                <linearGradient
                  id="colorIngresos"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  data-oid="gzf.d6e"
                >
                  <stop
                    offset="5%"
                    stopColor="#059669"
                    stopOpacity={0.8}
                    data-oid="v1qh5fs"
                  />

                  <stop
                    offset="95%"
                    stopColor="#059669"
                    stopOpacity={0.1}
                    data-oid="iaz-f.z"
                  />
                </linearGradient>
                <linearGradient
                  id="colorGastos"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  data-oid="2awzsm7"
                >
                  <stop
                    offset="5%"
                    stopColor="#E63946"
                    stopOpacity={0.8}
                    data-oid="dt-48br"
                  />

                  <stop
                    offset="95%"
                    stopColor="#E63946"
                    stopOpacity={0.1}
                    data-oid="4dpn8da"
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                data-oid="crh860i"
              />

              <XAxis
                dataKey="name"
                stroke="var(--muted-foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "var(--border)" }}
                data-oid="z0znzhq"
              />

              <YAxis
                stroke="var(--muted-foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "var(--border)" }}
                tickFormatter={(value) => `${value}`}
                data-oid="cc5lzga"
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
                labelStyle={{
                  color: "hsl(var(--card-foreground))",
                }}
                itemStyle={{
                  color: "hsl(var(--card-foreground))",
                }}
                animationDuration={300}
                cursor={{
                  stroke: "var(--primary)",
                  strokeWidth: 1,
                  strokeDasharray: "5 5",
                }}
                data-oid="561pj9k"
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
                data-oid="c4:5eo4"
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
                data-oid="_678t-p"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
