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
      data-oid="_8.l:1:"
    >
      {isLoading && (
        <span
          className="absolute inset-0 flex items-center justify-center bg-inherit rounded-md"
          data-oid="4vcbz1s"
        >
          <Spinner
            size="sm"
            color={props.variant === "default" ? "white" : "primary"}
            data-oid="5udg3s3"
          />

          {loadingText && (
            <span className="ml-2" data-oid="qjo2s52">
              {loadingText}
            </span>
          )}
        </span>
      )}
      <span
        className={cn(isLoading ? "invisible" : "visible")}
        data-oid="r_q6kia"
      >
        {children}
      </span>
    </Button>
  );
}
