
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Calendar, Clock } from "lucide-react";

const taxData = [
  {
    name: 'ISR',
    amount: 15000,
    dueDate: '2025-04-17',
    status: 'Pendiente'
  },
  {
    name: 'IVA',
    amount: 8500,
    dueDate: '2025-04-17',
    status: 'Pendiente'
  },
  {
    name: 'IMSS',
    amount: 4200,
    dueDate: '2025-04-20',
    status: 'Pendiente'
  }
];

export function TaxObligations() {
  return (
    <Card className="glass-morphism">
      <CardHeader>
        <CardTitle className="text-xl">Obligaciones Fiscales</CardTitle>
        <CardDescription>Impuestos pendientes de pago</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={taxData}
              margin={{
                top: 10,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0C4DA2" stopOpacity={0.8}/>
                  <stop offset="100%" stopColor="#0C4DA2" stopOpacity={0.4}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`$${value.toLocaleString("es-MX")}`, 'Monto']}
                contentStyle={{ borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)' }}
              />
              <Bar dataKey="amount" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-2">
          {taxData.map((tax) => (
            <div 
              key={tax.name} 
              className="flex items-center justify-between p-3 rounded-md bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-colors"
            >
              <div>
                <p className="font-medium">{tax.name}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="mr-1 h-3 w-3" />
                  Vence: {tax.dueDate}
                </div>
              </div>
              <p className="font-semibold">${tax.amount.toLocaleString("es-MX")}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
