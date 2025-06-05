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
      data-oid="dbivtok"
    >
      {showSpinner && (
        <Loader2
          className={cn("animate-spin", spinnerClassName)}
          size={spinnerSize}
          aria-hidden="true"
          data-oid="tsn-k:3"
        />
      )}
      {text && <span data-oid="d2vutwx">{text}</span>}
      <span className="sr-only" data-oid="oxzs_p7">
        Cargando, por favor espere
      </span>
    </div>
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn("rounded-lg border p-4 animate-pulse", className)}
      data-oid="v93yiei"
    >
      <div className="h-4 w-1/2 bg-muted rounded mb-4" data-oid="0fs_lq5"></div>
      <div className="space-y-2" data-oid="avm_2gu">
        <div className="h-3 w-full bg-muted rounded" data-oid="_-xjw4f"></div>
        <div className="h-3 w-4/5 bg-muted rounded" data-oid="mnc3703"></div>
        <div className="h-3 w-3/5 bg-muted rounded" data-oid="pmwp4lb"></div>
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
    <div className={cn("space-y-3", className)} data-oid=":kmq6s1">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="flex items-center space-x-4 animate-pulse"
            data-oid="mmmphhe"
          >
            <div
              className="h-10 w-10 rounded-full bg-muted"
              data-oid="wtpmc12"
            ></div>
            <div className="space-y-2 flex-1" data-oid="4fv57c1">
              <div
                className="h-3 w-3/4 bg-muted rounded"
                data-oid=":o6w3em"
              ></div>
              <div
                className="h-3 w-1/2 bg-muted rounded"
                data-oid="mhhiq8s"
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
    <div className={cn("w-full animate-pulse", className)} data-oid="oxm9d0o">
      <div className="flex border-b pb-2 mb-4" data-oid=":i9v68l">
        {Array(columns)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="flex-1 h-4 bg-muted rounded mx-2"
              data-oid="adgb-u4"
            ></div>
          ))}
      </div>
      <div className="space-y-3" data-oid="8g6j7gv">
        {Array(rows)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex border-b pb-2" data-oid="qi:kem1">
              {Array(columns)
                .fill(0)
                .map((_, j) => (
                  <div
                    key={j}
                    className="flex-1 h-3 bg-muted rounded mx-2 my-1"
                    data-oid="xi3x9px"
                  ></div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}
