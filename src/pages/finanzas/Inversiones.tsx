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
    <MainLayout data-oid="wy2kub3">
      <div className="space-y-4" data-oid="q9l9j20">
        <div className="flex items-center justify-between" data-oid="y3kycl9">
          <h1 className="text-2xl font-bold" data-oid="wj8nht4">
            Gestión de Inversiones
          </h1>
          <Button className="gap-1" data-oid="7v35ei6">
            <Plus className="h-4 w-4" data-oid="eie3wq8" />
            <span data-oid="q9v_p:3">Nueva Inversión</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4" data-oid="09y.0vk">
          <InvestmentForm
            onInvestmentAdded={handleInvestmentAdded}
            data-oid="114ckap"
          />

          <InvestmentList refreshTrigger={refreshCounter} data-oid="bokteo3" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Inversiones;
