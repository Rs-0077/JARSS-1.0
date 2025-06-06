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
    <MainLayout data-oid="g9hpxns">
      <div className="space-y-4" data-oid="-rt:_zu">
        <div className="flex items-center justify-between" data-oid="51u39gu">
          <h1 className="text-2xl font-bold" data-oid="t_b:1qw">
            Reportes Financieros
          </h1>
          <Button variant="outline" className="gap-1" data-oid="ug-78pb">
            <Download className="h-4 w-4" data-oid="n8qb:go" />
            <span data-oid=":bhfor:">Exportar</span>
          </Button>
        </div>

        <Tabs defaultValue="balance" data-oid="n5wu2ov">
          <TabsList
            className="grid w-full grid-cols-4 max-w-2xl"
            data-oid="-qugl6."
          >
            <TabsTrigger value="balance" data-oid="x-iunwg">
              Balance General
            </TabsTrigger>
            <TabsTrigger value="resultados" data-oid="0-hnuzr">
              Estado de Resultados
            </TabsTrigger>
            <TabsTrigger value="flujo" data-oid="yj:0d86">
              Flujo de Efectivo
            </TabsTrigger>
            <TabsTrigger value="personalizados" data-oid="yj2acae">
              Personalizados
            </TabsTrigger>
          </TabsList>
          <TabsContent value="balance" data-oid="n8iw6w7">
            <Card data-oid="hkpce-9">
              <CardHeader data-oid=".oxyuuc">
                <CardTitle data-oid="_53ovw9">Balance General</CardTitle>
                <CardDescription data-oid=":6z1qqh">
                  Estado financiero que muestra activos, pasivos y capital
                  contable
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="wz1rec_">
                <p
                  className="text-center text-gray-500 py-8"
                  data-oid="kbvw9yw"
                >
                  El reporte de balance general estará disponible próximamente
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="resultados" data-oid="t.ddauo">
            <Card data-oid="b:_a2cc">
              <CardHeader data-oid="h0-bc7o">
                <CardTitle data-oid="g3ig6rw">Estado de Resultados</CardTitle>
                <CardDescription data-oid="dfdosv4">
                  Informe de ingresos, gastos y beneficios en un período
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="rkvz5bt">
                <p
                  className="text-center text-gray-500 py-8"
                  data-oid=":idu:b1"
                >
                  El estado de resultados estará disponible próximamente
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="flujo" data-oid="yb7szeg">
            <Card data-oid=".3yhcpl">
              <CardHeader data-oid="uoppfqk">
                <CardTitle data-oid="_8v1ujs">Flujo de Efectivo</CardTitle>
                <CardDescription data-oid="wy2fis6">
                  Análisis del movimiento de efectivo de su empresa
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="skjwwak">
                <p
                  className="text-center text-gray-500 py-8"
                  data-oid="pdri-8u"
                >
                  El reporte de flujo de efectivo estará disponible próximamente
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="personalizados" data-oid="xz5e:dj">
            <Card data-oid="pi94zil">
              <CardHeader data-oid="wbj3am9">
                <CardTitle data-oid="_qor_b4">
                  Reportes Personalizados
                </CardTitle>
                <CardDescription data-oid="j4avx7w">
                  Cree y gestione reportes a su medida
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="71_:3yg">
                <p
                  className="text-center text-gray-500 py-8"
                  data-oid="gj2ikol"
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
