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
    <Card className="glass-morphism" data-oid="xrhtw4d">
      <CardHeader data-oid="_f7f5p0">
        <CardTitle className="text-xl" data-oid="cqdov_g">
          Obligaciones Fiscales
        </CardTitle>
        <CardDescription data-oid="b3at6x.">
          Impuestos pendientes de pago
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4" data-oid="aj67:x4">
        <div className="h-[180px]" data-oid="s.a_43v">
          <ResponsiveContainer width="100%" height="100%" data-oid="bdh._az">
            <BarChart
              data={taxData}
              margin={{
                top: 10,
                right: 0,
                left: 0,
                bottom: 5,
              }}
              data-oid="p3acn5a"
            >
              <defs data-oid="d1g010e">
                <linearGradient
                  id="barGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                  data-oid="m7y6re3"
                >
                  <stop
                    offset="0%"
                    stopColor="#0C4DA2"
                    stopOpacity={0.8}
                    data-oid="yo.ffet"
                  />

                  <stop
                    offset="100%"
                    stopColor="#0C4DA2"
                    stopOpacity={0.4}
                    data-oid="b80qman"
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                data-oid="u-r4j2m"
              />

              <XAxis dataKey="name" data-oid="q-32ug0" />
              <YAxis data-oid="6ejxss3" />
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
                data-oid="p.i0jkr"
              />

              <Bar
                dataKey="amount"
                fill="url(#barGradient)"
                radius={[4, 4, 0, 0]}
                data-oid="s-aa1e8"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2" data-oid="ty:d6w.">
          {taxData.map((tax) => (
            <div
              key={tax.name}
              className="flex items-center justify-between p-3 rounded-md bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors"
              data-oid="ylq4i_n"
            >
              <div data-oid="d6:uev.">
                <p className="font-medium" data-oid="gmz4i34">
                  {tax.name}
                </p>
                <div
                  className="flex items-center text-xs text-gray-500"
                  data-oid="7zh4cg4"
                >
                  <Calendar className="mr-1 h-3 w-3" data-oid="wpx62qd" />
                  Vence: {tax.dueDate}
                </div>
              </div>
              <p className="font-semibold" data-oid="modsbto">
                ${tax.amount.toLocaleString("es-MX")}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
