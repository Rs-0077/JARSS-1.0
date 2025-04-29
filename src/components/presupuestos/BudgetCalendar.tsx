
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "lucide-react";

export const BudgetCalendar = () => {
  return (
    <Card className="glass-morphism">
      <CardHeader>
        <CardTitle>Calendario Presupuestario</CardTitle>
        <CardDescription>
          Fechas importantes para la gestión presupuestaria
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold">Cierre del Periodo Actual</h3>
                <span className="text-sm font-medium text-blue-600">15 días restantes</span>
              </div>
              <p className="text-sm text-gray-500">Fecha límite: 30/06/2025</p>
              <Progress value={50} className="h-2 mt-2" />
            </div>
          </div>
          
          <div className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold">Planificación 3er Trimestre</h3>
                <span className="text-sm font-medium text-green-600">45 días restantes</span>
              </div>
              <p className="text-sm text-gray-500">Fecha límite: 31/07/2025</p>
              <Progress value={25} className="h-2 mt-2" />
            </div>
          </div>
          
          <div className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
              <Calendar className="h-6 w-6 text-amber-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold">Revisión Semestral</h3>
                <span className="text-sm font-medium text-amber-600">20 días restantes</span>
              </div>
              <p className="text-sm text-gray-500">Fecha límite: 05/07/2025</p>
              <Progress value={30} className="h-2 mt-2" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
