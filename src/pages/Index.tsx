import { MainLayout } from "@/components/layout/MainLayout";
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
    <MainLayout data-oid="an8vv-r">
      <div className="space-y-6" data-oid="h_4nbdy">
        <div className="flex items-center justify-between" data-oid="71-10_1">
          <h1 className="text-3xl font-bold" data-oid="gsspj-u">
            Panel
          </h1>
          <div className="flex items-center gap-2" data-oid="l9hc.y:">
            <span className="text-sm text-gray-500" data-oid="15:y:v.">
              Última actualización: 06 Abr, 2025
            </span>
          </div>
        </div>

        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          data-oid="4m70nko"
        >
          <StatCard
            title="Balance Total"
            value="$128,250.00"
            icon={Wallet}
            description="Balance actual en todas las cuentas"
            trend="up"
            trendValue="+8.2% desde el mes pasado"
            data-oid="vmjg1j4"
          />

          <StatCard
            title="Ingresos Mensuales"
            value="$42,500.00"
            icon={ArrowUpRight}
            description="Ingresos del mes en curso"
            trend="up"
            trendValue="+12.5% desde el mes pasado"
            data-oid="h0dd96r"
          />

          <StatCard
            title="Gastos Mensuales"
            value="$28,350.00"
            icon={ArrowDownRight}
            description="Gastos del mes en curso"
            trend="down"
            trendValue="-5.3% desde el mes pasado"
            data-oid="k4r1373"
          />

          <StatCard
            title="Impuestos Pendientes"
            value="$27,700.00"
            icon={PieChart}
            description="Total impuestos por pagar"
            trend="neutral"
            trendValue="Próximo vencimiento: 17/04"
            data-oid="sbjn34q"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3" data-oid="tk3ecy_">
          <TransactionsChart data-oid="j5uzgpi" />
        </div>

        <div className="grid gap-6 md:grid-cols-3" data-oid="o3mtkqq">
          <RecentTransactions data-oid="8l706z:" />
        </div>

        <div className="grid gap-6 md:grid-cols-2" data-oid=":kmxhyw">
          <TaxObligations data-oid="g8-_lxg" />
          <Reminders data-oid="whagel3" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
