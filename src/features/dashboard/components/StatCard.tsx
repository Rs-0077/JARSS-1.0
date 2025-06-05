import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  trendValue,
  className,
}: StatCardProps) {
  // Determinar el color de fondo del icono según la tendencia
  const getIconBgClass = () => {
    if (trend === "up") return "bg-contable-success/10";
    if (trend === "down") return "bg-contable-danger/10";
    if (trend === "neutral") return "bg-contable-warning/10";
    return "bg-contable-primary/10";
  };

  // Determinar el color del icono según la tendencia
  const getIconColorClass = () => {
    if (trend === "up") return "text-contable-success";
    if (trend === "down") return "text-contable-danger";
    if (trend === "neutral") return "text-contable-warning";
    return "text-contable-primary";
  };

  return (
    <Card
      className={cn("overflow-hidden stat-card", className)}
      data-oid="f3lwuip"
    >
      <CardHeader
        className="flex flex-row items-center justify-between pb-2"
        data-oid="gluj361"
      >
        <CardTitle
          className="text-sm font-medium text-muted-foreground"
          data-oid="10s9bpj"
        >
          {title}
        </CardTitle>
        <div
          className={cn(
            "h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300",
            getIconBgClass(),
          )}
          data-oid="lphw0qj"
        >
          <Icon
            className={cn(
              "h-5 w-5 transition-all duration-300",
              getIconColorClass(),
            )}
            data-oid="ktap2yl"
          />
        </div>
      </CardHeader>
      <CardContent data-oid="v-osqtt">
        <div
          className="text-2xl font-bold transition-all duration-300"
          data-oid=":tc8tn8"
        >
          {value}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1" data-oid="t6u5pk2">
            {description}
          </p>
        )}
        {trend && (
          <div className="flex items-center mt-2" data-oid="kss055q">
            <span
              className={cn("text-xs font-medium px-2 py-1 rounded-full", {
                "bg-contable-success/10 text-contable-success": trend === "up",
                "bg-contable-danger/10 text-contable-danger": trend === "down",
                "bg-contable-warning/10 text-contable-warning":
                  trend === "neutral",
              })}
              data-oid="lt8j89_"
            >
              {trendValue}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
