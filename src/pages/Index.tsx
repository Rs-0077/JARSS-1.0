
import { MainLayout } from "@/shared/components/layout/MainLayout";
import { StatCard, TransactionsChart, RecentTransactions } from "@/features/panel/components";
import { TaxObligations } from "@/components/dashboard/TaxObligations";
import { Reminders } from "@/components/dashboard/Reminders";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  Calendar
} from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Panel</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Última actualización: 06 Abr, 2025</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Balance Total"
            value="$128,250.00"
            icon={Wallet}
            description="Balance actual en todas las cuentas"
            trend="up"
            trendValue="+8.2% desde el mes pasado"
          />
          <StatCard
            title="Ingresos Mensuales"
            value="$42,500.00"
            icon={ArrowUpRight}
            description="Ingresos del mes en curso"
            trend="up"
            trendValue="+12.5% desde el mes pasado"
          />
          <StatCard
            title="Gastos Mensuales"
            value="$28,350.00"
            icon={ArrowDownRight}
            description="Gastos del mes en curso"
            trend="down"
            trendValue="-5.3% desde el mes pasado"
          />
          <StatCard
            title="Impuestos Pendientes"
            value="$27,700.00"
            icon={PieChart}
            description="Total impuestos por pagar"
            trend="neutral"
            trendValue="Próximo vencimiento: 17/04"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <TransactionsChart />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <RecentTransactions />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <TaxObligations />
          <Reminders />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
