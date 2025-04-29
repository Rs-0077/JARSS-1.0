import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLoading } from "@/contexts/LoadingContext";
import { PageLoader } from "@/components/ui/page-loader";

export function RouteChangeLoader() {
  const location = useLocation();
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Variable para controlar si el componente está montado
    let isMounted = true;

    // Iniciar la carga cuando cambia la ruta
    startLoading();

    // Mostrar el loader solo después de un pequeño retraso
    // para evitar parpadeos en cargas rápidas
    const showTimeout = setTimeout(() => {
      if (isMounted) {
        setShowLoader(true);
      }
    }, 100);

    // Establecer un tiempo máximo de carga (1 segundo)
    const maxTimeout = setTimeout(() => {
      if (isMounted) {
        stopLoading();
        setShowLoader(false);
      }
    }, 1000);

    // Limpiar timeouts si el componente se desmonta
    return () => {
      isMounted = false;
      clearTimeout(showTimeout);
      clearTimeout(maxTimeout);
      stopLoading();
      setShowLoader(false);
    };
  }, [location.pathname, startLoading, stopLoading]);

  // Solo mostrar el loader si isLoading es true Y showLoader es true
  if (!isLoading || !showLoader) return null;

  return <PageLoader text="Cargando página..." />;
}
