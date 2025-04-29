
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { BudgetSummary } from "@/components/presupuestos/BudgetSummary";
import { ExecutionSummary } from "@/components/presupuestos/ExecutionSummary";
import { BudgetTabs } from "@/components/presupuestos/BudgetTabs";

const Presupuestos = () => {
  const handleNewBudget = () => {
    // This will be handled by the form component
  };

  return (
    <MainLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Control Presupuestario</h1>
          <Button className="gap-1">
            <Plus className="h-4 w-4" />
            <span>Nuevo Presupuesto</span>
          </Button>
        </div>
        
        <BudgetSummary />
        
        <ExecutionSummary />
        
        <BudgetTabs />
      </div>
    </MainLayout>
  );
};

export default Presupuestos;
