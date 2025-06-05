import React from "react";
import { cn } from "@/lib/utils";

interface TableLoaderProps {
  className?: string;
  rows?: number;
  columns?: number;
}

export function TableLoader({
  className,
  rows = 5,
  columns = 4,
}: TableLoaderProps) {
  return (
    <div className={cn("w-full overflow-hidden", className)} data-oid="xejwaic">
      <div className="grid gap-2" data-oid="ljiwj1:">
        {/* Encabezado de la tabla */}
        <div
          className="grid grid-cols-1 md:grid-flow-col gap-2"
          data-oid="cmgabs8"
        >
          {Array.from({ length: columns }).map((_, index) => (
            <div
              key={`header-${index}`}
              className="h-8 bg-muted/60 rounded animate-pulse"
              data-oid="f7rr_tz"
            />
          ))}
        </div>

        {/* Filas de la tabla */}
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="grid grid-cols-1 md:grid-flow-col gap-2"
            data-oid="8kcn:r."
          >
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div
                key={`cell-${rowIndex}-${colIndex}`}
                className="h-12 bg-muted/40 rounded animate-pulse"
                style={{
                  animationDelay: `${(rowIndex * columns + colIndex) * 0.05}s`,
                }}
                data-oid="8s3jwg0"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
