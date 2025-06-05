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
          className,
        )}
        data-oid="rja-.ju"
      >
        <div className="flex flex-col items-center gap-2" data-oid="swe1lql">
          <Spinner
            size={spinnerSize[size]}
            color="primary"
            data-oid="l2:dzeh"
          />

          {text && (
            <p
              className="text-sm font-medium text-foreground"
              data-oid=".41ypy."
            >
              {text}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-8",
        className,
      )}
      data-oid="on20y.z"
    >
      <div className="flex flex-col items-center gap-2" data-oid="vpo0-4k">
        <Spinner size={spinnerSize[size]} color="primary" data-oid="-2o2jdg" />
        {text && (
          <p className="text-sm font-medium text-foreground" data-oid="tm2jo-j">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}
