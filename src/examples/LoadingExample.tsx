import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
  ImageLoader
} from "@/components/ui/loaders";

export function LoadingExample() {
  const { isLoading, startLoading, stopLoading } = useLoading();
  const {
    isLoading: isComponentLoading,
    startLoading: startComponentLoading,
    stopLoading: stopComponentLoading
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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Ejemplos de Animaciones de Carga</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Carga Global</CardTitle>
            <CardDescription>
              Muestra un indicador de carga a nivel de aplicación
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Este tipo de carga se muestra sobre toda la aplicación y bloquea la interacción del usuario.
            </p>
          </CardContent>
          <CardFooter>
            <Button onClick={handleGlobalLoading}>
              Mostrar Carga Global (0.8s)
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Carga de Componente</CardTitle>
            <CardDescription>
              Muestra un indicador de carga a nivel de componente
            </CardDescription>
          </CardHeader>
          <CardContent className="relative min-h-[100px]">
            {isComponentLoading ? (
              <SectionLoader overlay text="Cargando componente..." />
            ) : (
              <p>Este componente muestra un indicador de carga superpuesto cuando está cargando.</p>
            )}
          </CardContent>
          <CardFooter>
            <Button onClick={handleComponentLoading}>
              Mostrar Carga de Componente (0.8s)
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid grid-cols-4 md:w-[600px]">
          <TabsTrigger value="spinners">Spinners</TabsTrigger>
          <TabsTrigger value="skeletons">Esqueletos</TabsTrigger>
          <TabsTrigger value="buttons">Botones</TabsTrigger>
          <TabsTrigger value="data">Datos</TabsTrigger>
        </TabsList>

        <TabsContent value="spinners" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Spinners</CardTitle>
              <CardDescription>
                Diferentes tamaños y colores de spinners
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col items-center gap-2">
                  <Spinner size="sm" />
                  <span className="text-sm">Pequeño</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Spinner size="md" />
                  <span className="text-sm">Mediano</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Spinner size="lg" />
                  <span className="text-sm">Grande</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Spinner size="xl" />
                  <span className="text-sm">Extra Grande</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-8 mt-8">
                <div className="flex flex-col items-center gap-2">
                  <Spinner size="md" color="primary" />
                  <span className="text-sm">Primario</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Spinner size="md" color="secondary" />
                  <span className="text-sm">Secundario</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-primary p-4 rounded-md">
                  <Spinner size="md" color="white" />
                  <span className="text-sm text-white">Blanco</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skeletons" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Esqueleto de Tabla</CardTitle>
              </CardHeader>
              <CardContent>
                <TableLoader rows={3} columns={4} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Esqueleto de Formulario</CardTitle>
              </CardHeader>
              <CardContent>
                <FormLoader fields={3} />
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Esqueleto de Tarjetas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardLoader count={3} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="buttons" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Botones con Estado de Carga</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                >
                  Botón Primario
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  variant="secondary"
                >
                  Botón Secundario
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  variant="outline"
                >
                  Botón Outline
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  variant="destructive"
                >
                  Botón Destructivo
                </ButtonLoader>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  loadingText="Cargando..."
                >
                  Con Texto de Carga
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  size="sm"
                >
                  Botón Pequeño
                </ButtonLoader>

                <ButtonLoader
                  isLoading={buttonLoading}
                  onClick={handleButtonLoading}
                  size="lg"
                >
                  Botón Grande
                </ButtonLoader>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleButtonLoading}>
                Activar Estado de Carga (0.8s)
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Carga de Datos</CardTitle>
            </CardHeader>
            <CardContent>
              <DataLoader
                isLoading={isComponentLoading}
                error={null}
                text="Cargando datos de ejemplo..."
              >
                <div className="p-4 border rounded-md">
                  <h3 className="text-lg font-medium mb-2">Datos Cargados</h3>
                  <p>Estos son los datos que se muestran cuando la carga ha finalizado.</p>
                </div>
              </DataLoader>
            </CardContent>
            <CardFooter>
              <Button onClick={handleComponentLoading}>
                Simular Carga de Datos (0.8s)
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
