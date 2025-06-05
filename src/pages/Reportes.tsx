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
    <MainLayout data-oid="9dru:s.">
      <div className="space-y-4" data-oid="ulbuucb">
        <div className="flex items-center justify-between" data-oid="lz:r:k4">
          <h1 className="text-2xl font-bold" data-oid="s369oib">
            Reportes Financieros
          </h1>
          <Button variant="outline" className="gap-1" data-oid="jckg5eu">
            <Download className="h-4 w-4" data-oid="574idex" />
            <span data-oid="z_vqxqm">Exportar</span>
          </Button>
        </div>

        <Tabs defaultValue="balance" data-oid="lr38kxx">
          <TabsList
            className="grid w-full grid-cols-4 max-w-2xl"
            data-oid="hexo95a"
          >
            <TabsTrigger value="balance" data-oid="wimrze_">
              Balance General
            </TabsTrigger>
            <TabsTrigger value="resultados" data-oid="y62myd:">
              Estado de Resultados
            </TabsTrigger>
            <TabsTrigger value="flujo" data-oid="rmy1nvw">
              Flujo de Efectivo
            </TabsTrigger>
            <TabsTrigger value="personalizados" data-oid="s1ewrvk">
              Personalizados
            </TabsTrigger>
          </TabsList>
          <TabsContent value="balance" data-oid="fvcr47_">
            <Card data-oid="agh9vcr">
              <CardHeader data-oid="28na2xy">
                <CardTitle data-oid="drmhdwt">Balance General</CardTitle>
                <CardDescription data-oid="uxp77oe">
                  Estado financiero que muestra activos, pasivos y capital
                  contable
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="d95:97x">
                <p
                  className="text-center text-gray-500 py-8"
                  data-oid="2w9c:k7"
                >
                  El reporte de balance general estará disponible próximamente
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="resultados" data-oid="rczyotw">
            <Card data-oid="1eoe9r_">
              <CardHeader data-oid="5xw-09s">
                <CardTitle data-oid="xe3.7z2">Estado de Resultados</CardTitle>
                <CardDescription data-oid="7bf8vgg">
                  Informe de ingresos, gastos y beneficios en un período
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="aguy_ej">
                <p
                  className="text-center text-gray-500 py-8"
                  data-oid="vi:dsf-"
                >
                  El estado de resultados estará disponible próximamente
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="flujo" data-oid="-nz:l:9">
            <Card data-oid="p2bwia1">
              <CardHeader data-oid="091jw-.">
                <CardTitle data-oid="ahy0akx">Flujo de Efectivo</CardTitle>
                <CardDescription data-oid="4b:5xf7">
                  Análisis del movimiento de efectivo de su empresa
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="lo9fjb7">
                <p
                  className="text-center text-gray-500 py-8"
                  data-oid="y439uaf"
                >
                  El reporte de flujo de efectivo estará disponible próximamente
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="personalizados" data-oid="mf.r6wm">
            <Card data-oid="tg:25er">
              <CardHeader data-oid="we67d.j">
                <CardTitle data-oid="la2zx7c">
                  Reportes Personalizados
                </CardTitle>
                <CardDescription data-oid="y-ce4.f">
                  Cree y gestione reportes a su medida
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="7mipcui">
                <p
                  className="text-center text-gray-500 py-8"
                  data-oid="tyrcsqf"
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
