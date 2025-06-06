import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";

interface ImageLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: React.ReactNode;
  loaderClassName?: string;
}

export function ImageLoader({
  src,
  alt,
  className,
  fallback,
  loaderClassName,
  ...props
}: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={cn("relative", className)} data-oid="s1:p-4e">
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-muted/20",
            loaderClassName,
          )}
          data-oid="iqs.zag"
        >
          <Spinner size="md" data-oid="ioy507g" />
        </div>
      )}

      {hasError ? (
        fallback || (
          <div
            className="flex items-center justify-center w-full h-full bg-muted/30 rounded-md"
            data-oid=":z0md67"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12 text-muted-foreground/50"
              data-oid=".wg3n0v"
            >
              <rect
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
                ry="2"
                data-oid="a2:uu_2"
              />

              <circle cx="9" cy="9" r="2" data-oid="sefmniv" />
              <path
                d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
                data-oid="p9f3fnt"
              />
            </svg>
          </div>
        )
      ) : (
        <img
          src={src}
          alt={alt}
          className={cn("w-full h-full object-cover", {
            "opacity-0": isLoading,
          })}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
          data-oid="n8ju4g5"
        />
      )}
    </div>
  );
}
