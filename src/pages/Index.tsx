import { MainLayout } from "@/shared/components/layout/MainLayout";
import {
  StatCard,
  TransactionsChart,
  RecentTransactions,
} from "@/features/panel/components";
import { TaxObligations } from "@/components/dashboard/TaxObligations";
import { Reminders } from "@/components/dashboard/Reminders";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  Calendar,
} from "lucide-react";

const Index = () => {
  return (
    <MainLayout data-oid="4hrpocz">
      <div className="space-y-6" data-oid="v9zqjoc">
        <div className="flex items-center justify-between" data-oid="whpqqh3">
          <h1 className="text-3xl font-bold" data-oid="n67p8mo">
            Panel
          </h1>
          <div className="flex items-center gap-2" data-oid="bbqb1tt">
            <span className="text-sm text-gray-500" data-oid="fkvbf6s">
              Última actualización: 06 Abr, 2025
            </span>
          </div>
        </div>

        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          data-oid="fha0dxm"
        >
          <StatCard
            title="Balance Total"
            value="$128,250.00"
            icon={Wallet}
            description="Balance actual en todas las cuentas"
            trend="up"
            trendValue="+8.2% desde el mes pasado"
            data-oid="69vg0xp"
          />

          <StatCard
            title="Ingresos Mensuales"
            value="$42,500.00"
            icon={ArrowUpRight}
            description="Ingresos del mes en curso"
            trend="up"
            trendValue="+12.5% desde el mes pasado"
            data-oid="3ehrucv"
          />

          <StatCard
            title="Gastos Mensuales"
            value="$28,350.00"
            icon={ArrowDownRight}
            description="Gastos del mes en curso"
            trend="down"
            trendValue="-5.3% desde el mes pasado"
            data-oid="-9yahjy"
          />

          <StatCard
            title="Impuestos Pendientes"
            value="$27,700.00"
            icon={PieChart}
            description="Total impuestos por pagar"
            trend="neutral"
            trendValue="Próximo vencimiento: 17/04"
            data-oid="6bb71h4"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3" data-oid="twmb8za">
          <TransactionsChart data-oid="n:3gv2a" />
        </div>

        <div className="grid gap-6 md:grid-cols-3" data-oid="tveofqd">
          <RecentTransactions data-oid="eizjk.6" />
        </div>

        <div className="grid gap-6 md:grid-cols-2" data-oid="qilh9x5">
          <TaxObligations data-oid="336_drq" />
          <Reminders data-oid="oploe-q" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
