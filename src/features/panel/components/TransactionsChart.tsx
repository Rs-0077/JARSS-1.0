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
    <Card className="col-span-3 panel-card animate-slide-up" data-oid="40j0r41">
      <CardHeader data-oid="kknb63p">
        <CardTitle className="text-xl" data-oid="28t4r.d">
          Visión general financiera
        </CardTitle>
        <CardDescription data-oid="lezu18d">
          Ingresos vs. Gastos en los últimos 6 meses
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="4ve0dt1">
        <div className="h-[300px] text-muted-foreground" data-oid="kg4vrj4">
          <ResponsiveContainer width="100%" height="100%" data-oid="_a.yviw">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
              data-oid="dsg0-ya"
            >
              <defs data-oid="u:ame34">
                <linearGradient
                  id="colorIngresos"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  data-oid="5c3ydq7"
                >
                  <stop
                    offset="5%"
                    stopColor="#059669"
                    stopOpacity={0.8}
                    data-oid="2e2-avz"
                  />

                  <stop
                    offset="95%"
                    stopColor="#059669"
                    stopOpacity={0.1}
                    data-oid="oe:lqzn"
                  />
                </linearGradient>
                <linearGradient
                  id="colorGastos"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  data-oid="zjcpvt8"
                >
                  <stop
                    offset="5%"
                    stopColor="#E63946"
                    stopOpacity={0.8}
                    data-oid="1vbpj3l"
                  />

                  <stop
                    offset="95%"
                    stopColor="#E63946"
                    stopOpacity={0.1}
                    data-oid="wx-oygl"
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                data-oid="6xfzdui"
              />

              <XAxis
                dataKey="name"
                stroke="var(--muted-foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "var(--border)" }}
                data-oid="cpm741p"
              />

              <YAxis
                stroke="var(--muted-foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "var(--border)" }}
                tickFormatter={(value) => `${value}`}
                data-oid="v.wevle"
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
                data-oid="lshtyab"
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
                data-oid="hqt:rot"
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
                data-oid="rcw:1lo"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
