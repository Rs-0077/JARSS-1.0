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
    return <AppLoader data-oid="2k4v:8b" />;
  }

  return (
    <QueryClientProvider client={queryClient} data-oid="8ei64t1">
      <ThemeProvider
        defaultTheme="light"
        storageKey={STORAGE_KEYS.theme}
        data-oid="yf9zhg6"
      >
        <LoadingProvider data-oid="0-gh561">
          <TooltipProvider data-oid="xynksx4">
            <Toaster data-oid="98xc571" />
            <Sonner data-oid="s9rkl2f" />
            <BrowserRouter data-oid="3zqm3uc">
              <ScrollToTop data-oid="71y60xu" />
              <RouteChangeLoader data-oid="1e4gmn1" />
              <div className="animate-fade-in" data-oid="2ikxi4-">
                {/* Tour guiado */}
                {showTour && (
                  <GuidedTour
                    steps={tourSteps}
                    onComplete={handleTourComplete}
                    onSkip={handleTourSkip}
                    data-oid="b4yj-tn"
                  />
                )}

                <Routes data-oid="ea-pzfq">
                  <Route
                    path={ROUTES.home}
                    element={<Index data-oid="lz6302:" />}
                    data-oid="gt8z_68"
                  />

                  <Route
                    path={ROUTES.finanzas.index}
                    element={<Finanzas data-oid="9it0_gf" />}
                    data-oid="5bkh7g2"
                  />

                  <Route
                    path={ROUTES.finanzas.ingresos}
                    element={<Ingresos data-oid="s10ntzx" />}
                    data-oid="d:4hx.e"
                  />

                  <Route
                    path={ROUTES.finanzas.gastos}
                    element={<Gastos data-oid="ykldq7o" />}
                    data-oid="moimwj8"
                  />

                  <Route
                    path={ROUTES.finanzas.inversiones}
                    element={<Inversiones data-oid="tkzte7b" />}
                    data-oid="992.ns:"
                  />

                  <Route
                    path={ROUTES.reportes}
                    element={<Reportes data-oid="0wosj4_" />}
                    data-oid=":gulyl:"
                  />

                  <Route
                    path={ROUTES.bankAccounts}
                    element={<BankAccounts data-oid="h91mdzs" />}
                    data-oid="5r618a5"
                  />

                  <Route
                    path={ROUTES.impuestos}
                    element={<Impuestos data-oid="q.90j5k" />}
                    data-oid="b86z62s"
                  />

                  <Route
                    path={ROUTES.presupuestos}
                    element={<Presupuestos data-oid="titnuyl" />}
                    data-oid="ljod6i4"
                  />

                  <Route
                    path={ROUTES.nomina}
                    element={<Nomina data-oid="bkc:9js" />}
                    data-oid="eh3b722"
                  />

                  <Route
                    path={ROUTES.configuracion}
                    element={<Configuracion data-oid="v.uvg3c" />}
                    data-oid="tzuz8fv"
                  />

                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route
                    path={ROUTES.notFound}
                    element={<NotFound data-oid="8d2p2w6" />}
                    data-oid="bcifyko"
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
