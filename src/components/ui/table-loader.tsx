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
    <div className={cn("w-full overflow-hidden", className)} data-oid="8up2han">
      <div className="grid gap-2" data-oid="qwx6bmb">
        {/* Encabezado de la tabla */}
        <div
          className="grid grid-cols-1 md:grid-flow-col gap-2"
          data-oid="rxw1nvd"
        >
          {Array.from({ length: columns }).map((_, index) => (
            <div
              key={`header-${index}`}
              className="h-8 bg-muted/60 rounded animate-pulse"
              data-oid="lvx20:v"
            />
          ))}
        </div>

        {/* Filas de la tabla */}
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="grid grid-cols-1 md:grid-flow-col gap-2"
            data-oid="-f_k.r2"
          >
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div
                key={`cell-${rowIndex}-${colIndex}`}
                className="h-12 bg-muted/40 rounded animate-pulse"
                style={{
                  animationDelay: `${(rowIndex * columns + colIndex) * 0.05}s`,
                }}
                data-oid="tv3t6c:"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
