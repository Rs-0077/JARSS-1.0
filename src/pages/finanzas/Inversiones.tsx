import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus } from "lucide-react";
import { InvestmentForm } from "@/components/investments/InvestmentForm";
import { InvestmentList } from "@/components/investments/InvestmentList";

const Inversiones = () => {
  // Use a counter to trigger refreshes in the investment list
  const [refreshCounter, setRefreshCounter] = useState(0);

  // This will be called when a new investment is added
  const handleInvestmentAdded = () => {
    // Increment the counter to trigger a refresh
    setRefreshCounter((prev) => prev + 1);
  };

  return (
    <MainLayout data-oid="n_.o4hd">
      <div className="space-y-4" data-oid="3xe25x0">
        <div className="flex items-center justify-between" data-oid="4yhd_4i">
          <h1 className="text-2xl font-bold" data-oid="yejk83s">
            Gestión de Inversiones
          </h1>
          <Button className="gap-1" data-oid="3kdoll2">
            <Plus className="h-4 w-4" data-oid="h19.b1m" />
            <span data-oid="6n::e.5">Nueva Inversión</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4" data-oid=".8lkr7r">
          <InvestmentForm
            onInvestmentAdded={handleInvestmentAdded}
            data-oid="v4x:19c"
          />

          <InvestmentList refreshTrigger={refreshCounter} data-oid="172hc-3" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Inversiones;
