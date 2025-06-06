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
        data-oid="rlw5jld"
      >
        <div className="flex flex-col items-center gap-2" data-oid="ri54_si">
          <Spinner
            size={spinnerSize[size]}
            color="primary"
            data-oid="ai5_l:y"
          />

          {text && (
            <p
              className="text-sm font-medium text-foreground"
              data-oid="dikxh7s"
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
      data-oid="1bk3xhm"
    >
      <div className="flex flex-col items-center gap-2" data-oid="e.xx0zf">
        <Spinner size={spinnerSize[size]} color="primary" data-oid="mm9s2sf" />
        {text && (
          <p className="text-sm font-medium text-foreground" data-oid="jiy:prw">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}
