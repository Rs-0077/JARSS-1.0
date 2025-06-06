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
    <Card className="glass-morphism" data-oid="7m5zi0s">
      <CardHeader data-oid="rkq7xha">
        <CardTitle className="text-xl" data-oid="cki4m_t">
          Obligaciones Fiscales
        </CardTitle>
        <CardDescription data-oid="f5coe9e">
          Impuestos pendientes de pago
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4" data-oid="7xh4yix">
        <div className="h-[180px]" data-oid="bdx419t">
          <ResponsiveContainer width="100%" height="100%" data-oid="k5cf_b6">
            <BarChart
              data={taxData}
              margin={{
                top: 10,
                right: 0,
                left: 0,
                bottom: 5,
              }}
              data-oid="i339n4f"
            >
              <defs data-oid="doo5gyp">
                <linearGradient
                  id="barGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  data-oid="8.4882-"
                >
                  <stop
                    offset="0%"
                    stopColor="#0C4DA2"
                    stopOpacity={0.8}
                    data-oid="5rqcnwc"
                  />

                  <stop
                    offset="100%"
                    stopColor="#0C4DA2"
                    stopOpacity={0.4}
                    data-oid="luurf0o"
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                data-oid="1plj.2e"
              />

              <XAxis dataKey="name" data-oid="_9ogm7k" />
              <YAxis data-oid="zjjho9m" />
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
                data-oid="qbqgfy8"
              />

              <Bar
                dataKey="amount"
                fill="url(#barGradient)"
                radius={[4, 4, 0, 0]}
                data-oid="5d4ia.r"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2" data-oid="-h5ui:w">
          {taxData.map((tax) => (
            <div
              key={tax.name}
              className="flex items-center justify-between p-3 rounded-md bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors"
              data-oid="e0mndph"
            >
              <div data-oid="21yn8gw">
                <p className="font-medium" data-oid="b-k1c:i">
                  {tax.name}
                </p>
                <div
                  className="flex items-center text-xs text-gray-500"
                  data-oid="8sfdyu8"
                >
                  <Calendar className="mr-1 h-3 w-3" data-oid="6jpxew:" />
                  Vence: {tax.dueDate}
                </div>
              </div>
              <p className="font-semibold" data-oid="3ams654">
                ${tax.amount.toLocaleString("es-MX")}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
