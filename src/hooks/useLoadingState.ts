import { useState, useCallback, useRef, useEffect } from "react";

interface UseLoadingStateOptions {
  initialState?: boolean;
  timeout?: number;
  maxDuration?: number;
}

// Tiempo máximo absoluto que cualquier carga puede durar
const MAX_LOADING_TIME = 1000;

export function useLoadingState({
  initialState = false,
  timeout = 500,
  maxDuration = MAX_LOADING_TIME
}: UseLoadingStateOptions = {}) {
  const [isLoading, setIsLoading] = useState(initialState);
  const [error, setError] = useState<Error | null>(null);

  // Usar refs para los timeouts para poder limpiarlos
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
    setError(null);

    // Configurar un timeout de seguridad para garantizar que la carga siempre termine
    const safeDuration = Math.min(maxDuration, MAX_LOADING_TIME);
    safetyTimeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, safeDuration);
  }, [clearAllTimeouts, maxDuration]);

  // Detener la carga
  const stopLoading = useCallback(() => {
    clearAllTimeouts();
    setIsLoading(false);
  }, [clearAllTimeouts]);

  // Establecer carga con timeout
  const setLoadingWithTimeout = useCallback((ms: number = timeout) => {
    startLoading();

    if (ms > 0) {
      // Aseguramos que el tiempo no exceda el máximo
      const safeTimeout = Math.min(ms, maxDuration, MAX_LOADING_TIME);

      timeoutRef.current = setTimeout(() => {
        stopLoading();
      }, safeTimeout);
    }
  }, [startLoading, stopLoading, timeout, maxDuration]);

  // Establecer error y detener carga
  const setErrorAndStopLoading = useCallback((err: Error) => {
    clearAllTimeouts();
    setError(err);
    setIsLoading(false);
  }, [clearAllTimeouts]);

  // Resetear el estado
  const resetState = useCallback(() => {
    clearAllTimeouts();
    setIsLoading(initialState);
    setError(null);
  }, [clearAllTimeouts, initialState]);

  // Limpiar timeouts cuando el componente se desmonte
  useEffect(() => {
    return () => {
      clearAllTimeouts();
    };
  }, [clearAllTimeouts]);

  return {
    isLoading,
    error,
    startLoading,
    stopLoading,
    setLoadingWithTimeout,
    setErrorAndStopLoading,
    resetState,
  };
}
