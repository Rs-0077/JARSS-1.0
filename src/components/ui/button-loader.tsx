import React from "react";
import { Button } from "./button";
import { Spinner } from "./spinner";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/components/ui/button";

interface ButtonLoaderProps extends ButtonProps {
  isLoading: boolean;
  loadingText?: string;
}

export function ButtonLoader({
  children,
  isLoading,
  loadingText,
  disabled,
  className,
  ...props
}: ButtonLoaderProps) {
  return (
    <Button
      className={cn("relative", className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center bg-inherit rounded-md">
          <Spinner size="sm" color={props.variant === "default" ? "white" : "primary"} />
          {loadingText && <span className="ml-2">{loadingText}</span>}
        </span>
      )}
      <span className={cn(isLoading ? "invisible" : "visible")}>{children}</span>
    </Button>
  );
}
