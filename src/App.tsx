import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from "react";
import { ROUTES, STORAGE_KEYS } from "@/core/config";
import { GuidedTour, type TourStep } from "@/components/ui/guided-tour";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { RouteChangeLoader } from "@/components/layout/RouteChangeLoader";
import { AppLoader } from "@/components/ui/app-loader";

// Pages
import Index from "./pages/Index";
import Finanzas from "./pages/Finanzas";
import Reportes from "./pages/Reportes";
import BankAccounts from "./pages/BankAccounts";
import Impuestos from "./pages/Impuestos";
import Presupuestos from "./pages/Presupuestos";
import Nomina from "./pages/Nomina";
import Configuracion from "./pages/Configuracion";
import NotFound from "./pages/NotFound";
import Ingresos from "./pages/finanzas/Ingresos";
import Gastos from "./pages/finanzas/Gastos";
import Inversiones from "./pages/finanzas/Inversiones";

const queryClient = new QueryClient();

// Componente para manejar el desplazamiento al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTour, setShowTour] = useState(false);

  // Definir los pasos del tour guiado
  const tourSteps: TourStep[] = [
    {
      target: ".sidebar-toggle",
      title: "Menú principal",
      content:
        "Aquí puedes acceder a todas las secciones de la aplicación. Haz clic para expandir o contraer el menú.",
      placement: "right",
    },
    {
      target: ".search-input",
      title: "Búsqueda rápida",
      content:
        "Busca transacciones, contactos o cualquier información dentro de la aplicación.",
      placement: "bottom",
    },
    {
      target: ".notification-center",
      title: "Centro de notificaciones",
      content: "Aquí verás todas tus notificaciones y alertas importantes.",
      placement: "bottom",
    },
    {
      target: ".user-menu",
      title: "Menú de usuario",
      content: "Accede a tu perfil, preferencias y opciones de cuenta.",
      placement: "left",
    },
  ];

  // Cargar la aplicación rápidamente sin simulación de carga innecesaria
  useEffect(() => {
    // Establecer un tiempo muy corto solo para permitir que el DOM se renderice
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Verificar si es la primera visita para mostrar el tour
      const tourCompleted = localStorage.getItem(STORAGE_KEYS.tourCompleted);
      if (!tourCompleted) {
        // Esperar un poco antes de mostrar el tour para que la interfaz se cargue completamente
        setTimeout(() => {
          setShowTour(true);
        }, 300);
      }
    }, 300); // Tiempo mínimo para permitir la renderización inicial

    // Garantizar que la carga nunca dure más de 4 segundos (solo para la carga inicial)
    const safetyTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(safetyTimer);
    };
  }, []);

  // Manejar la finalización del tour
  const handleTourComplete = () => {
    setShowTour(false);
    // Opcional: guardar que el tour se ha completado
    localStorage.setItem(STORAGE_KEYS.tourCompleted, "true");
  };

  // Manejar el salto del tour
  const handleTourSkip = () => {
    setShowTour(false);
    // No guardamos que se ha completado si se salta, para que pueda mostrarse en el futuro
  };

  if (isLoading) {
    return <AppLoader data-oid="z2zr0-z" />;
  }

  return (
    <QueryClientProvider client={queryClient} data-oid="hwfge3y">
      <ThemeProvider
        defaultTheme="light"
        storageKey={STORAGE_KEYS.theme}
        data-oid="oknz9:h"
      >
        <LoadingProvider data-oid=".bh-u9w">
          <TooltipProvider data-oid="ette:u:">
            <Toaster data-oid="rzs3lrt" />
            <Sonner data-oid="hl3e8v7" />
            <BrowserRouter data-oid="1dtu8i0">
              <ScrollToTop data-oid="1mrdwy." />
              <RouteChangeLoader data-oid="ds1lhuz" />
              <div className="animate-fade-in" data-oid="4-rf4bz">
                {/* Tour guiado */}
                {showTour && (
                  <GuidedTour
                    steps={tourSteps}
                    onComplete={handleTourComplete}
                    onSkip={handleTourSkip}
                    data-oid="73:hkqs"
                  />
                )}

                <Routes data-oid="rm_m1rz">
                  <Route
                    path={ROUTES.home}
                    element={<Index data-oid="iqanvg3" />}
                    data-oid="wk0e3:8"
                  />

                  <Route
                    path={ROUTES.finanzas.index}
                    element={<Finanzas data-oid="3m3evkz" />}
                    data-oid="8wxobz8"
                  />

                  <Route
                    path={ROUTES.finanzas.ingresos}
                    element={<Ingresos data-oid="9vx4_x0" />}
                    data-oid="jfi0wtm"
                  />

                  <Route
                    path={ROUTES.finanzas.gastos}
                    element={<Gastos data-oid="f0ybe_d" />}
                    data-oid="hq8948."
                  />

                  <Route
                    path={ROUTES.finanzas.inversiones}
                    element={<Inversiones data-oid="vqty26:" />}
                    data-oid="d6fmgfg"
                  />

                  <Route
                    path={ROUTES.reportes}
                    element={<Reportes data-oid="gn8h-yy" />}
                    data-oid=".o..yno"
                  />

                  <Route
                    path={ROUTES.bankAccounts}
                    element={<BankAccounts data-oid="t56fnyj" />}
                    data-oid="p7e4:8m"
                  />

                  <Route
                    path={ROUTES.impuestos}
                    element={<Impuestos data-oid="4qyqgle" />}
                    data-oid="misx1.q"
                  />

                  <Route
                    path={ROUTES.presupuestos}
                    element={<Presupuestos data-oid="nnkamjm" />}
                    data-oid="yamip18"
                  />

                  <Route
                    path={ROUTES.nomina}
                    element={<Nomina data-oid="69ktqc9" />}
                    data-oid="es9e5i_"
                  />

                  <Route
                    path={ROUTES.configuracion}
                    element={<Configuracion data-oid="l7ndn16" />}
                    data-oid="g_iow4s"
                  />

                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route
                    path={ROUTES.notFound}
                    element={<NotFound data-oid="ji6c4cx" />}
                    data-oid="l5_k0.u"
                  />
                </Routes>
              </div>
            </BrowserRouter>
          </TooltipProvider>
        </LoadingProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
