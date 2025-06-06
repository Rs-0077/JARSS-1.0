import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { JarssLogo } from "@/components/icons/JarssLogo";

interface AppLoaderProps {
  className?: string;
  maxDuration?: number;
}

export function AppLoader({ className, maxDuration = 3000 }: AppLoaderProps) {
  const [shouldRender, setShouldRender] = useState(true);

  // Garantizar que el loader nunca se muestre más tiempo que maxDuration
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(false);
    }, maxDuration);

    return () => clearTimeout(timer);
  }, [maxDuration]);

  if (!shouldRender) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 flex flex-col items-center justify-center bg-background z-50",
        className,
      )}
      data-oid="euw.onf"
    >
      <div className="flex flex-col items-center gap-4" data-oid=".vnb3rg">
        <div className="relative" data-oid="y:j3nie">
          <JarssLogo size={70} className="text-primary" data-oid="woq6g66" />
          <div
            className="absolute inset-0 flex items-center justify-center"
            data-oid="z5mco_3"
          >
            <div
              className="w-10 h-10 border-3 border-primary/20 border-t-primary rounded-full animate-spin"
              data-oid=".-a:zkz"
            />
          </div>
        </div>

        <div className="flex flex-col items-center" data-oid="nndb-kc">
          <h1 className="text-xl font-bold text-foreground" data-oid="kt54auu">
            JARSS
          </h1>
          <p className="text-xs text-muted-foreground" data-oid="3rxgaa4">
            Inventory
          </p>
        </div>

        <div
          className="w-40 h-1 bg-muted rounded-full overflow-hidden"
          data-oid="qed:qfd"
        >
          <div
            className="h-full bg-primary animate-progress-bar"
            data-oid="tz2c2z7"
          />
        </div>
      </div>

      <style jsx global data-oid="s0u1djr">{`
        @keyframes progress-bar {
          0% {
            width: 0%;
          }
          20% {
            width: 20%;
          }
          40% {
            width: 40%;
          }
          60% {
            width: 60%;
          }
          80% {
            width: 80%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-progress-bar {
          animation: progress-bar 2.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
