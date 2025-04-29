
import { StatCard } from "@/components/dashboard/StatCard";
import { FileText, PieChart, AlertTriangle } from "lucide-react";

export const BudgetSummary = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Presupuesto Actual"
        value="$248,500.00"
        icon={FileText}
        trend="neutral"
        trendValue="2do Trimestre 2025"
      />
      <StatCard
        title="Gasto Acumulado"
        value="$142,375.00"
        icon={PieChart}
        trend="up"
        trendValue="57.3% del presupuesto"
      />
      <StatCard
        title="Alerta Presupuestaria"
        value="3 Departamentos"
        icon={AlertTriangle}
        trend="down"
        trendValue="Exceden 70% del presupuesto"
      />
    </div>
  );
};
