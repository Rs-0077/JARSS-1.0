import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const loadingVariants = cva("flex items-center justify-center text-center", {
  variants: {
    variant: {
      default: "text-primary",
      secondary: "text-secondary",
      destructive: "text-destructive",
      outline: "text-foreground",
      ghost: "text-muted-foreground",
    },
    size: {
      default: "h-10 gap-2",
      sm: "h-8 gap-1.5 text-sm",
      lg: "h-12 gap-3 text-lg",
      icon: "h-9 w-9",
      full: "w-full h-full min-h-[100px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface LoadingStateProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {
  text?: string;
  showSpinner?: boolean;
  spinnerSize?: number;
  spinnerClassName?: string;
}

export function LoadingState({
  className,
  variant,
  size,
  text = "Cargando...",
  showSpinner = true,
  spinnerSize = 24,
  spinnerClassName,
  ...props
}: LoadingStateProps) {
  return (
    <div
      className={cn(loadingVariants({ variant, size, className }))}
      {...props}
      role="status"
      aria-live="polite"
      data-oid="rsbz:7."
    >
      {showSpinner && (
        <Loader2
          className={cn("animate-spin", spinnerClassName)}
          size={spinnerSize}
          aria-hidden="true"
          data-oid="w13xhlh"
        />
      )}
      {text && <span data-oid="matp_jr">{text}</span>}
      <span className="sr-only" data-oid="q9mp3ja">
        Cargando, por favor espere
      </span>
    </div>
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn("rounded-lg border p-4 animate-pulse", className)}
      data-oid="804zg.-"
    >
      <div className="h-4 w-1/2 bg-muted rounded mb-4" data-oid="b.q2319"></div>
      <div className="space-y-2" data-oid="ajj40ss">
        <div className="h-3 w-full bg-muted rounded" data-oid=":wixzsb"></div>
        <div className="h-3 w-4/5 bg-muted rounded" data-oid="2vjpt6:"></div>
        <div className="h-3 w-3/5 bg-muted rounded" data-oid=".eq_7cn"></div>
      </div>
    </div>
  );
}

export function SkeletonList({
  count = 3,
  className,
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)} data-oid="zez0oqi">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="flex items-center space-x-4 animate-pulse"
            data-oid="bgkbjlg"
          >
            <div
              className="h-10 w-10 rounded-full bg-muted"
              data-oid="u14wm:_"
            ></div>
            <div className="space-y-2 flex-1" data-oid="xfyv3x3">
              <div
                className="h-3 w-3/4 bg-muted rounded"
                data-oid="tv2yy:g"
              ></div>
              <div
                className="h-3 w-1/2 bg-muted rounded"
                data-oid="l1uf793"
              ></div>
            </div>
          </div>
        ))}
    </div>
  );
}

export function SkeletonTable({
  rows = 5,
  columns = 4,
  className,
}: {
  rows?: number;
  columns?: number;
  className?: string;
}) {
  return (
    <div className={cn("w-full animate-pulse", className)} data-oid="ltw0es0">
      <div className="flex border-b pb-2 mb-4" data-oid="6mhx9vv">
        {Array(columns)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="flex-1 h-4 bg-muted rounded mx-2"
              data-oid="d93j79g"
            ></div>
          ))}
      </div>
      <div className="space-y-3" data-oid="2m0n002">
        {Array(rows)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex border-b pb-2" data-oid="fl743ed">
              {Array(columns)
                .fill(0)
                .map((_, j) => (
                  <div
                    key={j}
                    className="flex-1 h-3 bg-muted rounded mx-2 my-1"
                    data-oid="1j85.i5"
                  ></div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}
