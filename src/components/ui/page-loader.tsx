import React from "react";
import { Spinner } from "./spinner";
import { cn } from "@/lib/utils";

interface PageLoaderProps {
  className?: string;
  text?: string;
}

export function PageLoader({
  className,
  text = "Cargando...",
}: PageLoaderProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-50",
        className,
      )}
      data-oid=":c46afu"
    >
      <div
        className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card shadow-lg"
        data-oid="i.intct"
      >
        <Spinner size="xl" color="primary" data-oid="k2ir35b" />
        <p
          className="text-lg font-medium text-card-foreground"
          data-oid="bhtcvjy"
        >
          {text}
        </p>
      </div>
    </div>
  );
}
