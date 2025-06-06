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
    <MainLayout data-oid="ywjli4x">
      <div className="space-y-4" data-oid="6tebh.i">
        <div className="flex items-center justify-between" data-oid="f7bnm8t">
          <h1 className="text-2xl font-bold" data-oid="d5-chgz">
            Gestión de Inversiones
          </h1>
          <Button className="gap-1" data-oid="ezvp3zh">
            <Plus className="h-4 w-4" data-oid="tijx_el" />
            <span data-oid="9a1mu52">Nueva Inversión</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4" data-oid="8.c_mxo">
          <InvestmentForm
            onInvestmentAdded={handleInvestmentAdded}
            data-oid="_iyvug3"
          />

          <InvestmentList refreshTrigger={refreshCounter} data-oid="p:_-c89" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Inversiones;
