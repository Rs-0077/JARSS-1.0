
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, PieChart } from "lucide-react";

export const BudgetAnalysis = () => {
  return (
    <Card className="glass-morphism">
      <CardHeader>
        <CardTitle>Análisis de Variaciones</CardTitle>
        <CardDescription>
          Identifique desviaciones y sus causas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-red-50/10 p-4 rounded-lg border border-red-200/20">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
              <h3 className="font-medium text-red-700">Alerta de Desviación Crítica</h3>
            </div>
            <p className="text-sm text-red-600 mt-1">El departamento de Marketing ha superado el 80% de su presupuesto trimestral a mitad del periodo.</p>
            
            <div className="mt-3">
              <h4 className="text-sm font-medium text-red-700">Análisis de Causas:</h4>
              <ul className="list-disc list-inside text-sm text-red-600 mt-1">
                <li>Campaña publicitaria no planificada ($15,000)</li>
                <li>Aumento en costos de medios digitales ($5,200)</li>
                <li>Contratación de agencia externa no presupuestada ($8,500)</li>
              </ul>
            </div>
            
            <div className="mt-3">
              <h4 className="text-sm font-medium text-red-700">Recomendaciones:</h4>
              <ul className="list-disc list-inside text-sm text-red-600 mt-1">
                <li>Reducir gasto publicitario en Q3</li>
                <li>Reasignar fondos de otras partidas</li>
                <li>Revisar contrato con agencia externa</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-amber-50/10 p-4 rounded-lg border border-amber-200/20">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              <h3 className="font-medium text-amber-700">Alerta de Desviación Moderada</h3>
            </div>
            <p className="text-sm text-amber-600 mt-1">El proyecto de desarrollo de software está ligeramente por encima del presupuesto proyectado.</p>
            
            <div className="mt-3">
              <h4 className="text-sm font-medium text-amber-700">Análisis de Causas:</h4>
              <ul className="list-disc list-inside text-sm text-amber-600 mt-1">
                <li>Retrasos en entregas (aumento de horas de desarrollo)</li>
                <li>Cambios en requerimientos no contemplados</li>
              </ul>
            </div>
            
            <div className="mt-3">
              <h4 className="text-sm font-medium text-amber-700">Recomendaciones:</h4>
              <ul className="list-disc list-inside text-sm text-amber-600 mt-1">
                <li>Revisar cronograma y ajustar plazos</li>
                <li>Implementar control de cambios más estricto</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50/10 p-4 rounded-lg border border-green-200/20">
            <div className="flex items-center">
              <PieChart className="h-5 w-5 text-green-500 mr-2" />
              <h3 className="font-medium text-green-700">Optimización Identificada</h3>
            </div>
            <p className="text-sm text-green-600 mt-1">El departamento de Administración está significativamente por debajo del presupuesto proyectado.</p>
            
            <div className="mt-3">
              <h4 className="text-sm font-medium text-green-700">Análisis de Causas:</h4>
              <ul className="list-disc list-inside text-sm text-green-600 mt-1">
                <li>Digitalización de procesos ha reducido costos operativos</li>
                <li>Renegociación de contratos con proveedores</li>
              </ul>
            </div>
            
            <div className="mt-3">
              <h4 className="text-sm font-medium text-green-700">Recomendaciones:</h4>
              <ul className="list-disc list-inside text-sm text-green-600 mt-1">
                <li>Reasignar fondos a departamentos con necesidades</li>
                <li>Documentar prácticas eficientes para replicar en otros departamentos</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
