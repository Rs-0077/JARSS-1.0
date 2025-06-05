import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Calendar, Clock } from "lucide-react";

const taxData = [
  {
    name: "ISR",
    amount: 15000,
    dueDate: "2025-04-17",
    status: "Pendiente",
  },
  {
    name: "IVA",
    amount: 8500,
    dueDate: "2025-04-17",
    status: "Pendiente",
  },
  {
    name: "IMSS",
    amount: 4200,
    dueDate: "2025-04-20",
    status: "Pendiente",
  },
];

export function TaxObligations() {
  return (
    <Card className="glass-morphism" data-oid="gaoi.:c">
      <CardHeader data-oid="jnd8day">
        <CardTitle className="text-xl" data-oid="g5qzr_2">
          Obligaciones Fiscales
        </CardTitle>
        <CardDescription data-oid="zeeo7km">
          Impuestos pendientes de pago
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4" data-oid="1.w688n">
        <div className="h-[180px]" data-oid="b-v7do3">
          <ResponsiveContainer width="100%" height="100%" data-oid="8deowqi">
            <BarChart
              data={taxData}
              margin={{
                top: 10,
                right: 0,
                left: 0,
                bottom: 5,
              }}
              data-oid=":tvtein"
            >
              <defs data-oid="luet38c">
                <linearGradient
                  id="barGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  data-oid="zzxkk.3"
                >
                  <stop
                    offset="0%"
                    stopColor="#0C4DA2"
                    stopOpacity={0.8}
                    data-oid="2c869gy"
                  />

                  <stop
                    offset="100%"
                    stopColor="#0C4DA2"
                    stopOpacity={0.4}
                    data-oid="snls3w6"
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                data-oid="6q3apop"
              />

              <XAxis dataKey="name" data-oid="0rua2lt" />
              <YAxis data-oid="3uuusmf" />
              <Tooltip
                formatter={(value) => [
                  `$${value.toLocaleString("es-MX")}`,
                  "Monto",
                ]}
                contentStyle={{
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(8px)",
                }}
                data-oid="w5.0d9u"
              />

              <Bar
                dataKey="amount"
                fill="url(#barGradient)"
                radius={[4, 4, 0, 0]}
                data-oid="urh5ee2"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2" data-oid="sht9est">
          {taxData.map((tax) => (
            <div
              key={tax.name}
              className="flex items-center justify-between p-3 rounded-md bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors"
              data-oid="ed3dlk9"
            >
              <div data-oid="usvdps2">
                <p className="font-medium" data-oid="be3fxja">
                  {tax.name}
                </p>
                <div
                  className="flex items-center text-xs text-gray-500"
                  data-oid="jwofd1r"
                >
                  <Calendar className="mr-1 h-3 w-3" data-oid="5ki5je_" />
                  Vence: {tax.dueDate}
                </div>
              </div>
              <p className="font-semibold" data-oid="yf:npgf">
                ${tax.amount.toLocaleString("es-MX")}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
