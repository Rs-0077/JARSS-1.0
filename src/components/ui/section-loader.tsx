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
        data-oid="1ln7-_9"
      >
        <div className="flex flex-col items-center gap-2" data-oid="7pj9j3u">
          <Spinner
            size={spinnerSize[size]}
            color="primary"
            data-oid="_3c8wa-"
          />

          {text && (
            <p
              className="text-sm font-medium text-foreground"
              data-oid="c4x7l2l"
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
      data-oid="5mf0eug"
    >
      <div className="flex flex-col items-center gap-2" data-oid="_5y.bn9">
        <Spinner size={spinnerSize[size]} color="primary" data-oid="p15vshk" />
        {text && (
          <p className="text-sm font-medium text-foreground" data-oid="7p0rvwj">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}
