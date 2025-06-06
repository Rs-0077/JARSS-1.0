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
        data-oid="ya60gho"
      >
        <Spinner size="lg" data-oid="fr8iqkj" />
        <p className="mt-4 text-muted-foreground" data-oid="2jqzeaz">
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
        data-oid="bc0abyf"
      >
        <div
          className="rounded-full bg-destructive/10 p-3 text-destructive"
          data-oid="62laqu1"
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
            data-oid="ep5vo63"
          >
            <path d="M18 6 6 18" data-oid="5dvlpm7" />
            <path d="m6 6 12 12" data-oid="dakojv3" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold" data-oid="lq.mkq6">
          Error al cargar los datos
        </h3>
        <p
          className="mt-2 text-sm text-muted-foreground max-w-md"
          data-oid="46_q.wg"
        >
          {error.message ||
            "Ha ocurrido un error al cargar los datos. Por favor, inténtelo de nuevo."}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          data-oid="kghm3ne"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
