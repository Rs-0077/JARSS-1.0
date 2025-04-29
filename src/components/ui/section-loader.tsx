import React from "react";
import { Spinner } from "./spinner";
import { cn } from "@/lib/utils";

interface SectionLoaderProps {
  className?: string;
  text?: string;
  size?: "sm" | "md" | "lg";
  overlay?: boolean;
}

export function SectionLoader({
  className,
  text,
  size = "md",
  overlay = false,
}: SectionLoaderProps) {
  const spinnerSize = {
    sm: "sm",
    md: "md",
    lg: "lg",
  } as const;

  if (overlay) {
    return (
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-[1px] z-10 rounded-md",
          className
        )}
      >
        <div className="flex flex-col items-center gap-2">
          <Spinner size={spinnerSize[size]} color="primary" />
          {text && <p className="text-sm font-medium text-foreground">{text}</p>}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-8",
        className
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <Spinner size={spinnerSize[size]} color="primary" />
        {text && <p className="text-sm font-medium text-foreground">{text}</p>}
      </div>
    </div>
  );
}
