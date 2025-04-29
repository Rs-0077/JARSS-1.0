
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatCard } from "@/components/dashboard/StatCard";
import { Calendar, FileText, PieChart, CheckIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Impuestos = () => {
  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Cumplimiento Fiscal</h1>
        
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            title="Impuestos Pendientes"
            value="$12,450.00"
            icon={FileText}
            trend="neutral"
            trendValue="Vence el 15/04/2025"
          />
          <StatCard
            title="Impuestos Pagados (Año)"
            value="$45,320.00"
            icon={CheckIcon}
            trend="up"
            trendValue="+8.2% vs año anterior"
          />
          <StatCard
            title="Próxima Declaración"
            value="IVA Mensual"
            icon={Calendar}
            trend="neutral"
            trendValue="15/04/2025"
          />
        </div>

        <Card className="glass-morphism">
          <CardHeader>
            <CardTitle>Calendario Fiscal 2025</CardTitle>
            <CardDescription>Fechas importantes para cumplimiento fiscal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold">Declaración Mensual de IVA</h3>
                    <span className="text-sm font-medium text-red-600">5 días restantes</span>
                  </div>
                  <p className="text-sm text-gray-500">Fecha límite: 15/04/2025</p>
                  <Progress value={65} className="h-2 mt-2" />
                </div>
              </div>
              
              <div className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold">Retenciones de Impuesto sobre la Renta</h3>
                    <span className="text-sm font-medium text-amber-600">12 días restantes</span>
                  </div>
                  <p className="text-sm text-gray-500">Fecha límite: 22/04/2025</p>
                  <Progress value={40} className="h-2 mt-2" />
                </div>
              </div>
              
              <div className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold">Declaración de Impuestos Especiales</h3>
                    <span className="text-sm font-medium text-blue-600">24 días restantes</span>
                  </div>
                  <p className="text-sm text-gray-500">Fecha límite: 05/05/2025</p>
                  <Progress value={20} className="h-2 mt-2" />
                </div>
              </div>
              
              <div className="flex items-center p-3 rounded-lg bg-white/10 border border-gray-200/10">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <CheckIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold">Declaración Trimestral de ISR</h3>
                    <span className="text-sm font-medium text-green-600">Completado</span>
                  </div>
                  <p className="text-sm text-gray-500">Presentado: 15/03/2025</p>
                  <Progress value={100} className="h-2 mt-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="declaraciones">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="declaraciones">Declaraciones</TabsTrigger>
            <TabsTrigger value="reportes">Reportes Fiscales</TabsTrigger>
            <TabsTrigger value="analisis">Análisis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="declaraciones">
            <Card className="glass-morphism">
              <CardHeader>
                <CardTitle>Declaraciones Pendientes</CardTitle>
                <CardDescription>
                  Declaraciones fiscales por presentar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between p-4 bg-white/10 rounded-lg border border-gray-200/10">
                    <div>
                      <h3 className="font-medium">IVA Mensual</h3>
                      <p className="text-sm text-gray-500">Periodo: Marzo 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$8,450.00</p>
                      <p className="text-xs text-red-500">Vence: 15/04/2025</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between p-4 bg-white/10 rounded-lg border border-gray-200/10">
                    <div>
                      <h3 className="font-medium">Retenciones ISR</h3>
                      <p className="text-sm text-gray-500">Periodo: Marzo 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$4,000.00</p>
                      <p className="text-xs text-amber-500">Vence: 22/04/2025</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button className="mr-2">Generar Declaración</Button>
                    <Button variant="outline">Ver Historial</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reportes">
            <Card className="glass-morphism">
              <CardHeader>
                <CardTitle>Reportes Fiscales</CardTitle>
                <CardDescription>
                  Informes para análisis fiscal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale">
                      <div className="flex items-center mb-3">
                        <FileText className="h-5 w-5 mr-2 text-contable-primary" />
                        <h3 className="font-medium">Reporte de IVA Acreditable</h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        Detalle de IVA acreditable por periodo
                      </p>
                      <Button variant="outline" size="sm">Descargar</Button>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale">
                      <div className="flex items-center mb-3">
                        <FileText className="h-5 w-5 mr-2 text-contable-primary" />
                        <h3 className="font-medium">Reporte de IVA Trasladado</h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        Detalle de IVA trasladado por periodo
                      </p>
                      <Button variant="outline" size="sm">Descargar</Button>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale">
                      <div className="flex items-center mb-3">
                        <FileText className="h-5 w-5 mr-2 text-contable-primary" />
                        <h3 className="font-medium">Reporte de Retenciones</h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        Retenciones de ISR e IVA
                      </p>
                      <Button variant="outline" size="sm">Descargar</Button>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-white/10 border border-gray-200/10 hover-scale">
                      <div className="flex items-center mb-3">
                        <FileText className="h-5 w-5 mr-2 text-contable-primary" />
                        <h3 className="font-medium">Análisis Fiscal Anual</h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        Resumen de impuestos anuales
                      </p>
                      <Button variant="outline" size="sm">Descargar</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analisis">
            <Card className="glass-morphism">
              <CardHeader>
                <CardTitle>Análisis Fiscal</CardTitle>
                <CardDescription>
                  Estadísticas y tendencias fiscales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Distribución de Impuestos (2025)</h3>
                    <div className="h-64 bg-white/10 p-4 rounded-lg border border-gray-200/10 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <PieChart className="h-12 w-12 mx-auto mb-3 opacity-50" />
                        <p>Gráfico de distribución de impuestos</p>
                        <p className="text-sm">(Datos simulados)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-3">Tasa Efectiva de Impuestos</h3>
                      <div className="p-4 rounded-lg bg-white/10 border border-gray-200/10">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-500">Tasa Efectiva Actual</span>
                          <span className="font-medium">24.5%</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-500">Tasa Efectiva Anterior</span>
                          <span className="font-medium">26.8%</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-500">Variación</span>
                          <span className="font-medium text-green-500">-2.3%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3">Próximas Obligaciones</h3>
                      <div className="p-4 rounded-lg bg-white/10 border border-gray-200/10">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">DIOT</span>
                            <span className="text-xs text-amber-500">17/04/2025</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Nómina</span>
                            <span className="text-xs text-amber-500">18/04/2025</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">ISR Definitivo</span>
                            <span className="text-xs">30/04/2025</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Impuestos;
