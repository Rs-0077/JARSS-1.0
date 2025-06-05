import React from "react";
import { Spinner } from "./spinner";
import { cn } from "@/lib/utils";

interface DataLoaderProps {
  className?: string;
  text?: string;
  isLoading: boolean;
  error?: Error | null;
  children: React.ReactNode;
  errorComponent?: React.ReactNode;
}

export function DataLoader({
  className,
  text = "Cargando datos...",
  isLoading,
  error,
  children,
  errorComponent,
}: DataLoaderProps) {
  if (isLoading) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center py-12",
          className,
        )}
        data-oid="lh3mf99"
      >
        <Spinner size="lg" data-oid="wtowc4c" />
        <p className="mt-4 text-muted-foreground" data-oid="858ui6t">
          {text}
        </p>
      </div>
    );
  }

  if (error) {
    if (errorComponent) {
      return <>{errorComponent}</>;
    }

    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center py-12 text-center",
          className,
        )}
        data-oid="4zopcds"
      >
        <div
          className="rounded-full bg-destructive/10 p-3 text-destructive"
          data-oid="im-ytva"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            data-oid="sppcw1l"
          >
            <path d="M18 6 6 18" data-oid="hg7w-5i" />
            <path d="m6 6 12 12" data-oid="fjf4tff" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold" data-oid="vk03jeq">
          Error al cargar los datos
        </h3>
        <p
          className="mt-2 text-sm text-muted-foreground max-w-md"
          data-oid="nj4g4wr"
        >
          {error.message ||
            "Ha ocurrido un error al cargar los datos. Por favor, inténtelo de nuevo."}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          data-oid="ib_t2p5"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
