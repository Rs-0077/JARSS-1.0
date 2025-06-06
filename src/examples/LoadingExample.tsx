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
    <div className="container mx-auto py-8" data-oid="1xzjw0w">
      <h1 className="text-3xl font-bold mb-6" data-oid="040898o">
        Ejemplos de Animaciones de Carga
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        data-oid="chz_j8m"
      >
        <Card data-oid="u9gp7ni">
          <CardHeader data-oid="6c6n1eu">
            <CardTitle data-oid="smwmts6">Carga Global</CardTitle>
            <CardDescription data-oid=".3u.p0t">
              Muestra un indicador de carga a nivel de aplicación
            </CardDescription>
          </CardHeader>
          <CardContent data-oid="w:s3be4">
            <p className="mb-4" data-oid="f.s:9.2">
              Este tipo de carga se muestra sobre toda la aplicación y bloquea
              la interacción del usuario.
            </p>
          </CardContent>
          <CardFooter data-oid="ufe6af9">
            <Button onClick={handleGlobalLoading} data-oid="n8g-cw2">
              Mostrar Carga Global (0.8s)
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="15t_nej">
          <CardHeader data-oid="kic:189">
            <CardTitle data-oid="aq5:s5u">Carga de Componente</CardTitle>
            <CardDescription data-oid="8vwrotx">
              Muestra un indicador de carga a nivel de componente
            </CardDescription>
          </CardHeader>
          <CardContent className="relative min-h-[100px]" data-oid="43pdfda">
            {isComponentLoading ? (
              <SectionLoader
                overlay
                text="Cargando componente..."
                data-oid="95-r6-y"
              />
            ) : (
              <p data-oid="5oh6b.e">
                Este componente muestra un indicador de carga superpuesto cuando
                está cargando.
              </p>
            )}
          </CardContent>
          <CardFooter data-oid="enm-dlo">
            <Button onClick={handleComponentLoading} data-oid="leykbw6">
              Mostrar Carga de Componente (0.8s)
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="mb-8"
        data-oid="blf7-hn"
      >
        <TabsList className="grid grid-cols-4 md:w-[600px]" data-oid="7kwg8r2">
          <TabsTrigger value="spinners" data-oid="sb3s4x5">
            Spinners
          </TabsTrigger>
          <TabsTrigger value="skeletons" data-oid="q6-bj:j">
            Esqueletos
          </TabsTrigger>
          <TabsTrigger value="buttons" data-oid="zpru6_6">
            Botones
          </TabsTrigger>
          <TabsTrigger value="data" data-oid="fjlljxn">
            Datos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="spinners" className="mt-6" data-oid="z5__d2v">
          <Card data-oid="2e:x3dz">
            <CardHeader data-oid="m8id9_c">
              <CardTitle data-oid="tgeo6f5">Spinners</CardTitle>
              <CardDescription data-oid="kkkeom:">
                Diferentes tamaños y colores de spinners
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="o0egj1w">
              <div className="flex flex-wrap gap-8" data-oid="c:--tur">
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid="dj-cqk6"
                >
                  <Spinner size="sm" data-oid="9sxn-70" />
                  <span className="text-sm" data-oid="_51vg63">
                    Pequeño
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid="yy9aw1_"
                >
                  <Spinner size="md" data-oid="hb3pi9-" />
                  <span className="text-sm" data-oid="vthgw.u">
                    Mediano
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid="64tqnfz"
                >
                  <Spinner size="lg" data-oid=".vov4:9" />
                  <span className="text-sm" data-oid="e_8x3x-">
                    Grande
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid=":mqaho5"
                >
                  <Spinner size="xl" data-oid="4xofhq9" />
                  <span className="text-sm" data-oid="khd94.j">
                    Extra Grande
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-8 mt-8" data-oid="iy3aoey">
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid=":m5bzw7"
                >
                  <Spinner size="md" color="primary" data-oid="xxwd_rb" />
                  <span className="text-sm" data-oid="41jh.zf">
                    Primario
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2"
                  data-oid="yzsfd_g"
                >
                  <Spinner size="md" color="secondary" data-oid="jioxds4" />
                  <span className="text-sm" data-oid="2atgaf_">
                    Secundario
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-2 bg-primary p-4 rounded-md"
                  data-oid="ta66w1_"
                >
                  <Spinner size="md" color="white" data-oid="gie7mb5" />
                  <span className="text-sm text-white" data-oid="pvxlq_z">
                    Blanco
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skeletons" className="mt-6" data-oid="r595ezs">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-oid="a8m.qrp"
          >
            <Card data-oid="tnb-mpv">
              <CardHeader data-oid="r9q03xl">
                <CardTitle data-oid="1i:_6q1">Esqueleto de Tabla</CardTitle>
              </CardHeader>
              <CardContent data-oid="e1:seyh">
                <TableLoader rows={3} columns={4} data-oid="34ffm_m" />
              </CardContent>
            </Card>

            <Card data-oid="ov8868a">
              <CardHeader data-oid="rb_jplh">
                <CardTitle data-oid="o71ekbd">
                  Esqueleto de Formulario
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="i_d4-y1">
                <FormLoader fields={3} data-oid="t9h09gt" />
              </CardContent>
            </Card>

            <Card className="md:col-span-2" data-oid="ls94w9n">
              <CardHeader data-oid="ik8ca9a">
                <CardTitle data-oid="bx5ujdk">Esqueleto de Tarjetas</CardTitle>
              </CardHeader>
              <CardContent data-oid="4_62ns2">
                <CardLoader count={3} data-oid="nx9.7x1" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="buttons" className="mt-6" data-oid="b:enu43">
          <Card data-oid="3vone1m">
            <CardHeader data-oid="un64af6">
              <CardTitle data-oid="hszvy73">
                Botones con Estado de Carga
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="xt21q35">
              <div className="flex flex-wrap gap-4" data-oid="k6c2vug">
                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  data-oid="koyey09"
                >
                  Botón Primario
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  variant="secondary"
                  data-oid="swbdr-v"
                >
                  Botón Secundario
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  variant="outline"
                  data-oid="7a3l0h5"
                >
                  Botón Outline
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  variant="destructive"
                  data-oid="kwki4nx"
                >
                  Botón Destructivo
                </ButtonLoader>
              </div>

              <div className="flex flex-wrap gap-4 mt-8" data-oid="zmi3ud5">
                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  loadingText="Cargando..."
                  data-oid="8mmt8rv"
                >
                  Con Texto de Carga
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  size="sm"
                  data-oid="v5hf84f"
                >
                  Botón Pequeño
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  size="lg"
                  data-oid="0_-bqwi"
                >
                  Botón Grande
                </ButtonLoader>
              </div>
            </CardContent>
            <CardFooter data-oid="ryzjx2s">
              <Button onClick={handleButtonLoading} data-oid="mynn8z7">
                Activar Estado de Carga (0.8s)
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="mt-6" data-oid="kd::s8s">
          <Card data-oid="jssxllt">
            <CardHeader data-oid=":bc3pjl">
              <CardTitle data-oid="3fz1io5">Carga de Datos</CardTitle>
            </CardHeader>
            <CardContent data-oid="spcqat1">
              <DataLoader
                isLoading={isComponentLoading}
                error={null}
                text="Cargando datos de ejemplo..."
                data-oid="mdex.09"
              >
                <div className="p-4 border rounded-md" data-oid="alal747">
                  <h3 className="text-lg font-medium mb-2" data-oid="4tbwp03">
                    Datos Cargados
                  </h3>
                  <p data-oid="p2bvwvq">
                    Estos son los datos que se muestran cuando la carga ha
                    finalizado.
                  </p>
                </div>
              </DataLoader>
            </CardContent>
            <CardFooter data-oid="w0od8ze">
              <Button onClick={handleComponentLoading} data-oid="f72_2fg">
                Simular Carga de Datos (0.8s)
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
