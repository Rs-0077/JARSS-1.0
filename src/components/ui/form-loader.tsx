import React from "react";
import { cn } from "@/lib/utils";

interface FormLoaderProps {
  className?: string;
  fields?: number;
}

export function FormLoader({ className, fields = 4 }: FormLoaderProps) {
  return (
    <div className={cn("space-y-6", className)} data-oid="za2x8y0">
      {/* Título del formulario */}
      <div
        className="h-8 bg-muted/60 rounded animate-pulse w-1/3"
        data-oid="q4pk18j"
      />

      {/* Campos del formulario */}
      <div className="space-y-4" data-oid="21-93lo">
        {Array.from({ length: fields }).map((_, index) => (
          <div key={`field-${index}`} className="space-y-2" data-oid="dwdf433">
            {/* Etiqueta del campo */}
            <div
              className="h-4 bg-muted/60 rounded animate-pulse w-1/4"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-oid="udmja20"
            />

            {/* Campo de entrada */}
            <div
              className="h-10 bg-muted/40 rounded animate-pulse w-full"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
              data-oid="5fbkisr"
            />
          </div>
        ))}
      </div>

      {/* Botones de acción */}
      <div className="flex justify-end space-x-2 pt-4" data-oid="yodc2v4">
        <div
          className="h-10 bg-muted/60 rounded animate-pulse w-24"
          style={{ animationDelay: `${fields * 0.1 + 0.2}s` }}
          data-oid="rw3e9a9"
        />

        <div
          className="h-10 bg-primary/30 rounded animate-pulse w-24"
          style={{ animationDelay: `${fields * 0.1 + 0.3}s` }}
          data-oid="acxxsu9"
        />
      </div>
    </div>
  );
}
