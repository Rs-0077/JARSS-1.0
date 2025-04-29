import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";

interface LoadingContextType {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  setLoadingWithTimeout: (timeout?: number) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// Tiempo máximo absoluto que cualquier carga puede durar (1 segundo)
const MAX_LOADING_TIME = 1000;

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Función para limpiar todos los timeouts
  const clearAllTimeouts = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = null;
    }
  }, []);

  // Iniciar la carga
  const startLoading = useCallback(() => {
    // Limpiar cualquier timeout existente primero
    clearAllTimeouts();

    // Establecer el estado de carga
    setIsLoading(true);

    // Configurar un timeout de seguridad para garantizar que la carga siempre termine
    safetyTimeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, MAX_LOADING_TIME);
  }, [clearAllTimeouts]);

  // Detener la carga
  const stopLoading = useCallback(() => {
    clearAllTimeouts();
    setIsLoading(false);
  }, [clearAllTimeouts]);

  // Establecer carga con timeout
  const setLoadingWithTimeout = useCallback((timeout = 500) => {
    startLoading();

    // Aseguramos que el tiempo no exceda el máximo
    const safeTimeout = Math.min(timeout, MAX_LOADING_TIME);

    timeoutRef.current = setTimeout(() => {
      stopLoading();
    }, safeTimeout);
  }, [startLoading, stopLoading]);

  // Limpiar timeouts cuando el componente se desmonte
  useEffect(() => {
    return () => {
      clearAllTimeouts();
    };
  }, [clearAllTimeouts]);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        startLoading,
        stopLoading,
        setLoadingWithTimeout,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
