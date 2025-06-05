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
      data-oid="gt20qhb"
    >
      {isLoading && (
        <span
          className="absolute inset-0 flex items-center justify-center bg-inherit rounded-md"
          data-oid="e.t46t7"
        >
          <Spinner
            size="sm"
            color={props.variant === "default" ? "white" : "primary"}
            data-oid="d4fs7yp"
          />

          {loadingText && (
            <span className="ml-2" data-oid="pzcnf:n">
              {loadingText}
            </span>
          )}
        </span>
      )}
      <span
        className={cn(isLoading ? "invisible" : "visible")}
        data-oid="czw_b5v"
      >
        {children}
      </span>
    </Button>
  );
}
