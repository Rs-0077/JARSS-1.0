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
    <div className="container mx-auto py-8" data-oid="50krkvm">
      <h1 className="text-3xl font-bold mb-6" data-oid="-nb::f_">
        Ejemplos de Animaciones de Carga
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        data-oid="wa33k50"
      >
        <Card data-oid="4f:14fs">
          <CardHeader data-oid="8z_zwlj">
            <CardTitle data-oid="3_4eaf1">Carga Global</CardTitle>
            <CardDescription data-oid="zs561e8">
              Muestra un indicador de carga a nivel de aplicación
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="awqz2wr">
            <p className="mb-4" data-oid="7oitw28">
              Este tipo de carga se muestra sobre toda la aplicación y bloquea
              la interacción del usuario.
            </p>
          </CardContent>
          <CardFooter data-oid="m432-6w">
            <Button onClick={handleGlobalLoading} data-oid="r7f:06n">
              Mostrar Carga Global (0.8s)
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="0e7t9y9">
          <CardHeader data-oid="2bgasdn">
            <CardTitle data-oid="t0fyj44">Carga de Componente</CardTitle>
            <CardDescription data-oid="1wnk93-">
              Muestra un indicador de carga a nivel de componente
            </CardDescription>
          </CardHeader>
          <CardContent className="relative min-h-[100px]" data-oid="7hljxt9">
            {isComponentLoading ? (
              <SectionLoader
                overlay
                text="Cargando componente..."
                data-oid="s88k0l3"
              />
            ) : (
              <p data-oid="cxlf49w">
                Este componente muestra un indicador de carga superpuesto cuando
                está cargando.
              </p>
            )}
          </CardContent>
          <CardFooter data-oid="gfhm4rb">
            <Button onClick={handleComponentLoading} data-oid="rda0rt:">
              Mostrar Carga de Componente (0.8s)
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="mb-8"
        data-oid="s2or5gs"
      >
        <TabsList className="grid grid-cols-4 md:w-[600px]" data-oid=":tmagl-">
          <TabsTrigger value="spinners" data-oid="f9ipbnj">
            Spinners
          </TabsTrigger>
          <TabsTrigger value="skeletons" data-oid="j1g10dt">
            Esqueletos
          </TabsTrigger>
          <TabsTrigger value="buttons" data-oid="dny47:n">
            Botones
          </TabsTrigger>
          <TabsTrigger value="data" data-oid="b56gwoy">
            Datos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="spinners" className="mt-6" data-oid="jmmzkcd">
          <Card data-oid="v.w-9v4">
            <CardHeader data-oid=":kgjhhl">
              <CardTitle data-oid="3cmn:ix">Spinners</CardTitle>
              <CardDescription data-oid="umjq9vd">
                Diferentes tamaños y colores de spinners
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="1znr7xt">
              <div className="flex flex-wrap gap-8" data-oid="zvjcks9">
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid="e7d8t::"
                >
                  <Spinner size="sm" data-oid="d2ma0vh" />
                  <span className="text-sm" data-oid="8tqqv9v">
                    Pequeño
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid="jom68m3"
                >
                  <Spinner size="md" data-oid="gdgo612" />
                  <span className="text-sm" data-oid="ylkt61j">
                    Mediano
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid="bfpafpj"
                >
                  <Spinner size="lg" data-oid="mcjdm1x" />
                  <span className="text-sm" data-oid="r3-ad0c">
                    Grande
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid="awg4h.t"
                >
                  <Spinner size="xl" data-oid="1590jr:" />
                  <span className="text-sm" data-oid="xc68lei">
                    Extra Grande
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-8 mt-8" data-oid="56ries3">
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid="x.q5zo1"
                >
                  <Spinner size="md" color="primary" data-oid="vb4g3t1" />
                  <span className="text-sm" data-oid="k.sx.d1">
                    Primario
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid="4-cv6p_"
                >
                  <Spinner size="md" color="secondary" data-oid="e36.d3r" />
                  <span className="text-sm" data-oid=".or_ir3">
                    Secundario
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2 bg-primary p-4 rounded-md"
                  data-oid="cryu.rf"
                >
                  <Spinner size="md" color="white" data-oid="u-6xf7a" />
                  <span className="text-sm text-white" data-oid="xx5w3sk">
                    Blanco
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skeletons" className="mt-6" data-oid="edqty3d">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-oid="ctew1-z"
          >
            <Card data-oid="bf34:hu">
              <CardHeader data-oid="90lemod">
                <CardTitle data-oid="e2k7w-f">Esqueleto de Tabla</CardTitle>
              </CardHeader>
              <CardContent data-oid="y:urata">
                <TableLoader rows={3} columns={4} data-oid="3algl7c" />
              </CardContent>
            </Card>

            <Card data-oid="qsqhryx">
              <CardHeader data-oid="-d1.xje">
                <CardTitle data-oid="iwmbzew">
                  Esqueleto de Formulario
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="t7l_.vp">
                <FormLoader fields={3} data-oid="oe1r3vh" />
              </CardContent>
            </Card>

            <Card className="md:col-span-2" data-oid="3rdfame">
              <CardHeader data-oid="5p.ac5b">
                <CardTitle data-oid="xoo-zze">Esqueleto de Tarjetas</CardTitle>
              </CardHeader>
              <CardContent data-oid="f:nm.9j">
                <CardLoader count={3} data-oid="ereq8eu" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="buttons" className="mt-6" data-oid="r4v-.07">
          <Card data-oid="belql5_">
            <CardHeader data-oid="12saoo1">
              <CardTitle data-oid="j39buyy">
                Botones con Estado de Carga
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="3lomc__">
              <div className="flex flex-wrap gap-4" data-oid="11zx_f7">
                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  data-oid="wew2t59"
                >
                  Botón Primario
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  variant="secondary"
                  data-oid="r85v:b0"
                >
                  Botón Secundario
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  variant="outline"
                  data-oid="lf3gchx"
                >
                  Botón Outline
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  variant="destructive"
                  data-oid="fkv6nr1"
                >
                  Botón Destructivo
                </ButtonLoader>
              </div>

              <div className="flex flex-wrap gap-4 mt-8" data-oid="yktsy0o">
                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  loadingText="Cargando..."
                  data-oid="msen810"
                >
                  Con Texto de Carga
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  size="sm"
                  data-oid="fv:bsly"
                >
                  Botón Pequeño
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  size="lg"
                  data-oid="p3byip3"
                >
                  Botón Grande
                </ButtonLoader>
              </div>
            </CardContent>
            <CardFooter data-oid="hy_9rs_">
              <Button onClick={handleButtonLoading} data-oid="5mrr6oe">
                Activar Estado de Carga (0.8s)
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="mt-6" data-oid="saa9edj">
          <Card data-oid="yqs6cek">
            <CardHeader data-oid="s6b9eph">
              <CardTitle data-oid=".mot8dm">Carga de Datos</CardTitle>
            </CardHeader>
            <CardContent data-oid="ytn73dj">
              <DataLoader
                isLoading={isComponentLoading}
                error={null}
                text="Cargando datos de ejemplo..."
                data-oid="pqj7v30"
              >
                <div className="p-4 border rounded-md" data-oid="fzyyv1c">
                  <h3 className="text-lg font-medium mb-2" data-oid="zatusnv">
                    Datos Cargados
                  </h3>
                  <p data-oid="862ecis">
                    Estos son los datos que se muestran cuando la carga ha
                    finalizado.
                  </p>
                </div>
              </DataLoader>
            </CardContent>
            <CardFooter data-oid="k0_qufm">
              <Button onClick={handleComponentLoading} data-oid="ux79o.j">
                Simular Carga de Datos (0.8s)
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
