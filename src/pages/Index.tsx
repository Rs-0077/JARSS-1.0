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
    <MainLayout data-oid="9-l02w.">
      <div className="space-y-6" data-oid="_ndk278">
        <div className="flex items-center justify-between" data-oid="ehbhqse">
          <h1 className="text-3xl font-bold" data-oid="3y54wk4">
            Panel
          </h1>
          <div className="flex items-center gap-2" data-oid="jbbr3:v">
            <span className="text-sm text-gray-500" data-oid="t.v:x-i">
              Última actualización: 06 Abr, 2025
            </span>
          </div>
        </div>

        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          data-oid="oop3b3c"
        >
          <StatCard
            title="Balance Total"
            value="$128,250.00"
            icon={Wallet}
            description="Balance actual en todas las cuentas"
            trend="up"
            trendValue="+8.2% desde el mes pasado"
            data-oid="3_rktl-"
          />

          <StatCard
            title="Ingresos Mensuales"
            value="$42,500.00"
            icon={ArrowUpRight}
            description="Ingresos del mes en curso"
            trend="up"
            trendValue="+12.5% desde el mes pasado"
            data-oid="v1w9_z4"
          />

          <StatCard
            title="Gastos Mensuales"
            value="$28,350.00"
            icon={ArrowDownRight}
            description="Gastos del mes en curso"
            trend="down"
            trendValue="-5.3% desde el mes pasado"
            data-oid="9h:4qa4"
          />

          <StatCard
            title="Impuestos Pendientes"
            value="$27,700.00"
            icon={PieChart}
            description="Total impuestos por pagar"
            trend="neutral"
            trendValue="Próximo vencimiento: 17/04"
            data-oid="e65rjio"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3" data-oid="l.a_aye">
          <TransactionsChart data-oid="zwwx:ty" />
        </div>

        <div className="grid gap-6 md:grid-cols-3" data-oid="1h8s1ot">
          <RecentTransactions data-oid="0yv5.du" />
        </div>

        <div className="grid gap-6 md:grid-cols-2" data-oid=".cbo7i:">
          <TaxObligations data-oid="6gou98m" />
          <Reminders data-oid="ix742uw" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
