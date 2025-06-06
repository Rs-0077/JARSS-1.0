import React from "react";
import { cn } from "@/lib/utils";

interface CardLoaderProps {
  className?: string;
  count?: number;
}

export function CardLoader({ className, count = 1 }: CardLoaderProps) {
  return (
    <div
      className={cn(
        "grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
      data-oid="d:p5c-8"
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={`card-${index}`}
          className="bg-card rounded-lg shadow-sm overflow-hidden"
          data-oid="460e_3q"
        >
          {/* Imagen de la tarjeta */}
          <div
            className="w-full h-40 bg-muted/40 animate-pulse"
            style={{ animationDelay: `${index * 0.1}s` }}
            data-oid="9_4yp4x"
          />

          {/* Contenido de la tarjeta */}
          <div className="p-4 space-y-3" data-oid="2wg81lx">
            {/* Título */}
            <div
              className="h-6 bg-muted/60 rounded animate-pulse w-3/4"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
              data-oid="2lbj.tm"
            />

            {/* Descripción */}
            <div className="space-y-2" data-oid="5nw._.r">
              <div
                className="h-4 bg-muted/40 rounded animate-pulse"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                data-oid="4cn3yvn"
              />

              <div
                className="h-4 bg-muted/40 rounded animate-pulse w-5/6"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                data-oid="mkfi.7k"
              />

              <div
                className="h-4 bg-muted/40 rounded animate-pulse w-4/6"
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                data-oid="z_7f6wx"
              />
            </div>

            {/* Pie de tarjeta */}
            <div
              className="pt-2 flex justify-between items-center"
              data-oid="7m1uxqt"
            >
              <div
                className="h-8 bg-muted/60 rounded animate-pulse w-1/4"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                data-oid="imcbm.c"
              />

              <div
                className="h-8 bg-muted/60 rounded animate-pulse w-1/4"
                style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
                data-oid="y3q1rhc"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
