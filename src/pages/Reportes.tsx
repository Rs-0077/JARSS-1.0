
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reportes = () => {
  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Reportes Financieros</h1>
          <Button variant="outline" className="gap-1">
            <Download className="h-4 w-4" />
            <span>Exportar</span>
          </Button>
        </div>

        <Tabs defaultValue="balance">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl">
            <TabsTrigger value="balance">Balance General</TabsTrigger>
            <TabsTrigger value="resultados">Estado de Resultados</TabsTrigger>
            <TabsTrigger value="flujo">Flujo de Efectivo</TabsTrigger>
            <TabsTrigger value="personalizados">Personalizados</TabsTrigger>
          </TabsList>
          <TabsContent value="balance">
            <Card>
              <CardHeader>
                <CardTitle>Balance General</CardTitle>
                <CardDescription>
                  Estado financiero que muestra activos, pasivos y capital contable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 py-8">
                  El reporte de balance general estará disponible próximamente
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="resultados">
            <Card>
              <CardHeader>
                <CardTitle>Estado de Resultados</CardTitle>
                <CardDescription>
                  Informe de ingresos, gastos y beneficios en un período
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 py-8">
                  El estado de resultados estará disponible próximamente
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="flujo">
            <Card>
              <CardHeader>
                <CardTitle>Flujo de Efectivo</CardTitle>
                <CardDescription>
                  Análisis del movimiento de efectivo de su empresa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 py-8">
                  El reporte de flujo de efectivo estará disponible próximamente
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="personalizados">
            <Card>
              <CardHeader>
                <CardTitle>Reportes Personalizados</CardTitle>
                <CardDescription>
                  Cree y gestione reportes a su medida
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 py-8">
                  Los reportes personalizados estarán disponibles próximamente
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Reportes;
