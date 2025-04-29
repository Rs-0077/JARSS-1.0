
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const ExecutionSummary = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("2025-Q2");
  
  return (
    <Card className="glass-morphism">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle>Resumen de Ejecución Presupuestaria</CardTitle>
          <CardDescription>Seguimiento en tiempo real del gasto actual vs. presupuesto</CardDescription>
        </div>
        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Seleccionar período" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2025-Q1">1er Trimestre 2025</SelectItem>
            <SelectItem value="2025-Q2">2do Trimestre 2025</SelectItem>
            <SelectItem value="2025-Q3">3er Trimestre 2025</SelectItem>
            <SelectItem value="2025-Q4">4to Trimestre 2025</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Departamento de Marketing</h3>
                <p className="text-sm text-gray-500">Presupuesto: $65,000.00</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$52,780.00</p>
                <p className="text-sm text-amber-500">81.2% utilizado</p>
              </div>
            </div>
            <Progress value={81.2} className="h-2" />
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Departamento de Tecnología</h3>
                <p className="text-sm text-gray-500">Presupuesto: $85,000.00</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$48,450.00</p>
                <p className="text-sm text-green-500">57.0% utilizado</p>
              </div>
            </div>
            <Progress value={57} className="h-2" />
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Departamento de Ventas</h3>
                <p className="text-sm text-gray-500">Presupuesto: $55,000.00</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$25,450.00</p>
                <p className="text-sm text-green-500">46.3% utilizado</p>
              </div>
            </div>
            <Progress value={46.3} className="h-2" />
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Administración y Finanzas</h3>
                <p className="text-sm text-gray-500">Presupuesto: $43,500.00</p>
              </div>
              <div className="text-right">
                <p className="font-medium">$15,695.00</p>
                <p className="text-sm text-green-500">36.1% utilizado</p>
              </div>
            </div>
            <Progress value={36.1} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
