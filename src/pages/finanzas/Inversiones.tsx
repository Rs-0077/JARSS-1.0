
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
    setRefreshCounter(prev => prev + 1);
  };

  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Gestión de Inversiones</h1>
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            <span>Nueva Inversión</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <InvestmentForm onInvestmentAdded={handleInvestmentAdded} />
          <InvestmentList refreshTrigger={refreshCounter} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Inversiones;
