import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLoadingState } from "@/hooks/useLoadingState";
import { useLoading } from "@/contexts/LoadingContext";
import {
  Spinner,
  PageLoader,
  SectionLoader,
  TableLoader,
  CardLoader,
  FormLoader,
  DataLoader,
  ButtonLoader,
  ImageLoader,
} from "@/components/ui/loaders";

export function LoadingExample() {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const {
    isLoading: isComponentLoading,
    startLoading: startComponentLoading,
    stopLoading: stopComponentLoading,
  } = useLoadingState();

  const [activeTab, setActiveTab] = useState("spinners");
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleGlobalLoading = () => {
    startLoading();
    setTimeout(() => {
      stopLoading();
    }, 800); // Reducido a 800ms
  };

  const handleComponentLoading = () => {
    startComponentLoading();
    setTimeout(() => {
      stopComponentLoading();
    }, 800); // Reducido a 800ms
  };

  const handleButtonLoading = () => {
    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
    }, 800); // Reducido a 800ms
  };

  return (
    <div className="container mx-auto py-8" data-oid="zrovprq">
      <h1 className="text-3xl font-bold mb-6" data-oid="4:e2ld5">
        Ejemplos de Animaciones de Carga
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        data-oid="16xdyx8"
      >
        <Card data-oid="vyi9:9p">
          <CardHeader data-oid="iy.vpfr">
            <CardTitle data-oid="04eaghn">Carga Global</CardTitle>
            <CardDescription data-oid="24t08ch">
              Muestra un indicador de carga a nivel de aplicación
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="ky2qg7c">
            <p className="mb-4" data-oid="skzy:u9">
              Este tipo de carga se muestra sobre toda la aplicación y bloquea
              la interacción del usuario.
            </p>
          </CardContent>
          <CardFooter data-oid="h4dhjrr">
            <Button onClick={handleGlobalLoading} data-oid="7ft1m5:">
              Mostrar Carga Global (0.8s)
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="75jjv2_">
          <CardHeader data-oid="k.g2t5:">
            <CardTitle data-oid="twiawyx">Carga de Componente</CardTitle>
            <CardDescription data-oid="6dskihp">
              Muestra un indicador de carga a nivel de componente
            </CardDescription>
          </CardHeader>
          <CardContent className="relative min-h-[100px]" data-oid="ns:w.i3">
            {isComponentLoading ? (
              <SectionLoader
                overlay
                text="Cargando componente..."
                data-oid="huplk_h"
              />
            ) : (
              <p data-oid="v7bwlbb">
                Este componente muestra un indicador de carga superpuesto cuando
                está cargando.
              </p>
            )}
          </CardContent>
          <CardFooter data-oid="i2thmyp">
            <Button onClick={handleComponentLoading} data-oid="fhuy5lq">
              Mostrar Carga de Componente (0.8s)
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="mb-8"
        data-oid="c0i:jw1"
      >
        <TabsList className="grid grid-cols-4 md:w-[600px]" data-oid="2o7vjim">
          <TabsTrigger value="spinners" data-oid="x79wake">
            Spinners
          </TabsTrigger>
          <TabsTrigger value="skeletons" data-oid="l1qsnw5">
            Esqueletos
          </TabsTrigger>
          <TabsTrigger value="buttons" data-oid="orkq12l">
            Botones
          </TabsTrigger>
          <TabsTrigger value="data" data-oid="owbgq:0">
            Datos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="spinners" className="mt-6" data-oid="v.qpnh8">
          <Card data-oid="35fipho">
            <CardHeader data-oid="zqeae3j">
              <CardTitle data-oid="wt7:fk7">Spinners</CardTitle>
              <CardDescription data-oid="ykc_f4b">
                Diferentes tamaños y colores de spinners
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="ijek.xs">
              <div className="flex flex-wrap gap-8" data-oid="fxggalq">
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid="vb4xdzy"
                >
                  <Spinner size="sm" data-oid="msp6d2y" />
                  <span className="text-sm" data-oid="7-9q1t3">
                    Pequeño
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid="4_fyega"
                >
                  <Spinner size="md" data-oid="c7f48kw" />
                  <span className="text-sm" data-oid="6f0jsx0">
                    Mediano
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid="such1ei"
                >
                  <Spinner size="lg" data-oid="f4ay9ir" />
                  <span className="text-sm" data-oid="iaqae7k">
                    Grande
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid="giujd8h"
                >
                  <Spinner size="xl" data-oid="_ib3ie." />
                  <span className="text-sm" data-oid="90.4ptx">
                    Extra Grande
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-8 mt-8" data-oid="1.jo9.i">
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid="i7_vsou"
                >
                  <Spinner size="md" color="primary" data-oid="8ro1uai" />
                  <span className="text-sm" data-oid="f08w1hr">
                    Primario
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid="2g-aj2k"
                >
                  <Spinner size="md" color="secondary" data-oid="17uc1l_" />
                  <span className="text-sm" data-oid="_80ikib">
                    Secundario
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2 bg-primary p-4 rounded-md"
                  data-oid="__f1d4i"
                >
                  <Spinner size="md" color="white" data-oid="df1-o_f" />
                  <span className="text-sm text-white" data-oid="1gi0g93">
                    Blanco
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skeletons" className="mt-6" data-oid="qdpnd-p">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-oid=":9h4pyq"
          >
            <Card data-oid="js33.sl">
              <CardHeader data-oid="klu2:6x">
                <CardTitle data-oid="2zo97m1">Esqueleto de Tabla</CardTitle>
              </CardHeader>
              <CardContent data-oid="hzbfz7p">
                <TableLoader rows={3} columns={4} data-oid="5.2n-v1" />
              </CardContent>
            </Card>

            <Card data-oid=".o.ovun">
              <CardHeader data-oid="m6fo6id">
                <CardTitle data-oid="rh.yddg">
                  Esqueleto de Formulario
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="2s7t3j5">
                <FormLoader fields={3} data-oid="bfklwu8" />
              </CardContent>
            </Card>

            <Card className="md:col-span-2" data-oid="9uz_xw.">
              <CardHeader data-oid="xzsv3zr">
                <CardTitle data-oid="ljx0qn2">Esqueleto de Tarjetas</CardTitle>
              </CardHeader>
              <CardContent data-oid="zkefi1p">
                <CardLoader count={3} data-oid="1.osrd0" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="buttons" className="mt-6" data-oid="vu0rypb">
          <Card data-oid="ieo3lh:">
            <CardHeader data-oid="sfzz5y-">
              <CardTitle data-oid=".u392g9">
                Botones con Estado de Carga
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="4kysfeo">
              <div className="flex flex-wrap gap-4" data-oid="q:viaup">
                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  data-oid="2oxq19i"
                >
                  Botón Primario
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  variant="secondary"
                  data-oid="s3laisq"
                >
                  Botón Secundario
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  variant="outline"
                  data-oid="m95f5uz"
                >
                  Botón Outline
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  variant="destructive"
                  data-oid="a5dxof9"
                >
                  Botón Destructivo
                </ButtonLoader>
              </div>

              <div className="flex flex-wrap gap-4 mt-8" data-oid="1u_ro66">
                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  loadingText="Cargando..."
                  data-oid="f3qs00m"
                >
                  Con Texto de Carga
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  size="sm"
                  data-oid="6ble_-3"
                >
                  Botón Pequeño
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  size="lg"
                  data-oid="2vd.dg7"
                >
                  Botón Grande
                </ButtonLoader>
              </div>
            </CardContent>
            <CardFooter data-oid="3uoggyo">
              <Button onClick={handleButtonLoading} data-oid="n2na.5z">
                Activar Estado de Carga (0.8s)
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="mt-6" data-oid="cnvrdpz">
          <Card data-oid="_8cvs0a">
            <CardHeader data-oid="mglfb8_">
              <CardTitle data-oid="wfr0xoa">Carga de Datos</CardTitle>
            </CardHeader>
            <CardContent data-oid="a42pbxe">
              <DataLoader
                isLoading={isComponentLoading}
                error={null}
                text="Cargando datos de ejemplo..."
                data-oid="ukzjegb"
              >
                <div className="p-4 border rounded-md" data-oid="c4:e1go">
                  <h3 className="text-lg font-medium mb-2" data-oid="grf.9ol">
                    Datos Cargados
                  </h3>
                  <p data-oid="_h.eqdz">
                    Estos son los datos que se muestran cuando la carga ha
                    finalizado.
                  </p>
                </div>
              </DataLoader>
            </CardContent>
            <CardFooter data-oid="bevenz-">
              <Button onClick={handleComponentLoading} data-oid="jbtimfj">
                Simular Carga de Datos (0.8s)
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
