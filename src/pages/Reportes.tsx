import { MainLayout } from "@/components/layout/MainLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reportes = () => {
  return (
    <MainLayout data-oid="m-8l711">
      <div className="space-y-4" data-oid="izvxz7q">
        <div className="flex items-center justify-between" data-oid="g2kepzp">
          <h1 className="text-2xl font-bold" data-oid="tx5nxu5">
            Reportes Financieros
          </h1>
          <Button variant="outline" className="gap-1" data-oid="hiaqj:i">
            <Download className="h-4 w-4" data-oid="7_z4..4" />
            <span data-oid=".icwatb">Exportar</span>
          </Button>
        </div>

        <Tabs defaultValue="balance" data-oid="wgo-.ab">
          <TabsList
            className="grid w-full grid-cols-4 max-w-2xl"
            data-oid="jw6.lh9"
          >
            <TabsTrigger value="balance" data-oid="d1304_2">
              Balance General
            </TabsTrigger>
            <TabsTrigger value="resultados" data-oid="yqc7ain">
              Estado de Resultados
            </TabsTrigger>
            <TabsTrigger value="flujo" data-oid="d8u6n1r">
              Flujo de Efectivo
            </TabsTrigger>
            <TabsTrigger value="personalizados" data-oid="i8j..il">
              Personalizados
            </TabsTrigger>
          </TabsList>
          <TabsContent value="balance" data-oid="ah.7_c9">
            <Card data-oid="qd4me-v">
              <CardHeader data-oid=":xritq_">
                <CardTitle data-oid="07p5-od">Balance General</CardTitle>
                <CardDescription data-oid="qszrm6y">
                  Estado financiero que muestra activos, pasivos y capital
                  contable
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="4cmhh_n">
                <p
                  className="text-center text-gray-500 py-8"
                  data-oid="g-jqbad"
                >
                  El reporte de balance general estará disponible próximamente
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="resultados" data-oid="rd-56wj">
            <Card data-oid="1152wmx">
              <CardHeader data-oid="v_sm99d">
                <CardTitle data-oid="yoe2b85">Estado de Resultados</CardTitle>
                <CardDescription data-oid="ny7znuc">
                  Informe de ingresos, gastos y beneficios en un período
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="rddzx5j">
                <p
                  className="text-center text-gray-500 py-8"
                  data-oid="a3ga3fh"
                >
                  El estado de resultados estará disponible próximamente
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="flujo" data-oid="s9is:2c">
            <Card data-oid="eg5a3l5">
              <CardHeader data-oid="i58ajqa">
                <CardTitle data-oid="1lpd3yw">Flujo de Efectivo</CardTitle>
                <CardDescription data-oid=".zxpg35">
                  Análisis del movimiento de efectivo de su empresa
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="r4:gbjb">
                <p
                  className="text-center text-gray-500 py-8"
                  data-oid="jmed8xi"
                >
                  El reporte de flujo de efectivo estará disponible próximamente
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="personalizados" data-oid="rbwbfdg">
            <Card data-oid=".o4sjyx">
              <CardHeader data-oid="l54o3o3">
                <CardTitle data-oid="0349seu">
                  Reportes Personalizados
                </CardTitle>
                <CardDescription data-oid="uz:fye.">
                  Cree y gestione reportes a su medida
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="t9g5b9g">
                <p
                  className="text-center text-gray-500 py-8"
                  data-oid="p96jj.l"
                >
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
